<template>
  <div class="bg-[var(--color-tuco-sky)]/10">
    <header class="bg-[#f8f9f9] text-[var(--color-tuco-navy)]">
      <div class="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <p
          class="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-tuco-blue)]"
        >
          Our services
        </p>
        <h1 class="mt-2 text-4xl font-semibold md:text-5xl">
          Our services, delivered your way
        </h1>
        <p
          class="mt-3 max-w-3xl text-base leading-relaxed text-[var(--color-tuco-slate)] md:text-lg"
        >
          Comprehensive freight management built around your business.
        </p>
      </div>
    </header>

    <div
      class="sticky top-[80px] z-20 border-b border-[var(--color-tuco-line)] bg-[#f8f9f9]/95 backdrop-blur transition-all duration-200"
      :class="isCondensed ? 'py-3 shadow-sm' : 'py-4'"
    >
      <div
        class="mx-auto flex max-w-7xl flex-nowrap items-center gap-3 overflow-x-auto px-4 md:px-6 lg:px-8"
      >
        <button
          v-for="section in sections"
          :key="section.id"
          type="button"
          :aria-pressed="activeSection === section.id"
          @click="scrollToSection(section.id)"
          class="shrink-0 min-w-[140px] rounded-lg border border-[var(--color-tuco-line)] bg-white px-4 py-3 text-left text-sm font-semibold text-[var(--color-tuco-navy)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38a2ca] sm:min-w-[160px]"
          :class="[
            activeSection === section.id
              ? 'border-[#38a2ca] bg-[#e9f5f7] text-[#38a2ca] shadow-md/20'
              : '',
            isCondensed ? 'px-3 py-2 text-xs' : '',
          ]"
        >
          {{ section.label }}
        </button>
      </div>
    </div>

    <main class="flex flex-col">
      <section
        id="freight-management"
        aria-labelledby="freight-management-title"
        class="service-hero bg-white py-16 md:py-20"
      >
        <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <!-- Hero: Image Right -->
          <div class="hero hero--image-right">
            <div class="hero__content">
              <p class="hero__label">Freight management (4PL)</p>
              <h2 id="freight-management-title" class="hero__heading">
                Freight management
              </h2>
              <p class="hero__narrative">
                {{ freightNarrative }}
              </p>
            </div>

            <div class="hero__media">
              <div class="hero__image-wrapper">
                <img
                  :src="freightManagementImage"
                  alt="TUCO experts coordinating freight operations"
                  class="hero__image"
                />
              </div>
            </div>
          </div>

          <!-- Feature groups -->
          <div class="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
            <div
              v-for="group in freightGroups"
              :key="group.title"
              class="flex flex-col rounded-xl bg-[#f9fafb] p-5"
            >
              <h3 class="text-base font-semibold text-[var(--color-tuco-navy)]">
                {{ group.title }}
              </h3>
              <p
                class="mt-2 flex-grow text-sm text-[var(--color-tuco-slate)] leading-relaxed"
              >
                {{ group.body }}
              </p>
              <ul class="mt-3 space-y-1.5">
                <li
                  v-for="bullet in group.bullets"
                  :key="bullet"
                  class="flex items-start gap-2.5 text-sm text-[var(--color-tuco-navy)]"
                >
                  <span
                    class="mt-1.5 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#38a2ca]"
                  />
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Closing statement with metrics strip -->
          <div class="mt-8 space-y-4">
            <div
              class="flex flex-wrap items-center justify-center gap-3 rounded-lg bg-[#e9f5f7] px-4 py-3 text-xs font-semibold text-black"
            >
              <template v-for="(metric, index) in freightMetrics" :key="metric">
                <span>{{ metric }}</span>
                <span
                  v-if="index !== freightMetrics.length - 1"
                  class="hidden h-5 w-px bg-[var(--color-tuco-line)] sm:inline-flex"
                />
              </template>
            </div>
            <p
              class="text-center text-sm text-[var(--color-tuco-slate)] leading-relaxed md:text-base"
            >
              Customers typically see tighter DIFOT, improved exception
              management, and clearer commercial performance through governed
              booking, proactive communication, and continuous optimisation.
            </p>
          </div>

          <!-- CTA -->
          <div
            class="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-tuco-line)] pt-8"
          >
            <p class="text-sm text-[var(--color-tuco-slate)] md:text-base">
              Want to see our partner network and industries we support?
            </p>
            <button
              type="button"
              @click="openNetworkModal"
              class="inline-flex items-center gap-2 rounded-md border border-[var(--color-tuco-blue)] px-4 py-2 text-sm font-semibold text-[var(--color-tuco-navy)] transition hover:bg-[var(--color-tuco-blue)]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tuco-blue)] focus-visible:ring-offset-2"
            >
              Explore our network & industries
            </button>
          </div>
        </div>
      </section>

      <section
        id="managed-services"
        aria-labelledby="managed-services-title"
        class="service-hero bg-[#f9f9f9] py-16 md:py-20"
      >
        <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <!-- Hero: Image Left -->
          <div class="hero hero--image-left">
            <div class="hero__content">
              <p class="hero__label">Managed services</p>
              <h2 id="managed-services-title" class="hero__heading">
                Managed services
              </h2>
              <p class="hero__narrative">
                {{ managedNarrative }}
              </p>
            </div>

            <div class="hero__media">
              <div class="hero__image-wrapper">
                <img
                  :src="managedServicesImage"
                  alt="TUCO team overseeing managed carrier partnerships"
                  class="hero__image"
                />
              </div>
            </div>
          </div>

          <!-- Feature cards -->
          <div class="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
            <div
              v-for="bullet in managedFeatureBullets"
              :key="bullet"
              class="flex flex-col rounded-xl bg-white p-5"
            >
              <p class="text-sm text-[var(--color-tuco-navy)] leading-relaxed">
                {{ bullet }}
              </p>
            </div>
          </div>

          <!-- Closing statement with metrics strip -->
          <div class="mt-8 space-y-4">
            <div
              class="flex flex-wrap items-center justify-center gap-3 rounded-lg bg-[#e9f5f7] px-4 py-3 text-xs font-semibold text-black"
            >
              <template v-for="(metric, index) in managedMetrics" :key="metric">
                <span>{{ metric }}</span>
                <span
                  v-if="index !== managedMetrics.length - 1"
                  class="hidden h-5 w-px bg-[var(--color-tuco-line)] sm:inline-flex"
                />
              </template>
            </div>
            <p
              class="text-center text-sm text-[var(--color-tuco-slate)] leading-relaxed md:text-base"
            >
              Managed Services customers retain carrier relationships while TUCO
              applies analytics, invoice reconciliation, and performance
              reviews--unlocking 15%+ savings, 20+ hours back weekly, and fewer
              support escalations.
            </p>
          </div>
        </div>
      </section>

      <section
        id="warehousing"
        aria-labelledby="warehousing-title"
        class="service-hero bg-white py-16 md:py-20"
      >
        <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <!-- Hero: Image Right -->
          <div class="hero hero--image-right">
            <div class="hero__content">
              <p class="hero__label">Warehousing</p>
              <h2 id="warehousing-title" class="hero__heading">Warehousing</h2>
              <p class="hero__narrative">
                {{ warehousingNarrative }}
              </p>
            </div>

            <div class="hero__media">
              <div class="hero__image-wrapper">
                <img
                  :src="warehouseHeroImage"
                  alt="Modern TUCO warehouse operations"
                  class="hero__image"
                />
              </div>
            </div>
          </div>

          <!-- Feature cards -->
          <div class="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
            <div
              v-for="bullet in warehousingFeatureBullets"
              :key="bullet"
              class="flex flex-col rounded-xl bg-[#f9fafb] p-5"
            >
              <p class="text-sm text-[var(--color-tuco-navy)] leading-relaxed">
                {{ bullet }}
              </p>
            </div>
          </div>

          <!-- Metrics strip -->
          <div class="mt-8">
            <div
              class="flex flex-wrap items-center justify-center gap-3 rounded-lg bg-[#e9f5f7] px-4 py-3 text-xs font-semibold text-black"
            >
              <template
                v-for="(metric, index) in warehousingMetrics"
                :key="metric"
              >
                <span>{{ metric }}</span>
                <span
                  v-if="index !== warehousingMetrics.length - 1"
                  class="hidden h-5 w-px bg-[var(--color-tuco-line)] sm:inline-flex"
                />
              </template>
            </div>
          </div>
        </div>
      </section>

      <section
        id="fleet-management"
        aria-labelledby="fleet-management-title"
        class="service-hero bg-[#f9f9f9] py-16 md:py-20"
      >
        <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <!-- Hero: Image Left -->
          <div class="hero hero--image-left">
            <div class="hero__content">
              <p class="hero__label">Fleet management</p>
              <h2 id="fleet-management-title" class="hero__heading">
                Fleet management
              </h2>
              <p class="hero__narrative">
                {{ fleetNarrative }}
              </p>
            </div>

            <div class="hero__media">
              <div class="hero__image-wrapper">
                <img
                  :src="fleetManagementImage"
                  alt="TUCO specialists coordinating dedicated fleet operations"
                  class="hero__image"
                />
              </div>
            </div>
          </div>

          <!-- Feature cards -->
          <div class="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
            <div
              v-for="bullet in fleetFeatureBullets"
              :key="bullet"
              class="flex flex-col rounded-xl bg-white p-5"
            >
              <p class="text-sm text-[var(--color-tuco-navy)] leading-relaxed">
                {{ bullet }}
              </p>
            </div>
          </div>

          <!-- Closing statement with metrics strip -->
          <div class="mt-8 space-y-4">
            <div
              class="flex flex-wrap items-center justify-center gap-3 rounded-lg bg-[#e9f5f7] px-4 py-3 text-xs font-semibold text-black"
            >
              <template v-for="(metric, index) in fleetMetrics" :key="metric">
                <span>{{ metric }}</span>
                <span
                  v-if="index !== fleetMetrics.length - 1"
                  class="hidden h-5 w-px bg-[var(--color-tuco-line)] sm:inline-flex"
                />
              </template>
            </div>
            <p
              class="text-center text-sm text-[var(--color-tuco-slate)] leading-relaxed md:text-base"
            >
              {{ fleetClosing }}
            </p>
          </div>
        </div>
      </section>

      <Teleport to="body">
        <div
          v-if="isNetworkModalOpen"
          class="fixed inset-0 z-40 flex items-center justify-center px-4 py-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="network-modal-title"
        >
          <div
            class="absolute inset-0 bg-[#0c233f]/80 backdrop-blur-[1px]"
            @click="closeNetworkModal"
          />
          <div
            ref="modalRef"
            class="relative z-10 w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-[0_20px_48px_rgba(12,35,63,0.25)]"
            tabindex="-1"
          >
            <header
              class="flex items-start justify-between gap-4 border-b border-[var(--color-tuco-line)] px-6 py-5"
            >
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
                >
                  Partners & Industries
                </p>
                <h3
                  id="network-modal-title"
                  class="mt-1 text-2xl font-semibold text-[var(--color-tuco-navy)]"
                >
                  Our Network & Industries
                </h3>
              </div>
              <button
                type="button"
                @click="closeNetworkModal"
                class="text-[var(--color-tuco-slate)] transition hover:text-[var(--color-tuco-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tuco-blue)] focus-visible:ring-offset-2"
                aria-label="Close modal"
              >
                <span aria-hidden="true" class="text-2xl leading-none"
                  >&times;</span
                >
              </button>
            </header>
            <div class="max-h-[74vh] overflow-y-auto px-6 py-6">
              <p class="text-sm text-[var(--color-tuco-slate)] leading-relaxed">
                TUCO's relationships across road, rail, air, and sea ensure you
                have the right carrier for every shipment.
              </p>

              <div class="mt-8">
                <p
                  class="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
                >
                  Managed partners
                </p>
                <h4
                  class="mt-1 text-lg font-semibold text-[var(--color-tuco-navy)]"
                >
                  Managed partners
                </h4>
                <p
                  class="mt-2 text-sm text-[var(--color-tuco-slate)] leading-relaxed"
                >
                  Our network spans road, rail, air, and sea, with specialist
                  partners for complex movements.
                </p>

                <div class="mt-6 grid gap-4 sm:grid-cols-2">
                  <article
                    v-for="mode in transportCards"
                    :key="mode.title"
                    class="flex items-start gap-3"
                  >
                    <div
                      class="flex h-10 w-10 shrink-0 items-center justify-center"
                    >
                      <img
                        :src="mode.image"
                        :alt="mode.imageAlt"
                        class="h-8 w-8 object-contain"
                      />
                    </div>
                    <div>
                      <h5
                        class="text-sm font-semibold text-[var(--color-tuco-navy)]"
                      >
                        {{ mode.title }}
                      </h5>
                      <p
                        class="mt-1 text-sm text-[var(--color-tuco-slate)] leading-relaxed"
                      >
                        {{ mode.description }}
                      </p>
                    </div>
                  </article>
                </div>

                <div class="mt-8 border-t border-[var(--color-tuco-line)] pt-6">
                  <p
                    class="text-sm font-semibold text-[var(--color-tuco-navy)]"
                  >
                    Carrier partners
                  </p>
                  <div
                    ref="modalLogoTrack"
                    class="modal-logo-track mt-4 flex gap-6 overflow-hidden"
                  >
                    <div
                      v-for="(carrier, index) in duplicatedCarriers"
                      :key="`${carrier.name}-${index}`"
                      class="flex h-14 w-40 flex-none items-center justify-center px-3"
                    >
                      <img
                        v-if="!isLogoBroken(carrier.logo)"
                        :src="carrier.logo"
                        :alt="`${carrier.name} logo`"
                        class="mx-auto h-auto max-h-10 w-full object-contain"
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

              <div class="mt-10 border-t border-[var(--color-tuco-line)] pt-8">
                <p
                  class="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
                >
                  Industries we support
                </p>
                <h4
                  class="mt-1 text-lg font-semibold text-[var(--color-tuco-navy)]"
                >
                  Industries we support
                </h4>
                <p
                  class="mt-2 text-sm text-[var(--color-tuco-slate)] leading-relaxed"
                >
                  Tailored freight programs for manufacturing, retail,
                  healthcare, and more, built to meet the exact service promises
                  your customers expect.
                </p>

                <div class="mt-6 grid gap-4 sm:grid-cols-2">
                  <article
                    v-for="industry in industryCards"
                    :key="industry.title"
                    class="flex items-start gap-3"
                  >
                    <div
                      class="flex h-10 w-10 shrink-0 items-center justify-center"
                    >
                      <img
                        :src="industry.image"
                        :alt="industry.imageAlt"
                        class="h-8 w-8 object-contain"
                      />
                    </div>
                    <div>
                      <h5
                        class="text-sm font-semibold text-[var(--color-tuco-navy)]"
                      >
                        {{ industry.title }}
                      </h5>
                      <p
                        class="mt-1 text-sm text-[var(--color-tuco-slate)] leading-relaxed"
                      >
                        {{ industry.description }}
                      </p>
                    </div>
                  </article>
                </div>

                <div
                  class="mt-8 flex justify-center border-t border-[var(--color-tuco-line)] pt-6"
                >
                  <RouterLink
                    to="/contact"
                    class="inline-flex items-center gap-2 rounded-md border border-[var(--color-tuco-blue)] px-5 py-2 text-sm font-semibold text-[var(--color-tuco-navy)] transition hover:bg-[var(--color-tuco-blue)]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tuco-blue)] focus-visible:ring-offset-2"
                  >
                    Talk to us about your industry
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Teleport>
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
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import freightManagementArtwork from "@/assets/images/services/freight_management.jpg";
import managedCollaborationArtwork from "@/assets/images/services/managed_services.jpg";
import fleetManagement from "@/assets/images/services/fleet_management.jpg";
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
import warehouseHeroArtwork from "@/assets/images/services/warehouse-hero.jpg";
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
const managedServicesImage = managedCollaborationArtwork;
const sections = [
  { id: "freight-management", label: "Freight management" },
  { id: "managed-services", label: "Managed services" },
  { id: "warehousing", label: "Warehousing" },
  { id: "fleet-management", label: "Fleet management" },
];

