<template>
  <header class="app-header">

    <router-link to="/" class="brand">
      <img src="/logo2.svg" class="brand-logo" />
      <span class="brand-name">{{ animatedName }}</span>
    </router-link>


    <div class="controls">
      <!-- <ThemeSelector /> -->
      <!-- <ModeSelector /> -->
      <ThemeToggle />
      <button class="hamburger" @click="toggleSidebar">☰</button>
    </div>

    <Sidebar :open="sidebarOpen" @close="sidebarOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useModeStore } from "@/stores/mode";
import Sidebar from "./SideBar.vue";
import ThemeSelector from "./ThemeSelector.vue";
import ModeSelector from "./ModeSelector.vue";
import ThemeToggle from "./ThemeToggle.vue";

const sidebarOpen = ref(false);
const brandName = "srijan";

const animatedName = ref("");
let idx = 0;
onMounted(() => {
  function animate() {
    if (idx < brandName.length) {
      animatedName.value += brandName[idx];
      idx++;
      setTimeout(animate, 80);
    }
  }
  animate();
});

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background: var(--bg);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  z-index: 999;
}

.brand {
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
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  white-space: nowrap;
}

.controls {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 14px;
}

.hamburger {
  font-size: 24px;
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
}
</style>
