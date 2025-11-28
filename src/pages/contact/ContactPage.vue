<template>
  <div>
    <section class="bg-[#f8f9f9] py-12 md:py-16" aria-labelledby="contact-hero">
      <div class="mx-auto max-w-7xl space-y-6 px-4 md:px-6 lg:px-8">
        <p
          class="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]"
        >
          Contact
        </p>
        <h1
          id="contact-hero"
          class="text-4xl font-semibold text-[var(--color-tuco-navy)] md:text-5xl"
        >
          Let's talk about your logistics
        </h1>
        <p
          class="max-w-3xl text-base leading-relaxed text-[var(--color-tuco-slate)] md:text-lg"
        >
          No obligation. No pressure. Just smart solutions tailored to your
          network.
        </p>
      </div>
    </section>

    <section class="bg-[#f3f5fb] white py-16">
      <div
        class="container mx-auto grid gap-12 px-4 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div
          class="relative h-full min-h-[700px] overflow-hidden [perspective:1200px]"
        >
          <div
            :class="[
              'relative h-full transition duration-700 [transform-style:preserve-3d]',
              submitted ? '[transform:rotateY(180deg)]' : '',
            ]"
          >
            <div
              class="absolute inset-0 flex flex-col rounded-[1.5rem] border border-[#e9f5f7] bg-white p-8 md:p-10 [backface-visibility:hidden]"
            >
              <div class="space-y-4">
                <h3 class="text-2xl font-bold text-navy-500">
                  Share your details and we'll line up the right specialists.
                </h3>
                <p class="text-[var(--color-tuco-slate)] leading-relaxed">
                  Tell us about your freight goals, carrier mix, and systems.
                  We'll reach out with a tailored walkthrough.
                </p>
              </div>
              <div class="mt-6">
                <ContactForm
                  @submitted="handleSubmitted"
                  @error="handleError"
                />
                <p
                  v-if="submitState === 'error'"
                  class="mt-3 text-sm font-semibold text-red-600"
                >
                  Something went wrong sending your enquiry. Please try again.
                </p>
              </div>
            </div>

            <div
              class="absolute inset-0 flex h-full flex-col justify-center rounded-[1.5rem] border border-[#e9f5f7] bg-[#0c233f] p-8 text-left text-white shadow-[0_22px_50px_rgba(12,35,63,0.18)] md:p-10 [backface-visibility:hidden] [transform:rotateY(180deg)]"
              aria-live="polite"
            >
              <div class="space-y-4">
                <p
                  class="text-sm font-semibold uppercase tracking-[0.28em] text-[#62bda5]"
                >
                  Enquiry received
                </p>
                <h3 class="text-2xl font-bold md:text-3xl text-[#62bda5]">
                  Thanks - your details are on their way.
                </h3>
                <p class="text-white/85 leading-relaxed">
                  We'll review your enquiry and aim to respond within one
                  business day. If it's urgent, call us on 1300 853 074.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex h-full flex-col gap-6 rounded-[0.75rem] border border-[#e2e8f0] bg-[#f9f9f9] p-8 shadow-[0_12px_30px_rgba(12,35,63,0.08)]"
        >
          <div class="space-y-2">
            <p
              class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#38a2ca]"
            >
              Contact
            </p>
            <h3 class="text-2xl font-bold text-[#0c233f]">
              Talk with TUCO specialists
            </h3>
            <p class="text-[var(--color-tuco-slate)] leading-relaxed">
              Share your freight goals and our commercial team will line up the
              right experts for a tailored walkthrough.
            </p>
          </div>

          <div class="space-y-4">
            <div
              class="flex items-center gap-4 rounded-[0.875rem] bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
            >
              <span
                class="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9f5f7] text-[#38a2ca]"
                aria-hidden="true"
              >
                <PhoneIcon class="h-5 w-5" />
              </span>
              <a
                href="tel:1300853074"
                class="text-xl font-bold text-[#0c233f] transition hover:text-[#38a2ca]"
              >
                1300 853 074
              </a>
            </div>
            <div
              class="flex items-center gap-4 rounded-[0.875rem] bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
            >
              <span
                class="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9f5f7] text-[#62bda5]"
                aria-hidden="true"
              >
                <EnvelopeIcon class="h-5 w-5" />
              </span>
              <a
                href="mailto:sales@tuco.com.au"
                class="text-xl font-bold text-[#0c233f] transition hover:text-[#38a2ca]"
              >
                sales@tuco.com.au
              </a>
            </div>
          </div>

          <div class="space-y-4 border-t border-[#e2e8f0] pt-4">
            <div class="flex items-center gap-4">
              <span
                class="flex h-9 w-9 items-center justify-center rounded-full bg-[#e9f5f7] text-[#38a2ca]"
                aria-hidden="true"
              >
                <ClockIcon class="h-5 w-5" />
              </span>
              <div class="text-sm leading-relaxed text-[#0c233f]/80">
                <p class="font-semibold text-[#0c233f]">Office hours</p>
                <p>Mon-Fri, 8:30 AM - 5:30 PM (AEST)</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span
                class="flex h-9 w-9 items-center justify-center rounded-full bg-[#e9f5f7] text-[#62bda5]"
                aria-hidden="true"
              >
                <PaperAirplaneIcon class="h-5 w-5 rotate-6" />
              </span>
              <div class="text-sm leading-relaxed text-[#0c233f]/80">
                <p class="font-semibold text-[#0c233f]">Response time</p>
                <p>We aim to respond within one business day.</p>
              </div>
            </div>
          </div>

          <div class="space-y-3 border-t border-[#e2e8f0] pt-5">
            <p
              class="text-xs font-semibold uppercase tracking-[0.24em] text-[#38a2ca]"
            >
              Connect
            </p>
            <div class="flex items-center gap-4">
              <a
                href="https://au.linkedin.com/company/tuco-freight-services"
                target="_blank"
                rel="noopener"
                class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#62bda5] shadow-card-soft transition hover:-translate-y-1 hover:bg-[#e9f5f7]"
                aria-label="LinkedIn"
              >
                <svg
                  class="h-6 w-6"
                  fill="#0a1d35"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                >
                  <path
                    d="M19 0h-14C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zm-11 19H5V8.982h3V19zM6.5 7.579c-.966 0-1.75-.798-1.75-1.783S5.534 4.013 6.5 4.013s1.75.798 1.75 1.783-.784 1.783-1.75 1.783zM20 19h-3v-5.458c0-1.302-.024-2.976-1.813-2.976-1.815 0-2.093 1.418-2.093 2.882V19h-3V8.982h2.879v1.379h.04c.401-.759 1.379-1.559 2.838-1.559 3.034 0 3.6 2.002 3.6 4.607V19z"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/tucofreightmanagement/"
                target="_blank"
                rel="noopener"
                class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#62bda5] shadow-card-soft transition hover:-translate-y-1 hover:bg-[#e9f5f7]"
                aria-label="Facebook"
              >
                <svg
                  class="h-6 w-6"
                  fill="#0a1d35"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                >
                  <path
                    d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.795.142v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f7f9fd]/10 py-16">
      <div class="container mx-auto space-y-10 px-4">
        <div class="max-w-3xl">
          <p
            class="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
          >
            Locations
          </p>
          <h2
            class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
          >
            Australia-wide coverage
          </h2>
          <p class="mt-3 text-[var(--color-tuco-slate)]">
            TUCO operates out of Melbourne, Brisbane, and Sydney to keep your
            national freight program running smoothly.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="location in locations"
            :key="location.city"
            class="flex h-full flex-col overflow-hidden rounded-[1rem] border border-[var(--color-tuco-line)] bg-white shadow-card-soft"
          >
            <img
              :src="location.image"
              :alt="location.alt"
              class="h-48 w-full object-cover"
              loading="lazy"
            />
            <div class="flex flex-1 flex-col gap-2 p-6">
              <h3 class="text-lg font-semibold text-navy-500">
                {{ location.city }}
              </h3>
              <p class="text-sm text-gray-600">{{ location.role }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ContactForm from "@/components/ui/ContactForm.vue";
import melbournePhoto from "@/assets/images/contact_us/melbourne.webp";
import sydneyPhoto from "@/assets/images/contact_us/sydney.webp";
import brisbanePhoto from "@/assets/images/contact_us/brisbane.webp";
import { useSEO } from "@/composables/useSEO";
import {
  ClockIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";

useSEO({
  title: "Contact Us - TUCO Logistics",
  description:
    "Talk with TUCO specialists about freight management, technology, and strategic optimisation.",
});

const submitted = ref(false);
const submitState = ref<"idle" | "sent" | "error">("idle");

const handleSubmitted = () => {
  submitted.value = true;
  submitState.value = "sent";
};

const handleError = () => {
  submitState.value = "error";
};

const locations = [
  {
    city: "Melbourne",
    role: "Head Office",
    image: melbournePhoto,
    alt: "Melbourne CBD skyline at dusk",
  },
  {
    city: "Brisbane",
    role: "Service Hub",
    image: brisbanePhoto,
    alt: "Brisbane Story Bridge over the river",
  },
  {
    city: "Sydney",
    role: "Service Hub",
    image: sydneyPhoto,
    alt: "Sydney Opera House and Harbour Bridge",
  },
];
</script>
