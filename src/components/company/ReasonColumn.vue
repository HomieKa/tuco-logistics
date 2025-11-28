<template>
  <article
    class="flex h-full flex-col gap-4 rounded-3xl border border-[#e9f5f7] bg-white p-6 shadow-card-soft"
  >
    <div class="flex items-center gap-2">
      <span
        class="inline-flex h-9 w-9 items-center justify-center rounded-2xl"
        :class="accent"
      >
        <component :is="icon" class="h-5 w-5" />
      </span>
      <h3 class="text-lg font-semibold text-[var(--color-tuco-navy)]">
        {{ title }}
      </h3>
    </div>

    <ul class="space-y-3 text-sm text-[var(--color-tuco-slate)]">
      <li v-for="item in items" :key="item.title" class="flex gap-2">
        <span
          class="mt-1 h-2.5 w-2.5 flex-none rounded-full"
          :class="accentBullet"
          aria-hidden="true"
        />
        <div>
          <p class="font-semibold text-[var(--color-tuco-ink)]">
            {{ item.title }}
          </p>
          <p class="text-[var(--color-tuco-slate)]">{{ item.body }}</p>
        </div>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { SparklesIcon } from "@heroicons/vue/24/outline";
import type { Component } from "vue";

interface ReasonItem {
  title: string;
  body: string;
}

withDefaults(
  defineProps<{
    title: string;
    items: ReasonItem[];
    accent?: string;
    accentBullet?: string;
    icon?: Component;
  }>(),
  {
    accent: "bg-[#e9f5f7] text-[#62bda5]",
    accentBullet: "bg-[#62bda5]",
    icon: SparklesIcon,
  }
);
</script>