const activeSection = ref(sections[0].id);
const isCondensed = ref(false);
const route = useRoute();
const router = useRouter();
const observer = ref<IntersectionObserver | null>(null);
const brokenCarrierLogos = ref<Set<string>>(new Set());
const isNetworkModalOpen = ref(false);
const modalRef = ref<HTMLElement | null>(null);
const previouslyFocusedElement = ref<HTMLElement | null>(null);
const previousBodyOverflow = ref<string>("");
const focusableSelectors =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])';
const modalLogoTrack = ref<HTMLDivElement | null>(null);
let modalCarouselFrame: number | null = null;
let lastScrollY = 0;
let isTicking = false;

const freightNarrative =
  "From dispatch to delivery, TUCO manages your end-to-end freight operation with precision - covering allocation, booking, live tracking, and performance optimisation.";
const freightGroups = [
  {
    title: "Plan & Governance",
    body: "TUCO designs carrier networks that balance speed, cost, and reliability. Your dedicated Account Manager runs structured reviews, manages service expectations, and governs allocation and booking to match every load to the right carrier.",
    bullets: [
      "Smart allocation & booking",
      "Account management & SLA governance",
      "Carrier network design",
    ],
  },
  {
    title: "Tracking & Communication",
    body: "TUCO monitors every milestone and keeps customers informed with proactive updates, exception alerts, and real-time visibility across your supply chain.",
    bullets: [
      "Live tracking with proactive communication",
      "Exception alerts and milestone notifications",
      "Freightmate visibility tools",
    ],
  },
  {
    title: "Commercials & Performance",
    body: "Power BI dashboards, reconciled invoices, and commercial reviews ensure financial accuracy, highlight savings opportunities, and maintain safety and compliance across every carrier.",
    bullets: [
      "Commercial reviews & analytics",
      "Invoice reconciliation & cost control",
      "Performance optimisation & safety oversight",
    ],
  },
];
const freightMetrics = [
  "Stronger DIFOT & service consistency",
  "Fewer exceptions",
  "Optimised carrier mix & lower freight cost",
];

