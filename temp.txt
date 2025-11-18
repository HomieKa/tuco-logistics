<template>
  <div>
    <section
      class="bg-[var(--color-tuco-sky)]/20 py-16 md:py-24"
      aria-labelledby="why-intro"
    >
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div class="space-y-6">
          <p
            class="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]"
          >
            Why TUCO
          </p>
          <h1
            id="why-intro"
            class="text-4xl font-semibold text-[var(--color-tuco-navy)] md:text-5xl"
          >
            Why companies choose TUCO
          </h1>
          <p class="text-lg text-[var(--color-tuco-slate)] max-w-3xl">
            Strategic partnerships, measurable ROI, and a freight program
            tailored to your business.
          </p>
        </div>
      </div>
    </section>

    <section class="py-0" aria-labelledby="built-for">
      <div class="relative left-1/2 w-screen -translate-x-1/2 bg-[#f3f5fb]">
        <div class="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20 lg:px-8">
          <div
            class="flex flex-col items-start gap-10 rounded-[2rem] bg-[var(--color-tuco-sky)]/50 p-8 md:flex-row md:p-12"
          >
            <div class="space-y-6">
              <h2
                id="built-for"
                class="text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
              >
                Built for Australian logistics leaders
              </h2>
              <p class="text-[var(--color-tuco-slate)]">
                TUCO partners with operations, finance, and customer teams to
                run freight with precision - combining in-market experience,
                data-backed insights, and technology that fits how you work.
              </p>
            </div>

            <div
              class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
            >
              <article
                v-for="feature in leaderFeatures"
                :key="feature.title"
                :class="[
                  'group relative overflow-hidden rounded-3xl border p-6 shadow-card-soft transition duration-300 hover:-translate-y-1 hover:shadow-card-lg',
                  feature.wrapper,
                ]"
              >
                <div
                  :class="[
                    'pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100',
                    feature.glow,
                  ]"
                />
                <div class="relative flex flex-col gap-4">
                  <span
                    :class="[
                      'inline-flex h-12 w-12 items-center justify-center rounded-2xl',
                      feature.iconBg,
                    ]"
                  >
                    <component
                      :is="feature.icon"
                      :class="['h-6 w-6', feature.iconColor]"
                    />
                  </span>
                  <div class="space-y-2">
                    <h3
                      class="text-lg font-semibold text-[var(--color-tuco-navy)]"
                    >
                      {{ feature.title }}
                    </h3>
                    <p class="text-sm text-[var(--color-tuco-slate)]">
                      {{ feature.body }}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-0" aria-labelledby="why-reasons">
      <div class="relative left-1/2 w-screen -translate-x-1/2 bg-[#f7f9fd]">
        <div class="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20 lg:px-8">
          <div class="text-center">
            <h2
              id="why-reasons"
              class="text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
            >
              The reasons why companies partner with TUCO
            </h2>
            <p class="mx-auto mt-3 max-w-3xl text-[var(--color-tuco-slate)]">
              Each partnership shows that logistics is more than a service -
              it's a collaborative journey driving real growth and lasting
              impact.
            </p>
          </div>

          <div
            class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
          >
            <article
              v-for="(reason, index) in reasons"
              :key="reason.title"
              :class="[
                'group relative overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card-lg',
                reasonVariants[index % reasonVariants.length].card,
              ]"
            >
              <span
                :class="[
                  'inline-flex h-2 w-14 rounded-full',
                  reasonVariants[index % reasonVariants.length].accent,
                ]"
              />
              <h3
                class="mt-4 text-lg font-semibold text-[var(--color-tuco-navy)]"
              >
                {{ reason.title }}
              </h3>
              <p class="mt-2 text-sm text-[var(--color-tuco-slate)]">
                {{ reason.body }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="py-0" aria-labelledby="freightmate-band">
      <div class="relative left-1/2 w-screen -translate-x-1/2 bg-[#f3f5fb]">
        <div class="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20 lg:px-8">
          <div
            class="rounded-[2rem] bg-[var(--color-tuco-sky)]/50 p-10 md:p-16"
          >
            <div class="text-center">
              <h2
                id="freightmate-band"
                class="text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
              >
                Where strategy meets smart logistics
              </h2>
              <p class="mx-auto mt-3 max-w-3xl text-[var(--color-tuco-slate)]">
                TUCO's intelligence layer continually optimises every move,
                every consignment, and every dollar.
              </p>
            </div>

            <div
              class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6"
            >
              <article
                v-for="capability in capabilities"
                :key="capability.title"
                :class="[
                  'group relative overflow-hidden rounded-3xl border p-6 text-left shadow-card-soft transition duration-300 hover:-translate-y-1 hover:shadow-card-lg',
                  capability.card,
                ]"
              >
                <div
                  :class="[
                    'pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100',
                    capability.glow,
                  ]"
                />
                <div class="relative flex flex-col gap-4">
                  <span
                    :class="[
                      'inline-flex h-11 w-11 items-center justify-center rounded-2xl',
                      capability.iconBg,
                    ]"
                  >
                    <component
                      :is="capability.icon"
                      :class="['h-6 w-6', capability.iconColor]"
                    />
                  </span>
                  <div class="space-y-2">
                    <h3
                      class="text-sm font-semibold text-[var(--color-tuco-navy)]"
                    >
                      {{ capability.title }}
                    </h3>
                    <p class="text-sm text-[var(--color-tuco-slate)]">
                      {{ capability.body }}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-0" aria-labelledby="proof-metrics">
      <div class="relative left-1/2 w-screen -translate-x-1/2 bg-[#f3f5fb]">
        <div class="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20 lg:px-8">
          <div class="text-center">
            <h2
              id="proof-metrics"
              class="text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
            >
              What our clients experience
            </h2>
          </div>
          <div class="mt-12 grid gap-6 md:grid-cols-3">
            <article
              v-for="metric in metrics"
              :key="metric.title"
              :class="[
                'group relative overflow-hidden rounded-3xl border p-8 text-center shadow-card-soft transition duration-300 hover:-translate-y-1 hover:shadow-card-lg',
                metric.card,
              ]"
            >
              <div
                :class="[
                  'pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100',
                  metric.glow,
                ]"
              />
              <div class="relative flex flex-col items-center gap-3">
                <span
                  :class="['inline-flex h-2 w-16 rounded-full', metric.accent]"
                />
                <p
                  :class="['text-3xl font-bold md:text-4xl', metric.valueClass]"
                >
                  {{ metric.value }}
                </p>
                <h3 class="text-lg font-semibold text-[var(--color-tuco-navy)]">
                  {{ metric.title }}
                </h3>
                <p class="text-sm text-[var(--color-tuco-slate)]">
                  {{ metric.body }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowPathRoundedSquareIcon,
  ArrowTrendingUpIcon,
  BellAlertIcon,
  ChartBarIcon,
  CheckCircleIcon,
  EyeIcon,
  SparklesIcon,
} from "@heroicons/vue/24/outline";

