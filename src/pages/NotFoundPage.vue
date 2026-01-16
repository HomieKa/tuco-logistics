<template>
  <div class="bg-[var(--color-tuco-sky)]/30">
    <div
      class="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-4 py-16 md:px-6 lg:px-8"
    >
      <div class="w-full max-w-3xl rounded-[var(--corner-radius-lg)] p-10 text-center">
        <h1
          class="mt-6 text-4xl font-semibold text-[var(--color-tuco-navy)] md:text-5xl"
        >
          Page not found
        </h1>
        <p class="mt-4 text-lg text-[var(--color-tuco-slate)]">
          We couldn't find the page you're looking for. Check the URL or head
          back home to keep exploring TUCO Logistics.
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" size="lg" to="/"> Back to home </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import { useSEO } from "@/composables/useSEO";

useSEO({
  title: "Page Not Found | TUCO Logistics",
  description:
    "Return to TUCO Logistics home to explore freight management solutions when a page is not found.",
});
</script>