const managedNarrative =
  "Carrier control with TUCO oversight, analytics and audits. Choose from tracking, invoice audits or dashboards--while keeping your own carrier relationships.";
const managedFeatureBullets = [
  "Use your own carriers: Keep existing contracts while leveraging TUCO's platform, analytics, and governance.",
  "Daily oversight & audits: Invoice reconciliation, ops management, and scorecards to keep carriers aligned and accurate.",
  "Commercial reviews & optimisation: TUCO analysts deliver regular performance reviews and cost-saving recommendations.",
];
const managedMetrics = [
  "Cleaner invoices",
  "Reduced admin workload",
  "Faster insights with centralised reporting",
];

const warehouseHeroImage = warehouseHeroArtwork;
const warehousingNarrative =
  "TUCO connects you with national 3PL partners so inventory stays visible, orders move fast, and overflow capacity is always ready. Reliable capacity, connected inventory, and faster turns. Warehousing is orchestrated through Freightmate for real-time visibility and integrated SLAs.";
const warehousingFeatureBullets = [
  "Ambient & pallet storage across national partners for secure, flexible capacity.",
  "Pick/pack, eCommerce fulfilment, and container devanning & cross-dock aligned to your carrier network and SLAs.",
  "Project & overflow capacity that scales with promotions, seasonality, and growth.",
];
const warehousingMetrics = [
  "Reliable capacity",
  "Connected inventory",
  "Faster turns",
];

