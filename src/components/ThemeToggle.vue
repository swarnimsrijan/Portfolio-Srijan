<template>
  <button @click="toggle">
    {{ dark ? "🌙" : "☀️" }}
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dark = ref(false);

function toggle() {
  dark.value = !dark.value;
  document.documentElement.setAttribute(
    "data-theme",
    dark.value ? "dark" : "light"
  );
}
</script>
