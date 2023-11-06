<script setup>
import { RouterView } from 'vue-router'
import TopNav from '@/components/topnav.vue'
</script>

<template>
  <main>
    <TopNav />
    <RouterView />
  </main>
</template>
