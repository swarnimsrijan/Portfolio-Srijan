<template>
  <section class="contact">
    <h2>Contact Me</h2>
    <p class="intro">
      Feel free to reach out for opportunities, collaborations, or just to say hi!
    </p>

    <div class="contact-card">
      <h3>Email</h3>
      <a href="mailto:1142srijan2002@gmail.com">1142srijan2002@gmail.com</a>
    </div>

    <div class="contact-card">
      <h3>LinkedIn</h3>
      <a
        href="https://www.linkedin.com/in/swarnim-srijan-220562214/"
        target="_blank"
        rel="noopener"
      >
        Swarnim Srijan
      </a>
    </div>

    <div class="contact-card">
      <h3>GitHub</h3>
      <a
        href="https://github.com/swarnimsrijan"
        target="_blank"
        rel="noopener"
      >
        github.com/swarnimsrijan
      </a>
    </div>

    <div class="contact-card">
      <h3>Resume</h3>
      <a href="/resume.pdf" target="_blank" download>
        Download Resume (PDF)
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
}

.contact-card {
  padding: 16px;
  margin-bottom: 18px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.08);
  background: rgba(255,255,255,0.04);
}

.contact-card h3 {
  margin: 0 0 6px 0;
}

a {
  font-weight: 600;
  color: var(--primary);
}
</style>
