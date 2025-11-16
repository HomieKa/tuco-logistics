<template>
  <div>
    <PageHeader
      title="Insights for high-performing freight teams"
      description="Stay ahead with TUCO perspectives on carrier strategy, technology, and commercial optimisation."
    >
      <template #eyebrow>Resources</template>
    </PageHeader>

    <section class="bg-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="article in articles"
            :key="article.title"
            class="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="flex flex-1 flex-col p-6">
              <p
                class="text-sm font-semibold uppercase tracking-wide text-teal-500"
              >
                {{ article.category }}
              </p>
              <h3 class="mt-2 text-xl font-semibold text-navy-500">
                {{ article.title }}
              </h3>
              <p class="mt-3 flex-1 text-gray-600">
                {{ article.excerpt }}
              </p>
              <RouterLink
                :to="article.to"
                class="mt-6 inline-flex items-center text-sm font-semibold text-sky-500 transition hover:text-sky-600"
              >
                Read article
                <svg
                  class="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <CallToAction>
      <template #title>Need tailored freight advice?</template>
      <template #description
        >Book time with TUCO specialists for insights specific to your
        network.</template
      >
      <template #actions>
        <Button variant="secondary" size="lg" to="/contact"
          >Talk to a consultant</Button
        >
      </template>
    </CallToAction>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/sections/ui/Button.vue";
import CallToAction from "@/components/sections/ui/CallToAction.vue";
import PageHeader from "@/components/sections/ui/PageHeader.vue";
import { RouterLink } from "vue-router";
import { useSEO } from "@/composables/useSEO";

useSEO({
  title: "Insights - TUCO Logistics",
  description:
    "Articles, guides, and freight insights from TUCO's logistics experts.",
});

const articles = [
  {
    title: "The 5 carrier metrics every commercial team should watch",
    excerpt:
      "A concise playbook to track carrier performance, costs, and customer experience outcomes.",
    category: "Carrier Strategy",
    to: "/resources/blog/carrier-metrics",
  },
  {
    title: "How to automate invoice reconciliation without losing control",
    excerpt:
      "Turn error-prone manual work into a streamlined finance process with Freightmate.",
    category: "Finance",
    to: "/resources/blog/invoice-automation",
  },
  {
    title: "Designing a freight program for rapid ecommerce growth",
    excerpt:
      "Keep delivery promises tight as order volume scales. Here’s how leading brands do it.",
    category: "Ecommerce",
    to: "/resources/blog/freight-program-design",
  },
];
</script>
