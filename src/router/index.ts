import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home/HomePage.vue"),
    meta: { title: "TUCO Logistics - Hassle-Free Freight Management" },
  },
  {
    path: "/about-us",
    name: "about-us",
    component: () => import("@/pages/company/AboutPage.vue"),
    meta: { title: "About Us - TUCO Logistics" },
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
    path: "/our-difference",
    name: "our-difference",
    component: () => import("@/pages/company/OurDifferencePage.vue"),
    meta: { title: "Why Choose TUCO - TUCO Logistics" },
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
    path: "/faq",
    name: "faq",
    component: () => import("@/pages/resources/FAQPage.vue"),
    meta: { title: "FAQ - TUCO Logistics" },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/pages/contact/ContactPage.vue"),
    meta: { title: "Contact Us - TUCO Logistics" },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
