<template>
  <section class="contact">
    <h2>Contact Me</h2>
    <p class="intro">
      Feel free to reach out for opportunities, collaborations, or just to say hi!
    </p>

    <div class="grid">
      <!-- Email -->
      <a href="mailto:1142srijan2002@gmail.com" class="contact-box">
        <div class="icon">
          ✉️
        </div>
        <span>Email</span>
      </a>

      <!-- LinkedIn -->
      <a
        href="https://www.linkedin.com/in/swarnim-srijan-220562214/"
        target="_blank"
        rel="noopener"
        class="contact-box"
      >
        <div class="icon">
          🔗
        </div>
        <span>LinkedIn</span>
      </a>

      <!-- GitHub -->
      <a
        href="https://github.com/swarnimsrijan"
        target="_blank"
        rel="noopener"
        class="contact-box"
      >
        <div class="icon">
          🐙
        </div>
        <span>GitHub</span>
      </a>

      <!-- Resume -->
      <a href="/resume.pdf" target="_blank" download class="contact-box">
        <div class="icon">
          📄
        </div>
        <span>Resume</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact {
  width: 100vw;
  min-height: 100vh;
  padding: 40px;
}

h2 {
  margin-bottom: 8px;
}

.intro {
  color: var(--muted);
  margin-bottom: 28px;
  max-width: 500px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.contact-box {
  height: 140px;
  background: rgba(255,255,255,0.06);
  color: var(--text);
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,0.1);
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.28s ease;
}

.contact-box:hover {
  transform: translateY(-6px);
  background: rgba(255,255,255,0.12);
  border-color: var(--primary);
  box-shadow: 0 6px 16px rgba(0,0,0,0.14);
}

.icon {
  font-size: 32px;
  margin-bottom: 10px;
}
</style>
