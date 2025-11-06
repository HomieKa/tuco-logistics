<template>
  <section class="bg-white py-40">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-4xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500"
        >
          Technology
        </p>
        <h2 class="mt-3 text-3xl font-semibold text-navy-500 md:text-4xl">
          The Technology essentials
        </h2>
        <p class="mt-4 text-base text-slate-600">
          A fast glance at the pillars on our technology: orchestrated quoting,
          connected execution, proactive exception control, and analytics that
          keep every stakeholder aligned.
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="highlight in freightmateHighlights"
          :key="highlight.title"
          class="tuco-card flex h-full flex-col gap-4 p-6 md:p-7"
        >
          <span
            class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-500"
          >
            <component :is="highlight.icon" class="h-6 w-6" />
          </span>
          <div class="space-y-2">
            <h3 class="text-lg font-semibold text-navy-500">
              {{ highlight.title }}
            </h3>
            <p class="text-sm text-slate-600">{{ highlight.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArrowPathIcon,
  BoltIcon,
  ChartBarIcon,
  ServerStackIcon,
} from "@heroicons/vue/24/outline";

const freightmateHighlights = [
  {
    title: "Quote and compare in seconds",
    description:
      "Centralise every contracted carrier so teams price, select, and confirm the best option with confidence.",
    icon: ArrowPathIcon,
  },
  {
    title: "Connected execution",
    description:
      "Bookings, manifests, labels, and dock instructions stay in sync from pickup to final delivery.",
    icon: BoltIcon,
  },
  {
    title: "Proactive exception control",
    description:
      "Live dashboards surface SLA risks and prompt the right responder before customers start chasing updates.",
    icon: ChartBarIcon,
  },
  {
    title: "Analytics and integrations",
    description:
      "Dashboards, exports, and APIs keep ERP, WMS, ecommerce, and BI tools aligned automatically.",
    icon: ServerStackIcon,
  },
];
</script>
