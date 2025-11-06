<template>
  <div class="min-h-full bg-[var(--color-tuco-sky)]/20">
    <div class="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
      <header class="space-y-4">
        <div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
          >
            Tracking
          </p>
          <h1
            class="text-4xl font-semibold text-[var(--color-tuco-navy)] md:text-5xl"
          >
            Freight tracking
          </h1>
          <p class="mt-2 text-[var(--color-tuco-slate)] md:text-lg">
            Live shipment status and milestone history for your consignments.
          </p>
        </div>

        <div
          class="rounded-2xl border border-[var(--color-tuco-line)] bg-[var(--color-tuco-card)] p-6 shadow-lg/5"
        >
          <form
            @submit.prevent="handleSubmit"
            class="grid gap-4 md:grid-cols-[1fr_auto] md:items-center"
          >
            <div class="space-y-3">
              <label
                class="text-xs font-semibold uppercase tracking-widest text-[var(--color-tuco-blue)]"
                for="connote-input"
              >
                Enter connote number
              </label>
              <div
                class="flex items-center gap-3 rounded-xl border border-[var(--color-tuco-line)] bg-white px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[var(--color-tuco-blue)] focus-within:ring-offset-2 focus-within:ring-offset-white"
              >
                <input
                  id="connote-input"
                  v-model="query"
                  type="text"
                  inputmode="text"
                  autocomplete="off"
                  class="h-full flex-1 border-none bg-transparent text-base text-[var(--color-tuco-navy)] outline-none md:text-lg"
                  placeholder="Enter connote number"
                />
                <button
                  v-if="query"
                  type="button"
                  @click="clearQuery"
                  class="rounded-full p-1 text-[var(--color-tuco-slate)] transition hover:bg-[var(--color-tuco-sky)]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tuco-blue)] focus-visible:ring-offset-2"
                  aria-label="Clear connote number"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              class="flex flex-wrap items-center gap-4 md:justify-end md:self-center"
            >
              <div
                v-if="statusChip"
                :class="[
                  'rounded-full px-3 py-1 text-xs font-semibold ring-1',
                  statusChip.className,
                ]"
                role="status"
              >
                {{ statusChip.label }}
              </div>
              <button
                type="submit"
                class="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tuco-blue)] focus-visible:ring-offset-2"
              >
                Track shipment
              </button>
            </div>
          </form>
          <div
            v-if="errorMessage"
            class="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
          >
            {{ errorMessage }}
          </div>
          <div
            v-else-if="!trackingData && !loading"
            class="mt-4 rounded-xl border border-[var(--color-tuco-line)] bg-[var(--color-tuco-sky)]/40 px-4 py-3 text-sm text-[var(--color-tuco-slate)]"
          >
            Enter a connote to view live tracking updates.
          </div>
        </div>
      </header>

      <section v-if="loading" class="mt-10">
        <div
          class="rounded-2xl border border-[var(--color-tuco-line)] bg-[var(--color-tuco-card)] p-6 shadow-lg/5"
        >
          <div class="flex items-center gap-3 text-[var(--color-tuco-slate)]">
            <svg
              class="h-5 w-5 animate-spin text-[var(--color-tuco-blue)]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Fetching latest tracking updates...
          </div>
        </div>
      </section>

      <section v-if="trackingData && !loading" class="mt-10 space-y-10">
        <div
          class="rounded-2xl border border-[var(--color-tuco-line)] bg-[var(--color-tuco-card)] p-6 shadow-lg/5"
        >
          <div class="flex flex-wrap items-center gap-4">
            <span
              class="rounded-full px-3 py-1 text-xs font-semibold ring-1"
              :class="statusBadge.className"
            >
              {{ statusBadge.label }}
            </span>
          </div>
          <dl class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt
                class="text-xs font-semibold uppercase tracking-widest text-[var(--color-tuco-slate)]"
              >
                Connote
              </dt>
              <dd
                class="mt-1 text-lg font-semibold text-[var(--color-tuco-navy)]"
              >
                {{ trackingData.ConnoteNumber }}
              </dd>
            </div>
            <div>
              <dd class="mt-1 text-[var(--color-tuco-navy)]">
                {{ trackingData.carrierDisplayName || "-" }}
              </dd>
              <dd class="mt-1 text-[var(--color-tuco-navy)]">
                {{ trackingData.carrierDisplayName || "-" }}
              </dd>
            </div>
            <div>
              <dt
                class="text-xs font-semibold uppercase tracking-widest text-[var(--color-tuco-slate)]"
              >
                Service
              </dt>
              <dd class="mt-1 text-[var(--color-tuco-navy)]">
                {{ trackingData.serviceType || "-" }}
              </dd>
            </div>
            <div>
              <dt
                class="text-xs font-semibold uppercase tracking-widest text-[var(--color-tuco-slate)]"
              >
                From
              </dt>
              <dd class="mt-1 text-[var(--color-tuco-navy)]">
                {{ formatLocation(trackingData.senderAddressSuburb) }}
              </dd>
            </div>
            <div>
              <dt
                class="text-xs font-semibold uppercase tracking-widest text-[var(--color-tuco-slate)]"
              >
                To
              </dt>
              <dd class="mt-1 text-[var(--color-tuco-navy)]">
                {{ formatLocation(trackingData.deliveryAddressSuburb) }}
              </dd>
            </div>
            <div>
              <dt
                class="text-xs font-semibold uppercase tracking-widest text-[var(--color-tuco-slate)]"
              >
                Last update
              </dt>
              <dd class="mt-1 text-[var(--color-tuco-navy)]">
                <span v-if="latestEvent">
                  {{ toLocal(latestEvent.DateTime) }}
                  <span class="text-xs text-[var(--color-tuco-slate)]"
                    >({{ timeAgo(latestEvent.DateTime) }})</span
                  >
                </span>
                <span v-else>-</span>
              </dd>
            </div>
          </dl>
        </div>

        <section
          class="rounded-2xl border border-[var(--color-tuco-line)] bg-[var(--color-tuco-card)] p-6 shadow-lg/5"
        >
          <h2 class="text-xl font-semibold text-[var(--color-tuco-navy)]">
            Tracking timeline
          </h2>
          <p class="mt-1 text-sm text-[var(--color-tuco-slate)]">
            Reverse chronological view of each milestone.
          </p>
          <ol v-if="timelineEvents.length" class="mt-6 space-y-6">
            <li
              v-for="event in timelineEvents"
              :key="event.DateTime + event.Status"
              class="relative pl-6"
            >
              <span
                class="absolute left-0 top-1 h-3 w-3 rounded-full ring-4"
                :class="timelineMarkerClass(event.UpdateStatus)"
              />
              <div
                class="flex flex-col gap-2 rounded-xl border border-[var(--color-tuco-line)] bg-white px-4 py-3 shadow-sm"
              >
                <div class="flex flex-wrap items-center gap-2">
                  <p
                    class="text-sm font-semibold text-[var(--color-tuco-navy)]"
                  >
                    {{ event.Status }}
                  </p>
                  <span
                    v-if="event.Location"
                    class="rounded-full bg-[var(--color-tuco-sky)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-tuco-blue)]"
                  >
                    {{ event.Location }}
                  </span>
                </div>
                <p
                  v-if="event.StatusDescription"
                  class="text-sm text-[var(--color-tuco-slate)]"
                >
                  {{ event.StatusDescription }}
                </p>
                <div
                  class="flex flex-wrap items-center gap-2 text-xs text-[var(--color-tuco-slate)]"
                >
                  <span>{{ toLocal(event.DateTime) }}</span>
                  <span>&middot;</span>
                  <span>{{ timeAgo(event.DateTime) }}</span>
                </div>
                <button
                  v-if="event.POD"
                  type="button"
                  class="group relative mt-1 flex items-center gap-3"
                  @click="
                    openModal(
                      event.POD,
                      `POD - ${event.Status} - ${toLocal(event.DateTime)}`,
                    )
                  "
                >
                  <img
                    :src="event.POD"
                    :alt="`POD - ${event.Status} - ${toLocal(event.DateTime)}`"
                    class="h-20 w-24 rounded-lg border border-[var(--color-tuco-line)] object-cover transition group-hover:-translate-y-0.5 group-hover:shadow-lg"
                    referrerpolicy="no-referrer"
                  />
                  <span
                    class="text-xs font-semibold text-[var(--color-tuco-blue)]"
                    >View proof</span
                  >
                </button>
              </div>
            </li>
          </ol>
          <p
            v-else
            class="mt-6 rounded-xl border border-dashed border-[var(--color-tuco-line)] bg-[var(--color-tuco-sky)]/30 px-4 py-3 text-sm text-[var(--color-tuco-slate)]"
          >
            No tracking events yet.
          </p>
        </section>
      </section>
    </div>

    <transition name="fade">
      <div
        v-if="activeModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        @click.self="closeModal"
      >
        <div
          class="max-h-full max-w-3xl overflow-hidden rounded-2xl bg-[var(--color-tuco-card)] shadow-2xl focus:outline-none"
        >
          <header
            class="flex items-center justify-between border-b border-[var(--color-tuco-line)] px-4 py-3"
          >
            <h3 class="text-sm font-semibold text-[var(--color-tuco-navy)]">
              {{ activeModal.alt }}
            </h3>
            <button
              type="button"
              @click="closeModal"
              class="rounded-full p-2 text-[var(--color-tuco-slate)] transition hover:bg-[var(--color-tuco-sky)]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tuco-blue)] focus-visible:ring-offset-2"
              aria-label="Close proof image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>
          <div class="max-h-[70vh] overflow-auto bg-black">
            <img
              :src="activeModal.src"
              :alt="activeModal.alt"
              class="block max-h-[70vh] w-full object-contain"
              referrerpolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </transition>
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
import { useRoute, useRouter } from "vue-router";
import type { LocationQueryRaw } from "vue-router";

