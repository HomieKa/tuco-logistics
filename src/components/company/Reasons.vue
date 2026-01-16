<template>
  <section class="bg-white py-14 md:py-20">
    <div class="mx-auto max-w-6xl px-6">
      <p
        class="text-center text-xs font-semibold tracking-[0.2em] text-[var(--color-tuco-blue)]"
      >
        REASONS
      </p>
      <h2
        class="mt-2 text-center text-4xl font-semibold text-[var(--color-tuco-navy)] md:text-5xl"
      >
        The reasons why companies partner with TUCO
      </h2>
      <p class="mt-3 text-center text-[var(--color-tuco-slate)]">
        Logistics is more than a service—it’s a collaborative journey driving
        real growth.
      </p>

      <ul class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li
          v-for="reason in reasons"
          :key="reason.title"
          tabindex="0"
          class="rounded-[var(--corner-radius-lg)] bg-white/80 px-6 py-5 text-left shadow-lg/5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tuco-blue)]"
        >
          <span
            class="mb-3 inline-flex h-1 w-12 rounded-full bg-gradient-to-r from-sky-200 via-emerald-200 to-indigo-200"
            aria-hidden="true"
          />
          <h3 class="text-lg font-semibold text-[var(--color-tuco-navy)]">
            {{ reason.title }}
          </h3>
          <p class="mt-1 text-sm text-[var(--color-tuco-slate)]">
            {{ reason.sub }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const reasons = [
  {
    title: "Increase on-time deliveries & improve DIFOT",
    sub: "Real-time visibility with right-fit carriers lifts reliability and satisfaction.",
  },
  {
    title: "Focus on what you do best",
    sub: "Clients reclaim valuable time to focus on strategic growth.",
  },
  {
    title: "Increase in customer satisfaction",
    sub: "Proactive monitoring and fast resolution keep you ahead of expectations.",
  },
  {
    title: "Enhance operational efficiencies",
    sub: "50+ clients have integrated TUCO with ERP/WMS for streamlined operations.",
  },
  {
    title: "Achieve annual cost savings",
    sub: "Smarter analysis and carrier selection deliver meaningful savings.",
  },
  {
    title: "Make data-driven decisions",
    sub: "Freightmate provides real-time analytics to optimise operations and reduce freight costs.",
  },
  {
    title: "Fix billing leakage",
    sub: "We analyse, match, and interrogate carrier invoices for accuracy and transparency.",
  },
  {
    title: "Automated customer notifications reduce calls",
    sub: "Proactive updates lower support volume and keep customers informed.",
  },
  {
    title: "Streamline your booking process",
    sub: "The right carrier is selected 100% of the time.",
  },
];
</script>
