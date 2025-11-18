<template>
  <div class="bg-[#f8f9f9] text-[#0c233f]">
    <section class="py-14 md:py-20" aria-labelledby="why-hero">
      <div
        class="container mx-auto max-w-7xl grid gap-10 px-4 md:px-6 lg:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
      >
        <div class="space-y-6">
          <p
            class="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]"
          >
            Why TUCO
          </p>
          <h1
            id="why-hero"
            class="text-4xl font-semibold leading-tight text-[#0c233f] md:text-5xl"
          >
            Why companies choose TUCO
          </h1>
          <p class="max-w-2xl text-lg leading-relaxed text-[#0c233f]">
            Strategic partnerships, measurable ROI, and a freight program
            tailored to your business.
          </p>
        </div>

        <div
          class="overflow-hidden rounded-2xl border border-[#e9f5f7] bg-white shadow-[0_12px_30px_rgba(12,35,63,0.08)]"
          aria-hidden="true"
        >
          <div class="aspect-[16/9] w-full max-h-[50vh]">
            <img
              :src="heroImage"
              alt="Fleet of logistics trucks being loaded at an Australian depot"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#0c233f] py-16 md:py-20" aria-labelledby="built-for">
      <div class="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div class="space-y-14">
          <div class="space-y-8">
            <div class="space-y-3">
              <h2
                id="built-for"
                class="text-3xl font-semibold text-white md:text-4xl"
              >
                Built for Australian logistics leaders
              </h2>
              <p class="max-w-4xl text-lg leading-relaxed text-white/90">
                TUCO partners with operations, finance, and customer teams to
                run freight with precision - combining in-market experience,
                data-backed insights, and technology that fits how you work.
              </p>
            </div>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <article
                v-for="feature in leaderFeatures"
                :key="feature.title"
                class="flex h-full flex-col gap-3 rounded-xl bg-transparent p-3 text-white"
              >
                <div class="flex items-start gap-3">
                  <span
                    class="mt-1 inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/10"
                  >
                    <component
                      :is="feature.icon"
                      class="h-6 w-6"
                      :class="feature.iconColor"
                    />
                  </span>
                  <div class="space-y-1">
                    <h3 class="text-lg font-semibold text-white">
                      {{ feature.title }}
                    </h3>
                    <p class="text-sm leading-relaxed text-white/80">
                      {{ feature.body }}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div class="space-y-4 text-center text-white">
            <p
              class="text-sm font-semibold uppercase tracking-[0.35em] text-[#38a2ca]"
            >
              Impact snapshot
            </p>
            <h2
              id="proof-metrics"
              class="text-3xl font-semibold text-white md:text-4xl"
            >
              What our clients experience
            </h2>
            <div class="mt-8 grid gap-6 md:grid-cols-3">
              <article
                v-for="metric in metrics"
                :key="metric.title"
                class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition duration-200 hover:-translate-y-1 hover:bg-white/10"
              >
                <span class="absolute left-0 top-6 h-14 w-[3px] bg-[#38a2ca]" />
                <div class="pl-4">
                  <p class="text-3xl font-bold text-white">
                    {{ metric.value }}
                  </p>
                  <p
                    class="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#62bda5]"
                  >
                    {{ metric.title }}
                  </p>
                  <p class="mt-2 text-sm leading-relaxed text-white/80">
                    {{ metric.body }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f9f9f9] py-16 md:py-20" aria-labelledby="why-reasons">
      <div class="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 space-y-12">
        <div class="text-center">
          <h2
            id="why-reasons"
            class="mt-3 text-3xl font-semibold text-[#0c233f] md:text-4xl"
          >
            Why companies partner with TUCO
          </h2>
          <p
            class="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-[#0c233f]"
          >
            Each partnership shows that logistics is more than a service - it's
            a collaborative journey driving real growth and lasting impact.
          </p>
        </div>

        <div class="space-y-10">
          <div class="grid gap-6 md:grid-cols-3">
            <article
              v-for="reasonGroup in reasonGroups"
              :key="reasonGroup.title"
              class="flex h-full flex-col gap-4 rounded-xl border border-[#e9f5f7] bg-[#e9f5f7] p-6 shadow-[0_12px_28px_rgba(12,35,63,0.06)]"
            >
              <div class="flex items-center gap-3">
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#62bda5]"
                >
                  <component :is="reasonGroup.icon" class="h-5 w-5" />
                </span>
                <h3 class="text-lg font-semibold text-[#0c233f]">
                  {{ reasonGroup.title }}
                </h3>
              </div>
              <ul class="space-y-3">
                <li
                  v-for="item in reasonGroup.items"
                  :key="item"
                  class="flex items-start gap-3 text-sm leading-relaxed text-[#0c233f]"
                >
                  <CheckCircleIcon
                    class="mt-[2px] h-5 w-5 flex-none text-[#62bda5]"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </article>
          </div>

          <div class="space-y-4">
            <p
              class="text-sm font-semibold uppercase tracking-[0.28em] text-[#38a2ca] text-center"
            >
              Smart logistics capabilities
            </p>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              <article
                v-for="capability in capabilities"
                :key="capability.title"
                class="flex h-full flex-col gap-3 rounded-xl border border-[#e9f5f7] bg-[#e9f5f7] p-6 shadow-[0_12px_28px_rgba(12,35,63,0.06)]"
              >
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white"
                  :class="capability.iconBg || 'text-[#62bda5]'"
                >
                  <component
                    :is="capability.icon"
                    class="h-5 w-5"
                    :class="capability.iconColor || 'text-[#62bda5]'"
                  />
                </span>
                <div class="space-y-1">
                  <h3 class="text-base font-semibold text-[#0c233f]">
                    {{ capability.title }}
                  </h3>
                  <p class="text-sm leading-relaxed text-[#0c233f]">
                    {{ capability.body }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f7f9fd] py-16 md:py-20" aria-labelledby="faq">
      <div class="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <div class="text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]"
          >
            FAQ
          </p>
          <h2
            id="faq"
            class="text-3xl font-semibold text-[#0c233f] md:text-4xl"
          >
            Frequently Asked Questions
          </h2>
        </div>
        <div
          class="mt-10 divide-y divide-[#e5ecf0] rounded-2xl border border-[#e5ecf0] bg-white"
        >
          <div v-for="(item, idx) in faqs" :key="item.question">
            <button
              class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38a2ca] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              @click="toggleFaq(idx)"
              :aria-expanded="openFaq === idx"
            >
              <span class="text-lg font-semibold text-[#0c233f]">
                {{ item.question }}
              </span>
              <ChevronDownIcon
                class="h-5 w-5 text-[#0c233f] transition"
                :class="{ 'rotate-180': openFaq === idx }"
              />
            </button>
            <div
              v-show="openFaq === idx"
              class="px-6 pb-6 py-6 text-base leading-relaxed text-[#0c233f]/80 bg-[#f9f9f9]"
            >
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowPathRoundedSquareIcon,
  ArrowTrendingUpIcon,
  BellAlertIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  EyeIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";

