<template>
  <select v-model="locale" @change="changeLang">
    <option value="en">EN</option>
    <option value="hi">HI</option>
  </select>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
function changeLang() {}
</script>
