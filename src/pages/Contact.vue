<template>
  <section class="contact">
    <h2>{{ title }}</h2>
    <p class="intro">
      {{ subtitle }}
    </p>

    <div class="grid">
      <a href="mailto:1142srijan2002@gmail.com" class="contact-box">
        <div class="icon">
          <img src="/email.svg" />
        </div>
        <span>{{ email }}</span>
      </a>

      <a
        href="https://www.linkedin.com/in/swarnim-srijan-220562214/"
        target="_blank"
        rel="noopener"
        class="contact-box"
      >
        <div class="icon">
          <img src="/icons8-linkedin.svg" />
        </div>
        <span>{{ linkedin }}</span>
      </a>


      <a
        href="https://github.com/swarnimsrijan"
        target="_blank"
        rel="noopener"
        class="contact-box"
      >
        <div class="icon">
          <img src="/github-mark-white.svg" />
        </div>
        <span>{{ github }}</span>
      </a>


      <!-- <a href="/resume.pdf" target="_blank" download class="contact-box">
        <div class="icon">
          📄
        </div>
        <span>{{ resume }}</span>
      </a> -->

      <a
        href="https://codeforces.com/profile/underdog42"
        target="_blank"
        rel="noopener"
        class="contact-box"
      >
      <div class="icon">
          📄
        </div>
        <span>{{ twitter }}</span>
      </a>

      <a
        href="https://leetcode.com/u/itz_srijan42/"
        target="_blank"
        rel="noopener"
        class="contact-box"
      >
        <div class="icon">
          📄
        </div>
        <span>{{ leetcode }}</span>
      </a>

      <a
        href="https://codeforces.com/profile/underdog42"
        target="_blank"
        rel="noopener"
        class="contact-box"
      >
      <div class="icon">
          📄
        </div>
        <span>{{ codeforces }}</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ta } from "@/services/translate";
import { ref, onMounted } from "vue";
import { MESSAGES } from '@/utils/constants';

const title = ref("");
const subtitle = ref("");
const email = ref("");
const linkedin = ref("");
const github = ref("");
const resume = ref("");
const leetcode = ref("");
const codeforces = ref("");
const twitter = ref("");

onMounted(async () => {
  title.value = await ta(MESSAGES.CONTACT_TITLE);
  subtitle.value = await ta(MESSAGES.CONTACT_SUBTITLE);
  email.value = await ta(MESSAGES.CONTACT_EMAIL);
  linkedin.value = await ta(MESSAGES.CONTACT_LINKEDIN);
  github.value = await ta(MESSAGES.CONTACT_GITHUB);
  resume.value = await ta(MESSAGES.CONTACT_RESUME);
  leetcode.value = await ta(MESSAGES.CONTACT_LEETCODE);
  codeforces.value = await ta(MESSAGES.CONTACT_CODEFORCES);
  twitter.value = await ta(MESSAGES.CONTACT_TWITTER);
});

</script>

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
