<template>
  <section :class="sectionClasses">
    <div class="container mx-auto px-4">
      <slot name="eyebrow">
        <p
          v-if="eyebrow"
          class="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-500"
        >
          {{ eyebrow }}
        </p>
      </slot>
      <h1 class="text-4xl font-bold text-navy-500 md:text-5xl">
        <slot name="title">{{ title }}</slot>
      </h1>
      <p v-if="description" class="mt-4 max-w-3xl text-lg text-gray-600">
        <slot name="description">{{ description }}</slot>
      </p>
      <div v-if="$slots.actions" class="mt-8 flex flex-wrap gap-4">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  eyebrow: {
    type: String,
    default: "",
  },
  variant: {
    type: String as () => "default" | "alt",
    default: "default",
  },
});

const sectionClasses = computed(() =>
  props.variant === "alt"
    ? "bg-navy-500 py-16 text-white"
    : "bg-gray-50 py-12 text-left",
);
</script>
