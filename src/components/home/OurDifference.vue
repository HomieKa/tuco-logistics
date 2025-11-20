<template>
  <section class="bg-[#f7f9fd] py-20">
    <div class="container mx-auto px-6 text-center">
      <p
        class="text-sm font-semibold uppercase tracking-[0.3em] text-[#38a2ca]"
      >
        Our Difference
      </p>
      <h2 class="mt-4 text-3xl font-semibold text-[#0c233f] md:text-4xl">
        Experience the TUCO difference
      </h2>
      <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:gap-10">
        <article
          v-for="(card, index) in differenceCards"
          :key="card.title"
          class="flex items-start gap-4 pillar-animate"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e9f5f7]"
          >
            <img
              :src="card.image"
              :alt="card.title"
              class="h-8 w-8 object-contain"
              loading="lazy"
            />
          </div>
          <div class="text-left">
            <h3 class="text-base font-semibold text-[#0c233f]">
              {{ card.title }}
            </h3>
            <p class="mt-1 text-sm leading-relaxed text-[#64748b]">
              {{ card.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import supportImage from "@/assets/images/our_difference/carrier.svg";
import automationImage from "@/assets/images/our_difference/finance.svg";
import trustImage from "@/assets/images/our_difference/service.svg";
import strategyImage from "@/assets/images/our_difference/strategy.svg";

const differenceCards = [
  {
    title: "Strategic partnerships",
    description:
      "Structured reviews, DIFOT focus, and commercial guidance keep your logistics program aligned with growth at every stage.",
    image: strategyImage,
  },
  {
    title: "Australian experts on call",
    description:
      "Local TUCO specialists support operations, finance, and customer teams with fast, proactive communication and rapid resolution.",
    image: supportImage,
  },
  {
    title: "Automation that sticks",
    description:
      "Freightmate automation, analytics, and invoice reconciliation remove manual work so your teams can focus on higher-impact tasks.",
    image: automationImage,
  },
  {
    title: "Governance you can trust",
    description:
      "Carrier compliance, safety oversight, and transparent billing frameworks give stakeholders confidence in every movement.",
    image: trustImage,
  },
];
</script>

<style scoped>
@keyframes pillarFadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pillar-animate {
  animation: pillarFadeIn 0.5s ease-out both;
}
</style>
