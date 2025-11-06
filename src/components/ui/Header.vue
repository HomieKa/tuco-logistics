<template>
  <header :class="headerClasses">
    <nav class="container mx-auto px-4">
      <div class="flex h-20 items-center justify-between">
        <RouterLink to="/" class="flex items-center gap-3" @click="closeMenu">
          <img
            :src="logo_invert"
            alt="TUCO Logistics"
            class="h-10 w-auto transition duration-200"
            :class="isScrolled ? '' : 'invert'"
          />
        </RouterLink>

        <div class="hidden items-center space-x-8 lg:flex">
          <RouterLink
            v-for="link in primaryNav"
            :key="link.to"
            :to="link.to"
            class="text-sm font-medium transition"
            :class="linkClasses(link.to)"
          >
            {{ link.label }}
          </RouterLink>

          <RouterLink
            to="/services"
            class="text-sm font-medium transition"
            :class="linkClasses('/services')"
          >
            Services
          </RouterLink>

          <RouterLink
            to="/technology"
            class="text-sm font-medium transition"
            :class="linkClasses('/technology')"
          >
            Technology
          </RouterLink>

          <RouterLink
            to="/faq"
            class="text-sm font-medium transition"
            :class="linkClasses('/faq')"
          >
            FAQ
          </RouterLink>

          <RouterLink
            to="/contact"
            class="text-sm font-medium transition"
            :class="linkClasses('/contact')"
          >
            Contact
          </RouterLink>

          <a
            href="https://app.freightmate.com"
            target="_blank"
            rel="noopener"
            class="rounded-full px-5 py-2 text-sm font-semibold shadow transition"
            :class="
              isScrolled
                ? 'bg-teal-500 text-white hover:bg-teal-600'
                : 'border border-[#0c233f] text-[#0c233f] hover:bg-[#0c233f]/5'
            "
          >
            Login to Freightmate
          </a>

          <RouterLink
            to="/track"
            class="rounded-full px-5 py-2 text-sm font-semibold shadow transition"
            :class="
              isScrolled
                ? 'bg-[#38a2ca] text-white hover:bg-[#2d82a2]'
                : 'border border-[#38a2ca] text-[#38a2ca] hover:bg-[#38a2ca]/10'
            "
          >
            Tracking
          </RouterLink>
        </div>

        <button
          class="lg:hidden"
          type="button"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle navigation menu"
          :class="isScrolled ? 'text-white' : 'text-[#0c233f]'"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="space-y-4 pb-4 pt-2 lg:hidden">
          <RouterLink
            v-for="link in [
              ...primaryNav,
              { label: 'Contact', to: '/contact' },
            ]"
            :key="link.to"
            :to="link.to"
            class="block text-sm font-medium transition"
            :class="
              isScrolled
                ? 'text-white hover:text-teal-200'
                : 'text-[#0c233f] hover:text-teal-500'
            "
            @click="closeMenu"
          >
            {{ link.label }}
          </RouterLink>

          <div class="border-t border-slate-200 pt-4">
            <RouterLink
              to="/services"
              class="mt-3 block text-sm font-medium text-[#0c233f] transition hover:text-teal-500"
              @click="closeMenu"
            >
              Services
            </RouterLink>

            <RouterLink
              to="/technology"
              class="mt-3 block text-sm font-medium text-[#0c233f] transition hover:text-teal-500"
              @click="closeMenu"
            >
              Technology
            </RouterLink>
            <RouterLink
              to="/track"
              class="mt-2 block text-sm font-medium text-[#0c233f] transition hover:text-teal-500"
              @click="closeMenu"
            >
              Track freight
            </RouterLink>
            <RouterLink
              to="/faq"
              class="mt-2 block text-sm font-medium text-[#0c233f] transition hover:text-teal-500"
              @click="closeMenu"
            >
              FAQ
            </RouterLink>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import logo_invert from "@/assets/images/tuco_logo_2_invert.svg";

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);
const route = useRoute();

const primaryNav = [
  { label: "About Us", to: "/about-us" },
  { label: "Our Difference", to: "/our-difference" },
];

const headerClasses = computed(() =>
  [
    "sticky top-0 z-50 transition-all duration-300 backdrop-blur",
    isScrolled.value
      ? "bg-[#0c233f]/95 shadow-lg text-white"
      : "bg-transparent text-[#0c233f]",
  ].join(" "),
);

function handleScroll() {
  isScrolled.value = window.scrollY > 24;
}

function closeMenu() {
  mobileMenuOpen.value = false;
}

function linkClasses(target?: string) {
  const active = target ? route.path.startsWith(target) : false;
  if (isScrolled.value) {
    return active ? "text-white" : "text-white/70 hover:text-white";
  }
  return active ? "text-[#0c233f]" : "text-[#0c233f]/70 hover:text-[#0c233f]";
}

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
