<template>
  <div class="bg-[var(--color-tuco-sky)]/20">
    <div
      class="sticky top-20 z-30 border-b border-[var(--color-tuco-line)] bg-[var(--color-tuco-card)]"
    >
      <div class="mx-auto max-w-7xl px-4 py-4 md:px-6 lg:px-8">
        <div
          class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <h1
              class="text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
            >
              Our Services
            </h1>
            <p class="mt-1 text-sm text-[var(--color-tuco-slate)]">
              Comprehensive freight management built around your business.
            </p>
          </div>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <button
              v-for="section in sections"
              :key="section.id"
              type="button"
              :aria-pressed="activeSection === section.id"
              @click="scrollToSection(section.id)"
              class="rounded-2xl border border-[var(--color-tuco-line)] bg-white px-4 py-3 text-left text-sm font-semibold text-[var(--color-tuco-navy)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tuco-blue)] focus-visible:ring-offset-2"
              :class="
                activeSection === section.id
                  ? 'border-[var(--color-tuco-blue)] bg-[var(--color-tuco-blue)]/10'
                  : ''
              "
            >
              {{ section.label }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <main class="flex flex-col">
      <!-- Freight Management -->
      <section
        id="freight-management"
        aria-labelledby="freight-management-title"
        class="py-0"
      >
        <div class="relative left-1/2 w-screen -translate-x-1/2 bg-[#f3f5fb]">
          <div
            class="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-24 lg:px-8 lg:py-32"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
            >
              Freight management
            </p>
            <h2
              id="freight-management-title"
              class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
            >
              Freight management
            </h2>
            <p
              class="mt-4 text-[var(--color-tuco-slate)] leading-relaxed md:text-lg"
            >
              From dispatch to delivery, TUCO manages your end-to-end freight
              operation with precision, covering allocation, live tracking, and
              performance optimisation.
            </p>

            <div class="mt-10 flex flex-col gap-10 lg:flex-row lg:items-center">
              <div class="flex-1">
                <div class="grid gap-6 sm:grid-cols-2">
                  <article
                    v-for="item in freightManagementItems"
                    :key="item.title"
                    class="flex items-start gap-4"
                  >
                    <span
                      class="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--color-tuco-blue)]"
                    />
                    <div class="space-y-1">
                      <h3
                        class="text-base font-semibold text-[var(--color-tuco-navy)]"
                      >
                        {{ item.title }}
                      </h3>
                      <p
                        class="text-sm text-[var(--color-tuco-slate)] leading-relaxed"
                      >
                        {{ item.description }}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              <div class="flex-1">
                <div class="mx-auto max-w-xl">
                  <img
                    :src="freightManagementImage"
                    alt="TUCO experts coordinating freight operations"
                    class="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tracking and Reporting -->
      <section
        id="tracking-reporting"
        aria-labelledby="tracking-reporting-title"
        class="py-0"
      >
        <div class="relative left-1/2 w-screen -translate-x-1/2 bg-[#f7f9fd]">
          <div
            class="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-24 lg:px-8 lg:py-32"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
            >
              Tracking & Reporting
            </p>
            <h2
              id="tracking-reporting-title"
              class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
            >
              Tracking and reporting
            </h2>
            <p
              class="mt-4 text-[var(--color-tuco-slate)] leading-relaxed md:text-lg"
            >
              Real-time visibility and reporting aligned to your business
              priorities.
            </p>

            <div
              class="mt-10 flex flex-col gap-10 lg:flex-row-reverse lg:items-center"
            >
              <div class="flex-1">
                <div class="grid gap-6 sm:grid-cols-2">
                  <article
                    v-for="item in trackingItems"
                    :key="item.title"
                    class="flex items-start gap-4"
                  >
                    <span
                      class="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--color-tuco-blue)]"
                    />
                    <div class="space-y-1">
                      <h3
                        class="text-base font-semibold text-[var(--color-tuco-navy)]"
                      >
                        {{ item.title }}
                      </h3>
                      <p
                        class="text-sm text-[var(--color-tuco-slate)] leading-relaxed"
                      >
                        {{ item.description }}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              <div class="flex-1">
                <div class="mx-auto max-w-xl">
                  <img
                    :src="trackingImage"
                    alt="Dashboard showing TUCO tracking and reporting insights"
                    class="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Managed Services -->
      <section
        id="managed-services"
        aria-labelledby="managed-services-title"
        class="py-0"
      >
        <div class="relative left-1/2 w-screen -translate-x-1/2 bg-[#f3f5fb]">
          <div
            class="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-24 lg:px-8 lg:py-32"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
            >
              Managed services
            </p>
            <h2
              id="managed-services-title"
              class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
            >
              Managed services
            </h2>
            <p
              class="mt-4 text-[var(--color-tuco-slate)] leading-relaxed md:text-lg"
            >
              Bring your own carrier accounts and leverage TUCO's platform,
              processes, and commercial oversight.
            </p>

            <div class="mt-10 flex flex-col gap-10 lg:flex-row lg:items-center">
              <div class="flex-1">
                <div class="grid gap-6 sm:grid-cols-2">
                  <article
                    v-for="item in managedServicesItems"
                    :key="item.title"
                    class="flex items-start gap-4"
                  >
                    <span
                      class="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--color-tuco-blue)]"
                    />
                    <div class="space-y-1">
                      <h3
                        class="text-base font-semibold text-[var(--color-tuco-navy)]"
                      >
                        {{ item.title }}
                      </h3>
                      <p
                        class="text-sm text-[var(--color-tuco-slate)] leading-relaxed"
                      >
                        {{ item.description }}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              <div class="flex-1">
                <div class="mx-auto max-w-xl">
                  <img
                    :src="managedServicesImage"
                    alt="TUCO team overseeing managed carrier partnerships"
                    class="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Warehousing -->
      <section
        id="warehousing"
        aria-labelledby="warehousing-title"
        class="py-0"
      >
        <div class="relative left-1/2 w-screen -translate-x-1/2 bg-[#f7f9fd]">
          <div
            class="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-24 lg:px-8 lg:py-32"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
            >
              Warehousing
            </p>
            <h2
              id="warehousing-title"
              class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
            >
              Warehousing
            </h2>
            <p
              class="mt-4 text-[var(--color-tuco-slate)] leading-relaxed md:text-lg"
            >
              TUCO connects you with national 3PL partners so inventory stays
              visible, orders move fast, and overflow capacity is always ready.
            </p>

            <div
              class="mt-10 flex flex-col gap-10 lg:flex-row-reverse lg:items-center"
            >
              <div class="flex-1">
                <div class="mx-auto max-w-xl">
                  <img
                    :src="warehouseHeroImage"
                    alt="Modern TUCO warehouse operations"
                    class="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div class="flex-1">
                <div class="grid gap-6 sm:grid-cols-2">
                  <article
                    v-for="service in warehousingServices"
                    :key="service.title"
                    class="flex items-start gap-4"
                  >
                    <span
                      class="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--color-tuco-blue)]"
                    />
                    <div class="space-y-1">
                      <p
                        class="text-base font-semibold text-[var(--color-tuco-navy)]"
                      >
                        {{ service.title }}
                      </p>
                      <p
                        class="text-sm text-[var(--color-tuco-slate)] leading-relaxed"
                      >
                        {{ service.description }}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Managed Partners -->
      <section
        id="managed-partners"
        aria-labelledby="managed-partners-title"
        class="py-0"
      >
        <div class="relative left-1/2 w-screen -translate-x-1/2 bg-[#f3f5fb]">
          <div
            class="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-24 lg:px-8 lg:py-32"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
            >
              Managed partners
            </p>
            <h2
              id="managed-partners-title"
              class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
            >
              Managed partners
            </h2>
            <p
              class="mt-4 text-[var(--color-tuco-slate)] leading-relaxed md:text-lg"
            >
              Our network spans road, rail, air, and sea, with specialist
              partners for complex movements.
            </p>

            <!-- Transport modes -->
            <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <article
                v-for="mode in transportCards"
                :key="mode.title"
                class="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-tuco-line)] bg-white shadow-lg/5 transition hover:-translate-y-1 hover:shadow-card-lg"
              >
                <div
                  class="relative aspect-[3/2] w-full bg-[var(--color-tuco-sky)]/30"
                >
                  <img
                    :src="mode.image"
                    :alt="mode.imageAlt"
                    class="h-full w-full object-contain p-4"
                  />
                </div>
                <div class="flex flex-1 flex-col gap-2 p-4">
                  <h3
                    class="text-base font-semibold text-[var(--color-tuco-navy)]"
                  >
                    {{ mode.title }}
                  </h3>
                  <p
                    class="text-sm leading-relaxed text-[var(--color-tuco-slate)]"
                  >
                    {{ mode.description }}
                  </p>
                </div>
              </article>
            </div>

            <!-- Carrier logos carousel -->
            <div
              class="mt-10 overflow-hidden rounded-3xl border border-[var(--color-tuco-line)] bg-white p-6 shadow-lg/5"
            >
              <div class="relative">
                <div
                  class="flex gap-12 whitespace-nowrap will-change-transform"
                  @mouseenter="pauseCarousel"
                  @mouseleave="resumeCarousel"
                  ref="carouselTrack"
                  :style="{ transform: `translateX(-${carouselOffset}px)` }"
                >
                  <div
                    v-for="(carrier, index) in duplicatedCarriers"
                    :key="`${carrier.name}-${index}`"
                    class="flex h-24 w-52 flex-none items-center justify-center px-4 py-4 transition hover:-translate-y-1"
                  >
                    <img
                      v-if="!isLogoBroken(carrier.logo)"
                      :src="carrier.logo"
                      :alt="`${carrier.name} logo`"
                      class="mx-auto h-auto max-h-14 w-full object-contain transition"
                      @load="handleLogoLoad"
                      @error="handleCarrierError(carrier.logo)"
                    />
                    <span
                      v-else
                      class="text-xs font-semibold text-[var(--color-tuco-slate)]"
                    >
                      {{ carrier.name }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Industries -->
      <section id="industries" aria-labelledby="industries-title" class="py-0">
        <div class="relative left-1/2 w-screen -translate-x-1/2 bg-[#f7f9fd]">
          <div
            class="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-24 lg:px-8 lg:py-32"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
            >
              Industries
            </p>
            <h2
              id="industries-title"
              class="mt-2 text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
            >
              Industries we support
            </h2>
            <p
              class="mt-4 text-[var(--color-tuco-slate)] leading-relaxed md:text-lg"
            >
              Tailored freight programs for manufacturing, retail, healthcare,
              and more, built to meet the exact service promises your customers
              expect.
            </p>

            <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <article
                v-for="industry in industryCards"
                :key="industry.title"
                class="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-tuco-line)] bg-white shadow-lg/5 transition hover:-translate-y-1 hover:shadow-card-lg"
              >
                <div
                  class="relative aspect-[3/2] w-full bg-[var(--color-tuco-sky)]/30"
                >
                  <img
                    :src="industry.image"
                    :alt="industry.imageAlt"
                    class="h-full w-full object-contain p-4"
                  />
                </div>
                <div class="flex flex-1 flex-col gap-2 p-4">
                  <h4
                    class="text-base font-semibold text-[var(--color-tuco-navy)]"
                  >
                    {{ industry.title }}
                  </h4>
                  <p
                    class="text-sm leading-relaxed text-[var(--color-tuco-slate)]"
                  >
                    {{ industry.description }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>

    <section
      class="border-t border-[var(--color-tuco-line)] bg-[var(--color-tuco-card)]/90"
    >
      <div
        class="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"
      >
        <div>
          <h2
            class="text-2xl font-semibold text-[var(--color-tuco-navy)] md:text-3xl"
          >
            Ready to build your freight program?
          </h2>
          <p class="mt-1 text-sm text-[var(--color-tuco-slate)]">
            Chat with TUCO specialists to map the right services for your
            network.
          </p>
        </div>
        <RouterLink
          to="/contact"
          class="btn-primary inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tuco-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Talk to a consultant
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import freightManagementArtwork from "@/assets/images/services/freight-ops.svg";
import trackingAnalyticsArtwork from "@/assets/images/services/tracking-analytics.svg";
import managedCollaborationArtwork from "@/assets/images/services/managed-collaboration.svg";
import roadImage from "@/assets/images/services/road.svg";
import railImage from "@/assets/images/services/rail.svg";
import airImage from "@/assets/images/services/air.svg";
import seaImage from "@/assets/images/services/sea.svg";
import fmcgImage from "@/assets/images/industries/fmcg.svg";
import retailImage from "@/assets/images/industries/retail.svg";
import manufacturingImage from "@/assets/images/industries/manufacturing.svg";
import miningImage from "@/assets/images/industries/mining.svg";
import healthcareImage from "@/assets/images/industries/healthcare.svg";
import buildingImage from "@/assets/images/industries/building.svg";
import technologyImage from "@/assets/images/industries/technology.svg";
import constructionImage from "@/assets/images/industries/construction.svg";
import storageIllustration from "@/assets/images/warehousing/storage.svg";
import pickPackIllustration from "@/assets/images/warehousing/pick-pack.svg";
import containerIllustration from "@/assets/images/warehousing/container.svg";
import scalingIllustration from "@/assets/images/warehousing/scaling.svg";
import warehouseHeroArtwork from "@/assets/images/warehousing/warehouse-hero.svg";
import carrierAirroad from "@/assets/images/carriers/air_road_specialised.png?url";
import carrierAllied from "@/assets/images/carriers/allied_express.png?url";
import carrierCouriersPlease from "@/assets/images/carriers/couriers_please.png?url";
import carrierDomestic from "@/assets/images/carriers/domestic_freight_express.png?url";
import carrierFollowmont from "@/assets/images/carriers/followmont.png?url";
import carrierNorthline from "@/assets/images/carriers/northline.png?url";
import carrierSadleirs from "@/assets/images/carriers/sadleirs.png?url";
import carrierStartrack from "@/assets/images/carriers/startrack.png?url";
import carrierTasConnect from "@/assets/images/carriers/tas_connect.png?url";
import carrierTasFreight from "@/assets/images/carriers/tas_freight.png?url";
import carrierTeamGlobal from "@/assets/images/carriers/team_global_express.png?url";
import carrierTfm from "@/assets/images/carriers/tfmxpress.png?url";
import carrierTnt from "@/assets/images/carriers/tnt.png?url";
import carrierVfs from "@/assets/images/carriers/vfs.png?url";
import carrierXpress from "@/assets/images/carriers/xpress_freight_management.png?url";

const freightManagementImage = freightManagementArtwork;
const trackingImage = trackingAnalyticsArtwork;
const managedServicesImage = managedCollaborationArtwork;
const sections = [
  { id: "freight-management", label: "Freight management" },
  { id: "tracking-reporting", label: "Tracking & reporting" },
  { id: "managed-services", label: "Managed services" },
  { id: "warehousing", label: "Warehousing" },
  { id: "managed-partners", label: "Managed partners" },
  { id: "industries", label: "Industries" },
];

const activeSection = ref(sections[0].id);
const route = useRoute();
const router = useRouter();
const observer = ref<IntersectionObserver | null>(null);
const carouselTrack = ref<HTMLDivElement | null>(null);
const baseCarouselWidth = ref(0);
const carouselOffset = ref(0);
const isCarouselPaused = ref(false);
const brokenCarrierLogos = ref<Set<string>>(new Set());
let animationFrameId: number | null = null;

const freightManagementItems = [
  {
    title: "Carrier network design",
    description:
      "We design networks that balance speed, cost, and reliability, tailored to your freight profile.",
  },
  {
    title: "Account management",
    description:
      "Your dedicated Account Manager learns your freight profile and service expectations, driving proactive management and alignment.",
  },
  {
    title: "Invoice reconciliation",
    description:
      "Single, reconciled invoices with errors eliminated up front, saving time and improving transparency.",
  },
  {
    title: "Carrier management",
    description:
      "Continuous performance, safety, and compliance oversight across your carrier base.",
  },
];

const trackingItems = [
  {
    title: "Business reviews",
    description:
      "Structured review cadence to keep goals, performance, and savings on track.",
  },
  {
    title: "Proactive reporting",
    description:
      "Live, actionable insights for every consignment to support faster decisions.",
  },
  {
    title: "Power BI - Commercials",
    description:
      "Commercial dashboards for rate analysis, DIFOT trends, lane profitability, and savings opportunities.",
  },
  {
    title: "Freightmate dashboard",
    description:
      "Centralised bookings, tracking, analytics, and alerts, keeping your freight in one place.",
  },
];

const managedServicesItems = [
  {
    title: "Bring your own account",
    description:
      "Keep your carrier agreements and benefit from TUCO's platform, analytics, and governance.",
  },
  {
    title: "Invoice reconciliation",
    description:
      "Automated checks ensure every charge aligns with agreed rates and surcharges.",
  },
  {
    title: "Carrier management",
    description:
      "Performance scorecards, safety reviews, and compliance programs guided by TUCO experts.",
  },
  {
    title: "Ops management",
    description:
      "TUCO operations support day-to-day execution with consistent response times.",
  },
  {
    title: "Commercial reviews",
    description:
      "Regular commercial analysis highlights optimisation opportunities and savings.",
  },
];

const warehouseHeroImage = warehouseHeroArtwork;

const warehousingServices = [
  {
    title: "Ambient & pallet storage",
    description:
      "Secure ambient, chilled, and carton storage with flexible footprint across national 3PL partners.",
    icon: storageIllustration,
    iconAlt: "Warehouse storage illustration",
  },
  {
    title: "Pick, pack & eCommerce fulfilment",
    description:
      "Order pick, pack, and dispatch services aligned to your carrier network and customer SLAs.",
    icon: pickPackIllustration,
    iconAlt: "Pick and pack illustration",
  },
  {
    title: "Container devanning & cross-dock",
    description:
      "Rapid unload, palletisation, and same-day cross-dock to keep imports moving into final mile.",
    icon: containerIllustration,
    iconAlt: "Container handling illustration",
  },
  {
    title: "Project & overflow capacity",
    description:
      "Short or long-term warehousing programs that flex with promotions, seasonality, and growth.",
    icon: scalingIllustration,
    iconAlt: "Scalable warehousing illustration",
  },
];

const transportCards = [
  {
    title: "Road freight",
    image: roadImage,
    imageAlt: "Linehaul trucks preparing for departure",
    description:
      "National metro, regional, and long-haul programs delivered with TUCO performance governance.",
  },
  {
    title: "Rail freight",
    image: railImage,
    imageAlt: "Intermodal freight train departing terminal",
    description:
      "Port and inland intermodal links that keep freight on schedule while trimming cost.",
  },
  {
    title: "Air freight",
    image: airImage,
    imageAlt: "Freight aircraft loading on tarmac",
    description:
      "Priority uplift for urgent freight with TUCO operators watching every milestone.",
  },
  {
    title: "Sea freight",
    image: seaImage,
    imageAlt: "Container vessel docked for loading",
    description:
      "Customs-led FCL and LCL programs that keep long-haul supply chains compliant and on-plan.",
  },
];

const industryCards = [
  {
    title: "FMCG",
    image: fmcgImage,
    imageAlt: "Fast-moving consumer goods logistics illustration",
    description:
      "Shelf-ready promotions and rapid replenishment flows stay on time, even at peak.",
  },
  {
    title: "Retail",
    image: retailImage,
    imageAlt: "Retail logistics illustration",
    description:
      "Omnichannel fulfilment connects stores, warehouses, and last mile into one branded experience.",
  },
  {
    title: "Industrial",
    image: manufacturingImage,
    imageAlt: "Industrial logistics illustration",
    description:
      "Precision inbound and outbound movements meet compliance and safety on every site.",
  },
  {
    title: "Mining",
    image: miningImage,
    imageAlt: "Mining logistics illustration",
    description:
      "Remote operations stay supplied through TUCO-managed linehaul, airbridge, and DG compliance.",
  },
  {
    title: "Healthcare",
    image: healthcareImage,
    imageAlt: "Healthcare logistics illustration",
    description:
      "Validated cold-chain networks protect every critical order from warehouse to ward.",
  },
  {
    title: "Building",
    image: buildingImage,
    imageAlt: "Building logistics illustration",
    description:
      "High-volume building materials arrive sequenced to site readiness with TUCO oversight.",
  },
  {
    title: "Technology",
    image: technologyImage,
    imageAlt: "Technology logistics illustration",
    description:
      "High-value devices move securely with white-glove execution and reverse logistics built in.",
  },
  {
    title: "Construction",
    image: constructionImage,
    imageAlt: "Construction logistics illustration",
    description:
      "Major projects stay on schedule with milestone-controlled staging, cranage, and delivery.",
  },
];

const carriers = [
  { name: "TFM Xpress", logo: carrierTfm },
  { name: "CouriersPlease", logo: carrierCouriersPlease },
  { name: "VFS", logo: carrierVfs },
  { name: "Allied Express", logo: carrierAllied },
  { name: "StarTrack", logo: carrierStartrack },
  { name: "AirRoad Specialised", logo: carrierAirroad },
  { name: "TNT", logo: carrierTnt },
  { name: "Domestic Freight Express", logo: carrierDomestic },
  { name: "Team Global Express", logo: carrierTeamGlobal },
  { name: "Tas Freight", logo: carrierTasFreight },
  { name: "Followmont", logo: carrierFollowmont },
  { name: "Northline", logo: carrierNorthline },
  { name: "Xpress Freight Management", logo: carrierXpress },
  { name: "TasConnect", logo: carrierTasConnect },
  { name: "Sadleirs", logo: carrierSadleirs },
];

const duplicatedCarriers = [...carriers, ...carriers];

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  activeSection.value = id;
  router.replace({ path: route.path, hash: `#${id}` }).catch(() => {});
  smoothScrollTo(target);
}

function pauseCarousel() {
  isCarouselPaused.value = true;
}

function resumeCarousel() {
  isCarouselPaused.value = false;
}

function updateCarouselMeasurements() {
  const track = carouselTrack.value;
  if (!track) return;
  baseCarouselWidth.value = track.scrollWidth / 2;
}

function stepCarousel() {
  if (!isCarouselPaused.value && baseCarouselWidth.value > 0) {
    carouselOffset.value += 0.6;
    if (carouselOffset.value >= baseCarouselWidth.value) {
      carouselOffset.value = 0;
    }
  }
  animationFrameId = requestAnimationFrame(stepCarousel);
}

onMounted(() => {
  nextTick(() => {
    setupObserver();
    updateCarouselMeasurements();
    if (route.hash) {
      syncHashScroll();
    } else {
      activeSection.value = sections[0].id;
    }
    stepCarousel();
    window.addEventListener("resize", updateCarouselMeasurements);
    setTimeout(updateCarouselMeasurements, 500);
  });
});

onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
  observer.value?.disconnect();
  window.removeEventListener("resize", updateCarouselMeasurements);
});

