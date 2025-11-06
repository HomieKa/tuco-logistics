<template>
  <div>
    <PageHeader
      title="Let's talk about your logistics"
      description="No obligation. No pressure. Just smart solutions tailored to your network."
    >
      <template #eyebrow>Contact</template>
    </PageHeader>

    <section class="bg-[#f3f5fb] white py-16">
      <div
        class="container mx-auto grid gap-12 px-4 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div class="rounded-2xl bg-white p-8 shadow-xl">
          <ContactForm />
        </div>
        <div
          class="flex h-full flex-col gap-8 rounded-2xl bg-gradient-to-br from-[#e9f6f2] via-[#eef7fb] to-[#dff1ef] p-8 shadow-xl"
        >
          <div class="space-y-4">
            <p
              class="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
            >
              Contact
            </p>
            <h3 class="text-2xl font-bold text-navy-500">
              Talk with TUCO specialists
            </h3>
            <p class="text-[var(--color-tuco-slate)]">
              Share your freight goals and our commercial team will line up the
              right experts for a tailored walkthrough.
            </p>
          </div>

          <div class="space-y-6 text-gray-700">
            <div
              class="flex items-center gap-4 rounded-2xl bg-white/80 p-4 shadow-card-soft"
            >
              <span
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-tuco-sky)]/40 text-[var(--color-tuco-blue)]"
              >
                <PhoneIcon class="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <span class="sr-only">Phone</span>
                <a
                  href="tel:1300853074"
                  class="block text-2xl font-bold text-navy-500 transition hover:text-teal-600"
                  >1300 853 074</a
                >
              </div>
            </div>
            <div
              class="flex items-center gap-4 rounded-2xl bg-white/80 p-4 shadow-card-soft"
            >
              <span
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-tuco-sky)]/40 text-[var(--color-tuco-blue)]"
              >
                <EnvelopeIcon class="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <span class="sr-only">Email</span>
                <a
                  href="mailto:sales@tuco.com.au"
                  class="block text-lg text-navy-500 transition hover:text-teal-600"
                  >sales@tuco.com.au</a
                >
              </div>
            </div>
          </div>

          <div
            class="flex flex-col gap-4 rounded-2xl bg-white/80 p-5 shadow-card-soft"
          >
            <div class="flex items-center gap-3 text-navy-500">
              <ClockIcon class="h-5 w-5" aria-hidden="true" />
              <div>
                <p
                  class="text-sm font-semibold uppercase tracking-wide text-[var(--color-tuco-blue)]"
                >
                  Office hours
                </p>
                <p class="text-sm text-[var(--color-tuco-slate)]">
                  Mon-Fri, 8:30 AM - 5:30 PM (AEST)
                </p>
              </div>
            </div>
            <div class="flex items-center gap-3 text-navy-500">
              <PaperAirplaneIcon class="h-5 w-5 rotate-6" aria-hidden="true" />
              <div>
                <p
                  class="text-sm font-semibold uppercase tracking-wide text-[var(--color-tuco-blue)]"
                >
                  Response time
                </p>
                <p class="text-sm text-[var(--color-tuco-slate)]">
                  We aim to respond within one business day.
                </p>
              </div>
            </div>
          </div>

          <div class="mt-auto space-y-4 border-t border-white/50 pt-6">
            <p
              class="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-tuco-blue)]"
            >
              Connect
            </p>
            <div class="flex items-center gap-4">
              <a
                href="https://au.linkedin.com/company/tuco-freight-services"
                target="_blank"
                rel="noopener"
                class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-500 shadow-card-soft transition hover:-translate-y-1 hover:text-teal-500"
                aria-label="LinkedIn"
              >
                <svg
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
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
                class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-500 shadow-card-soft transition hover:-translate-y-1 hover:text-teal-500"
                aria-label="Facebook"
              >
                <svg
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
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
            class="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-tuco-line)] bg-white shadow-card-soft"
          >
            <div class="aspect-video bg-gray-200">
              <div
                class="flex h-full items-center justify-center text-gray-500"
              >
                Map placeholder - Mulgrave
              </div>
            </div>
            <div class="flex flex-1 flex-col gap-2 p-6">
              <h3 class="text-lg font-semibold text-navy-500">
                Mulgrave, Victoria
              </h3>
              <p class="text-sm text-gray-600">Head Office</p>
              <div class="mt-4">
                <Button variant="outline-sky" size="md">View Map</Button>
              </div>
            </div>
          </article>
          <article
            class="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-tuco-line)] bg-white shadow-card-soft"
          >
            <div class="aspect-video bg-gray-200">
              <div
                class="flex h-full items-center justify-center text-gray-500"
              >
                Map placeholder - Brisbane
              </div>
            </div>
            <div class="flex flex-1 flex-col gap-2 p-6">
              <h3 class="text-lg font-semibold text-navy-500">
                Brisbane, Queensland
              </h3>
              <p class="text-sm text-gray-600">Service Hub</p>
              <div class="mt-4">
                <Button variant="outline-sky" size="md">View Map</Button>
              </div>
            </div>
          </article>
          <article
            class="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-tuco-line)] bg-white shadow-card-soft"
          >
            <div class="aspect-video bg-gray-200">
              <div
                class="flex h-full items-center justify-center text-gray-500"
              >
                Map placeholder - Sydney
              </div>
            </div>
            <div class="flex flex-1 flex-col gap-2 p-6">
              <h3 class="text-lg font-semibold text-navy-500">
                Sydney, New South Wales
              </h3>
              <p class="text-sm text-gray-600">Service Hub</p>
              <div class="mt-4">
                <Button variant="outline-sky" size="md">View Map</Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import PageHeader from "@/components/ui/PageHeader.vue";
import ContactForm from "@/components/ui/ContactForm.vue";
import { useSEO } from "@/composables/useSEO";
import {
  ClockIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline";

useSEO({
  title: "Contact Us - TUCO Logistics",
  description:
    "Talk with TUCO specialists about freight management, technology, and strategic optimisation.",
});
</script>
