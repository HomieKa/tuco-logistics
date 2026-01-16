import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

// Load .env.local if present, otherwise fallback to .env BEFORE importing the handler
const envPathLocal = path.resolve(process.cwd(), ".env.local");
const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPathLocal)) {
  dotenv.config({ path: envPathLocal });
} else if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

const { default: handler } = await import("../api/contact.js");

const PORT = Number.parseInt(process.env.CONTACT_LOCAL_PORT || "5051", 10);

function wrapRes(res) {
  const wrapped = {
    status(code) {
      res.statusCode = code;
      return wrapped;
    },
    json(payload) {
      if (!res.headersSent) {
        res.setHeader("Content-Type", "application/json");
      }
      res.end(typeof payload === "string" ? payload : JSON.stringify(payload));
    },
    end(body) {
      res.end(body);
    },
    setHeader: (...args) => res.setHeader(...args),
  };
  return wrapped;
}

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (!url || !url.startsWith("/api/contact")) {
    res.statusCode = 404;
    res.end();
    return;
  }

  let raw = "";
  req.on("data", (chunk) => {
    raw += chunk;
  });

  req.on("end", async () => {
    try {
      req.body = raw ? JSON.parse(raw) : {};
    } catch {
      req.body = {};
    }

    try {
      await handler(req, wrapRes(res));
    } catch (error) {
      console.error("[contact-local] unhandled error", error);
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Internal server error" }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`[contact-local] listening on http://localhost:${PORT}/api/contact`);
});