function setupObserver() {
  observer.value?.disconnect();
  observer.value = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) {
        activeSection.value = visible.target.id;
      }
    },
    {
      rootMargin: "-45% 0px -45% 0px",
      threshold: [0.25, 0.5, 0.75],
    },
  );
  sections.forEach((section) => {
    const el = document.getElementById(section.id);
    if (el) {
      observer.value?.observe(el);
    }
  });
}

function syncHashScroll() {
  if (!route.hash) return;
  const id = route.hash.replace("#", "");
  if (!id) return;
  activeSection.value = id;
  nextTick(() => {
    const target = document.getElementById(id);
    if (target) {
      smoothScrollTo(target);
    }
  });
}

function smoothScrollTo(element: HTMLElement) {
  const headerOffset = 120;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = Math.max(elementPosition - headerOffset, 0);
  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}

watch(
  () => route.hash,
  (hash: string | null, oldHash: string | null) => {
    if (hash && hash !== oldHash) {
      syncHashScroll();
    }
  },
);

function handleLogoLoad() {
  updateCarouselMeasurements();
}

function handleCarrierError(logo: string) {
  if (!brokenCarrierLogos.value.has(logo)) {
    brokenCarrierLogos.value.add(logo);
    console.warn(`[services] carrier logo failed to load: ${logo}`);
  }
  updateCarouselMeasurements();
}

function isLogoBroken(logo: string) {
  return brokenCarrierLogos.value.has(logo);
}
</script>

<style scoped>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.motion-safe\:animate-fadeUp {
  animation: fadeUp 0.5s ease-out both;
}
</style>