import { useSEO } from "@/composables/useSEO";
import heroImage from "@/assets/images/why_tuco/why_tuco_hero.jpg";

useSEO({
  title: "Why Choose TUCO - TUCO Logistics",
  description:
    "Discover why Australian businesses partner with TUCO - strategic support, proven ROI, and tech that delivers measurable outcomes.",
});

const leaderFeatures = [
  {
    title: "Faster onboarding",
    body: "Launch new programs in weeks, not months.",
    icon: SparklesIcon,
    iconBg: "bg-[#e9f5f7]",
    iconColor: "text-[#62bda5]",
  },
  {
    title: "Visibility across the network",
    body: "Dashboards, alerts, and reporting for each stakeholder.",
    icon: EyeIcon,
    iconBg: "bg-[#e9f5f7]",
    iconColor: "text-[#38a2ca]",
  },
  {
    title: "Continuous optimisation",
    body: "Regular reviews keep carrier performance and costs aligned.",
    icon: ArrowTrendingUpIcon,
    iconBg: "bg-[#e9f5f7]",
    iconColor: "text-[#62bda5]",
  },
];

const reasonGroups = [
  {
    title: "Operational excellence",
    icon: UserGroupIcon,
    items: [
      "Increase on-time deliveries & improve DIFOT",
      "Enhance operational efficiencies",
      "Streamline your booking process",
    ],
  },
  {
    title: "Cost & control",
    icon: UserGroupIcon,
    items: [
      "Achieve annual cost savings",
      "Make data-driven decisions",
      "Fix billing leakage",
    ],
  },
  {
    title: "Customer experience",
    icon: UserGroupIcon,
    items: [
      "Increase in customer satisfaction",
      "Automated customer notifications reduce calls",
      "Focus on what you do best",
    ],
  },
];

