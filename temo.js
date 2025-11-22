# Project: swarnim-portfolio-vue

This single-file project contains a Vite + Vue 3 + TypeScript portfolio template based on your resume and README. It uses normal CSS (no Tailwind) and is configured for easy deployment on Vercel.

---

// File: package.json
```json
{
  "name": "swarnim-portfolio-vue",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.3.4"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "vite": "^5.0.0",
    "@vitejs/plugin-vue": "^5.0.0",
    "vue-router": "^4.2.0"
  }
}
```

---

// File: vite.config.ts
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: { port: 5173 }
})
```

---

// File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["ESNext", "DOM"]
  },
  "include": ["src/**/*"]
}
```

---

// File: README.md
```md
# Swarnim Srijan — Portfolio (Vue + TypeScript)

This repository is a minimal portfolio website built with Vue 3, TypeScript and plain CSS.

## How to run locally

1. `npm install`
2. `npm run dev`
3. Open http://localhost:5173

## Deploy to Vercel

- Push this repo to GitHub.
- Import the repo into Vercel.
- Set the **Framework Preset** to `Other` (or `Vite`).
- Build Command: `npm run build`
- Output Directory: `dist`

That's it — Vercel will build and publish the site.
```

---

// File: src/main.ts
```ts
import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'

createApp(App).mount('#app')
```

---

// File: index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Swarnim Srijan — Portfolio</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

---

// File: src/App.vue
```vue
<template>
  <div class="container">
    <header class="header">
      <div class="title">
        <h1>Hi 👋, I'm <span class="accent">Swarnim Srijan</span></h1>
        <p class="subtitle">A passionate full-stack developer from India</p>
      </div>
      <nav class="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section id="about" class="card">
        <About />
      </section>

      <section id="projects" class="card">
        <Projects />
      </section>

      <section id="skills" class="card">
        <Skills />
      </section>

      <section id="contact" class="card contact-card">
        <Contact />
      </section>
    </main>

    <footer class="footer">
      <p>© {{ year }} Swarnim Srijan • <a :href="github">GitHub</a> • <a :href="linkedin">LinkedIn</a></p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'

export default defineComponent({
  name: 'App',
  components: { About, Projects, Skills, Contact },
  setup() {
    const year = new Date().getFullYear()
    const github = 'https://github.com/swarnimsrijan'
    const linkedin = 'https://www.linkedin.com/in/swarnim-srijan-220562214/'
    return { year, github, linkedin }
  }
})
</script>
```

---

// File: src/components/About.vue
```vue
<template>
  <div class="about">
    <div class="about-left">
      <img class="avatar" src="/avatar-placeholder.png" alt="Swarnim Srijan" />
      <div class="badges">
        <img src="https://komarev.com/ghpvc/?username=swarnimsrijan&label=Profile%20views&color=0e75b6&style=flat" alt="views" />
      </div>
    </div>
    <div class="about-right">
      <p>
        Graduate Engineer at Zeta (July 2025 – Present). I build and scale backend services with Spring Boot,
        design full-stack features with Vue.js + TypeScript, and architect event-driven systems.
      </p>

      <h4>Contact</h4>
      <ul>
        <li>Email: <a href="mailto:1142srijan2002@gmail.com">1142srijan2002@gmail.com</a></li>
        <li>Phone: +91 7859052152</li>
        <li>LeetCode: <a href="https://leetcode.com/u/itz_srijan42/">itz_srijan42</a></li>
      </ul>

      <h4>Quick Links</h4>
      <p class="links">
        <a href="https://github.com/swarnimsrijan">GitHub</a> •
        <a href="https://www.linkedin.com/in/swarnim-srijan-220562214/">LinkedIn</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ name: 'About' })
</script>
```

---

// File: src/components/Projects.vue
```vue
<template>
  <div class="projects">
    <h3>Projects</h3>

    <article class="project-item">
      <h4>DocuLab — Collaborative Document Editing Platform</h4>
      <p>
        Built a multi-service collaborative editor supporting JSON, YAML, Markdown, XML, and Mermaid with
        real-time CRDT/OT-based editing, presence, and conflict resolution. Implemented role-based access,
        threaded comments, and a RAG microservice for summarization.
      </p>
      <p class="meta">Tech: Java, Spring Boot, Vue.js, TypeScript, Redis, Kafka, PostgreSQL</p>
    </article>

    <article class="project-item">
      <h4>Insurance Management System</h4>
      <p>
        Full-stack insurance product with end-to-end modules — designed and delivered backend services and
        frontend with Vue + TypeScript.
      </p>
      <p class="meta">Tech: Java, Spring Boot, Vue.js</p>
    </article>

    <article class="project-item">
      <h4>Full-Stack Book Library Application</h4>
      <p>
        MERN + FastAPI hybrid system with hybrid recommendation models (collaborative + content-based). UI with
        personalized dashboards and global search.
      </p>
      <p class="meta">Tech: Node.js, FastAPI, React, MongoDB</p>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ name: 'Projects' })
</script>
```

