<template>
  <section
    v-bind="attrs"
    class="service-panel grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
  >
    <div class="space-y-4">
      <div class="space-y-2">
        <p
          v-if="eyebrow"
          class="text-xs font-semibold uppercase tracking-[0.28em] text-[#38a2ca]"
        >
          {{ eyebrow }}
        </p>
        <h2
          class="text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
        >
          {{ title }}
        </h2>
        <p
          class="text-base text-[var(--color-tuco-slate)] leading-relaxed md:text-lg"
        >
          {{ narrative }}
        </p>
      </div>

      <ul class="space-y-2 text-sm text-[var(--color-tuco-navy)] md:text-base">
        <li
          v-for="item in featureList"
          :key="item"
          class="flex items-start gap-2"
        >
          <span class="brand-bullet mt-2" />
          <span class="leading-relaxed">{{ item }}</span>
        </li>
      </ul>

      <div
        v-if="outcomeList.length"
        class="flex flex-wrap items-center gap-3 rounded-lg bg-[#e9f5f7] px-4 py-3 text-xs font-semibold text-[var(--color-tuco-navy)] shadow-sm"
      >
        <template v-for="(metric, index) in outcomeList" :key="metric">
          <span>{{ metric }}</span>
          <span
            v-if="index !== outcomeList.length - 1"
            class="hidden h-5 w-px bg-[var(--color-tuco-line)] sm:inline-flex"
          />
        </template>
      </div>

      <slot />
    </div>

    <div class="mx-auto flex w-full justify-center">
      <img
        :src="image"
        :alt="imageAlt"
        class="h-full w-full max-w-xl rounded-lg bg-white p-4 shadow-sm"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

interface Props {
  title: string;
  eyebrow?: string;
  narrative: string;
  features?: string[];
  details?: string[];
  outcomes?: string[];
  metrics?: string[];
  image: string;
  imageAlt: string;
}

const props = defineProps<Props>();
const attrs = useAttrs();

const featureList = computed(() => props.details ?? props.features ?? []);
const outcomeList = computed(() => props.outcomes ?? props.metrics ?? []);
</script>

<style scoped>
.brand-bullet {
  background-color: #38a2ca;
  border-radius: 9999px;
  display: inline-flex;
  height: 10px;
  width: 10px;
  flex-shrink: 0;
}
</style>
