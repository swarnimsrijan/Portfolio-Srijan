<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>

    <main>
      <router-view />
    </main>

    <!-- <Footer /> -->
  </div>
</template>

<script setup lang="ts">
import Header from './components/AppHeader.vue'
// import Footer from './components/Footer.vue'
</script>

<style>
:root {
  --bg: #ffffff;
  --text: #0b1220;
  --primary: #d97706;
  --muted: #6b7280;
}

[data-theme='dark'] {
  --bg: #0b0f14;
  --text: #f3f4f6;
  --primary: #ffd57a;
  --muted: #9ca3af;
}

#app {
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  font-family:
    Inter,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
header {
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, var(--primary), transparent) 1;
}


</style>
