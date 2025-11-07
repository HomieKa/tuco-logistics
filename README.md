# TUCO Logistics Website

Marketing site for TUCO Logistics, built with Vue 3, Vite, and Tailwind CSS. The app targets GitHub Pages and uses hash-based routing so every refresh works under `/tuco-logistics/`.

## Stack

- Vue 3 + `<script setup>` single-file components
- Vite tooling with hash history router
- Tailwind CSS design system with custom TUCO tokens
- VueUse Head for lightweight SEO metadata

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

Install dependencies once:

```bash
npm install
```

## Commands

| Script               | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `npm run dev`        | Start the Vite dev server (hash history under `/`).  |
| `npm run build`      | Type-check with `vue-tsc` then build for production. |
| `npm run preview`    | Preview the production build locally.                |
| `npm run lint`       | ESLint against `src/**/*.ts,vue`.                    |
| `npm run lint:fix`   | Autofix lint issues.                                 |
| `npm run format`     | Prettier check for Vue/TS/CSS.                       |
| `npm run format:fix` | Prettier write mode.                                 |

## Development Notes

- Vite automatically serves the app at `/` during `npm run dev` and switches to `/tuco-logistics/` for production builds, so assets load locally while GitHub Pages still works. The router reads `import.meta.env.BASE_URL`, so no manual tweaks are required.
- The optional freight tracking proxy runs on `npm run proxy` and forwards `/api/track/*` to the configured upstream (`VITE_TRACK_PROXY_TARGET`).
- Tailwind tokens live in `tailwind.config.js`; global styles are in `src/assets/styles/main.css`.

## Project Structure (highlights)

```text
src/
  assets/         # images, video, global styles
  components/     # UI building blocks
  composables/    # shared Composition API helpers
  pages/          # routed views grouped by domain
  router/         # Vue Router setup
```

See `docs/ARCHITECTURE.md` for the full breakdown.

## Deployment

Automated GitHub Actions builds (see `.github/workflows/deploy.yml`) publish the `dist/` bundle to the `gh-pages` branch and copy `index.html` to `404.html` for SPA fallback. Manual steps and Pages settings live in `DEPLOYMENT.md`.

## Additional Docs

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/ROUTES.md`](docs/ROUTES.md)
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)
- [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md)
- [`docs/AUDIT.md`](docs/AUDIT.md)
- [`CHANGELOG.md`](CHANGELOG.md)
