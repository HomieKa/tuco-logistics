# Contributing

## Branching & Commits

- Fork from `main` and use feature branches: `type/short-description` (e.g. `feat/homepage-cta`).
- Keep commits focused; follow conventional commit prefixes (`feat`, `fix`, `chore`, `docs`, `refactor`).
- Run `npm run lint` and `npm run format` before pushing.

## Pull Requests

- Target `main`; CI will run linting and the deploy workflow.
- Include a brief summary, screenshots for UI changes, and reference any Trello/Jira ticket IDs.
- Ensure SPA routing still works by testing deep links locally (`npm run dev`).

## Code Style

- Use `<script setup lang="ts">` for Vue SFCs.
- Prefer composables over global stores; add new ones under `src/composables/`.
- Centralise assets in `src/assets/` and import them (no hard-coded `/tuco-logistics/` paths).
- Tailwind utilities are preferred; add full styles to `src/assets/styles/main.css` sparingly.

## Testing Checklist

- `npm run lint`
- `npm run build`
- Manual smoke test across key routes (Home, Services anchors, Technology, Contact).

## Documentation

- Update the relevant doc (`docs/ROUTES.md`, `docs/ARCHITECTURE.md`, etc.) when adding or removing routes/components.
- Record notable changes in `CHANGELOG.md` under the `Unreleased` section.
