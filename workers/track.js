const UPSTREAM_PATH = "/external/t/";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(env),
      });
    }

    const connote = normalizeConnote(url);
    if (!connote) {
      return json({ error: "Connote is required" }, 400, env);
    }

    const upstreamBase = env.FREIGHTMATE_API_BASE || "https://api.freightmate.com";
    const upstreamUrl = `${upstreamBase}${UPSTREAM_PATH}${encodeURIComponent(connote)}`;

    try {
      const upstream = await fetch(upstreamUrl, {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      const body = await upstream.text();
      return new Response(body, {
        status: upstream.status,
        headers: {
          ...corsHeaders(env),
          "Content-Type":
            upstream.headers.get("content-type") || "application/json",
          "Cache-Control": "no-cache, must-revalidate",
        },
      });
    } catch (error) {
      console.error("[worker-track] upstream failed", error);
      return json(
        { error: "Unable to reach Freightmate tracking API." },
        502,
        env,
      );
    }
  },
};

function corsHeaders(env) {
  return {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "Access-Control-Max-Age": "86400",
  };
}

function normalizeConnote(url) {
  if (url.pathname.startsWith("/api/track/")) {
    return decodeURIComponent(url.pathname.replace("/api/track/", "")).trim();
  }
  if (url.pathname === "/api/track") {
    return (url.searchParams.get("c") || "").trim();
  }
  return "";
}

function json(body, status, env) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(env),
      "Content-Type": "application/json",
    },
  });
}
