<template>
  <section class="bg-[#38a2ca] py-20 text-white">
    <div
      class="container mx-auto grid gap-12 px-4 lg:grid-cols-[1fr_1.05fr] lg:items-center"
    >
      <div class="space-y-8">
        <p
          class="text-sm font-semibold uppercase tracking-[0.35em] text-[#0c233f]"
        >
          Customer stories
        </p>
        <h2 class="text-3xl font-semibold text-white md:text-4xl">
          Real outcomes delivered by TUCO
        </h2>
        <p class="text-lg text-white/80">
          TUCO partners with operations, finance, commercial, and customer
          service teams to reduce workload, lift performance, and keep freight
          programs running smoothly. Clients see clearer communication, fewer
          exceptions, and more reliable delivery outcomes.
        </p>
      </div>

      <div
        class="relative"
        @mouseenter="stopTestimonialTimer"
        @mouseleave="startTestimonialTimer"
      >
        <div
          class="pointer-events-none absolute -inset-1 rounded-[var(--corner-radius-lg)] bg-sky-500/40 blur-3xl"
        ></div>
        <div
          class="relative overflow-hidden rounded-[var(--corner-radius-md)] bg-white text-[var(--color-tuco-ink)] shadow-card-soft"
        >
          <transition name="fade-slide" mode="out-in">
            <div
              :key="activeTestimonial"
              class="flex flex-col gap-8 p-8 md:p-10"
            >
              <div class="flex items-center gap-4">
                <div
                  class="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sky-100 text-sky-500"
                >
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M7.17 4A5.17 5.17 0 002 9.17V20h9v-9.17A5.17 5.17 0 007.17 4zm11 0A5.17 5.17 0 0013 9.17V20h9v-9.17A5.17 5.17 0 0018.17 4z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    class="text-sm font-bold uppercase tracking-[0.3em] text-[#62bda5]-800"
                  >
                    {{ testimonials[activeTestimonial].sector }}
                  </p>
                </div>
              </div>
              <p
                class="text-xl leading-relaxed text-[var(--color-tuco-ink)] min-h-[6.5rem]"
              >
                {{ testimonials[activeTestimonial].quote }}
              </p>
              <div class="text-sm text-[var(--color-tuco-slate)]">
                <p class="font-semibold text-[var(--color-tuco-ink)]">
                  {{ testimonials[activeTestimonial].name }}
                </p>
                <p>{{ testimonials[activeTestimonial].role }}</p>
              </div>
            </div>
          </transition>
        </div>

        <div class="mt-6 flex flex-wrap items-center gap-4">
          <div class="flex items-center gap-2">
            <button
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              @click="prevTestimonial"
              aria-label="Previous testimonial"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              @click="nextTestimonial"
              aria-label="Next testimonial"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center gap-2">
            <button
              v-for="(item, index) in testimonials"
              :key="item.name"
              class="h-2.5 w-2.5 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              :class="
                activeTestimonial === index
                  ? 'bg-sky-500'
                  : 'bg-white/40 hover:bg-white/70'
              "
              @click="setTestimonial(index)"
              :aria-label="`Show testimonial from ${item.name}`"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
const testimonials = [
  {
    quote:
      "Working with TUCO cut our inbound booking time by half. Their team managed the rollout while keeping our dock moving without disruption.",
    name: "Jess",
    role: "Operations Lead",
    company: "FreightOne Logistics",
    sector: "Operations & Logistics",
  },
  {
    quote:
      "With TUCO, we finally have one cost view across all carriers. Finance now closes the month two days faster with fewer surprises.",
    name: "Daniel",
    role: "Commercial Manager",
    company: "Entwine Foods",
    sector: "Finance & Commercial",
  },
  {
    quote:
      "TUCO’s exception management means customers hear from us before issues escalate. Support calls dropped 43% in the first quarter.",
    name: "Aisha",
    role: "Head of Customer Service",
    company: "Swift Parcel Co.",
    sector: "Customer Service",
  },
  {
    quote:
      "Daily TUCO summaries give us a clean view of every shipment before we talk to customers. It has improved confidence across our whole team.",
    name: "Lauren",
    role: "Operations Manager",
    company: "Harbour & Co.",
    sector: "Operations & Logistics",
  },

  {
    quote:
      "TUCO streamlined our entire carrier network. DIFOT improved in the first month and the team finally has proactive visibility.",
    name: "Evan",
    role: "Supply Chain Manager",
    company: "Beacon Manufacturing",
    sector: "Operations & Logistics",
  },
  {
    quote:
      "The TUCO team feels like an extension of ours. Their monthly and quarterly reviews make decisions faster and far more data-driven.",
    name: "Sofia",
    role: "National Logistics Manager",
    company: "Prime Essentials",
    sector: "Account Management",
  },
  {
    quote:
      "TUCO reduced manual workload across finance and ops more than expected. We spend more time on value-adding tasks and less time fixing errors.",
    name: "Tara",
    role: "Finance & Ops Lead",
    company: "Oakridge Retail",
    sector: "Finance & Commercial",
  },
  {
    quote:
      "Carrier governance used to be reactive. With TUCO, we now get structured performance reviews and clear actions every month.",
    name: "James",
    role: "National Carrier Manager",
    company: "Northline Foods",
    sector: "Account Management",
  },

  {
    quote:
      "TUCO helped us centralise bookings, tracking and reporting. Our teams finally have one source of truth and less noise across the workflow.",
    name: "Maya",
    role: "Head of Fulfilment",
    company: "Atlas Direct",
    sector: "Technology",
  },
  {
    quote:
      "Integrating our systems with TUCO's platform simplified everything. We now have cleaner data, faster reporting and far fewer manual steps.",
    name: "Leo",
    role: "Systems Analyst",
    company: "Urban Freight Co.",
    sector: "Technology",
  },
];

const activeTestimonial = ref(0);
let testimonialTimer: number | null = null;

function advanceTestimonial(step: number) {
  const total = testimonials.length;
  if (!total) return;
  activeTestimonial.value = (activeTestimonial.value + step + total) % total;
}

function nextTestimonial() {
  advanceTestimonial(1);
  restartTestimonialTimer();
}

function prevTestimonial() {
  advanceTestimonial(-1);
  restartTestimonialTimer();
}

function setTestimonial(index: number) {
  if (index < 0 || index >= testimonials.length) return;
  activeTestimonial.value = index;
  restartTestimonialTimer();
}

function startTestimonialTimer() {
  if (testimonialTimer !== null || testimonials.length <= 1) return;
  testimonialTimer = window.setInterval(() => advanceTestimonial(1), 6000);
}

function stopTestimonialTimer() {
  if (testimonialTimer !== null) {
    window.clearInterval(testimonialTimer);
    testimonialTimer = null;
  }
}

function restartTestimonialTimer() {
  stopTestimonialTimer();
  startTestimonialTimer();
}

onMounted(() => {
  startTestimonialTimer();
});

onBeforeUnmount(() => {
  stopTestimonialTimer();
});
</script>
