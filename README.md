# TUCO Logistics Website

Marketing site for TUCO Logistics, built with Vue 3, Vite, and Tailwind CSS. The app targets GitHub Pages and uses hash-based routing so every refresh works under `/tuco-logistics/`.

## Stack

- Vue 3 + `<script setup>` single-file components
- TypeScript for type safety
- Vite tooling with hash history router
- Tailwind CSS design system with custom TUCO tokens
- VueUse Head for lightweight SEO metadata
- Vitest for unit testing
- Rollup Plugin Visualizer for bundle analysis

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

Install dependencies once:

```bash
npm install
```

## Commands

### Development

| Script                | Description                                           |
| --------------------- | ----------------------------------------------------- |
| `npm run dev`         | Start the Vite dev server (hash history under `/`).  |
| `npm run build`       | Type-check with `vue-tsc` then build for production. |
| `npm run build:analyze` | Build and open bundle size analyzer.                |
| `npm run preview`     | Preview the production build locally.                |
| `npm run proxy`       | Run development proxy for tracking API.              |

### Testing

| Script                | Description                                           |
| --------------------- | ----------------------------------------------------- |
| `npm test`            | Run tests in watch mode.                             |
| `npm run test:ui`     | Run tests with Vitest UI.                            |
| `npm run test:run`    | Run tests once (CI mode).                            |
| `npm run test:coverage` | Run tests with coverage report.                    |

### Code Quality

| Script                | Description                                           |
| --------------------- | ----------------------------------------------------- |
| `npm run lint`        | ESLint against `src/**/*.ts,vue`.                    |
| `npm run lint:fix`    | Autofix lint issues.                                 |
| `npm run format`      | Prettier check for Vue/TS/CSS.                       |
| `npm run format:fix`  | Prettier write mode.                                 |

### Utilities

| Script                | Description                                           |
| --------------------- | ----------------------------------------------------- |
| `npm run optimize:images` | Convert images to WebP format.                   |
| `npm run deploy`      | Manually deploy to GitHub Pages.                     |

## Development Notes

- Vite automatically serves the app at `/` during `npm run dev` and switches to `/tuco-logistics/` for production builds, so assets load locally while GitHub Pages still works. The router reads `import.meta.env.BASE_URL`, so no manual tweaks are required.
- The optional freight tracking proxy runs on `npm run proxy` and forwards `/api/track/*` to the configured upstream (`VITE_TRACK_PROXY_TARGET`).
- Tailwind tokens live in `tailwind.config.js`; global styles are in `src/assets/styles/main.css`.
- Environment variables: Copy `.env.example` to `.env.local` for local development configuration.
- Image optimization: Run `npm run optimize:images` to convert JPG images to WebP format for better performance.
- Bundle analysis: Run `npm run build:analyze` to generate a visual report of your bundle size at `dist/stats.html`.

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
