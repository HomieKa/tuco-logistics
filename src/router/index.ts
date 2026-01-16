import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/home/HomePage.vue"),
    meta: { title: "TUCO Logistics - Hassle-Free Freight Management" },
  },
  {
    path: "/our-team",
    name: "our-team",
    component: () => import("@/pages/company/OurTeamPage.vue"),
    meta: { title: "Our Team - TUCO Logistics" },
  },
  {
    path: "/services",
    name: "services",
    component: () => import("@/pages/services/ServicesPage.vue"),
    meta: { title: "Services - TUCO Logistics" },
  },
  {
    path: "/track",
    name: "track",
    component: () => import("@/pages/support/TrackPage.vue"),
    meta: { title: "Freight Tracking | TUCO" },
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("@/pages/legal/PrivacyPage.vue"),
    meta: { title: "Privacy Policy | TUCO" },
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import("@/pages/legal/TermsPage.vue"),
    meta: { title: "Terms & Conditions | TUCO" },
  },
  {
    path: "/services/freight-management",
    redirect: { path: "/services", hash: "#freight-management" },
  },
  {
    path: "/services/tracking-reporting",
    redirect: { path: "/services", hash: "#tracking-reporting" },
  },
  {
    path: "/services/integration-automation",
    redirect: { path: "/services", hash: "#integration-automation" },
  },
  {
    path: "/technology",
    name: "technology",
    component: () => import("@/pages/technology/TechnologyPage.vue"),
    meta: { title: "Freightmate Platform - TUCO Logistics" },
  },
  {
    path: "/why-tuco",
    name: "why-tuco",
    component: () => import("@/pages/company/WhyTucoPage.vue"),
    meta: { title: "Why TUCO - TUCO Logistics" },
  },
  {
    path: "/resources/insights",
    name: "resources-insights",
    component: () => import("@/pages/resources/InsightsPage.vue"),
    meta: { title: "Insights - TUCO Logistics" },
  },
  {
    path: "/resources/blog/:slug",
    name: "resources-blog-post",
    component: () => import("@/pages/resources/BlogPostPage.vue"),
    meta: { title: "TUCO Logistics Blog" },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/pages/contact/ContactPage.vue"),
    meta: { title: "Contact Us - TUCO Logistics" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/pages/NotFoundPage.vue"),
    meta: { title: "Page Not Found | TUCO Logistics" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return false;
    }
    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, _from, next) => {
  document.title = (to.meta.title as string) || "TUCO Logistics";
  next();
});

export default router;
