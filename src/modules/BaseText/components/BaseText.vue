<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  inputClass: {
    type: String,
    default: 'border-2 rounded-2 focus:border-10'
  },
  containerClass: {
    type: String,
    default: ''
  },
  spanClass: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:text'])

const handleInput = (event) => {
  emit('update:text', event.target.value)
}
</script>

<template>
  <div :class="containerClass">
    <div>
      <input type="text" :class="inputClass" :value="text" @input="handleInput">
    </div>
    <span :class="spanClass">{{ text }}</span>
  </div>
</template>

