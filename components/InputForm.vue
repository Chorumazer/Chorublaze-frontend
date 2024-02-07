<script setup>
defineProps({
  inputType: String,
});
</script>

<template>
  <input
    :type="inputType"
    placeholder="Email adress"
    class="w-full rounded-md bg-background px-5 py-3"
  />
</template>
