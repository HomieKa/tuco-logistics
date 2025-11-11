<template>
  <div>
    <PageHeader
      title="TUCO Technology: real-time logistics made simple"
      description="Our platform stack unifies booking, tracking, analytics, and governance so freight teams stay ahead without juggling portals."
    >
      <template #eyebrow>Technology</template>
    </PageHeader>

    <section class="bg-[var(--color-tuco-sky)]/40 py-16">
      <div class="container mx-auto grid px-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div class="space-y-6">
          <h2  class="text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl">
            Built to keep every shipment visible and controllable
          </h2>
          <p class="text-lg text-[var(--color-tuco-slate)]">
            TUCO technology replaces disconnected portals, spreadsheets, and
            inbox chases. Freightmate and our integration toolkit keep every
            move visible, accountable, and ready for action.
          </p>
        </div>

        <div class="rounded-[1rem] bg-[var(--color-tuco-card)] p-8">
          <h3 class="text-xl font-semibold text-[var(--color-tuco-navy)]">
            Platform snapshot
          </h3>
          <dl class="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <dt
                class="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]">
                Carriers supported
              </dt>
              <dd
                class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)]">
                200+
              </dd>
              <p class="mt-1 text-sm text-[var(--color-tuco-slate)]">
                Parcel, pallet, airfreight, linehaul, courier, and specialist.
              </p>
            </div>
            <div>
              <dt
                class="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]">
                Automations
              </dt>
              <dd
                class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)]">
                60+
              </dd>
              <p class="mt-1 text-sm text-[var(--color-tuco-slate)]">
                Dispatch workflows, exception handling, and compliance checks
                baked in.
              </p>
            </div>
            <div>
              <dt class="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]">
                Onboarding window
              </dt>
              <dd
                class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)]">
                Up to 3 Weeks
              </dd>
              <p class="mt-1 text-sm text-[var(--color-tuco-slate)]">
                TUCO project squads guide data, integrations, and change
                management.
              </p>
            </div>
            <div>
              <dt class="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]">
                Visibility
              </dt>
              <dd class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)]">
                Real-time
              </dd>
              <p class="mt-1 text-sm text-[var(--color-tuco-slate)]">
                Tracking, POD, and analytics refresh as events happen across the
                network.
              </p>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section class="bg-[#f3f5fb] py-16">
      <div class="container mx-auto px-4">
        <h2
          class="text-center text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
        >
          Freightmate modules
        </h2>
        <p
          class="mx-auto mt-4 max-w-3xl text-center text-[var(--color-tuco-slate)]"
        >
          Freightmate keeps every stakeholder on the same story, from the first
          quote through to proactive reviews and optimisation.
        </p>
        <div
          class="mt-16 overflow-hidden rounded-[2rem] border border-[var(--color-tuco-line)] bg-black/90 p-2 shadow-card-soft"
        >
          <video
            class="aspect-video w-full rounded-[1.75rem] bg-black object-cover"
            :src="freightmateVideo"
            controls
            preload="metadata"
          >
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="module in modules"
            :key="module.title"
            class="group flex flex-col gap-4 rounded-2xl bg-white p-8 transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div class="flex items-start gap-4">
              <span class="mt-1 inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[var(--color-tuco-sky)] text-[var(--color-tuco-blue)]">
                <svg
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    opacity="0.2"
                    fill="currentColor"
                  />
                  <path d="M12 7v10M7 12h10" stroke-linecap="round" />
                </svg>
              </span>
              <div>
                <h3 class="text-lg font-semibold text-[var(--color-tuco-navy)] md:text-xl">
                  {{ module.title }}
                </h3>
                <p class="mt-2 text-sm text-[var(--color-tuco-slate)] md:text-base">
                  {{ module.body }}
                </p>
              </div>
            </div>
            <ul
              class="mt-auto space-y-2 text-sm text-[var(--color-tuco-slate)]">
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#f7f9fd] py-16">
      <div class="container mx-auto grid lg:items-start">
        <div class="space-y-5">
          <h2 class="text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl">
            Integrations and data
          </h2>
          <p class="text-lg text-[var(--color-tuco-slate)]">
            Freightmate connects to ERPs, WMS, ecommerce platforms, customer
            tools, and analytics suites. Use TUCO's native connectors or build
            on the open API.
          </p>
          <div class="mt-6 grid gap-4 sm:grid-cols-4">
            <a
              v-for="item in integrationItems"
              :key="item.label"
              :href="item.href"
              class="flex py-4 items-center gap-4 rounded-xl border border-[var(--color-tuco-line)] bg-white p-3 shadow-lg/5 transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                :src="item.src"
                :alt="`${item.label} logo`"
                class="h-10 w-10 flex-none object-contain"
              />
              <div>
                <p class="text-sm font-semibold text-[var(--color-tuco-navy)]">
                  {{ item.label }}
                </p>
                <p class="text-xs text-[var(--color-tuco-slate)]">
                  {{ item.desc }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f3f5fb] py-16">
      <div
        class="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
      >
        <div>
          <h2
            class="text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
          >
            Implementation guided by TUCO
          </h2>
          <p class="mt-4 text-lg text-[var(--color-tuco-slate)]">
            TUCO embeds alongside your project team to configure carriers, build
            integrations, and train users. Every rollout is staged so operations
            keep moving while Freightmate goes live.
          </p>
          <div class="mt-8 space-y-4">
            <div
              v-for="stage in onboarding"
              :key="stage.title"
              class="rounded-2xl border border-[var(--color-tuco-line)] bg-white p-5"
            >
              <h3 class="text-lg font-semibold text-[var(--color-tuco-navy)]">
                {{ stage.title }}
              </h3>
              <p class="mt-2 text-sm text-[var(--color-tuco-slate)]">
                {{ stage.body }}
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-[2rem] bg-navy-500 p-8 text-white shadow-card-soft">
          <h3 class="text-2xl font-semibold text-white/90">
            Customer outcomes
          </h3>
          <ul class="mt-6 space-y-4 text-white/80">
            <li>Booking and manifest time cut by 50% for national shippers.</li>
            <li>
              Exception visibility and proactive comms reduce inbound support
              calls by 40%.
            </li>
            <li>
              End-to-end tracking and SLA dashboards surface performance issues
              before they impact customers.
            </li>
            <li>
              Leadership teams receive unified analytics across DIFOT,
              utilisation, and carbon to guide reviews.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <CallToAction>
      <template #eyebrow>Book a Freightmate demo</template>
      <template #title>Ready to transform your freight network?</template>
      <template #description>
        Walk through Freightmate with TUCO specialists. We'll map your carrier
        set, systems, and targets to the platform and outline delivery
        timelines.
      </template>
      <template #actions>
        <Button variant="secondary" size="lg" to="/contact"
          >Talk to a consultant</Button
        >
      </template>
    </CallToAction>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import CallToAction from "@/components/ui/CallToAction.vue";