const capabilities = [
  {
    icon: BellAlertIcon,
    title: "Live customer notifications",
    body: "Right carrier, right message, right time.",
    iconBg: "text-[#62bda5]",
    iconColor: "text-[#62bda5]",
  },
  {
    icon: CheckCircleIcon,
    title: "Real-time tracking & visibility",
    body: "Full shipment insight as standard.",
    iconBg: "text-[#38a2ca]",
    iconColor: "text-[#38a2ca]",
  },
  {
    icon: ArrowPathRoundedSquareIcon,
    title: "Automated billing audits",
    body: "Catch errors before they hit your ledger.",
    iconBg: "text-[#62bda5]",
    iconColor: "text-[#62bda5]",
  },
  {
    icon: ChartBarIcon,
    title: "Performance analytics",
    body: "Monitor carriers and improve what matters.",
    iconBg: "text-[#38a2ca]",
    iconColor: "text-[#38a2ca]",
  },
];

const metrics = [
  {
    value: "15%",
    title: "Average savings",
    body: "Through negotiated carrier rates and automation.",
  },
  {
    value: "20+ hours",
    title: "Saved per week",
    body: "Removing manual tasks across operations, finance, and customer teams.",
  },
  {
    value: "Up to 40%",
    title: "Fewer support calls",
    body: "Proactive branded notifications keep customers informed.",
  },
];

const faqs = [
  {
    question: "What is freightmate and how does it work?",
    answer:
      "Freightmate is TUCO’s cloud-based freight management system that brings all your shipping needs into one easy platform—letting businesses instantly book, track, and manage their freight with multiple carriers across Australia. It works by integrating with carrier networks to automate quoting, booking, tracking, proof of delivery, and reporting, giving you end-to-end visibility and control over every shipment in real time.",
  },
  {
    question: "How is tuco different from freight brokers or platorms?",
    answer:
      "TUCO stands out by offering a true end-to-end service—combining advanced technology, personalised account management, and hands-on carrier oversight to deliver tailored, transparent logistics solutions for Australian businesses. Unlike standard freight brokers or generic platforms, TUCO manages everything from quoting and compliance to invoice vetting and strategic optimisation, so customers enjoy real support and better results at every step.",
  },
  {
    question: "Can freightmate integrate with our existing systems?",
    answer:
      "Yes, Freightmate can integrate seamlessly with your existing business systems, including CRMs and ERPs, to centralise shipment data, automate status updates, and streamline your freight processes—all tailored to fit your operational needs. This means less manual work, greater visibility, and more efficient logistics management from end to end.",
  },
  {
    question: "What kind of cost savings can we expect?",
    answer:
      "While exact figures depend on your freight profile and business needs, TUCO consistently finds savings for clients—not just in carrier rates, but through streamlined processes, reduced admin time, and increased efficiency across your logistics network. Our approach looks beyond simple freight costs to deliver total value, so you benefit from both financial and operational improvements tailored to your goals.",
  },
  {
    question: "Who will support us day to day?",
    answer:
      "Day-to-day support is provided by a dedicated local Account Manager who gets to know your business and acts as your single point of contact—backed by TUCO’s specialist operations and customer service teams to resolve issues quickly and keep everything running smoothly.",
  },
];

const openFaq = ref<number | null>(null);

const toggleFaq = (idx: number) => {
  openFaq.value = openFaq.value === idx ? null : idx;
};
</script>
