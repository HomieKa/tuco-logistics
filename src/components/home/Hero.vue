<template>
  <section class="relative overflow-hidden bg-[#f8f9f9]">
    <div
      class="container mx-auto grid gap-10 px-4 py-20 lg:grid-cols-[50fr_60fr] lg:items-center"
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
          End-to-end logistics partnerships, built around you
        </h1>
        <p class="max-w-xl text-lg text-slate-600">
          4PL Freight Management at TUCO combines expertise and smart technology
          to handle your logistics end-to-end - so you can focus on growth. With
          real-time visibility, dedicated support, and scalable solutions, TUCO
          helps you reduce costs, streamline operations, and achieve measurable
          results.
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

      <div class="relative flex items-center justify-center lg:-mr-70">
        <video
          ref="videoEl"
          autoplay
          muted
          playsinline
          class="w-full max-w-6xl object-fill"
          @timeupdate="checkTime"
        >
          <source :src="homeVideo" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import homeVideo from "@/assets/videos/home-animation.mp4";
import { ref } from 'vue'

const videoEl = ref(null)
const STOP_AT = 18 // seconds

const checkTime = () => {
  if (videoEl.value && videoEl.value.currentTime >= STOP_AT) {
    videoEl.value.pause()
  }
}

</script>
