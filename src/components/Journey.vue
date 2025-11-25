<template>
  <section class="journey">
    <h2>{{ $t("journey.title") }}</h2>
    <p>{{ $t("journey.description") }}</p>

    <div class="timeline">
      <JourneyItem
        v-for="(item, i) in items"
        :key="i"
        :item="item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import JourneyItem from "./JourneyItem.vue";

const items = [
  {
    year: "2025",
    title: "Graduate Engineer @ Zeta",
    desc: "Built backend services, payment systems, microservices."
  },
  {
    year: "2024",
    title: "SDE Intern @ Zeta",
    desc: "Designed currency components & rules engine UI."
  },
  {
    year: "2023",
    title: "Web Dev Intern @ MotionCut",
    desc: "Worked on e-commerce systems."
  }
];
</script>
