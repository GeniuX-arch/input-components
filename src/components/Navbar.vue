<script setup>
import { useAppStore } from '@/store/app';
import { ref, computed } from 'vue';

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span v-else class="text-yellow-500 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.844a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                      />
                    </svg>
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
