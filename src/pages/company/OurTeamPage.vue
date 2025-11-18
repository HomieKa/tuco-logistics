<template>
  <div class="bg-[var(--color-tuco-sky)]/20">
    <section class="py-16 md:py-24" aria-labelledby="our-team-hero">
      <div
        class="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:items-center"
      >
        <div class="space-y-6">
          <p
            class="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-tuco-blue)]"
          >
            Our Team
          </p>
          <h1
            id="our-team-hero"
            class="text-4xl font-semibold text-[var(--color-tuco-navy)] md:text-5xl"
          >
            We work so you don't have to.
          </h1>
          <p class="text-lg text-[var(--color-tuco-slate)]">
            Smart freight, powered by people who care. We combine proven
            logistics expertise with technology and relentless customer focus so
            your team can focus on growth.
          </p>
          <Button variant="primary" to="/contact"> Talk to our team </Button>
        </div>
        <div
          class="overflow-hidden rounded-[1rem] border border-[var(--color-tuco-line)] bg-[var(--color-tuco-card)] shadow-card-soft"
          aria-hidden="true"
        >
          <div class="aspect-[16/9] w-full">
            <img
              :src="teamImage"
              alt="TUCO team collaborating together"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#0c233f] py-14 md:py-20" aria-labelledby="our-story">
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div class="rounded-[2rem] p-10 text-center md:p-14">
          <div class="mx-auto max-w-4xl space-y-4">
            <h2
              id="our-story"
              class="text-3xl font-semibold text-white md:text-4xl"
            >
              Our story
            </h2>
            <p class="text-lg leading-relaxed text-white/90">
              Founded in 2016, TUCO set out to make complex freight simple,
              transparent, and accessible for Australian businesses. With
              decades of experience and ongoing investment in our people and
              technology, TUCO has grown into a trusted freight management
              partner nationwide.
            </p>
          </div>
          <div
            class="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4 justify-items-center"
          >
            <article
              v-for="metric in metrics"
              :key="metric.label"
              class="relative w-full max-w-[260px] overflow-hidden rounded-3xl border border-white/15 bg-[#102647] p-6 text-left shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition hover:-translate-y-[4px] hover:shadow-[0_18px_44px_rgba(0,0,0,0.25)]"
            >
              <span
                class="absolute left-0 top-6 h-14 w-[6px] rounded-r-full bg-[#38a2ca]"
              />
              <p class="text-3xl font-bold text-white md:text-4xl pl-4">
                {{ metric.value }}
              </p>
              <p
                class="mt-1 pl-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#62bda5]"
              >
                {{ metric.label }}
              </p>
              <p class="mt-3 pl-4 text-sm leading-relaxed text-white/80">
                {{ metric.description || metric.label }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-[#38a2ca] py-14 md:py-20"
      aria-labelledby="mission-values"
    >
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div class="rounded-[2rem] p-10 text-center md:p-14">
          <div class="mx-auto max-w-4xl space-y-4">
            <h2
              id="mission-values"
              class="text-3xl font-semibold text-[#0c233f] md:text-4xl"
            >
              Mission
            </h2>
            <p class="text-lg leading-relaxed text-white/90">
              To be Australia's partner of choice in freight management through
              outstanding people, partnerships, and performance.
            </p>
          </div>

          <div class="mt-10 space-y-4">
            <h3 class="text-3xl font-semibold text-[#0c233f] md:text-4xl">
              Our Values
            </h3>
            <ul
              class="mx-auto grid max-w-5xl gap-4 text-[var(--color-tuco-slate)] sm:grid-cols-2 lg:grid-cols-3"
            >
              <li
                v-for="value in values"
                :key="value.highlight"
                class="rounded-xl bg-white/80 p-5 text-left transition hover:-translate-y-[1px] hover:shadow-card-soft"
              >
                <span class="font-semibold text-[var(--color-tuco-navy)]">
                  {{ value.prefix }}&nbsp;
                  <span class="text-[#62bda5]">{{ value.highlight }}</span
                  ><template v-if="value.suffix"> {{ value.suffix }}</template>
                </span>
                <span class="block text-sm leading-relaxed">{{
                  value.description
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f7f9fd] py-14 md:py-20" aria-labelledby="how-we-work">
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-[1.05fr_1.15fr] lg:items-center">
          <div
            class="overflow-hidden rounded-2xl border border-[var(--color-tuco-line)] bg-[var(--color-tuco-card)] shadow-card-soft"
            aria-hidden="true"
          >
            <div class="aspect-video w-full">
              <img
                :src="workingImage"
                alt="TUCO specialists collaborating during implementation"
                class="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <div class="space-y-3 text-left lg:text-left">
              <h2
                id="how-we-work"
                class="text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
              >
                How we work with you
              </h2>
              <p class="text-lg text-[var(--color-tuco-slate)] max-w-3xl">
                A smooth, measurable onboarding journey for every TUCO
                client—from the first audit through optimisation.
              </p>
            </div>

            <div class="mt-8 grid gap-6 sm:grid-cols-2">
              <article
                v-for="step in workSteps"
                :key="step.title"
                class="flex items-start gap-4 text-left"
              >
                <div
                  class="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#e9f5f7] text-[#38a2ca]"
                >
                  <component
                    :is="step.icon"
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
                <div class="space-y-1.5">
                  <p
                    class="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-tuco-slate)]"
                  >
                    {{ step.label }}
                  </p>
                  <h3
                    class="text-lg font-semibold text-[var(--color-tuco-navy)]"
                  >
                    {{ step.title }}
                  </h3>
                  <p
                    class="text-sm text-[var(--color-tuco-slate)] leading-relaxed"
                  >
                    {{ step.description }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-[#f3f5fb] py-14 md:py-20"
      aria-labelledby="leadership-team"
    >
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div class="text-center">
          <h2
            id="leadership-team"
            class="text-3xl font-semibold text-[var(--color-tuco-navy)] md:text-4xl"
          >
            Leadership team
          </h2>
          <p class="mt-4 text-lg text-[var(--color-tuco-slate)]">
            Meet the leaders guiding TUCO and Freightmate forward.
          </p>
        </div>
        <div
          class="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <div
            v-for="leader in leadershipTeam"
            :key="leader.name"
            class="group relative h-[22rem] w-full [perspective:1500px]"
            tabindex="0"
          >
            <div
              class="relative h-full w-full rounded-3xl border border-[var(--color-tuco-line)] bg-[var(--color-tuco-card)] text-center shadow-lg/5 transition-all duration-500 [transform-style:preserve-3d] hover:shadow-card-lg group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]"
            >
              <article
                class="absolute inset-0 flex flex-col items-center justify-center gap-6 rounded-3xl p-8 [backface-visibility:hidden]"
              >
                <div
                  class="relative h-28 w-28 overflow-hidden rounded-full border border-[var(--color-tuco-line)] bg-[var(--color-tuco-sky)] shadow-inner"
                >
                  <img
                    v-if="leader.photo"
                    :src="leader.photo"
                    :alt="leader.name"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3
                    class="text-xl font-semibold text-[var(--color-tuco-navy)]"
                  >
                    {{ leader.name }}
                  </h3>
                  <p class="mt-2 text-sm text-[var(--color-tuco-slate)]">
                    {{ leader.role }}
                  </p>
                </div>
              </article>

              <article
                class="absolute inset-0 flex h-full flex-col justify-between rounded-3xl bg-[var(--color-tuco-navy)] p-8 text-left text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]"
              >
                <div>
                  <h3 class="text-xl font-semibold text-white">
                    {{ leader.name }}
                  </h3>
                  <p class="mt-2 text-sm text-white/80">{{ leader.role }}</p>
                  <p class="mt-6 text-sm text-white/70">{{ leader.bio }}</p>
                </div>
                <a
                  v-if="leader.linkedin"
                  :href="leader.linkedin"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex w-fit items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-tuco-blue)]"
                >
                  <svg
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M19 0h-14C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zm-11 19H5V8.982h3V19zM6.5 7.579c-.966 0-1.75-.798-1.75-1.783S5.534 4.013 6.5 4.013s1.75.798 1.75 1.783-.784 1.783-1.75 1.783zM20 19h-3v-5.458c0-1.302-.024-2.976-1.813-2.976-1.815 0-2.093 1.418-2.093 2.882V19h-3V8.982h2.879v1.379h.04c.401-.759 1.379-1.559 2.838-1.559 3.034 0 3.6 2.002 3.6 4.607V19z"
                    />
                  </svg>
                  Connect
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CallToAction>
      <template #title>Ready to build strategic freight partnerships?</template>
      <template #actions>
        <Button variant="secondary" size="lg" to="/contact"
          >Talk to our team</Button
        >
      </template>
    </CallToAction>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import CallToAction from "@/components/ui/CallToAction.vue";
import { useSEO } from "@/composables/useSEO";
import teamImage from "@/assets/images/about_us/team_photo.jpg";
import workingImage from "@/assets/images/about_us/working.jpg";
import khaiPhoto from "@/assets/images/leadership/khai.jpg";
import davePhoto from "@/assets/images/leadership/dave.jpg";
import farzanaPhoto from "@/assets/images/leadership/farzana.jpg";
import fionaPhoto from "@/assets/images/leadership/fiona.jpg";
import jamiePhoto from "@/assets/images/leadership/jamie.jpg";
import katerinaPhoto from "@/assets/images/leadership/katerina.jpg";
import michellePhoto from "@/assets/images/leadership/michelle.jpg";
import mladenPhoto from "@/assets/images/leadership/mladen.jpg";
import samPhoto from "@/assets/images/leadership/sam.jpg";
import {
  ChartBarIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/vue/24/outline";

useSEO({
  title: "Our Team - TUCO Logistics",
  description:
    "Meet the TUCO leadership team and discover the people, mission, and values keeping Australian freight programs on track.",
});

const values = [
  {
    prefix: "We are",
    highlight: "Transparent",
    suffix: "",
    description: "Open communication, clear data, no surprises.",
  },
  {
    prefix: "We",
    highlight: "Believe",
    suffix: " in our people",
    description: "We hire, develop, and empower teams to deliver.",
  },
  {
    prefix: "We act with",
    highlight: "Purpose",
    suffix: "",
    description: "Every project maps to meaningful outcomes.",
  },
  {
    prefix: "We do it",
    highlight: "Together",
    suffix: "",
    description: "One team with customers, carriers, and partners.",
  },
  {
    prefix: "We",
    highlight: "Evolve",
    suffix: "",
    description: "We learn fast and improve faster.",
  },
  {
    prefix: "We have",
    highlight: "Fun",
    suffix: "",
    description: "A positive culture where wins are shared.",
  },
];

const metrics = [
  {
    value: "2016",
    label: "Founded",
    description: "Built to simplify complex freight for Australian businesses.",
  },
  {
    value: "200+",
    label: "Customers",
    description: "Shippers partnering with TUCO for dependable logistics.",
  },
  {
    value: "150+",
    label: "Carrier partnerships",
    description: "Network breadth to match freight profiles and SLAs.",
  },
  {
    value: "50+",
    label: "Specialists",
    description: "People on deck to support ops, finance, and customers.",
  },
];

const workSteps = [
  {
    label: "Audit",
    title: "Discover & analyse",
    description: "Surface risks, gaps, and cost leaks in your current setup.",
    cta: "Assess",
    icon: CursorArrowRaysIcon,
  },
  {
    label: "Design",
    title: "Customise & plan",
    description:
      "Shape carriers, automations, and Freightmate around your goals.",
    cta: "Design",
    icon: WrenchScrewdriverIcon,
  },
  {
    label: "Implement",
    title: "Launch & train",
    description: "Deploy with guided onboarding, change support, and training.",
    cta: "Launch",
    icon: RocketLaunchIcon,
  },
  {
    label: "Optimise",
    title: "Monitor & improve",
    description: "Track results, spot issues early, and iterate with data.",
    cta: "Improve",
    icon: ChartBarIcon,
  },
];

const leadershipTeam = [
  {
    name: "Michelle Hall",
    role: "Co-founder & Director",
    bio: "20+ years in freight sales and logistics, partnering with shippers to streamline complex freight with dependable tech and service.",
    photo: michellePhoto,
    linkedin: "https://www.linkedin.com/in/michelle-hall-52b0718b/",
  },
  {
    name: "Mladen Kustura",
    role: "Co-founder & Director",
    bio: "Leads TUCO's operational strategy, focused on removing admin friction and keeping teams on-plan when volumes spike.",
    photo: mladenPhoto,
    linkedin: "https://www.linkedin.com/in/mladenkustura/",
  },
  {
    name: "Farzana Adams",
    role: "Human Resource",
    bio: "Supports TUCO people from onboarding to development so teams feel empowered and cared for at every step.",
    photo: farzanaPhoto,
    linkedin: "https://www.linkedin.com/in/farzana-schoumaund-897458b3/",
  },
  {
    name: "Dave Smyth",
    role: "Head of Account Management",
    bio: "Keeps national accounts ahead of targets with clear reporting, proactive reviews, and fast escalation paths.",
    photo: davePhoto,
    linkedin: "https://www.linkedin.com/in/dave-smyth-0a132171/",
  },
  {
    name: "Sam Walker",
    role: "Customer Service Manager",
    bio: "Leads the customer care team, resolving exceptions quickly and keeping communication transparent.",
    photo: samPhoto,
    linkedin: "https://www.linkedin.com/in/samuel-walker-6a819a228/",
  },
  {
    name: "Khai Wee",
    role: "Commercial Manager",
    bio: "Analyses freight performance and commercial levers to unlock margin improvements for TUCO clients.",
    photo: khaiPhoto,
    linkedin: "https://www.linkedin.com/in/khairulamirulwee/",
  },
  {
    name: "Katerina Vladicic",
    role: "Finance Manager",
    bio: "Ensures billing, reconciliation, and financial governance run smoothly across carriers and clients.",
    photo: katerinaPhoto,
    linkedin: "https://www.linkedin.com/in/katerina-vladicic-38a941207/",
  },
  {
    name: "Jamie-Lee McLeary",
    role: "Onboarding Manager",
    bio: "Manages implementation so every new TUCO client goes live with confidence and minimal disruption.",
    photo: jamiePhoto,
    linkedin: "https://www.linkedin.com/in/jamie-lee-mcleary-a627821a9/",
  },
  {
    name: "Justine Smethurst",
    role: "QLD State Manager",
    bio: "Oversees Queenslad programs, ensuring service level commitments are met across the state.",
    photo: null,
    linkedin: "https://www.linkedin.com/in/justine-smethurst-oly-3064b171/",
  },
  {
    name: "Fiona Henderson",
    role: "NSW State Manager",
    bio: "Oversees New South Wales programs, ensuring service level commitments are met across the state.",
    photo: fionaPhoto,
    linkedin: "https://www.linkedin.com/in/fiona-henderson-6b500353/",
  },
];
</script>
