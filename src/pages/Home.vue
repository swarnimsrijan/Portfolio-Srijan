<template>
  <div class="hero">
    <!-- <img class="hero-log="/icon2.svg" alt="logo" /> -->

    <h1>{{ $t("hero.title") }}</h1>
    <p>{{ $t("hero.subtitle") }}</p>

    <button>{{ $t("hero.button") }}</button>

    <Journey />
  </div>
</template>

<script setup lang="ts">
import Journey from "../components/Journey.vue";
</script>

<style scoped>
.hero {
  width: 100vw;
  min-height: calc(100vh - 80px); 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
</style>

