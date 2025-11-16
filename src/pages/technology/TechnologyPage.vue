<template>
  <div class="bg-[#f7f9fd]">
    <section class="py-16 md:py-24">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:grid lg:grid-cols-[1.15fr_0.95fr] lg:items-center lg:gap-16 lg:px-10"
        aria-labelledby="technology-hero"
      >
        <div class="space-y-6 text-center lg:max-w-none lg:text-left">
          <p
            class="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]"
          >
            Technology
          </p>
          <h1
            id="technology-hero"
            class="text-4xl font-semibold text-[var(--color-tuco-navy)] md:text-5xl"
          >
            TUCO Technology: real-time logistics made simple
          </h1>
          <p class="text-lg text-[var(--color-tuco-slate)]">
            Freightmate brings quoting, dispatch, tracking, analytics, and
            governance into one workspace so freight teams stay focused on the
            shipment—not juggling portals.
          </p>
        </div>

        <div class="w-full lg:max-w-none lg:self-stretch">
          <div
            class="h-full rounded-[1.5rem] border border-[var(--color-tuco-line)] bg-[var(--color-tuco-card)] p-10 text-left shadow-card-soft"
          >
            <h3 class="text-xl font-semibold text-[var(--color-tuco-navy)] text-center">
              Platform snapshot
            </h3>
          <dl class="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <dt
                class="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]"
              >
                Carriers supported
              </dt>
              <dd
                class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)]"
              >
                200+
              </dd>
              <p class="mt-1 text-sm text-[var(--color-tuco-slate)]">
                Parcel, pallet, airfreight, linehaul, courier, and specialist.
              </p>
            </div>
            <div>
              <dt
                class="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]"
              >
                Automations
              </dt>
              <dd
                class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)]"
              >
                60+
              </dd>
              <p class="mt-1 text-sm text-[var(--color-tuco-slate)]">
                Dispatch workflows, exception handling, and compliance checks
                baked in.
              </p>
            </div>
            <div>
              <dt
                class="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]"
              >
                Onboarding window
              </dt>
              <dd
                class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)]"
              >
                Up to 3 Weeks
              </dd>
              <p class="mt-1 text-sm text-[var(--color-tuco-slate)]">
                TUCO project squads guide data, integrations, and change
                management.
              </p>
            </div>
            <div>
              <dt
                class="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]"
              >
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
    </div>
    </section>

    <section class="bg-[#f3f5fb] py-16">
      <div class="container mx-auto px-4">
        <h2
          class="text-center text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
        >
          Freightmate platform
        </h2>
        <p
          class="mx-auto mt-4 max-w-3xl text-center text-[var(--color-tuco-slate)]"
        >
          TUCO owns Freightmate - the SaaS platform that cares for your freight
          program. We take every piece of customer feedback, real-time data
          insight, and operator idea, iterating quickly so we keep improving
          orchestration and clarity.
        </p>

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
        <div class="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
              class="mt-auto space-y-3 text-sm text-[var(--color-tuco-slate)]">
              <li
                v-for="point in module.points"
                :key="point"
                class="flex gap-3 text-left"
              >
                <span
                  class="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-tuco-blue)]"
                />
                <span>{{ point }}</span>
              </li>
            </ul>
          </article>
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
import Button from "@/components/sections/ui/Button.vue";
import CallToAction from "@/components/sections/ui/CallToAction.vue";
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
