<template>
  <div class="hero">
    <img class="hero-logo" src="/icon.png" alt="logo" />

    <h1>{{ $t("hero.title") }}</h1>
    <p>{{ $t("hero.subtitle") }}</p>

    <button>{{ $t("hero.button") }}</button>

    <Journey />
  </div>
</template>

<script setup lang="ts">
import Journey from "../components/Journey.vue";
</script>
