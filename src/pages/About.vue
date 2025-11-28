<template>
  <section class="about">

    <h1 class="title">About Me</h1>
    <p class="tagline">
      A builder at heart — blending <strong>technology</strong>,
      <strong>creativity</strong>, and <strong>curiosity</strong> to craft experiences that matter.
    </p>

    <!-- MAIN PROFILE CARD -->
    <div class="about-card">
      <p>
        I'm <strong>Swarnim Srijan</strong>, a software engineer who loves creating
        meaningful things — whether it's scalable backend systems, interactive UI components,
        or full-stack applications infused with intelligence and personality.
      </p>

      <p>
        I enjoy working across boundaries: <strong>backend engineering</strong> with
        Spring Boot + microservices, <strong>frontend development</strong> with Vue & React,
        and <strong>ML-powered systems</strong> that blend data and creativity.
      </p>

      <p>
        Outside code, I’m deeply inspired by <strong>books</strong>, <strong>movies</strong>,
        and <strong>music</strong>. These influences shape how I design digital experiences —
        thoughtful, expressive, and narrative-driven.
      </p>
    </div>

    <!-- ICON GRID SUMMARY -->
    <div class="grid">
      <div class="box">
        <div class="icon">💻</div>
        <h3>Engineering</h3>
        <p>Backend, distributed systems, microservices & performance-focused design.</p>
      </div>

      <div class="box">
        <div class="icon">🧠</div>
        <h3>ML & Intelligence</h3>
        <p>Recommendation systems, embeddings, RAG, and intelligent automation.</p>
      </div>

      <div class="box">
        <div class="icon">🎨</div>
        <h3>Front-End</h3>
        <p>Vue, React, interactive UI, animations, cinematic interfaces.</p>
      </div>

      <div class="box">
        <div class="icon">📚</div>
        <h3>Curiosity</h3>
        <p>Books, movies, music & world-building — inspiration behind my creativity.</p>
      </div>
    </div>

    <!-- TIMELINE SUMMARY -->
    <div class="timeline">
      <h2>My Journey</h2>

      <div class="timeline-item">
        <span class="year">2025</span>
        <p>Graduate Engineer @ <strong>Zeta</strong> — building scalable financial backend systems.</p>
      </div>

      <div class="timeline-item">
        <span class="year">2024</span>
        <p>SDE Intern @ <strong>Zeta</strong> — CSV pipeline microservice, UI components, observability.</p>
      </div>

      <div class="timeline-item">
        <span class="year">2023</span>
        <p>Web Dev Intern @ <strong>MotionCut</strong> — built e-commerce modules & integrations.</p>
      </div>
    </div>

    
    <div class="contact-box" @click="goContact">
      <div class="contact-icon">📩</div>
      <span>Contact Me</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

function goContact() {
  router.push("/contact");
}
</script>

<style scoped>
.about {
  width: 100vw;
  min-height: 100vh;
  padding: 40px;
  box-sizing: border-box;
}

.title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
}

.tagline {
  max-width: 700px;
  color: var(--muted);
  margin-bottom: 34px;
  font-size: 18px;
}

.about-card {
  max-width: 750px;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 40px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(0,0,0,0.1);
  line-height: 1.6;
}

.grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.box {
  background: rgba(255,255,255,0.05);
  border-radius: 14px;
  padding: 20px;
  border: 1px solid rgba(0,0,0,0.08);
  text-align: center;
  transition: all 0.25s ease;
}

.box:hover {
  transform: translateY(-6px);
  border-color: var(--primary);
}

.icon {
  font-size: 36px;
  margin-bottom: 8px;
}

.timeline {
  margin-top: 50px;
  max-width: 700px;
}

.timeline h2 {
  margin-bottom: 14px;
}

.timeline-item {
  display: flex;
  gap: 20px;
  margin-bottom: 18px;
}

.year {
  font-weight: 700;
  width: 80px;
  color: var(--primary);
}

.contact-box {
  margin: 50px auto 0;
  width: 170px;
  height: 170px;
  border-radius: 20px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(0,0,0,0.1);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.25s ease;
}

.contact-box:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  background: rgba(255,255,255,0.12);
}

.contact-icon {
  font-size: 48px;
  margin-bottom: 6px;
}
</style>
