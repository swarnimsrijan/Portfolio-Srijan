<template>
  <header class="header">
    <router-link to="/" class="brand-area">
      <img src="/logo2.svg" class="brand-logo" alt="logo" />
      <span class="brand-name animate-text">swarnim_srijan</span>
    </router-link>

    <div class="actions">
      <LocaleSwitcher />
      <ThemeToggle />
    </div>

    <button class="hamburger" @click="toggleSidebar">☰</button>

    <Sidebar :open="sidebarOpen" @close="sidebarOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './Sidebar.vue';
import LocaleSwitcher from './LocaleSwitcher.vue';
import ThemeToggle from './ThemeToggle.vue';

const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.brand-area {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.brand-logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
}

.brand-name {
  font-weight: 700;
  font-size: 20px;
  color: var(--text);
}

.animate-text {
  opacity: 0;
  animation: revealText 1.4s ease forwards;
  letter-spacing: 2px;
}

@keyframes revealText {
  0% {
    opacity: 0;
    transform: translateY(6px);
    letter-spacing: 8px;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    letter-spacing: 2px;
  }
}

.hamburger {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text);
}
</style>
