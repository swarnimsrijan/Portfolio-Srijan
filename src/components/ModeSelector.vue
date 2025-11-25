<template>
  <select class="selector" v-model="modeStore.mode">
    <option value="normal">Normal Mode</option>
    <option value="redball">Red Ball Game Mode</option>
    <option value="riddle">Tom Riddle Diary Mode</option>
  </select>
</template>

<script setup lang="ts">
import { useModeStore } from "@/stores/mode";
const modeStore = useModeStore();
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
