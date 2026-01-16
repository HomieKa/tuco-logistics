const FREIGHTMATE_API_BASE =
  process.env.FREIGHTMATE_API_BASE || "https://api.freightmate.com";
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";
const UPSTREAM_PATH = "/external/t/";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "Access-Control-Max-Age": "86400",
  };
}

exports.handler = async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders(), body: "" };
  }

  const connote =
    (event.pathParameters?.connote ||
      event.queryStringParameters?.c ||
      event.queryStringParameters?.connote ||
      event.queryStringParameters?.id ||
      "").trim();

  if (!connote) {
    return {
      statusCode: 400,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Connote is required" }),
    };
  }

  const upstreamUrl = `${FREIGHTMATE_API_BASE}${UPSTREAM_PATH}${encodeURIComponent(connote)}`;

  try {
    const upstream = await fetch(upstreamUrl, {
      headers: { Accept: "application/json" },
    });
    const body = await upstream.text();

    return {
      statusCode: upstream.status,
      headers: {
        ...corsHeaders(),
        "Content-Type":
          upstream.headers.get("content-type") || "application/json",
        "Cache-Control": "no-cache, must-revalidate",
      },
      body,
    };
  } catch (error) {
    console.error("[netlify-track] upstream failed", error);
    return {
      statusCode: 502,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Unable to reach Freightmate tracking API." }),
    };
  }
};
