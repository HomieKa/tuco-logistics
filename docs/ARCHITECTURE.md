# Architecture

## Overview

- **Framework**: Vue 3 with `<script setup>` and TypeScript typing via `vue-tsc`.
- **Bundler**: Vite (`vite.config.ts` sets `base` and proxy config).
- **UI**: Tailwind CSS 3 with custom TUCO palette and spacing tokens.
- **Routing**: Vue Router 4 using `createWebHashHistory(import.meta.env.BASE_URL)` to keep GitHub Pages compatible.
- **SEO**: `@vueuse/head` exposed through `src/composables/useSEO.ts`.

## Directory Layout

```
src/
  assets/          static assets, global CSS, videos
  components/      shareable UI building blocks
    common/        site-wide header/footer/button modules
    home/          homepage sections
    resources/     blog + FAQ widgets
  composables/     reusable Composition API helpers
  pages/           routed views grouped by domain (company, services, etc.)
  router/          router index + meta handling
  main.ts          app bootstrap and global CSS import
  App.vue          layout shell (Header + RouterView + Footer)
```

`@` is aliased to `src` (defined in `vite.config.ts` and mirrored in `tsconfig.json`).

## Styling

- Tailwind core settings live in `tailwind.config.js`; TUCO colours (`tuco-navy`, `tuco-blue`, etc.) and shadows (`card-soft`, `card-lg`) centralise branding.
- Global Tailwind entry: `src/assets/styles/main.css` (includes Tailwind base/components/utilities directives).
- Components rely on Tailwind utilities; rare custom CSS is in scoped `<style>` blocks.

## Assets

- Images are imported via modules (`import img from '@/assets/...')` so Vite fingerprints them.
- Large hero artwork was converted to `hero_page_img.webp` (1400px width, 85 quality) to reduce payload.
- Carrier logos use `?url` imports for the marquee carousel.

## Routing & Metadata

- Each page uses `useSEO` to push `<title>` and description meta tags via VueUse Head.
- Route redirects for services (`/services/*`) map friendly paths to hash anchors inside `ServicesPage.vue`.
- Global scroll behaviour resets to top unless navigating to a hash.

## State & Data

- Pinia has been removed; there are currently no global stores. Page data is defined inline or via simple arrays inside the component modules.
- Any future shared state can be introduced via composables or a reintroduced Pinia store.

## Proxy Utility

- `server/proxy.js` offers a lightweight Node proxy for `/api/track/*` requests during development. It handles CORS, upstream fetch, and error wrapping.
