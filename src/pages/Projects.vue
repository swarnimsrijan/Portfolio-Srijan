<template>
  <section class="projects">
    <h2>Projects</h2>
    <p class="intro">Some of the work I've built across backend, full-stack and system design.</p>

    <div class="project-grid">
      <ProjectCard
        v-for="(p, i) in projects"
        :key="i"
        :project="p"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";

const projects = [
  {
    title: "DocuLab — Collaborative Document Editing Platform",
    desc: "Live multi-user editor with CRDT/OT sync, Kafka events, RAG microservice, versioning, and audit trails.",
    link: "https://github.com/swarnimsrijan",
    tech: ["Vue", "Node", "Redis", "Kafka"]
  },
  {
    title: "Book Library with ML-Based Recommendations",
    desc: "MERN + FastAPI hybrid recommender (collaborative + content-based) with dashboards and reading insights.",
    link: "https://github.com/swarnimsrijan",
    tech: ["Vue", "Node", "Redis", "Kafka"]
  },
  {
    title: "Payment Simulator — Multi-Currency Engine",
    desc: "Simulated cross-currency payment flows with validation and internal tooling.",
    link: "https://github.com/swarnimsrijan",
    tech: ["Vue", "Node", "Redis", "Kafka"]
  },
  {
    title: "Insurance Management System",
    desc: "Full-stack internal tool built with Vue.js, TypeScript, and Spring Boot.",
    link: "https://github.com/swarnimsrijan",
    tech: ["Vue", "Node", "Redis", "Kafka"]
  },
  {
    title: "KYC Document Choreography Service",
    desc: "Event-driven document tracking with real-time workflow notifications and audit logs.",
    link: "https://github.com/swarnimsrijan"
  }
];
</script>

<style scoped>
.projects {
  width: 100vw;
  min-height: 100vh;
  padding: 40px;
  box-sizing: border-box;
}


h2 {
  margin-bottom: 6px;
}

.intro {
  color: var(--muted);
  margin-bottom: 24px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}
</style>