import PageHeader from "@/components/ui/PageHeader.vue";
import sugarcrmIcon from "@/assets/images/icons/sugarcrm.svg";
import prontoIcon from "@/assets/images/icons/pronto.svg";
import wooIcon from "@/assets/images/icons/woo.svg";
import odooIcon from "@/assets/images/icons/odoo.svg";
import shopifyIcon from "@/assets/images/icons/shopify.svg";
import xeroIcon from "@/assets/images/icons/xero.svg";
import netsuiteIcon from "@/assets/images/icons/netsuite.svg";
import sapIcon from "@/assets/images/icons/sap.svg";
import dynamicsIcon from "@/assets/images/icons/dynamics365.svg";
import myobIcon from "@/assets/images/icons/myob.svg";
import cin7Icon from "@/assets/images/icons/cin7.svg";
import freightmateVideo from "@/assets/videos/freightmate_video.mp4";
import { useSEO } from "@/composables/useSEO";

const modules = [
  {
    title: "Quote, rank & route",
    body: "Rate every contracted carrier in seconds with rules you control.",
    points: [
      "Handles volumetric, multi-leg, premium freight logic.",
      "Business rules surface best-fit options instantly.",
      "Scenario checks flag capacity or compliance risks.",
    ],
  },
  {
    title: "Book & dispatch",
    body: "Create consignments, manifests, and labels without slowing the dock.",
    points: [
      "Batch print, stage, and scan straight from the floor.",
      "Carrier docs auto-generate, dangerous goods included.",
      "Exception paths cover ATL, POD imagery, relabels.",
    ],
  },
  {
    title: "Track & communicate",
    body: "One live timeline shows every milestone, POD, and exception.",
    points: [
      "Harmonised carrier feeds create consistent milestones.",
      "Branded notifications keep consignees in the loop.",
      "Exception dashboards highlight SLA impact first.",
    ],
  },
  {
    title: "Service assurance",
    body: "Monitor SLAs, capture exceptions, and keep freight on-plan.",
    points: [
      "Escalation flows bring TUCO and your team together fast.",
      "Scorecards cover DIFOT, dwell time, and root causes.",
      "Notification templates push updates out automatically.",
    ],
  },
  {
    title: "Analytics & BI",
    body: "Dashboards show DIFOT, carbon, utilisation, and carrier performance.",
    points: [
      "Pre-built views tuned for leadership, ops, and commercial.",
      "Schedule reports or export via CSV/API in one click.",
      "Webhooks feed downstream automation instantly.",
    ],
  },
  {
    title: "Governance & security",
    body: "Role-based controls, audit trails, and compliance tooling built-in.",
    points: [
      "Supports SSO, MFA, and IP restrictions out of the box.",
      "Track every booking, override, and communication.",
      "Store carrier contracts, SOPs, and safety docs securely.",
    ],
  },
];