const fleetManagementImage = fleetManagement;
const fleetNarrative =
  "TUCO manages your dedicated fleet on your behalf - planning routes, sequencing replenishment orders, and coordinating drivers so every movement supports your freight program with precision and reliability.";
const fleetFeatureBullets = [
  "Route planning & daily run scheduling with replenishment order sequencing",
  "Real-time fleet visibility via telematics with driver scheduling & coordination",
  "Commercial reviews, payment accuracy & operational performance insights",
];
const fleetMetrics = [
  "Reliable deliveries",
  "Fewer manual touchpoints",
  "Improved fleet efficiency",
];
const fleetClosing =
  "Customers see more reliable deliveries, fewer manual touchpoints and improved fleet efficiency when TUCO manages their fleet operations.";

const transportCards = [
  {
    title: "Road freight",
    image: roadImage,
    imageAlt: "Linehaul trucks preparing for departure",
    description:
      "National metro, regional, and long-haul programs delivered with TUCO performance governance.",
    example: "Metro, regional, and long-haul programs with TUCO governance.",
  },
  {
    title: "Rail freight",
    image: railImage,
    imageAlt: "Intermodal freight train departing terminal",
    description:
      "Port and inland intermodal links that keep freight on schedule while trimming cost.",
    example: "Port and inland intermodal links tuned to schedules and cost.",
  },
  {
    title: "Air freight",
    image: airImage,
    imageAlt: "Freight aircraft loading on tarmac",
    description:
      "Priority uplift for urgent freight with TUCO operators watching every milestone.",
    example: "Priority uplift for urgent freight with milestone monitoring.",
  },
  {
    title: "Sea freight",
    image: seaImage,
    imageAlt: "Container vessel docked for loading",
    description:
      "Customs-led FCL and LCL programs that keep long-haul supply chains compliant and on-plan.",
    example:
      "FCL and LCL programs that keep long-haul freight compliant and on-plan.",
  },
];

