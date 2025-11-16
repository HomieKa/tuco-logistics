<template>
  <div>
    <Hero />
    <OurApproach />

    <ImpactSnapshot />
    <CustomerStories />
    <OurDifference />
    <!-- <TechnologySummary /> -->

    <CallToAction>
      <template #title>Ready to transform your freight network?</template>
      <template #description>
        Join ambitious Australian businesses partnering with TUCO to deliver
        transparency, savings, and effortless execution.
      </template>
      <template #actions>
        <Button variant="secondary" size="lg" to="/contact">Get started</Button>
      </template>
    </CallToAction>
  </div>
</template>

<script setup lang="ts">
import Hero from "@/components/home/Hero.vue";
import Button from "@/components/ui/Button.vue";
import CallToAction from "@/components/ui/CallToAction.vue";
import OurApproach from "@/components/home/OurApproach.vue";
import OurDifference from "@/components/home/OurDifference.vue";
import ImpactSnapshot from "@/components/home/ImpactSnapshot.vue";
import CustomerStories from "@/components/home/CustomerStories.vue";
import { useSEO } from "@/composables/useSEO";

useSEO({
  title: "TUCO Logistics - Hassle-Free Freight Management",
  description:
    "Smart freight management for Australian businesses. TUCO delivers visibility, savings, and proactive support.",
});
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
