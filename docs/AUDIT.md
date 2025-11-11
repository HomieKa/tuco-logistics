# Site Audit

## Source Tree

```
src/
App.vue
assets/
  - icons/
  - images/
    - about_us/
      - team_photo.jpg
      - working.jpg
    - approach-carrier.svg
    - approach-finance.svg
    - approach-service.svg
    - approach-strategy.svg
    - approach-technology.svg
    - carriers/
      - air_road_specialised.png
      - allied_express.png
      - couriers_please.png
      - domestic_freight_express.png
      - followmont.png
      - northline.png
      - sadleirs.png
      - startrack.png
      - tas_connect.png
      - tas_freight.png
      - team_global_express.png
      - tfmxpress.png
      - tnt.png
      - vfs.png
      - xpress_freight_management.png
    - hero_page_img.webp
    - icons/
      - cin7.svg
      - dynamics365.svg
      - myob.svg
      - netsuite.svg
      - odoo.svg
      - pronto.svg
      - sap.svg
      - shopify.svg
      - sugarcrm.svg
      - woo.svg
      - xero.svg
    - industries/
      - building.svg
      - construction.svg
      - fmcg.svg
      - healthcare.svg
      - manufacturing.svg
      - mining.svg
      - retail.svg
      - technology.svg
    - leadership/
      - chris.jpg
      - dave.jpg
      - farzana.jpg
      - fiona.jpg
      - jamie.jpg
      - katerina.jpg
      - khai.jpg
      - michelle.jpg
      - mladen.jpg
      - sam.jpg
    - our_difference/
      - australian_expert.jpg
      - automation.jpg
      - governance.jpg
      - strategic_partner.jpg
    - services/
      - air.svg
      - freight-ops.svg
      - managed-collaboration.svg
      - rail.svg
      - road.svg
      - sea.svg
      - tracking-analytics.svg
    - tuco_logo_2_invert.svg
    - warehousing/
      - container.svg
      - pick-pack.svg
      - scaling.svg
      - storage.svg
      - warehouse-hero.svg
  - styles/
    - main.css
  - videos/
    - freightmate_video.mp4
components/
  - sections/
    - home/
      - CustomerStories.vue
      - ImpactSnapshot.vue
      - OurApproach.vue
      - OurDifference.vue
      - TechnologySummary.vue
    - resources/
      - TucoFaqAccordion.vue
  - ui/
    - Button.vue
    - CallToAction.vue
    - ContactForm.vue
    - Footer.vue
    - Header.vue
    - Hero.vue
    - PageHeader.vue
composables/
  - useSEO.ts
env.d.ts
main.ts
pages/
  - company/
    - OurTeamPage.vue
    - WhyTucoPage.vue
  - contact/
    - ContactPage.vue
  - home/
    - HomePage.vue
  - legal/
    - PrivacyPage.vue
    - TermsPage.vue
  - resources/
    - BlogPostPage.vue
    - InsightsPage.vue
  - services/
    - ServicesPage.vue
  - support/
    - TrackPage.vue
  - technology/
    - TechnologyPage.vue
router/
  - index.ts
```

## Route Map

| Path                             | Name                | Target                                                       |
| -------------------------------- | ------------------- | ------------------------------------------------------------ |
| /                                | home                | @/pages/home/HomePage.vue                                    |
| /our-team                        | our-team            | @/pages/company/OurTeamPage.vue                              |
| /services                        | services            | @/pages/services/ServicesPage.vue                            |
| /track                           | track               | @/pages/support/TrackPage.vue                                |
| /privacy                         | privacy             | @/pages/legal/PrivacyPage.vue                                |
| /terms                           | terms               | @/pages/legal/TermsPage.vue                                  |
| /services/freight-management     | -                   | redirect: path: "/services", hash: "#freight-management"     |
| /services/tracking-reporting     | -                   | redirect: path: "/services", hash: "#tracking-reporting"     |
| /services/integration-automation | -                   | redirect: path: "/services", hash: "#integration-automation" |
| /technology                      | technology          | @/pages/technology/TechnologyPage.vue                        |
| /why-tuco                        | why-tuco            | @/pages/company/WhyTucoPage.vue                              |
| /resources/insights              | resources-insights  | @/pages/resources/InsightsPage.vue                           |
| /resources/blog/:slug            | resources-blog-post | @/pages/resources/BlogPostPage.vue                           |
| /contact                         | contact             | @/pages/contact/ContactPage.vue                              |
| /:pathMatch(._)_                 | -                   | redirect: name: "home"                                       |

## Assets

- Hero illustration converted to `hero_page_img.webp` (85 quality, 1400px max width).
- Duplicate carrier, logo, and illustration assets removed; leadership portraits renamed for case-safe imports.
- `src/assets/styles/main.css` is referenced via `main.ts` and remains the Tailwind entrypoint.

## Link & Router Notes

- `vite.config.ts` now sets `base: "/tuco-logistics/"` and the router uses `createWebHashHistory(import.meta.env.BASE_URL)` for GitHub Pages.
- Internal navigation relies on `<RouterLink>` components; no absolute `/slug` anchors remain.
- Track proxy script logs clean ASCII arrows again.

## Key Fixes

- Migrated routed views into `src/pages/**` and removed unused legacy files, data mocks, and Pinia stores.
- Normalised asset naming, trimmed unused SVGs, and optimised the hero artwork for bundle size.
- Refreshed homepage approach section to reuse SVG illustrations via module imports.
- Updated tooling scaffolding (`.editorconfig`, ESLint config) and set up docs/CI groundwork.
