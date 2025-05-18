import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useContadorStore = defineStore('contador', () => {
  const themeSwitch = ref(0)

    const themeSelected = ref()
    themeLight = {
        background: 'bg-black'
    }
    themeDark = {
        background: 'bg-black'
    }
  // Estado

  // Acciones
  function handleTheme() {
    if (theme){
        themeSelected.value = themeLight
        theme.value = 0
    }else {
        themeSelected.value = themeDark
        theme.value = 1
    }
  }

  return {
    handleTheme,
    themeSelected,
    themeSwitch,
  }
})
