<template>
  <div class="item">
    <div class="year">{{ item.year }}</div>
    <div class="content">
      <h3>{{ item.title }}</h3>
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ item: any }>();
</script>
