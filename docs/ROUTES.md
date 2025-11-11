# Routes

| Path                               | Name                | Component                             | Notes                                          |
| ---------------------------------- | ------------------- | ------------------------------------- | ---------------------------------------------- |
| `/`                                | home                | `pages/home/HomePage.vue`             | Landing + CTA modules                          |
| `/our-team`                        | our-team            | `pages/company/OurTeamPage.vue`       | Company story + leadership                     |
| `/why-tuco`                        | why-tuco            | `pages/company/WhyTucoPage.vue`       | Differentiators + FAQ                          |
| `/services`                        | services            | `pages/services/ServicesPage.vue`     | Service catalogue with anchor sections         |
| `/services/freight-management`     | -                   | redirect                              | Redirect to `/services#freight-management`     |
| `/services/tracking-reporting`     | -                   | redirect                              | Redirect to `/services#tracking-reporting`     |
| `/services/integration-automation` | -                   | redirect                              | Redirect to `/services#integration-automation` |
| `/technology`                      | technology          | `pages/technology/TechnologyPage.vue` | Freightmate platform deep dive                 |
| `/resources/insights`              | resources-insights  | `pages/resources/InsightsPage.vue`    | Insights listing                               |
| `/resources/blog/:slug`            | resources-blog-post | `pages/resources/BlogPostPage.vue`    | Individual blog posts                          |
| `/contact`                         | contact             | `pages/contact/ContactPage.vue`       | Contact form + locations                       |
| `/track`                           | track               | `pages/support/TrackPage.vue`         | Track & trace form                             |
| `/privacy`                         | privacy             | `pages/legal/PrivacyPage.vue`         | Legal policy                                   |
| `/terms`                           | terms               | `pages/legal/TermsPage.vue`           | Terms & conditions                             |
| `/:pathMatch(.*)*`                 | -                   | redirect                              | Catch-all -> home                              |
