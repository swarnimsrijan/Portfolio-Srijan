<template>
  <select class="selector" v-model="theme" @change="applyTheme">
    <option value="default">Default</option>
    <option value="her">Her</option>
    <option value="fightclub">Fight Club</option>
    <option value="bladerunner">Blade Runner 2049</option>
    <option value="madmax">Mad Max Fury Road</option>
  </select>
</template>

<script setup lang="ts">
import { ref } from "vue";

const theme = ref("default");

function applyTheme() {
  document.documentElement.setAttribute("data-theme", theme.value);
}
</script>

<style scoped>
.selector {
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,0.1);
  background: var(--bg);
  color: var(--text);
}
</style>
