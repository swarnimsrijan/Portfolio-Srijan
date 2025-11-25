<template>
  <div>
    <div class="overlay" v-if="open" @click="$emit('close')"></div>

    <aside class="sidebar" :class="{ open }">
      <button class="close-btn" @click="$emit('close')">✕</button>

      <nav class="side-nav">
        <router-link @click="$emit('close')" to="/">Home</router-link>
        <router-link @click="$emit('close')" to="/projects">Projects</router-link>
        <router-link @click="$emit('close')" to="/about">About</router-link>
        <router-link @click="$emit('close')" to="/contact">Contact</router-link>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>();
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(2px);
  z-index: 20;
}

.sidebar {
  position: fixed;
  top: 0;
  right: -260px;
  width: 260px;
  height: 100vh;
  background: var(--bg);
  box-shadow: -4px 0 20px rgba(0,0,0,0.1);
  padding: 24px;
  transition: right 0.3s ease;
  z-index: 30;
}

.sidebar.open {
  right: 0;
}

.close-btn {
  border: none;
  background: none;
  font-size: 22px;
  cursor: pointer;
  float: right;
  color: var(--text);
}

.side-nav {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.side-nav a {
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: var(--text);
}
</style>
