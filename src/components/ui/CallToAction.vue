<template>
  <section class="bg-[#0c233f] py-20 text-white">
    <div class="container mx-auto px-4 text-center">
      <p
        class="mb-4 text-sm font-semibold uppercase tracking-wide text-[#62bda5]"
      >
        <slot name="eyebrow">Not sure where to start?</slot>
      </p>
      <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
        <slot name="title">Let's make your freight network work harder</slot>
      </h2>
      <p class="mx-auto mb-8 max-w-2xl text-lg text-white/75">
        <slot name="description">
          Join hundreds of Australian businesses who've transformed their
          freight operations with TUCO.
        </slot>
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <slot name="actions">
          <Button
            variant="secondary"
            size="lg"
            class="!text-white hover:!text-white !shadow-none hover:!shadow-none"
          >
            Get Started
          </Button>
        </slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
</script>
