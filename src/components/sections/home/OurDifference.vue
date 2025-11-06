<template>
  <section class="bg-white py-40">
    <div class="container mx-auto px-4 text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
        Our Difference
      </p>
      <h2 class="mt-3 text-3xl font-semibold text-navy-500 md:text-4xl">
        Experience the TUCO difference
      </h2>
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="card in differenceCards"
          :key="card.title"
          class="flex flex-col gap-4 rounded-3xl border border-sky-100 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg/20"
        >
          <div class="aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <img
              :src="card.image"
              :alt="card.title"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold text-navy-500">
              {{ card.title }}
            </h3>
            <p class="mt-3 text-sm text-slate-600">{{ card.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import strategyImage from "@/assets/images/our_difference/strategic_partner.jpg";
import supportImage from "@/assets/images/our_difference/australian_expert.jpg";
import automationImage from "@/assets/images/our_difference/automation.jpg";
import trustImage from "@/assets/images/our_difference/governance.jpg";

const differenceCards = [
  {
    title: "Strategic partnerships",
    description:
      "Strategic reviews, DIFOT focus, and commercial guidance keep your logistics program aligned with growth at every stage.",
    image: strategyImage,
  },
  {
    title: "Australian experts on call",
    description:
      "Hands-on TUCO specialists support operations, finance, and customer teams with proactive communication and rapid resolution.",
    image: supportImage,
  },
  {
    title: "Automation that sticks",
    description:
      "Freightmate automation, live analytics, and invoice reconciliation remove manual work so your teams can focus on higher-impact tasks.",
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
