# Deployment Guide

The site is published to GitHub Pages from the `gh-pages` branch using GitHub Actions. The Vite build is configured with `base: "/tuco-logistics/"` and hash-based routing, so no extra 404 handling is needed for deep links.

## Automated Workflow

- Workflow: `.github/workflows/deploy.yml`
- Trigger: `push` to `main`
- Steps:
  1. Check out code and install dependencies with `npm ci`.
  2. Run `npm run build` (Vue type-check + Vite build).
  3. Copy `dist/index.html` to `dist/404.html` for SPA fallback.
  4. Upload the artifact and deploy via `actions/deploy-pages`.

Make sure GitHub Pages is configured to use the **GitHub Actions** source. The workflow sets the build output automatically.

## Manual Publish (fallback)

1. `npm install`
2. `npm run build`
3. Copy `dist/index.html` to `dist/404.html`
4. Use `npx gh-pages -d dist -b gh-pages` (requires the `gh-pages` package and push access).

## Environment

| Variable                       | Purpose                                                | Default                       |
| ------------------------------ | ------------------------------------------------------ | ----------------------------- |
| `VITE_TRACK_PROXY_TARGET`      | Upstream Freightmate tracking API for the local proxy. | `http://localhost:5050`       |
| `ALLOWED_ORIGIN` (proxy)       | CORS origin for `server/proxy.js`.                     | `*`                           |
| `FREIGHTMATE_API_BASE` (proxy) | Upstream API base.                                     | `https://api.freightmate.com` |

These values are only required for the optional local proxy (`npm run proxy`). Pages deployments do not depend on them.

## Post-Deploy Checklist

- Visit `https://homiekia.github.io/tuco-logistics/#/` and navigate through all routes.
- Refresh a deep link (e.g. `#/services`) to confirm hash routing works.
- Inspect hero imagery and carrier logos to ensure assets load from `/tuco-logistics/...` paths.
- If using a custom domain, add the CNAME via the Pages settings and re-run the deploy workflow.
