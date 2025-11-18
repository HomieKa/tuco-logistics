<template>
  <div class="bg-[#f9f9f9]">
    <section
      class="bg-[#f9f9f9] py-16 md:py-24"
      aria-labelledby="technology-hero"
    >
      <div class="container mx-auto max-w-7xl px-4 lg:px-8">
        <div class="space-y-8">
          <div class="space-y-4 text-center lg:text-left">
            <p
              class="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]"
            >
              Technology
            </p>
            <h1
              id="technology-hero"
              class="text-4xl font-semibold text-[#0c233f] md:text-5xl"
            >
              TUCO Technology: real-time logistics made simple
            </h1>
            <p
              class="mx-auto max-w-3xl text-lg text-[#0c233f]/80 lg:mx-0 lg:max-w-4xl"
            >
              Freightmate brings quoting, dispatch, tracking, analytics, and
              governance into one workspace so freight teams stay focused on the
              shipment - not juggling portals.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article
              v-for="snapshot in snapshots"
              :key="snapshot.title"
              class="flex flex-col gap-2 rounded-2xl border border-[#dfeaed] bg-[#e9f5f7]/70 p-6"
            >
              <p
                :class="[
                  'text-3xl font-bold md:text-4xl text-[#62bda5]',
                  snapshot.valueClass,
                ]"
              >
                {{ snapshot.value }}
              </p>
              <h3 class="text-base font-semibold text-[var(--color-tuco-blue)]">
                {{ snapshot.title }}
              </h3>
              <p class="text-sm text-[#0c233f]/70">{{ snapshot.caption }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-[#0c233f] py-16 md:py-20"
      aria-labelledby="platform-overview"
    >
      <div class="container mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div class="space-y-5">
            <p
              class="text-sm font-semibold uppercase tracking-[0.28em] text-[#62bda5]"
            >
              Freightmate platform
            </p>
            <h2
              id="platform-overview"
              class="text-3xl font-semibold text-white md:text-4xl"
            >
              Unified workflows for every shipment
            </h2>
            <p class="text-lg text-white/80">
              TUCO owns and operates Freightmate - our SaaS platform that brings
              quoting, booking, tracking, and billing into one place so every
              stakeholder stays on the same story from the first quote through
              proactive reviews and optimisation.
            </p>
            <p class="text-sm text-white/70">
              See how Freightmate keeps quoting, dispatch, tracking, and billing
              aligned in under a minute.
            </p>
          </div>

          <div>
            <div
              class="overflow-hidden rounded-2xl bg-[#0c233f] shadow-[0_18px_40px_rgba(12,35,63,0.2)]"
            >
              <video
                class="aspect-video w-full bg-black object-cover"
                :src="freightmateVideo"
                :poster="demoPoster"
                controls
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-[#f9f9f9] py-16 md:py-20"
      aria-labelledby="technology-features"
    >
      <div class="container mx-auto max-w-7xl px-4 lg:px-8">
        <div class="text-center">
          <h2
            id="technology-features"
            class="text-3xl font-semibold text-[#0c233f] md:text-4xl"
          >
            Technology features designed for freight teams
          </h2>
          <p class="mx-auto mt-3 max-w-3xl text-[#0c233f]/75">
            Operate, assure, and improve every leg of your network with tools
            that keep dispatch, customer teams, and leadership aligned.
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <article
            v-for="module in modules"
            :key="module.title"
            class="flex flex-col gap-4 rounded-2xl bg-white/70 p-6 ring-1 ring-[#e6edf0]"
          >
            <span
              :class="[
                'inline-flex h-12 w-12 items-center justify-center rounded-xl ring-2 ring-white/60 shadow-sm',
                module.iconBg,
              ]"
            >
              <component
                :is="module.icon"
                :class="['h-6 w-6', module.iconColor]"
              />
            </span>
            <div class="space-y-2">
              <h3 class="text-lg font-semibold text-[#0c233f]">
                {{ module.title }}
              </h3>
              <p class="text-sm text-[#0c233f]/75">
                {{ module.detail }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      class="bg-[#e9f5f7] py-16 md:py-20"
      aria-labelledby="implementation"
    >
      <div
        class="container mx-auto max-w-7xl grid gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:justify-items-center lg:px-8"
      >
        <div class="relative">
          <p
            class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-tuco-blue)]"
          >
            Implementation timeline
          </p>
          <h2
            id="implementation"
            class="mt-2 text-3xl font-semibold text-[var(--color-tuco-blue)] md:text-4xl"
          >
            Implementation guided by TUCO
          </h2>
          <ol class="mt-10 space-y-6 pl-2">
            <li
              v-for="(stage, index) in onboarding"
              :key="stage.title"
              class="relative flex gap-5 rounded-2xl bg-transparent p-2 pl-7"
            >
              <span
                class="absolute -left-[26px] top-2 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[var(--color-tuco-blue)] bg-white text-base font-semibold text-[var(--color-tuco-blue)] shadow-sm"
              >
                {{ index + 1 }}
              </span>
              <div class="space-y-1">
                <h3 class="text-lg font-semibold text-[var(--color-tuco-blue)]">
                  {{ stage.title }}
                </h3>
                <p class="text-sm text-[#0c233f]/75">
                  {{ stage.body }}
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div
          class="w-full max-w-xl rounded-3xl bg-[#0c233f] p-8 text-white shadow-[0_18px_40px_rgba(12,35,63,0.25)] lg:self-center"
        >
          <h3 class="text-2xl font-semibold text-white">Customer outcomes</h3>
          <ul class="mt-6 space-y-4">
            <li
              v-for="outcome in outcomes"
              :key="outcome"
              class="flex items-start gap-3 text-white/90"
            >
              <CheckCircleIcon
                class="mt-0.5 h-5 w-5 flex-none text-[#62bda5]"
              />
              <span>{{ outcome }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <CallToAction>
      <template #eyebrow>Book a Freightmate demo</template>
      <template #title>Ready to transform your freight network?</template>
      <template #description>
        Walk through Freightmate with TUCO specialists - we'll map your carrier
        set, systems, and targets and outline delivery timelines.
      </template>
      <template #actions>
        <Button
          size="lg"
          to="/contact"
          class="!bg-[#62bda5] !text-white !shadow-[0_12px_28px_rgba(98,189,165,0.35)] hover:!bg-[#55ad92] focus:!ring-[#62bda5]"
        >
          Talk to a consultant
        </Button>
      </template>
    </CallToAction>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import CallToAction from "@/components/ui/CallToAction.vue";
import freightmateVideo from "@/assets/videos/freightmate_video.mp4";
import demoPoster from "@/assets/images/freightmate_thumbnail.jpg";
import {
  CheckCircleIcon,
  EyeIcon,
  MapIcon,
  PresentationChartLineIcon,
} from "@heroicons/vue/24/outline";
import { useSEO } from "@/composables/useSEO";

const snapshots = [
  {
    value: "200+",
    title: "Carriers supported",
    caption: "Parcel, pallet, airfreight, linehaul, courier and specialist.",
    valueClass: "text-[#38a2ca]",
  },
  {
    value: "60+",
    title: "Automations",
    caption:
      "Dispatch workflows, exception handling and compliance checks baked in.",
    valueClass: "text-[#62bda5]",
  },
  {
    value: "Up to 3 weeks",
    title: "Onboarding",
    caption: "Project squads guide data, integrations and change management.",
    valueClass: "text-[#38a2ca]",
  },
  {
    value: "Real-time",
    title: "Visibility",
    caption: "Tracking, POD and analytics refresh as events happen.",
    valueClass: "text-[#62bda5]",
  },
];

const demoThumbnail =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80";

const modules = [
  {
    title: "Operate & Dispatch",
    detail:
      "Quote, rank and route quickly with pricing rules, create consignments and manifests, and batch print labels while routing stays on-plan.",
    icon: MapIcon,
    iconBg: "bg-[#e9f5f7]",
    iconColor: "text-[#38a2ca]",
  },
  {
    title: "Visibility & Assurance",
    detail:
      "Live timelines with milestone and POD tracking, branded notifications, SLA monitoring and exception handling to keep customers informed.",
    icon: EyeIcon,
    iconBg: "bg-[#f0faf7]",
    iconColor: "text-[#62bda5]",
  },
  {
    title: "Insight & Control",
    detail:
      "Dashboards for DIFOT, carbon and utilisation with scheduled reports, role-based controls and audit trails.",
    icon: PresentationChartLineIcon,
    iconBg: "bg-[#f3f8fb]",
    iconColor: "text-[#38a2ca]",
  },
];

const onboarding = [
  {
    title: "Discovery & data audit",
    body: "Review carrier contracts, surcharges, routing rules and tech stack to map your current state.",
  },
  {
    title: "Configuration & integrations",
    body: "Configure carriers, automations and integrations with ERPs, WMS and e-commerce systems.",
  },
  {
    title: "Training & pilot",
    body: "Sandbox sessions rehearse workflows while TUCO equips operations and customer teams.",
  },
  {
    title: "Go-live & optimisation",
    body: "Run parallel, then go-live; continuous reviews ensure Freightmate evolves with the freight mix.",
  },
];

const outcomes = [
  "Booking and manifest time cut by 50% for national shippers.",
  "Exception visibility and proactive comms reduce inbound support calls by 40%.",
  "End-to-end tracking and SLA dashboards surface performance issues before they impact customers.",
  "Leadership teams receive unified analytics across DIFOT, utilisation and carbon to guide reviews.",
];

useSEO({
  title: "Freightmate Platform - TUCO Logistics",
  description:
    "Explore how Freightmate centralises quoting, booking, tracking, and analytics for Australian freight networks.",
});
</script>
