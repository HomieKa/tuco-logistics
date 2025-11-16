<template>
  <section :class="sectionClasses">
    <div class="mx-auto w-full max-w-3xl md:max-w-4xl">
      <h2
        class="text-center text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
      >
        Frequently asked questions
      </h2>

      <div :class="listClasses">
        <article
          v-for="(item, index) in faqs"
          :key="item.q"
          class="rounded-2xl border border-[var(--color-tuco-line)] bg-[var(--color-tuco-card)] shadow-lg/5 transition hover:shadow-lg/10"
        >
          <button
            :id="`faq-trigger-${index}`"
            :ref="(el) => setButtonRef(el, index)"
            class="flex w-full items-center justify-between gap-6 text-left text-[var(--color-tuco-ink)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tuco-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-tuco-card)]"
            :class="buttonPadding"
            type="button"
            role="tab"
            :aria-expanded="activeIndex === index"
            :aria-controls="`faq-panel-${index}`"
            :tabindex="activeIndex === index ? 0 : -1"
            @click="toggle(index)"
            @keydown="onKeydown($event, index)"
          >
            <span class="text-base font-semibold md:text-lg">{{ item.q }}</span>
            <span
              class="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--color-tuco-sky)] text-[var(--color-tuco-blue)] transition-transform duration-300"
              :class="{ 'rotate-45': activeIndex === index }"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path d="M12 5v14M5 12h14" stroke-linecap="round" />
              </svg>
            </span>
          </button>

          <div
            :id="`faq-panel-${index}`"
            :ref="(el) => setContentRef(el, index)"
            class="faq-panel"
            :class="{ 'is-open': activeIndex === index }"
            role="region"
            :aria-labelledby="`faq-trigger-${index}`"
          >
            <div
              class="faq-panel__content"
              :class="activeIndex === index ? openPadding : closedPadding"
            >
              <p class="text-[var(--color-tuco-slate)] leading-relaxed">
                {{ item.a }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  type ComponentPublicInstance,
} from "vue";

const props = withDefaults(defineProps<{ compact?: boolean }>(), {
  compact: false,
});

const faqs = [
  {
    q: "What is Freightmate and how does it work?",
    a: "Freightmate is TUCO's cloud freight management system that centralises quoting, booking, tracking, POD, and reporting across multiple Australian carriers—giving you real-time control and end-to-end visibility.",
  },
  {
    q: "How is TUCO different from freight brokers or platforms?",
    a: "We deliver a true end-to-end service: advanced tech + dedicated account management + hands-on carrier oversight. Beyond rates, we manage compliance, invoice vetting, and continuous optimisation—so you get transparent, tailored results.",
  },
  {
    q: "Can Freightmate integrate with our existing systems?",
    a: "Yes. We integrate with ERPs, CRMs, and other systems to sync shipment data, automate updates, and streamline processes—reducing manual work while increasing visibility.",
  },
  {
    q: "What kind of cost savings can we expect?",
    a: "Savings depend on your freight profile, but clients typically see value beyond rates alone—through process efficiency, admin reduction, and performance improvements across the network.",
  },
  {
    q: "Who will support us day-to-day?",
    a: "A dedicated local Account Manager is your single point of contact, backed by TUCO's operations and customer service teams for fast, proactive support.",
  },
];

const activeIndex = ref<number | null>(null);
const buttonRefs = ref<(HTMLButtonElement | null)[]>(
  Array(faqs.length).fill(null),
);
const contentRefs = ref<(HTMLDivElement | null)[]>(
  Array(faqs.length).fill(null),
);

const sectionClasses = computed(() =>
  props.compact ? "pt-10 md:pt-12 pb-0" : "pt-12 md:pt-16 pb-0",
);
const listClasses = computed(() =>
  props.compact ? "mt-8 space-y-3" : "mt-10 space-y-4 md:space-y-6",
);
const buttonPadding = computed(() =>
  props.compact ? "p-4 md:p-5" : "p-5 md:p-6",
);
const openPadding = computed(() =>
  props.compact ? "px-4 py-4 md:px-5 md:py-5" : "px-5 py-5 md:px-6 md:py-6",
);
const closedPadding = computed(() =>
  props.compact ? "px-4 py-0 md:px-5 md:py-0" : "px-5 py-0 md:px-6 md:py-0",
);

function setButtonRef(
  el: Element | ComponentPublicInstance | null,
  index: number,
) {
  buttonRefs.value[index] = el instanceof HTMLButtonElement ? el : null;
}

function setContentRef(
  el: Element | ComponentPublicInstance | null,
  index: number,
) {
  contentRefs.value[index] = el instanceof HTMLDivElement ? el : null;
}

function toggle(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index;
  nextTick(updateHeights);
}

function onKeydown(event: KeyboardEvent, index: number) {
  const total = buttonRefs.value.length;
  let targetIndex: number | null = null;

  switch (event.key) {
    case "ArrowDown":
    case "ArrowRight":
      targetIndex = (index + 1) % total;
      break;
    case "ArrowUp":
    case "ArrowLeft":
      targetIndex = (index - 1 + total) % total;
      break;
    case "Home":
      targetIndex = 0;
      break;
    case "End":
      targetIndex = total - 1;
      break;
    case "Enter":
    case " ":
      event.preventDefault();
      toggle(index);
      return;
    default:
      return;
  }

  if (targetIndex !== null) {
    event.preventDefault();
    buttonRefs.value[targetIndex]?.focus();
  }
}

function updateHeights() {
  contentRefs.value.forEach((panel, index) => {
    if (!panel) return;
    panel.style.maxHeight =
      activeIndex.value === index ? `${panel.scrollHeight}px` : "0px";
  });
}

onMounted(() => {
  nextTick(updateHeights);
  window.addEventListener("resize", updateHeights);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateHeights);
});
</script>

<style scoped>
.faq-panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.faq-panel__content {
  opacity: 0;
  transform: translateY(-4px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.faq-panel.is-open .faq-panel__content {
  opacity: 1;
  transform: translateY(0);
}
</style>
