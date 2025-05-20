<script setup>
import { useAppStore } from '@/store/app';
import { ref, computed } from 'vue';
import IconDarkTheme from '../icons/base/IconDarkTheme.vue';
import IconLightTheme from '../icons/base/IconLightTheme.vue';

const appStore = useAppStore();

// Compute a more descriptive label for screen readers
const themeLabel = computed(() =>
  appStore.themeSwitch ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
);

// Properly compute dark mode state for icon display
const isDarkMode = computed(() => appStore.themeSwitch);

// Add hover states tracking for navigation items
const activeItem = ref(null);
const setActiveItem = (item) => {
  activeItem.value = item;
};
const clearActiveItem = () => {
  activeItem.value = null;
};
</script>

<template>
  <nav aria-label="Navegación principal">
    <ul
      class="flex flex-row flex-wrap gap-6 justify-center h-12 items-center select-none px-4"
    >
      <li>
        <router-link
          to="/"
          class="font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
          :class="{
            'text-indigo-600 dark:text-indigo-400': $route.path === '/',
          }"
          @mouseover="setActiveItem('home')"
          @mouseleave="clearActiveItem()"
        >
          Inicio
        </router-link>
      </li>
      <li>
        <router-link
          to="/sobre-geniux"
          class="font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
          :class="{
            'text-indigo-600 dark:text-indigo-400':
              $route.path === '/sobre-geniux',
          }"
          @mouseover="setActiveItem('about')"
          @mouseleave="clearActiveItem()"
        >
          Sobre Geniux
        </router-link>
      </li>
      <li>
        <router-link
          to="/mas-proyectos"
          class="font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
          :class="{
            'text-indigo-600 dark:text-indigo-400':
              $route.path === '/mas-proyectos',
          }"
          @mouseover="setActiveItem('projects')"
          @mouseleave="clearActiveItem()"
        >
          Más proyectos
        </router-link>
      </li>
      <li>
        <router-link
          to="/donaciones"
          class="font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
          :class="{
            'text-indigo-600 dark:text-indigo-400':
              $route.path === '/donaciones',
          }"
          @mouseover="setActiveItem('donations')"
          @mouseleave="clearActiveItem()"
        >
          Donaciones
        </router-link>
      </li>
      <li class="cursor-pointer">
        <label
          class="inline-flex items-center space-x-2 cursor-pointer"
          :for="'theme-toggle'"
        >
          <span class="sr-only">{{ themeLabel }}</span>
          <span
            class="text-sm font-medium text-gray-600 dark:text-gray-300 hidden sm:inline"
          >
            {{ isDarkMode ? 'Modo Oscuro' : 'Modo Claro' }}
          </span>

          <div class="relative">
            <input
              type="checkbox"
              id="theme-toggle"
              class="sr-only"
              v-model="appStore.themeSwitch"
              @change="appStore.handleTheme"
              :aria-label="themeLabel"
            />

            <div
              class="w-12 h-6 rounded-full transition-colors duration-300 ease-in-out"
              :class="isDarkMode ? 'bg-indigo-600' : 'bg-gray-200'"
              aria-hidden="true"
            >
              <div
                class="absolute inset-y-0 left-0 flex items-center"
                aria-hidden="true"
              >
                <div
                  class="w-6 h-6 rounded-full transform transition-transform duration-300 flex items-center justify-center shadow-md"
                  :class="
                    isDarkMode
                      ? 'translate-x-6 bg-gray-900'
                      : 'translate-x-0 bg-white'
                  "
                >
                  <span v-if="isDarkMode" class="text-white text-xs">
                    <IconDarkTheme />
                  </span>
                  <span v-else class="text-yellow-500 text-xs">
                    <IconLightTheme />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </label>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Add responsive adjustments */
@media (max-width: 640px) {
  ul {
    gap: 3;
    padding: 0 1rem;
  }
}
</style>
