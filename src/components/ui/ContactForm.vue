<template>
  <form class="space-y-6" @submit.prevent="handleSubmit">
    <div class="grid gap-4 md:grid-cols-2">
      <div>
        <label for="name" class="mb-2 block text-sm font-medium text-gray-800"
          >Full Name *</label
        >
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-teal-500"
          placeholder="John Smith"
        />
      </div>
      <div>
        <label
          for="company"
          class="mb-2 block text-sm font-medium text-gray-800"
          >Company Name</label
        >
        <input
          id="company"
          v-model="form.company"
          type="text"
          class="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-teal-500"
          placeholder="Company name"
        />
      </div>
      <div>
        <label for="email" class="mb-2 block text-sm font-medium text-gray-800"
          >Email *</label
        >
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-teal-500"
          placeholder="example@business.com"
        />
      </div>
      <div>
        <label for="phone" class="mb-2 block text-sm font-medium text-gray-800"
          >Phone Number</label
        >
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          class="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-teal-500"
          placeholder="+61 400 000 000"
        />
      </div>
    </div>
    <div>
      <label for="message" class="mb-2 block text-sm font-medium text-gray-800"
        >Message *</label
      >
      <textarea
        id="message"
        v-model="form.message"
        rows="4"
        required
        class="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-teal-500"
        placeholder="Share a little about your logistics challenges..."
      ></textarea>
    </div>
    <Button
      class="w-full"
      size="lg"
      type="submit"
      variant="primary"
      :loading="isSubmitting"
    >
      {{ isSubmitting ? "Sending..." : "Submit" }}
    </Button>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Button from "@/components/ui/Button.vue";

const emit = defineEmits<{
  (e: "submitted"): void;
  (e: "error"): void;
}>();

const isSubmitting = ref(false);

const form = reactive({
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
});

async function handleSubmit() {
  isSubmitting.value = true;
  try {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    Object.keys(form).forEach((key) => {
      form[key as keyof typeof form] = "";
    });
    emit("submitted");
  } catch (error) {
    emit("error");
  } finally {
    isSubmitting.value = false;
  }
}
</script>
