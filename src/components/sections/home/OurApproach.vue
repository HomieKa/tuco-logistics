<template>
  <section class="bg-[#f7f9fd] py-20">
    <div class="container mx-auto px-6">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Title Card -->
        <article class="md:col-span-2 lg:col-span-1 flex flex-col justify-center gap-6">
          <div class="mb-12 space-y-4">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-sky-500">
              Our Approach
            </p>
            <h2 class="text-2xl font-semibold leading-tight text-[#0a1d35] lg:text-3xl">
              End-to-end logistics partnerships, built around you
            </h2>
            <p class="text-sm leading-relaxed text-slate-600">
              TUCO blends smart systems with human problem-solvers so every team
              across your business feels the impact from Operations, Finance and
              Customer Experience.
            </p>
          </div>
        </article>

        <!-- Feature Cards -->
        <article
          v-for="feature in features"
          :key="feature.title"
          class="group flex flex-col gap-4 rounded-2xl bg-white p-8 transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div v-if="feature.image" class="overflow-hidden rounded-xl">
            <img
              :src="feature.image"
              :alt="feature.title"
              class="h-40 w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
          <div class="flex flex-1 flex-col justify-start gap-2">
            <h3 class="text-lg font-semibold leading-tight text-[#0a1d35]">
              {{ feature.title }}
            </h3>
            <p class="text-sm leading-relaxed text-slate-600">
              {{ feature.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// You'll need to replace these with actual images
// For now, keeping the SVG imports as placeholders
import carrierImage from "@/assets/images/approach-carrier.svg";
import financeImage from "@/assets/images/approach-finance.svg";
import serviceImage from "@/assets/images/approach-service.svg";
import strategyImage from "@/assets/images/approach-strategy.svg";
import technologyImage from "@/assets/images/approach-technology.svg";

const features = [
  {
    title: "Freightmate technology",
    description:
      "Real-time tracking, automated routing, and integration connectors keep every freight decision informed.",
    image: technologyImage,
  },
  {
    title: "Customer service & account management",
    description:
      "Australian support teams watch your network, escalate fast, and close the loop with every stakeholder.",
    image: serviceImage,
  },
  {
    title: "Carrier management",
    description:
      "We source, onboard, and govern a national carrier panel so your freight stays compliant and on time.",
    image: carrierImage,
  },
  {
    title: "Finance & reconciliation",
    description:
      "Consolidated invoices, audit-ready billing, and clear cost breakdowns keep finance teams confident.",
    image: financeImage,
  },
  {
    title: "Commercial strategy cadence",
    description:
      "Quarterly reviews surface savings opportunities, DIFOT insights, and initiatives that align freight to growth targets.",
    image: strategyImage,
  },
];
</script>