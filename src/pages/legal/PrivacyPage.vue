<template>
  <div class="bg-[var(--color-tuco-sky)]/20 py-12 md:py-16">
    <div class="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
      <header class="space-y-3 text-center md:text-left">
        <p
          class="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-tuco-blue)]"
        >
          Compliance
        </p>
        <h1
          class="text-4xl font-semibold text-[var(--color-tuco-navy)] md:text-5xl"
        >
          Privacy Policy
        </h1>
        <p class="text-[var(--color-tuco-slate)] md:text-lg">
          How TUCO protects and manages the personal information entrusted to
          us.
        </p>
      </header>

      <article
        class="mt-12 rounded-[var(--corner-radius-lg)] border border-[var(--color-tuco-line)] bg-[var(--color-tuco-card)] p-8 shadow-lg/5"
      >
        <div class="space-y-4 text-[var(--color-tuco-slate)] leading-relaxed">
          <p>
            At TUCO, we are committed to safeguarding your privacy and ensuring
            transparency in how we handle your personal information. Our goal is
            to make sure your experience on our website is secure, efficient,
            and tailored to your needs. Rest assured that your trust is at the
            core of everything we do.
          </p>
          <p>
            This Privacy Policy applies to the management of your personal
            information (PI) by or on behalf of TUCO PTY LTD ACN 610 731 121 and
            its related bodies corporate including TUCO PTY LTD ACN 610 731 121.
          </p>
          <p>
            We have created this privacy policy to demonstrate our commitment to
            the Privacy Act 1988 (Cth) and the Australian Privacy Principles
            (APPs). It sets out how we may collect, hold, use or disclose your
            PI. Where the word “including” is used, it shall mean “including
            without limitation”.
          </p>
        </div>

        <div class="mt-6 space-y-6">
          <section>
            <h2 class="text-lg font-semibold text-[var(--color-tuco-navy)]">
              Data Collection and Usage
            </h2>
            <p class="mt-2 text-[var(--color-tuco-slate)] leading-relaxed">
              When you interact with our website, we may collect PI such as your
              name, email address, and phone number for specific purposes like
              account creation or newsletter subscription. This information is
              solely used to personalise your experience, improve our services,
              and keep you informed about relevant updates. We do not share your
              information with third parties without your consent.
            </p>
          </section>

          <section>
            <h2 class="text-lg font-semibold text-[var(--color-tuco-navy)]">
              Data Security
            </h2>
            <p class="mt-2 text-[var(--color-tuco-slate)] leading-relaxed">
              Protecting your data is our top priority. We implement
              industry-standard security measures to prevent unauthorised
              access, disclosure, or misuse of your personal information. Your
              trust in us is valued, and we take every step to ensure the
              confidentiality and integrity of your data.
            </p>
          </section>

          <section>
            <h2 class="text-lg font-semibold text-[var(--color-tuco-navy)]">
              Cookies
            </h2>
            <p class="mt-2 text-[var(--color-tuco-slate)] leading-relaxed">
              To enhance your browsing experience, our website may use cookies.
              These cookies do not collect PI and are used to improve the
              functionality of our site. You have the option to accept or
              decline cookies as per your preference.
            </p>
          </section>

          <section>
            <h2 class="text-lg font-semibold text-[var(--color-tuco-navy)]">
              Updates to Privacy Policy
            </h2>
            <p class="mt-2 text-[var(--color-tuco-slate)] leading-relaxed">
              We may occasionally update our privacy policy to reflect changes
              in data protection laws or our services. Any modifications will be
              communicated to you, and your continued use of our website implies
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 class="text-lg font-semibold text-[var(--color-tuco-navy)]">
              Contact Us
            </h2>
            <p class="mt-2 text-[var(--color-tuco-slate)] leading-relaxed">
              If you have any questions or concerns regarding our privacy policy
              or how we handle your PI, please do not hesitate to reach out to
              us. Your privacy matters to us, and we are here to address any
              queries you may have.
            </p>
          </section>

          <section class="space-y-3">
            <p class="text-[var(--color-tuco-slate)] leading-relaxed">
              At TUCO, we take your privacy seriously because we understand that
              your trust is the foundation of our relationship. By entrusting us
              with your data, you are not just a customer but a valued partner
              in our journey. Together, we can ensure a secure and seamless
              experience for all your logistics needs.
            </p>
            <p
              class="rounded-[var(--corner-radius-md)] border border-[var(--color-tuco-line)] bg-[var(--color-tuco-sky)]/40 px-4 py-3 text-sm"
            >
              Looking for our full terms and conditions?
              <RouterLink
                to="/terms"
                class="font-semibold text-[var(--color-tuco-blue)] hover:underline"
                >Read them here.</RouterLink
              >
            </p>
          </section>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
