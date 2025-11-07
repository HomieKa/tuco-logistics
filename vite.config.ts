import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

const proxyTarget =
  process.env.VITE_TRACK_PROXY_TARGET || "http://localhost:5050";
const appBase =
  process.env.NODE_ENV === "production" ? "/tuco-logistics/" : "/";

export default defineConfig({
  plugins: [vue()],
  base: appBase,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api/track": {
        target: proxyTarget,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
