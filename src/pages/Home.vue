<template>
  <div class="home-title">
    <h1>{{ title }}</h1>
  </div>
  <div class="home-subtitle">
    <p>{{ subtitle }}</p>
  </div>
  <div class="home-button">
    <button>{{ button }}</button>
  </div>
</template>

<script setup lang="ts">
import { MESSAGES } from "../utils/constants";
import { ta } from "@/services/translate";
import { ref, onMounted } from "vue";

const title = ref("");
const subtitle = ref("");
const button = ref("");

onMounted(async () => {
  title.value = await ta(MESSAGES.HERO_TITLE);
  subtitle.value = await ta(MESSAGES.HERO_SUBTITLE);
  button.value = await ta(MESSAGES.HERO_BUTTON);
});
</script>

<style scoped>
.home-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
}
</style>
