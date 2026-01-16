const FREIGHTMATE_API_BASE =
  process.env.FREIGHTMATE_API_BASE || "https://api.freightmate.com";
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";
const UPSTREAM_PATH = "/external/t/";

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.setHeader("Access-Control-Max-Age", "86400");
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    setCors(res);
    res.status(204).end();
    return;
  }

  const connote =
    (req.query?.connote || req.query?.c || req.query?.id || "").toString().trim();

  if (!connote) {
    setCors(res);
    res.status(400).json({ error: "Connote is required" });
    return;
  }

  const upstreamUrl = `${FREIGHTMATE_API_BASE}${UPSTREAM_PATH}${encodeURIComponent(connote)}`;

  try {
    const upstream = await fetch(upstreamUrl, {
      headers: { Accept: "application/json" },
    });

    const isJson =
      (upstream.headers.get("content-type") || "").includes("application/json");
    const body = isJson ? await upstream.json() : await upstream.text();

    setCors(res);
    res.setHeader("Cache-Control", "no-cache, must-revalidate");
    res.status(upstream.status).send(body);
  } catch (error) {
    console.error("[vercel-track] upstream failed", error);
    setCors(res);
    res.status(502).json({ error: "Unable to reach Freightmate tracking API." });
  }
}
