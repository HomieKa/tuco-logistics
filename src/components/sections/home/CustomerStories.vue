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
          Freightmate outcomes from teams like yours
        </h2>
        <p class="text-lg text-white/80">
          TUCO keeps operations, finance, commercial, and customer teams
          aligned. Real people see real results, from smoother bookings to
          on-time deliveries and happier customers.
        </p>
      </div>

      <div
        class="relative"
        @mouseenter="stopTestimonialTimer"
        @mouseleave="startTestimonialTimer"
      >
        <div
          class="pointer-events-none absolute -inset-1 rounded-[2.4rem] bg-sky-500/40 blur-3xl"
        ></div>
        <div
          class="relative overflow-hidden rounded-[2rem] bg-white text-[var(--color-tuco-ink)] shadow-card-soft"
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
                  <p class="text-sm text-[var(--color-tuco-slate)]">
                    {{ testimonials[activeTestimonial].company }}
                  </p>
                </div>
              </div>
              <p class="text-xl leading-relaxed text-[var(--color-tuco-ink)]">
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
      "Freightmate cut our inbound booking time by 52%. TUCO's rollout kept our dock moving while we switched everything over.",
    name: "Jess Collins",
    role: "Operations Lead, National Forwarder",
    company: "FreightOne Logistics",
    sector: "Logistics",
  },
  {
    quote:
      "We finally have one landed cost view across customers. Finance closes the month two days faster with zero CSV exports.",
    name: "Khai Tran",
    role: "Commercial Manager, FMCG",
    company: "Entwine Foods",
    sector: "Finance & Commercial",
  },
  {
    quote:
      "Exception alerts mean customers hear from us before an issue escalates. Support calls dropped 43% in the first quarter.",
    name: "Aisha Rahman",
    role: "Head of Customer Service",
    company: "Swift Parcel Co.",
    sector: "Customer Experience",
  },
  {
    quote:
      "Live SLA dashboards show where to focus each morning. Compliance checks that used to take hours now happen in minutes.",
    name: "Michael Lee",
    role: "Finance Director",
    company: "Apex Industrial",
    sector: "Performance & Compliance",
  },
  {
    quote:
      "Weekly network pulse reports now auto-send to leadership. We walk into reviews with the answers ready.",
    name: "Lauren Fisher",
    role: "Chief Operating Officer",
    company: "Harbour & Co.",
    sector: "Executive Leadership",
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
