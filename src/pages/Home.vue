<template>
  <div class="hero">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
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
.hero {
  width: 100vw;
  /* min-height: calc(100vh - 80px); */
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 20px;
}
</style>
