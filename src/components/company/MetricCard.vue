<template>
  <div
    class="group relative overflow-hidden rounded-3xl border border-[#e9f5f7] bg-white p-7 shadow-card-soft transition duration-200 hover:-translate-y-1 hover:shadow-card-lg"
  >
    <div
      class="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100"
      :class="glow"
    />
    <div class="relative space-y-2">
      <p :class="['text-3xl font-semibold tracking-tight', valueClass]">
        {{ value }}
      </p>
      <p class="text-base font-semibold text-[var(--color-tuco-navy)]">
        {{ title }}
      </p>
      <p class="text-sm text-[var(--color-tuco-slate)]">{{ body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    value: string;
    title: string;
    body: string;
    valueClass?: string;
    glow?: string;
  }>(),
  {
    valueClass: "text-[var(--color-tuco-blue)]",
    glow: "bg-gradient-to-br from-[#e9f5f7] via-transparent to-transparent",
  },
);
</script>