const principles = [
  {
    title: "Real-time by default",
    description: "Status, POD, and analytics refresh instantly.",
    icon: "M12 6v12m6-6H6m12 6a6 6 0 100-12 6 6 0 000 12z",
  },
  {
    title: "API-first",
    description: "Integrates cleanly with ERP, WMS, and CRM.",
    icon: "M15 10l4.553-1.138a1 1 0 01.894 1.79L16 13m-7-2L4.447 9.862a1 1 0 00-.894 1.79L8 13m4-9v16",
  },
  {
    title: "Secure & compliant",
    description: "RBAC, audit, and SOC-ready controls.",
    icon: "M12 12a3 3 0 013 3v4H9v-4a3 3 0 013-3zm0-6a2 2 0 012 2v2H10V8a2 2 0 012-2z",
  },
  {
    title: "Configurable, not custom",
    description: "Adapt with rules—no rebuilds.",
    icon: "M4 6h16M4 12h10m-6 6h12",
  },
  {
    title: "Actionable analytics",
    description: "Insights that trigger alerts and workflows.",
    icon: "M4 19h16M4 5h16M8 5v14m4-6 4-4 4 4",
  },
  {
    title: "Enterprise-grade uptime",
    description: "Resilient architecture and monitoring.",
    icon: "M5 12l5 5L20 7M4 17h16",
  },
];

const integrationItems = [
  {
    src: sugarcrmIcon,
    label: "SugarCRM",
    desc: "CRM",
    href: "/partners/integrations",
  },
  {
    src: prontoIcon,
    label: "Pronto",
    desc: "ERP",
    href: "/partners/integrations",
  },
  {
    src: wooIcon,
    label: "WooCommerce",
    desc: "E-commerce",
    href: "/partners/integrations",
  },
  { src: odooIcon, label: "Odoo", desc: "ERP", href: "/partners/integrations" },
  {
    src: shopifyIcon,
    label: "Shopify",
    desc: "E-commerce",
    href: "/partners/integrations",
  },
  {
    src: xeroIcon,
    label: "Xero",
    desc: "Accounting",
    href: "/partners/integrations",
  },
  {
    src: netsuiteIcon,
    label: "NetSuite",
    desc: "ERP",
    href: "/partners/integrations",
  },
  { src: sapIcon, label: "SAP", desc: "ERP", href: "/partners/integrations" },
  {
    src: dynamicsIcon,
    label: "Dynamics 365",
    desc: "ERP/CRM",
    href: "/partners/integrations",
  },
  {
    src: myobIcon,
    label: "MYOB",
    desc: "Accounting",
    href: "/partners/integrations",
  },
  {
    src: cin7Icon,
    label: "Cin7",
    desc: "Inventory",
    href: "/partners/integrations",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/lucide-icons/lucide/icons/app-window.svg",
    label: "Custom integrations",
  },
];

const onboarding = [
  {
    title: "1. Discovery & data audit",
    body: "Review carrier contracts, surcharges, routing rules, file formats, and tech stack to map your current state.",
  },
  {
    title: "2. Configuration & integrations",
    body: "TUCO configures carriers, automations, and integrations with ERPs, WMS, ecommerce, and customer systems.",
  },
  {
    title: "3. Training & pilot",
    body: "Sandbox sessions rehearse day-to-day workflows while TUCO equips operations, commercial, and customer teams.",
  },
  {
    title: "4. Go-live & optimisation",
    body: "Parallel run then go-live with TUCO on deck. Continuous reviews ensure Freightmate evolves with your freight mix.",
  },
];

useSEO({
  title: "Freightmate Platform - TUCO Logistics",
  description:
    "Explore how Freightmate centralises quoting, booking, tracking, and analytics for Australian freight networks.",
});
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.motion-safe\:animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out both;
}
</style>