---

// File: src/components/Skills.vue
```vue
<template>
  <div class="skills">
    <h3>Tech Stack</h3>
    <div class="skill-grid">
      <div class="skill">C++</div>
      <div class="skill">Java</div>
      <div class="skill">Spring Boot</div>
      <div class="skill">TypeScript</div>
      <div class="skill">Vue.js</div>
      <div class="skill">HTML & CSS</div>
      <div class="skill">PostgreSQL</div>
      <div class="skill">Redis</div>
      <div class="skill">Docker & Kubernetes</div>
      <div class="skill">AWS</div>
    </div>

    <h4>Cloud & DevOps</h4>
    <p>Experience with AWS EC2, EKS, Docker, Kubernetes, Jenkins, monitoring with Prometheus & Grafana.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ name: 'Skills' })
</script>
```

---

// File: src/components/Contact.vue
```vue
<template>
  <div class="contact">
    <h3>Let's connect</h3>
    <p>If you'd like to reach out, email me at <a href="mailto:1142srijan2002@gmail.com">1142srijan2002@gmail.com</a></p>
    <div class="socials">
      <a :href="github" target="_blank">GitHub</a>
      <a :href="linkedin" target="_blank">LinkedIn</a>
      <a href="https://leetcode.com/u/itz_srijan42/" target="_blank">LeetCode</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Contact',
  setup() {
    const github = 'https://github.com/swarnimsrijan'
    const linkedin = 'https://www.linkedin.com/in/swarnim-srijan-220562214/'
    return { github, linkedin }
  }
})
</script>
```

---

// File: src/styles.css
```css
:root{
  --bg: #0f1724;
  --card: #0b1220;
  --muted: #9aa4b2;
  --accent: #0ea5e9;
  --text: #e6eef6;
}

*{box-sizing:border-box}
body{font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; margin:0; background:linear-gradient(180deg,#071021 0%, #071828 100%); color:var(--text);}
.container{max-width:1000px;margin:32px auto;padding:20px}
.header{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}
.title h1{margin:0;font-size:28px}
.title .accent{color:var(--accent)}
.title .subtitle{margin:6px 0;color:var(--muted)}
.nav a{color:var(--muted);margin-left:16px;text-decoration:none}
.card{background:rgba(255,255,255,0.03);padding:18px;border-radius:10px;margin-bottom:20px}
.about{display:flex;gap:18px}
.avatar{width:140px;height:140px;background:#0b1220;border-radius:10px;object-fit:cover}
.badges img{margin-top:10px}
.about-right p{color:var(--muted)}
.links a{color:var(--accent);margin-right:8px}
.projects .project-item{margin-bottom:12px}
.project-item .meta{color:var(--muted);font-size:13px}
.skill-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;margin-top:10px}
.skill{background:rgba(255,255,255,0.02);padding:8px;border-radius:6px;text-align:center}
.contact-card{display:flex;flex-direction:column;align-items:flex-start}
.socials a{margin-right:10px;color:var(--accent)}
.footer{text-align:center;color:var(--muted);margin-top:20px}

@media (max-width:700px){
  .about{flex-direction:column}
  .header{flex-direction:column;align-items:flex-start}
  .nav{margin-top:10px}
}
```

---

// File: public/avatar-placeholder.png
```
(placeholder) — add your portrait image here at public/avatar-placeholder.png
```

---

# Notes

- Replace `public/avatar-placeholder.png` with your photo.
- Edit `src/components/Projects.vue` to add project repo links.
- The design uses plain CSS and is responsive.

---

# Vercel deploy notes (also in README)

1. Commit and push this project to a GitHub repository.
2. On Vercel, click "Import Project" and select the GitHub repo.
3. Build command: `npm run build` ; Output directory: `dist`.
4. (Optional) Add a custom domain inside Vercel dashboard.

Enjoy — open the files above, tweak content and assets, then deploy.
```}
