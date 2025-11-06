# Routes

| Path | Name | Component | Notes |
| --- | --- | --- | --- |
| `/` | home | `pages/home/HomePage.vue` | Landing + CTA modules |
| `/about-us` | about-us | `pages/company/AboutPage.vue` | Company story + leadership |
| `/our-difference` | our-difference | `pages/company/OurDifferencePage.vue` | Differentiators overview |
| `/services` | services | `pages/services/ServicesPage.vue` | Service catalogue with anchor sections |
| `/services/freight-management` | - | redirect | Redirect to `/services#freight-management` |
| `/services/tracking-reporting` | - | redirect | Redirect to `/services#tracking-reporting` |
| `/services/integration-automation` | - | redirect | Redirect to `/services#integration-automation` |
| `/technology` | technology | `pages/technology/TechnologyPage.vue` | Freightmate platform deep dive |
| `/resources/insights` | resources-insights | `pages/resources/InsightsPage.vue` | Insights listing |
| `/resources/blog/:slug` | resources-blog-post | `pages/resources/BlogPostPage.vue` | Individual blog posts |
| `/faq` | faq | `pages/resources/FAQPage.vue` | Accordion FAQ |
| `/contact` | contact | `pages/contact/ContactPage.vue` | Contact form + locations |
| `/track` | track | `pages/support/TrackPage.vue` | Track & trace form |
| `/privacy` | privacy | `pages/legal/PrivacyPage.vue` | Legal policy |
| `/terms` | terms | `pages/legal/TermsPage.vue` | Terms & conditions |
| `/:pathMatch(.*)*` | - | redirect | Catch-all -> home |