type TrackingRecord = {
  ConnoteNumber: string;
  status?: string;
  serviceType?: string;
  carrierDisplayName?: string;
  senderAddressSuburb?: {
    name?: string;
    postcode?: string | number;
    state?: string;
  };
  deliveryAddressSuburb?: {
    name?: string;
    postcode?: string | number;
    state?: string;
  };
  consignmentTracking?: TrackingEvent[];
};

type TrackingEvent = {
  UpdateStatus?: string;
  Status: string;
  StatusDescription?: string;
  DateTime: string;
  Location?: string;
  CarrierDescription?: string;
  POD?: string;
  ItemCode?: string;
};

const route = useRoute();
const router = useRouter();

const TRACK_API_BASE = (() => {
  const raw =
    import.meta.env.VITE_TRACK_API_BASE ||
    (import.meta.env.PROD
      ? "https://api.freightmate.com/external/t/"
      : "/api/track/");
  return raw.endsWith("/") ? raw : `${raw}/`;
})();

const query = ref("");
const trackingData = ref<TrackingRecord | null>(null);
const loading = ref(false);
const errorMessage = ref<string | null>(null);
const activeModal = ref<{ src: string; alt: string } | null>(null);

const timelineEvents = computed<TrackingEvent[]>(() => {
  const events = trackingData.value?.consignmentTracking ?? [];
  return [...events].sort(
    (a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime(),
  );
});

const latestEvent = computed<TrackingEvent | null>(() =>
  timelineEvents.value.length ? timelineEvents.value[0] : null,
);

const statusBadge = computed(() => statusClass(trackingData.value?.status));

const statusChip = computed(() => {
  if (loading.value)
    return {
      label: "Loading...",
      className: "bg-amber-50 text-amber-700 ring-amber-200",
    };
  if (errorMessage.value)
    return {
      label: "Error",
      className: "bg-rose-50 text-rose-700 ring-rose-200",
    };
  if (trackingData.value?.status) return statusClass(trackingData.value.status);
  return null;
});

let activeController: AbortController | null = null;

onMounted(() => {
  cleanupLegacyQueryParams();
  const connote = typeof route.query.c === "string" ? route.query.c : "";
  if (connote) {
    query.value = connote;
  }
  updateDocumentTitle();
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  cancelActiveRequest();
  window.removeEventListener("keydown", handleKeydown);
});

watch(trackingData, () => {
  updateDocumentTitle();
});

watch(query, () => {
  errorMessage.value = null;
});

async function handleSubmit() {
  const connote = query.value.trim().toUpperCase();
  if (!connote) {
    errorMessage.value = "Please enter a connote number.";
    trackingData.value = null;
    return;
  }

  updateRouteQuery(connote);
  await triggerFetch(connote);
}

async function triggerFetch(connote: string) {
  cancelActiveRequest();
  loading.value = true;
  errorMessage.value = null;
  trackingData.value = null;

  activeController = new AbortController();
  try {
    const response = await fetch(
      `${TRACK_API_BASE}${encodeURIComponent(connote)}`,
      {
        method: "GET",
        signal: activeController.signal,
      },
    );
    if (!response.ok) {
      throw new Error(
        response.status === 404
          ? "Connote not found."
          : `Unable to fetch tracking data (HTTP ${response.status}).`,
      );
    }
    const payload: TrackingRecord[] = await response.json();
    trackingData.value = payload?.[0] || null;
    if (!trackingData.value) {
      errorMessage.value =
        "We couldn't find tracking information for that connote.";
    }
  } catch (error) {
    if ((error as Error).name === "AbortError") {
      return;
    }
    console.error("Tracking fetch failed", error);
    errorMessage.value =
      (error as Error).message ||
      "We couldn't retrieve tracking data. Please try again.";
  } finally {
    loading.value = false;
    activeController = null;
    updateDocumentTitle();
  }
}

function cancelActiveRequest() {
  if (activeController) {
    activeController.abort();
    activeController = null;
  }
}

function clearQuery() {
  cancelActiveRequest();
  query.value = "";
  trackingData.value = null;
  errorMessage.value = null;
  updateRouteQuery("");
  updateDocumentTitle();
}

function updateRouteQuery(value: string) {
  const queryParams: LocationQueryRaw = { ...route.query };
  delete queryParams.demo;
  if (value) {
    queryParams.c = value;
  } else {
    delete queryParams.c;
  }
  router.replace({ query: queryParams }).catch(() => {});
}

function cleanupLegacyQueryParams() {
  if ("demo" in route.query) {
    const queryParams: LocationQueryRaw = { ...route.query };
    delete queryParams.demo;
    router.replace({ query: queryParams }).catch(() => {});
  }
}

function toLocal(isoString?: string) {
  if (!isoString) return "-";
  try {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  } catch {
    return isoString;
  }
}

function timeAgo(isoString?: string) {
  if (!isoString) return "unknown time";
  const now = Date.now();
  const then = new Date(isoString).getTime();
  const diff = now - then;
  const seconds = Math.round(diff / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  return `${days}d ago`;
}

function statusClass(status?: string | null) {
  const normalized = status?.toUpperCase() || "";
  const base = "ring-1";
  if (normalized === "DELIVERED")
    return {
      label: "Delivered",
      className: `${base} bg-green-50 text-green-700 ring-green-200`,
    };
  if (normalized === "OUT_FOR_DELIVERY")
    return {
      label: "Out for delivery",
      className: `${base} bg-amber-50 text-amber-700 ring-amber-200`,
    };
  if (["PICKED_UP", "IN_TRANSIT", "MANIFESTED"].includes(normalized))
    return {
      label: capitalize(normalized.replace(/_/g, " ")),
      className: `${base} bg-blue-50 text-blue-700 ring-blue-200`,
    };
  if (["EXCEPTION", "ON_HOLD"].includes(normalized))
    return {
      label: capitalize(normalized.replace(/_/g, " ")),
      className: `${base} bg-rose-50 text-rose-700 ring-rose-200`,
    };
  if (normalized)
    return {
      label: capitalize(normalized.replace(/_/g, " ")),
      className: `${base} bg-slate-100 text-slate-700 ring-slate-200`,
    };
  return {
    label: "Status pending",
    className: `${base} bg-slate-100 text-slate-700 ring-slate-200`,
  };
}

function timelineMarkerClass(updateStatus?: string) {
  const normalized = updateStatus?.toUpperCase();
  if (normalized === "DELIVERED") return "bg-green-500 ring-green-200";
  if (normalized === "OUT_FOR_DELIVERY") return "bg-amber-500 ring-amber-200";
  if (["PICKED_UP", "IN_TRANSIT", "MANIFESTED"].includes(normalized || ""))
    return "bg-blue-500 ring-blue-200";
  if (["EXCEPTION", "ON_HOLD"].includes(normalized || ""))
    return "bg-rose-500 ring-rose-200";
  return "bg-slate-400 ring-slate-200";
}

function capitalize(value: string) {
  return value
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatLocation(location?: TrackingRecord["senderAddressSuburb"]) {
  if (!location) return "-";
  const parts = [location.name, location.state, location.postcode].filter(
    Boolean,
  );
  return parts.join(", ") || "-";
}

function openModal(src: string, alt: string) {
  activeModal.value = { src, alt };
  nextTick(() => {
    const dialog = document.querySelector<HTMLElement>('[role="dialog"]');
    dialog?.focus();
  });
}

function closeModal() {
  activeModal.value = null;
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape" && activeModal.value) {
    closeModal();
  }
}

function updateDocumentTitle() {
  const base = "Freight Tracking | TUCO";
  if (trackingData.value?.ConnoteNumber) {
    document.title = `${base} - ${trackingData.value.ConnoteNumber}`;
    return;
  }
  document.title = base;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
