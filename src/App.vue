<template>
  <div class="flex min-h-screen flex-col bg-gray-50 text-gray-900">
    <Header />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/ui/Header.vue";
import Footer from "@/components/ui/Footer.vue";
</script>
