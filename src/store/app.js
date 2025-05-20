import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', () => {
  const themeLight = {
    background: 'bg-white',
  };
  const themeDark = {
    background: 'bg-black',
  };

  const themeSwitch = ref(true);
  const themeSelected = ref(themeDark);

  function handleTheme() {
    if (themeSwitch.value) {
      themeSelected.value = themeDark;
    } else {
      themeSelected.value = themeLight;
    }
  }

  return {
    handleTheme,
    themeSelected,
    themeSwitch,
  };
});
