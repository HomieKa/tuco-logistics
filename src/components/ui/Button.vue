<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="handleClick"
  >
    <span v-if="loading" class="mr-2">
      <svg
        class="h-5 w-5 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </span>
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline"
  | "outline-teal"
  | "outline-sky"
  | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";

const props = defineProps({
  variant: {
    type: String as () => ButtonVariant,
    default: "primary",
  },
  size: {
    type: String as () => ButtonSize,
    default: "md",
  },
  to: {
    type: String,
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
  type: {
    type: String,
    default: "button",
  },
  disabled: Boolean,
  loading: Boolean,
});

const emit = defineEmits<{
  (event: "click", value: MouseEvent): void;
}>();

const tag = computed(() => {
  if (props.to) return RouterLink;
  if (props.href) return "a";
  return "button";
});

const buttonClasses = computed(() => {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-tuco-card)] shadow-sm hover:-translate-y-0.5 rounded-[var(--corner-radius)]";

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-navy-500 text-white hover:bg-navy-600 focus:ring-navy-500 shadow-[0_10px_22px_rgba(12,35,63,0.28)] hover:text-white",
    secondary:
      "bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500 shadow-[0_10px_22px_rgba(98,189,165,0.33)]  hover:text-white",
    accent:
      "bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500 shadow-[0_10px_22px_rgba(56,162,202,0.33)]  hover:text-white",
    outline:
      "border-2 border-navy-500 text-navy-500 hover:bg-navy-50 focus:ring-navy-500 shadow-sm ",
    "outline-teal":
      "border-2 border-teal-500 text-teal-500 hover:bg-teal-50 focus:ring-teal-500 shadow-sm ",
    "outline-sky":
      "border-2 border-sky-500 text-sky-500 hover:bg-sky-50 focus:ring-sky-500 shadow-sm",
    ghost: "text-navy-500 hover:bg-gray-100 focus:ring-navy-500 shadow-sm",
  };

  const disabledClass =
    props.disabled || props.loading ? "opacity-50 cursor-not-allowed" : "";

  return `${base} ${sizes[props.size]} ${variants[props.variant]} ${disabledClass}`.trim();
});

function handleClick(event: MouseEvent) {
  if (!props.disabled && !props.loading) {
    emit("click", event);
  }
}
</script>
