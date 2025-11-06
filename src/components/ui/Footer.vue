<template>
  <footer class="bg-navy-500 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <img
            src="@/assets/images/tuco_logo_2_invert.svg"
            alt="TUCO Logistics"
            class="mb-4 h-10 w-auto"
          />
          <p class="mb-4 text-gray-300">
            Strategic freight management made effortless for Australian
            businesses.
          </p>
          <div class="space-y-2 text-gray-300">
            <div class="flex items-center">
              <svg
                class="mr-2 h-5 w-5 text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a href="tel:1300853074" class="transition hover:text-teal-400"
                >1300 853 074</a
              >
            </div>
            <div class="flex items-center">
              <svg
                class="mr-2 h-5 w-5 text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:sales@tuco.com.au"
                class="transition hover:text-teal-400"
                >sales@tuco.com.au</a
              >
            </div>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold text-white">Company</h3>
          <ul class="space-y-2 text-gray-300">
            <li>
              <RouterLink to="/about-us" class="transition hover:text-teal-400"
                >About Us</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/our-difference"
                class="transition hover:text-teal-400"
                >Our Difference</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/services" class="transition hover:text-teal-400"
                >Services</RouterLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold text-white">Platform</h3>
          <ul class="space-y-2 text-gray-300">
            <li>
              <RouterLink
                to="/technology"
                class="transition hover:text-teal-400"
                >Technology</RouterLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold text-white">Support</h3>
          <ul class="space-y-2 text-gray-300">
            <li>
              <RouterLink to="/contact" class="transition hover:text-teal-400"
                >Contact</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/faq" class="transition hover:text-teal-400"
                >FAQ</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/track" class="transition hover:text-teal-400"
                >Tracking</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-between border-t border-navy-400 pt-8 text-sm text-gray-400 md:flex-row"
      >
        <p class="mb-4 md:mb-0">
          &copy; 2025 TUCO. All rights reserved. | ACN 610 731 121
        </p>
        <div class="mb-4 flex space-x-4 md:mb-0">
          <a
            href="https://au.linkedin.com/company/tuco-freight-services"
            target="_blank"
            rel="noopener"
            class="transition hover:text-teal-400"
            aria-label="LinkedIn"
          >
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/tucofreightmanagement/"
            target="_blank"
            rel="noopener"
            class="transition hover:text-teal-400"
            aria-label="Facebook"
          >
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </a>
        </div>
        <div class="flex space-x-6">
          <RouterLink to="/privacy" class="transition hover:text-teal-400"
            >Privacy Policy</RouterLink
          >
          <RouterLink to="/terms" class="transition hover:text-teal-400"
            >Terms &amp; Conditions</RouterLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
