<script setup>
defineProps({
  inputType: { type: String, required: true },
  placeholderText: { type: String, required: true },
  forText: { type: String, required: true },
});
</script>

<template>
  <div class="relative w-full transition-all duration-150 focus-within:text-[10px]">
    <input
      :id="forText"
      :type="inputType"
      class="w-full rounded bg-background px-6 py-2 !text-lg focus:outline-none"
    />
    <label :for="forText" class="absolute left-6 top-3 font-semibold text-white/30">
      {{ placeholderText }}
    </label>
  </div>
</template>
