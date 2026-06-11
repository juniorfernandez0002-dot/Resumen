<template>
  <span 
    v-html="renderedMath" 
    :class="{'block': display, 'inline-block': !display}"
    class="math-formula"
  ></span>
</template>

<script setup>
import { computed } from 'vue'
import katex from 'katex'

const props = defineProps({
  math: {
    type: String,
    required: true
  },
  display: {
    type: Boolean,
    default: false
  }
})

const renderedMath = computed(() => {
  try {
    return katex.renderToString(props.math, {
      displayMode: props.display,
      throwOnError: false,
      output: 'html',
      strict: false
    })
  } catch (e) {
    return props.math
  }
})
</script>
