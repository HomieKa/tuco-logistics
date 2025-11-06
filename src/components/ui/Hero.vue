<template>
  <section class="relative overflow-hidden bg-[#f3f5fb]">
    <div
      class="container mx-auto grid gap-10 px-4 py-20 lg:grid-cols-2 lg:items-center"
    >
      <div class="space-y-8">
        <p
          class="text-sm font-semibold uppercase tracking-[0.45em] text-navy-500/60"
        >
          Freight simplified
        </p>
        <h1
          class="text-5xl font-semibold leading-tight text-navy-500 lg:text-[3.5rem]"
        >
          We Work So You Don't Have To.
        </h1>
        <p class="max-w-xl text-lg text-slate-600">
          We combine expertise and smart technology to handle your logistics
          end-to-end - so you can focus on growth. With real-time visibility,
          dedicated support, and scalable solutions, TUCO helps you reduce
          costs, streamline operations, and achieve measurable results.
        </p>
        <div class="flex flex-wrap gap-4">
          <Button variant="primary" size="lg" to="/contact"
            >Talk to a logistics specialist</Button
          >
          <Button variant="outline" size="lg" to="/services#freight-management"
            >See how we help</Button
          >
        </div>
      </div>

      <div class="relative flex items-center justify-center">
        <img
          :src="heroIllustration"
          alt="Illustration of freight tracking"
          class="w-full max-w-xl object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import heroIllustration from "@/assets/images/hero_page_img.webp";
</script>
