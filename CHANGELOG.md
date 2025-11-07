# Changelog

## Unreleased

- Restructured routed views under `src/pages/**` and removed unused components, stores, and legacy assets.
- Updated router to `createWebHashHistory(import.meta.env.BASE_URL)` and corrected the Vite base to `/tuco-logistics/`.
- Optimised media (converted hero artwork to WebP, normalised carrier and leadership assets).
- Refreshed homepage approach section to reuse SVG illustrations and tightened copy.
- Added project tooling configs (`.editorconfig`, ESLint) and comprehensive documentation in `docs/`.
- Prepared GitHub Actions workflows for linting and Pages deployment.