import { useSEO } from "@/composables/useSEO";

useSEO({
  title: "Why Choose TUCO - TUCO Logistics",
  description:
    "Discover why Australian businesses partner with TUCO - strategic support, proven ROI, and tech that delivers measurable outcomes.",
});

const leaderFeatures = [
  {
    title: "Faster onboarding",
    body: "Launch new programs in weeks, not months.",
    icon: SparklesIcon,
    wrapper:
      "border-transparent bg-gradient-to-br from-white via-white to-sky-100/70",
    glow: "bg-gradient-to-br from-sky-500/15 via-transparent to-transparent",
    iconBg: "bg-sky-500/15 text-sky-600 shadow-card-soft",
    iconColor: "text-sky-600",
  },
  {
    title: "Visibility across the network",
    body: "Dashboards, alerts, and reporting for each stakeholder.",
    icon: EyeIcon,
    wrapper:
      "border-transparent bg-gradient-to-br from-white via-white to-[var(--color-tuco-sky)]/80",
    glow: "bg-gradient-to-br from-[var(--color-tuco-blue)]/18 via-transparent to-transparent",
    iconBg:
      "bg-[var(--color-tuco-blue)]/15 text-[var(--color-tuco-blue)] shadow-card-soft",
    iconColor: "text-[var(--color-tuco-blue)]",
  },
  {
    title: "Continuous optimisation",
    body: "Regular reviews keep carrier performance and costs aligned.",
    icon: ArrowTrendingUpIcon,
    wrapper:
      "border-transparent bg-gradient-to-br from-white via-white to-teal-100/70",
    glow: "bg-gradient-to-br from-teal-500/15 via-transparent to-transparent",
    iconBg: "bg-teal-500/15 text-teal-600 shadow-card-soft",
    iconColor: "text-teal-600",
  },
];

