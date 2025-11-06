<template>
  <section class="bg-[#0c233f] py-20 text-white">
    <div class="container mx-auto px-4">
      <div class="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div class="space-y-4">
          <p
            class="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300"
          >
            Impact snapshot
          </p>
          <h2
            class="text-3xl font-semibold leading-snug text-white md:text-4xl"
          >
            Trusted logistics execution for Australian commercial teams
          </h2>
        </div>
        <p class="text-base text-slate-100/90">
          TUCO blends deep carrier relationships with the Freightmate control
          tower, delivering measurable outcomes across every shipment, site, and
          stakeholder you manage.
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="metric in metrics"
          :key="metric.label"
          class="group relative overflow-hidden rounded-3xl bg-white/5 p-8 backdrop-blur transition duration-200 hover:-translate-y-1 hover:bg-white/10"
        >
          <span class="absolute left-0 top-8 h-14 w-[3px] bg-sky-400"></span>
          <div class="pl-6">
            <p class="text-4xl font-semibold tracking-tight text-white">
              {{ metric.value }}
            </p>
            <p
              class="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-200"
            >
              {{ metric.label }}
            </p>
            <p class="mt-3 text-sm text-slate-100/80">
              {{ metric.helper }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const metrics = [
  {
    value: "10m+",
    label: "Shipments orchestrated",
    helper: "Road, air, sea and final mile across AU/NZ",
  },
  {
    value: "200+",
    label: "Customers supported",
    helper: "Commercial teams relying on TUCO for freight clarity",
  },
  {
    value: "150+",
    label: "Carrier partners",
    helper: "National, regional and specialist providers curated for you",
  },
  {
    value: "50+",
    label: "Dedicated specialist support",
    helper: "Local experts monitoring performance around the clock",
  },
];
</script>
