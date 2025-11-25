<template>
  <div class="card">
    <h3 class="title">{{ project.title }}</h3>

    <p class="description">
      {{ project.desc }}
    </p>

    <div class="badges" v-if="project.tech">
      <span v-for="(t, i) in project.tech" :key="i" class="badge">
        {{ t }}
      </span>
    </div>

    <a
      v-if="project.link"
      class="link"
      :href="project.link"
      target="_blank"
      rel="noopener noreferrer"
    >
      🔗 View Project
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    title: string;
    desc: string;
    link?: string;
    tech?: string[];
  }
}>()
</script>

<style scoped>
.card {
  padding: 20px;
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.01)
  );
  transition: all 0.25s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.08);
  border-color: var(--primary);
}

.title {
  margin: 0 0 6px 0;
  font-size: 18px;
}

.description {
  color: var(--muted);
  margin-bottom: 12px;
  line-height: 1.45;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.badge {
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 6px;
  background: rgba(217, 119, 6, 0.12);
  color: var(--primary);
  font-weight: 600;
}

.link {
  text-decoration: none;
  font-weight: 600;
  color: var(--primary);
  font-size: 14px;
}

.card:hover .link {
  text-decoration: underline;
}
</style>
