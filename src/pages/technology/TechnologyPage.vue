<template>
  <div class="bg-[#f8f9f9]">
    <section class="py-16 md:py-24">
      <div
        class="container mx-auto flex max-w-7xl flex-col gap-12 px-4 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8"
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

        <div class="w-full lg:max-w-none lg:self-start">
          <div
            class="rounded-xl border border-[var(--color-tuco-line)] bg-white/80 p-6 text-left shadow-card-soft backdrop-blur"
          >
            <h3
              class="text-xl font-semibold text-[var(--color-tuco-navy)] text-center"
            >
              Platform snapshot
            </h3>
            <dl class="mt-6 grid grid-cols-2 gap-x-8 gap-y-6">
              <div class="space-y-1">
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
              <div class="space-y-1">
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
              <div class="space-y-1">
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
              <div class="space-y-1">
                <dt
                  class="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]"
                >
                  Visibility
                </dt>
                <dd
                  class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)]"
                >
                  Real-time
                </dd>
                <p class="mt-1 text-sm text-[var(--color-tuco-slate)]">
                  Tracking, POD, and analytics refresh as events happen across
                  the network.
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
          TUCO owns and operates Freightmate - our SaaS platform that brings
          quoting, booking, tracking, and billing into one place so every
          stakeholder stays on the same story, from the first quote through
          proactive reviews and optimisation.
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
            class="group flex flex-col gap-4 rounded-xl bg-transparent p-6 transition duration-200 hover:-translate-y-1 hover:bg-[#f7f9fd] hover:shadow-card-soft"
          >
            <div class="flex items-start gap-4">
              <span
                class="mt-1 inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[var(--color-tuco-sky)]/60 text-[var(--color-tuco-blue)]"
              >
                <component :is="module.icon" class="h-6 w-6" />
              </span>
              <div>
                <h3
                  class="text-lg font-semibold text-[var(--color-tuco-navy)] md:text-xl"
                >
                  {{ module.title }}
                </h3>
                <p
                  class="mt-2 text-sm text-[var(--color-tuco-slate)] md:text-base"
                >
                  {{ module.body }}
                </p>
              </div>
            </div>
            <p class="mt-auto text-sm text-[var(--color-tuco-slate)]">
              {{ module.detail }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#f7f9fd] py-16">
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
              class="rounded-2xl p-5 transition duration-200 hover:-translate-y-1 hover:bg-[#f7f9fd] hover:shadow-card-soft"
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
import freightmateVideo from "@/assets/videos/freightmate_video.mp4";
import {
  ArrowsRightLeftIcon,
  ClipboardDocumentCheckIcon,
  LockClosedIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  SignalIcon,
} from "@heroicons/vue/24/outline";
import { useSEO } from "@/composables/useSEO";

const modules = [
  {
    title: "Quote, rank & route",
    body: "Rate every contracted carrier in seconds.",
    detail:
      "Applies volumetric and multi-leg logic, your pricing rules, and flags capacity or compliance risks so best-fit options surface instantly.",
    icon: ArrowsRightLeftIcon,
  },
  {
    title: "Book & dispatch",
    body: "Create consignments, manifests, and labels without slowing the dock.",
    detail:
      "Batch print, stage, and scan while carrier docs auto-generate (including dangerous goods) with exception paths for ATL, POD imagery, and relabels.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Track & communicate",
    body: "One live timeline shows every milestone, POD, and exception.",
    detail:
      "Harmonised carrier feeds keep milestones consistent, branded notifications keep consignees informed, and alerts highlight delays or damages first.",
    icon: SignalIcon,
  },
  {
    title: "Service assurance",
    body: "Monitor SLAs, capture exceptions, and keep freight on-plan.",
    detail:
      "Fast escalation flows with DIFOT and dwell scorecards plus automated notification templates keep teams aligned.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Analytics & BI",
    body: "Dashboards show DIFOT, carbon, utilisation, and performance.",
    detail:
      "Pre-built views for leadership and ops with scheduled reports, CSV/API export, and webhooks for automation.",
    icon: PresentationChartLineIcon,
  },
  {
    title: "Governance & security",
    body: "Role-based controls, audit trails, and compliance tooling built-in.",
    detail:
      "SSO, MFA, and IP restrictions with full auditing so bookings, comms, contracts, and safety docs stay secure.",
    icon: LockClosedIcon,
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
