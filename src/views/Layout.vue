<script setup>
import { useAppStore } from '@/store/app';
const appStore = useAppStore();

</script>

<template>
  <main class="layout px-10 py-5" :class="appStore.themeSelected.background">
    <slot />
  </main>
</template>