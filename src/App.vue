<template>
  <div id="app">
    <Header />

    <main>
      <router-view />
    </main>

    <!-- <Footer /> -->
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
</script>

<style>
:root {
  --bg: #ffffff;
  --text: #0b1220;
  --primary: #D97706;
  --muted: #6b7280;
}

[data-theme="dark"] {
  --bg: #0b0f14;
  --text: #f3f4f6;
  --primary: #FFD57A;
  --muted: #9ca3af;
}

#app {
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 32px;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
