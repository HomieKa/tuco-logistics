<template>
  <section id="network-industries" class="bg-[#e9f5f7] py-14 md:py-18">
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 space-y-10">
      <div class="rounded-lg bg-white/80 p-6 shadow-sm">
        <p
          class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-tuco-blue)]"
        >
          Our Network & Industries
        </p>
        <div
          class="mt-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h2
              class="text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
            >
              Our Network & Industries
            </h2>
            <p
              class="mt-2 max-w-3xl text-sm text-[var(--color-tuco-slate)] leading-relaxed md:text-base"
            >
              Multi-modal partnerships and sector expertise ensure your freight
              fits right, every time.
            </p>
          </div>
          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-2 rounded-md bg-[#62bda5] px-4 py-2 text-sm font-semibold text-[#0c233f] shadow-sm transition hover:-translate-y-[2px] hover:shadow-md/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0c233f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Talk to us about your industry
          </RouterLink>
        </div>
      </div>

      <div class="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div class="space-y-4">
          <p
            class="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
          >
            Managed partners
          </p>
          <h3 class="text-2xl font-semibold text-[var(--color-tuco-navy)]">
            Managed partners
          </h3>
          <p
            class="text-sm text-[var(--color-tuco-slate)] leading-relaxed md:text-base"
          >
            Our network spans road, rail, air, and sea, with specialist partners
            for complex movements.
          </p>
          <div class="relative">
            <div class="flex items-center justify-between pb-3">
              <button
                type="button"
                class="rounded-full border border-[var(--color-tuco-line)] bg-white p-2 shadow-sm transition hover:-translate-y-[1px]"
                @click="scrollLogos(-1)"
                aria-label="Scroll logos left"
              >
                &larr;
              </button>
              <button
                type="button"
                class="rounded-full border border-[var(--color-tuco-line)] bg-white p-2 shadow-sm transition hover:-translate-y-[1px]"
                @click="scrollLogos(1)"
                aria-label="Scroll logos right"
              >
                &rarr;
              </button>
            </div>
            <div
              ref="logoTrack"
              class="flex gap-4 overflow-x-auto scroll-smooth px-1 py-2"
              style="scroll-snap-type: x mandatory"
            >
              <div
                v-for="carrier in partners"
                :key="carrier.name"
                class="flex h-16 w-44 flex-none items-center justify-center rounded-md bg-white px-4 py-2 shadow-sm transition hover:-translate-y-[2px]"
                style="scroll-snap-align: start"
              >
                <img
                  v-if="!isLogoBroken(carrier.logo)"
                  :src="carrier.logo"
                  :alt="`${carrier.name} logo`"
                  class="mx-auto h-auto max-h-12 w-full object-contain"
                  @error="handleCarrierError(carrier.logo)"
                />
                <span
                  v-else
                  class="text-xs font-semibold text-[var(--color-tuco-slate)]"
                >
                  {{ carrier.name }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <p
            class="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
          >
            Industries we support
          </p>
          <h3 class="text-2xl font-semibold text-[var(--color-tuco-navy)]">
            Industries we support
          </h3>
          <p
            class="text-sm text-[var(--color-tuco-slate)] leading-relaxed md:text-base"
          >
            Tailored freight programs for manufacturing, retail, healthcare, and
            more, built to meet the exact service promises your customers
            expect.
          </p>
          <div class="grid gap-3 sm:grid-cols-2">
            <article
              v-for="industry in industries"
              :key="industry.title"
              class="flex items-start gap-3 rounded-md bg-white p-4 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md/20"
            >
              <div
                class="flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f5f7]"
              >
                <img
                  :src="industry.image"
                  :alt="industry.imageAlt"
                  class="h-10 w-10 object-contain"
                />
              </div>
              <div class="space-y-1 text-sm">
                <h4 class="font-semibold text-[var(--color-tuco-navy)]">
                  {{ industry.title }}
                </h4>
                <p class="text-[var(--color-tuco-slate)] leading-relaxed">
                  {{ industry.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

interface Partner {
  name: string;
  logo: string;
}

interface Industry {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
}

const props = defineProps<{
  partners: Partner[];
  industries: Industry[];
  brokenLogos: Set<string>;
}>();

const logoTrack = ref<HTMLDivElement | null>(null);

function scrollLogos(direction: -1 | 1) {
  const track = logoTrack.value;
  if (!track) return;
  const width = track.clientWidth ?? 0;
  track.scrollBy({ left: direction * width * 0.8, behavior: "smooth" });
}

function isLogoBroken(logo: string) {
  return props.brokenLogos.has(logo);
}

function handleCarrierError(logo: string) {
  // swallow errors here since main page tracks broken logos
  if (!props.brokenLogos.has(logo)) {
    props.brokenLogos.add(logo);
  }
}
</script>
