import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', () => {
  const themeLight = {
      background: 'bg-white'
  }
  const themeDark = {
      background: 'bg-black'
  }

  const themeSwitch = ref(1)
  const themeSelected = ref(themeDark)

  function handleTheme() {
    if (themeSwitch.value){
        themeSelected.value = themeLight
        themeSwitch.value = 0
    }else {
        themeSelected.value = themeDark
        themeSwitch.value = 1
    }
  }

  return {
    handleTheme,
    themeSelected,
    themeSwitch,
  }
})
