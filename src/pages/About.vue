<template>
  <section class="projects">
    <h2>Projects</h2>
    <p class="intro">
      Here are some of the projects I've worked on. Check them out!
    </p>

    <div class="project-cards">
      <div class="project-card">
        <h3>Project 1</h3>
        <p>Description of project 1.</p>
        <a href="#">View Project</a>
      </div>
      <div class="project-card">
        <h3>Project 2</h3>
        <p>Description of project 2.</p>
        <a href="#">View Project</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.projects {
  max-width: 700px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 8px;
}

.intro {
  color: var(--muted);
  margin-bottom: 28px;
}

.project-cards {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.project-card {
  padding: 16px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.08);
  background: rgba(255,255,255,0.04);
}

.project-card h3 {
  margin: 0 0 6px 0;
}

a {
  font-weight: 600;
  color: var(--primary);
}
</style>
