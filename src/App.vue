<script setup>
import Navbar from '@/components/Navbar.vue'
import { useAppStore } from '@/store/app';

const appStore = useAppStore();
</script>
<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<style>
@import "tailwindcss";
</style>