const reasons = [
  {
    title: "Increase on-time deliveries & improve DIFOT",
    body: "Real-time visibility with right-fit carriers lifts reliability and satisfaction.",
  },
  {
    title: "Focus on what you do best",
    body: "Clients reclaim valuable time to focus on strategic growth.",
  },
  {
    title: "Increase in customer satisfaction",
    body: "Proactive monitoring and fast resolution keep you ahead of expectations.",
  },
  {
    title: "Enhance operational efficiencies",
    body: "50+ clients have integrated TUCO with ERP/WMS for streamlined operations.",
  },
  {
    title: "Achieve annual cost savings",
    body: "Smarter analysis and carrier selection deliver meaningful savings.",
  },
  {
    title: "Make data-driven decisions",
    body: "Freightmate provides real-time analytics to optimise operations and reduce freight costs.",
  },
  {
    title: "Fix billing leakage",
    body: "We analyse, match and interrogate carrier invoices for accuracy and transparency.",
  },
  {
    title: "Automated customer notifications reduce calls",
    body: "Proactive updates lower support volume and keep customers informed.",
  },
  {
    title: "Streamline your booking process",
    body: "The right carrier is selected 100% of the time.",
  },
];

const reasonVariants = [
  {
    card: "border-transparent bg-gradient-to-br from-white via-white to-sky-100/70 shadow-card-soft",
    accent: "bg-sky-500/30",
  },
  {
    card: "border-transparent bg-gradient-to-br from-white via-white to-teal-100/70 shadow-card-soft",
    accent: "bg-teal-500/30",
  },
  {
    card: "border border-[var(--color-tuco-line)] bg-[var(--color-tuco-card)] shadow-card-soft",
    accent: "bg-[var(--color-tuco-blue)]/25",
  },
];

const capabilities = [
  {
    icon: BellAlertIcon,
    title: "Live customer notifications",
    body: "Right carrier, right message, right time.",
    card: "border-transparent bg-gradient-to-br from-white to-sky-100/80",
    glow: "bg-gradient-to-br from-sky-500/18 via-transparent to-transparent",
    iconBg: "bg-sky-500/15 text-sky-600 shadow-card-soft",
    iconColor: "text-sky-600",
  },
  {
    icon: CheckCircleIcon,
    title: "Real-time tracking & visibility",
    body: "Full shipment insight as standard.",
    card: "border-transparent bg-gradient-to-br from-white to-[var(--color-tuco-sky)]/70",
    glow: "bg-gradient-to-br from-[var(--color-tuco-blue)]/16 via-transparent to-transparent",
    iconBg:
      "bg-[var(--color-tuco-blue)]/15 text-[var(--color-tuco-blue)] shadow-card-soft",
    iconColor: "text-[var(--color-tuco-blue)]",
  },
  {
    icon: ArrowPathRoundedSquareIcon,
    title: "Automated billing audits",
    body: "Catch errors before they hit your ledger.",
    card: "border-transparent bg-gradient-to-br from-white to-teal-100/70",
    glow: "bg-gradient-to-br from-teal-500/16 via-transparent to-transparent",
    iconBg: "bg-teal-500/15 text-teal-600 shadow-card-soft",
    iconColor: "text-teal-600",
  },
  {
    icon: ChartBarIcon,
    title: "Performance analytics",
    body: "Monitor carriers and improve what matters.",
    card: "border-transparent bg-gradient-to-br from-white to-indigo-100/70",
    glow: "bg-gradient-to-br from-indigo-500/16 via-transparent to-transparent",
    iconBg: "bg-indigo-500/15 text-indigo-600 shadow-card-soft",
    iconColor: "text-indigo-600",
  },
];

const metrics = [
  {
    value: "15%",
    title: "Average savings",
    body: "Through renegotiated carrier rates and automation.",
    card: "border-transparent bg-gradient-to-br from-white to-sky-100/80",
    glow: "bg-gradient-to-br from-sky-500/14 via-transparent to-transparent",
    accent: "bg-sky-500/30",
    valueClass: "text-[var(--color-tuco-blue)]",
  },
  {
    value: "20+ hours",
    title: "Saved per week",
    body: "Removing manual tasks across operations, finance, and customer teams.",
    card: "border-transparent bg-gradient-to-br from-white to-teal-100/80",
    glow: "bg-gradient-to-br from-teal-500/14 via-transparent to-transparent",
    accent: "bg-teal-500/30",
    valueClass: "text-teal-600",
  },
  {
    value: "Up to 40%",
    title: "Fewer support calls",
    body: "Proactive branded notifications keep customers informed.",
    card: "border-transparent bg-gradient-to-br from-white to-indigo-100/80",
    glow: "bg-gradient-to-br from-indigo-500/14 via-transparent to-transparent",
    accent: "bg-indigo-500/30",
    valueClass: "text-indigo-600",
  },
];
</script>
