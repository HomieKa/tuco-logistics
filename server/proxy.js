import http from "node:http";
import { URL } from "node:url";

const PORT = Number.parseInt(process.env.PORT || "5050", 10);
const API_BASE =
  process.env.FREIGHTMATE_API_BASE || "https://api.freightmate.com";
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";
const UPSTREAM_PATH = "/external/t/";

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.setHeader("Access-Control-Max-Age", "86400");
}

function sendJson(res, statusCode, body) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  setCorsHeaders(res);
  res.end(JSON.stringify(body));
}

function handleOptions(req, res) {
  setCorsHeaders(res);
  res.statusCode = 204;
  res.end();
}

function normaliseConnote(pathname, searchParams) {
  if (pathname.startsWith("/api/track/")) {
    return decodeURIComponent(pathname.replace("/api/track/", "")).trim();
  }
  if (pathname === "/api/track") {
    return (searchParams.get("c") || "").trim();
  }
  return "";
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(
    req.url || "/",
    `http://${req.headers.host || "localhost"}`,
  );
  const { pathname, searchParams } = requestUrl;

  if (req.method === "OPTIONS") {
    handleOptions(req, res);
    return;
  }

  if (
    req.method === "GET" &&
    (pathname === "/api/track" || pathname.startsWith("/api/track/"))
  ) {
    const connote = normaliseConnote(pathname, searchParams);

    if (!connote) {
      sendJson(res, 400, {
        error:
          "Connote is required. Provide it as /api/track/:connote or ?c= value.",
      });
      return;
    }

    const abortController = new AbortController();
    req.on("close", () => abortController.abort());

    try {
      const upstreamUrl = `${API_BASE}${UPSTREAM_PATH}${encodeURIComponent(connote)}`;
      const upstreamResponse = await fetch(upstreamUrl, {
        method: "GET",
        signal: abortController.signal,
        headers: {
          Accept: "application/json",
          ...(req.headers.authorization
            ? { Authorization: req.headers.authorization }
            : {}),
        },
      });

      const contentType =
        upstreamResponse.headers.get("content-type") || "application/json";
      const isJson = contentType.includes("application/json");
      const body = isJson
        ? await upstreamResponse.json()
        : await upstreamResponse.text();

      if (!upstreamResponse.ok) {
        const message =
          typeof body === "object" && body !== null && "error" in body
            ? body.error
            : upstreamResponse.status === 404
              ? "Connote not found."
              : `Upstream request failed with status ${upstreamResponse.status}.`;
        sendJson(res, upstreamResponse.status, { error: message });
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      setCorsHeaders(res);
      res.setHeader("Cache-Control", "no-cache, must-revalidate");
      res.end(JSON.stringify(body));
    } catch (error) {
      const aborted = error instanceof Error && error.name === "AbortError";
      if (aborted) {
        res.destroy();
        return;
      }
      console.error("[proxy] failed to fetch connote", error);
      sendJson(res, 502, {
        error: "Unable to reach Freightmate tracking API.",
      });
    }
    return;
  }

  sendJson(res, 404, { error: "Not found" });
});

server.listen(PORT, () => {
  console.log(`[proxy] listening on http://localhost:${PORT}`);
  console.log(
    `[proxy] forwarding /api/track/* -> ${API_BASE}${UPSTREAM_PATH}*`,
  );
});
