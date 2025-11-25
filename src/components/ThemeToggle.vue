<template>
  <div class="theme-switch" @click="toggleTheme">
    <div class="switch-track">
      <div class="switch-thumb" :class="{ dark: isDark }">
        <div class="icon-container">
          <svg v-if="isDark" class="moon" fill="none" viewBox="0 0 24 24" stroke="white">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
            />
          </svg>

          <svg v-else class="sun" fill="none" viewBox="0 0 24 24" stroke="#FDB813">
            <circle cx="12" cy="12" r="5" stroke-width="2" />
            <path
              stroke-width="2"
              d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
            />
          </svg>

          <div v-if="isDark" class="stars">
            <span class="star s1"></span>
            <span class="star s2"></span>
            <span class="star s3"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<style scoped>
.theme-switch {
  cursor: pointer;
  display: flex;
  align-items: center;
  size: 25px;
}

.switch-track {
  width: 70px;
  height: 36px;
  background: var(--muted);
  border-radius: 50px;
  padding: 4px;
  position: relative;
  transition: background 0.3s ease;
}

.switch-thumb {
  width: 28px;
  height: 28px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.switch-thumb.dark {
  transform: translateX(34px);
  background: #111827;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.moon,
.sun {
  width: 18px;
  height: 18px;
}

.stars {
  position: absolute;
  top: -4px;
  left: -6px;
}

.star {
  position: absolute;
  width: 3px;
  height: 3px;
  background: white;
  border-radius: 50%;
  animation: twinkle 1.8s infinite ease-in-out;
}

.s1 {
  top: 4px;
  left: 26px;
  animation-delay: 0.2s;
}
.s2 {
  top: 10px;
  left: 18px;
  animation-delay: 0.5s;
}
.s3 {
  top: -2px;
  left: 12px;
  animation-delay: 0.8s;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
