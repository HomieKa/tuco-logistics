<template>
  <div>
    <PageHeader
      title="Questions about TUCO and Freightmate"
      description="Browse answers to the questions TUCO hears most. If you need deeper detail, our team is ready to help."
    >
      <template #eyebrow>FAQ</template>
    </PageHeader>

    <TucoFaqAccordion class="pb-40" />
  </div>
</template>

<script setup lang="ts">
import PageHeader from "@/components/ui/PageHeader.vue";
import TucoFaqAccordion from "@/components/sections/resources/TucoFaqAccordion.vue";
import { useSEO } from "@/composables/useSEO";

useSEO({
  title: "FAQ - TUCO Logistics",
  description:
    "Answers to the most common questions about TUCO’s services and the Freightmate platform.",
});
</script>
