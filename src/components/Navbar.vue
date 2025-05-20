<script setup>
import { useAppStore } from '@/store/app';
import IconDarkTheme from '../icons/base/IconDarkTheme.vue';
import IconLightTheme from '../icons/base/IconLightTheme.vue';

const appStore = useAppStore();
</script>

<template>
  <ul class="flex flex-row gap-5 justify-center h-10 items-center select-none">
    <li>
      <router-link to="/"> Inicio </router-link>
    </li>
    <li>
      <router-link to="/sobre-geniux"> Sobre Geniux </router-link>
    </li>
    <li>
      <router-link to="/mas-proyectos">Más proyectos</router-link>
    </li>
    <li>
      <router-link to="/donaciones">Donaciones</router-link>
    </li>
    <li @click="appStore.handleTheme" class="cursor-pointer">
      <div v-if="appStore.themeSwitch">
        <IconLightTheme />
      </div>
      <div v-if="!appStore.themeSwitch">
        <IconDarkTheme />
      </div>
    </li>
  </ul>
</template>