const industryCards = [
  {
    title: "FMCG",
    image: fmcgImage,
    imageAlt: "Fast-moving consumer goods logistics illustration",
    description:
      "Shelf-ready promotions and rapid replenishment flows stay on time, even at peak.",
    challenge: "Keeps peak promotions flowing with DIFOT and visibility.",
  },
  {
    title: "Retail",
    image: retailImage,
    imageAlt: "Retail logistics illustration",
    description:
      "Omnichannel fulfilment connects stores, warehouses, and last mile into one branded experience.",
    challenge:
      "Connects store and eCommerce fulfilment with one branded experience.",
  },
  {
    title: "Industrial",
    image: manufacturingImage,
    imageAlt: "Industrial logistics illustration",
    description:
      "Precision inbound and outbound movements meet compliance and safety on every site.",
    challenge:
      "Ensures inbound and outbound freight meets compliance and safety on every site.",
  },
  {
    title: "Mining",
    image: miningImage,
    imageAlt: "Mining logistics illustration",
    description:
      "Remote operations stay supplied through TUCO-managed linehaul, airbridge, and DG compliance.",
    challenge: "Keeps remote operations supplied with compliant DG movements.",
  },
  {
    title: "Healthcare",
    image: healthcareImage,
    imageAlt: "Healthcare logistics illustration",
    description:
      "Validated cold-chain networks protect every critical order from warehouse to ward.",
    challenge: "Protects validated cold-chain orders from warehouse to ward.",
  },
  {
    title: "Building",
    image: buildingImage,
    imageAlt: "Building logistics illustration",
    description:
      "High-volume building materials arrive sequenced to site readiness with TUCO oversight.",
    challenge:
      "Sequences materials to site readiness with oversight on every load.",
  },
  {
    title: "Technology",
    image: technologyImage,
    imageAlt: "Technology logistics illustration",
    description:
      "High-value devices move securely with white-glove execution and reverse logistics built in.",
    challenge:
      "Moves high-value devices securely with reverse logistics ready.",
  },
  {
    title: "Construction",
    image: constructionImage,
    imageAlt: "Construction logistics illustration",
    description:
      "Major projects stay on schedule with milestone-controlled staging, cranage, and delivery.",
    challenge:
      "Controls staging and cranage milestones to hold project schedules.",
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

const duplicatedCarriers = computed(() => [...carriers, ...carriers]);

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  activeSection.value = id;
  router.replace({ path: route.path, hash: `#${id}` }).catch(() => {});
  smoothScrollTo(target);
}

function openNetworkModal() {
  previouslyFocusedElement.value =
    (document.activeElement as HTMLElement | null) ?? null;
  isNetworkModalOpen.value = true;
  toggleBodyScroll(true);
  nextTick(() => {
    focusModal();
    startModalCarousel();
  });
}

function closeNetworkModal() {
  isNetworkModalOpen.value = false;
  toggleBodyScroll(false);
  stopModalCarousel();
  previouslyFocusedElement.value?.focus?.();
}

function focusModal() {
  const focusable = getFocusableElements();
  if (focusable.length) {
    focusable[0].focus();
    return;
  }
  modalRef.value?.focus();
}

function toggleBodyScroll(disable: boolean) {
  if (disable) {
    previousBodyOverflow.value = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = previousBodyOverflow.value;
    previousBodyOverflow.value = "";
  }
}

function getFocusableElements() {
  const container = modalRef.value;
  if (!container) return [];
  return Array.from(
    container.querySelectorAll<HTMLElement>(focusableSelectors),
  ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
}

function handleModalKeydown(event: KeyboardEvent) {
  if (!isNetworkModalOpen.value) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeNetworkModal();
    return;
  }
  if (event.key !== "Tab") return;

  const focusable = getFocusableElements();
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement as HTMLElement | null;

  if (event.shiftKey) {
    if (!active || !modalRef.value?.contains(active) || active === first) {
      event.preventDefault();
      last.focus();
    }
    return;
  }

  if (!active || !modalRef.value?.contains(active)) {
    event.preventDefault();
    first.focus();
    return;
  }

  if (active === last) {
    event.preventDefault();
    first.focus();
  }
}

function handleCarrierError(logo: string) {
  if (!brokenCarrierLogos.value.has(logo)) {
    brokenCarrierLogos.value.add(logo);
    console.warn(`[services] carrier logo failed to load: ${logo}`);
  }
}

function isLogoBroken(logo: string) {
  return brokenCarrierLogos.value.has(logo);
}

function startModalCarousel() {
  stopModalCarousel();
  const step = () => {
    const track = modalLogoTrack.value;
    if (!track) {
      modalCarouselFrame = null;
      return;
    }
    const halfWidth = track.scrollWidth / 2;
    if (halfWidth <= 0) {
      modalCarouselFrame = requestAnimationFrame(step);
      return;
    }
    const stepSize = 0.8;
    track.scrollLeft += stepSize;
    if (track.scrollLeft >= halfWidth) {
      track.scrollLeft = 0;
    }
    modalCarouselFrame = requestAnimationFrame(step);
  };
  modalCarouselFrame = requestAnimationFrame(step);
}

function stopModalCarousel() {
  if (modalCarouselFrame !== null) {
    cancelAnimationFrame(modalCarouselFrame);
    modalCarouselFrame = null;
  }
}

const handleResize = () => {
  handleHeroCondense();
};

onMounted(() => {
  nextTick(() => {
    setupObserver();
    if (route.hash) {
      syncHashScroll();
    } else {
      activeSection.value = sections[0].id;
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScrollThrottled, { passive: true });
    window.addEventListener("keydown", handleModalKeydown);
    handleHeroCondense();
  });
});

onBeforeUnmount(() => {
  observer.value?.disconnect();
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("scroll", handleScrollThrottled);
  window.removeEventListener("keydown", handleModalKeydown);
  toggleBodyScroll(false);
  stopModalCarousel();
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
  const headerOffset = isCondensed.value ? 110 : 140;
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

watch(isNetworkModalOpen, (open) => {
  if (open) {
    window.addEventListener("keydown", handleModalKeydown);
    nextTick(() => startModalCarousel());
  } else {
    window.removeEventListener("keydown", handleModalKeydown);
    stopModalCarousel();
  }
});

function handleScrollThrottled() {
  lastScrollY = window.scrollY;
  if (!isTicking) {
    isTicking = true;
    requestAnimationFrame(() => {
      handleHeroCondense(lastScrollY);
      isTicking = false;
    });
  }
}

function handleHeroCondense(y = window.scrollY) {
  const collapseAt = 4;
  const nextCondensed = y > collapseAt;
  if (nextCondensed !== isCondensed.value) {
    isCondensed.value = nextCondensed;
  }
}
</script>

<style scoped>
/* ==========================================================================
   Hero Component - Reusable layout with alternating image positions
   ========================================================================== */

/* Base hero layout */
.hero {
  display: grid;
  gap: 1.5rem;
  align-items: center;
}

/* Hero content block */
.hero__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero__label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-tuco-blue);
}

.hero__heading {
  margin-top: 0.75rem;
  font-size: 1.875rem;
  font-weight: 600;
  color: var(--color-tuco-navy);
  line-height: 1.2;
}

.hero__narrative {
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.625;
  color: var(--color-tuco-slate);
}

/* Hero media block */
.hero__media {
  order: -1; /* Image first on mobile */
}

.hero__image-wrapper {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Desktop breakpoint */
@media (min-width: 1024px) {
  .hero {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .hero__heading {
    font-size: 3rem;
  }

  .hero__narrative {
    font-size: 1.125rem;
  }

  /* Image Right variant (default desktop behavior) */
  .hero--image-right .hero__content {
    order: 1;
  }

  .hero--image-right .hero__media {
    order: 2;
  }

  /* Image Left variant */
  .hero--image-left .hero__content {
    order: 2;
  }

  .hero--image-left .hero__media {
    order: 1;
  }
}

/* Medium screens */
@media (min-width: 768px) {
  .hero__heading {
    font-size: 2.25rem;
  }
}

/* ==========================================================================
   Legacy styles
   ========================================================================== */

.brand-bullet {
  background-color: #38a2ca;
  border-radius: 9999px;
  display: inline-flex;
  height: 10px;
  width: 10px;
  flex-shrink: 0;
}

.modal-logo-track {
  scrollbar-width: none;
}

.modal-logo-track::-webkit-scrollbar {
  display: none;
}

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
