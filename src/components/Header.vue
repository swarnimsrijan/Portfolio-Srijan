<template>
  <header class="header">
    <img src="/logo2.svg" class="brand" alt="logo"/>

    <nav>
      <router-link to="/">{{ $t("nav.home") }}</router-link>
      <router-link to="/projects">{{ $t("nav.projects") }}</router-link>
      <router-link to="/about">{{ $t("nav.about") }}</router-link>
      <router-link to="/contact">{{ $t("nav.contact") }}</router-link>
    </nav>

    <div class="actions">
      <LocaleSwitcher />
      <ThemeToggle />
    </div>
  </header>
</template>

<script setup lang="ts">
import LocaleSwitcher from "./LocaleSwitcher.vue";
import ThemeToggle from "./ThemeToggle.vue";
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.brand {
  width: 48px;
}
nav a {
  margin: 0 12px;
  font-weight: 600;
}
</style>
