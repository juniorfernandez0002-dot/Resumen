<template>
  <div v-if="isVisible" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in select-none">
    
    <div class="bg-app-bg border-2 border-app-primary p-8 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 flex flex-col items-center text-center relative overflow-hidden">
      
      <!-- Efectos de luz roja de emergencia (secuestro cognitivo) -->
      <div class="absolute inset-0 bg-red-500/5 animate-pulse pointer-events-none"></div>

      <div class="text-6xl mb-4 animate-bounce">🚨</div>
      
      <h2 class="text-3xl font-black text-white mb-2 uppercase tracking-widest text-app-primary">
        Intercepción Cognitiva
      </h2>
      
      <p class="text-app-text-muted mb-8 text-lg">
        Tu cerebro intentaba olvidar esto. Para continuar usando la aplicación, debes escribir de memoria la definición exacta de:
      </p>

      <div class="bg-app-surface border border-app-border px-6 py-4 rounded-xl w-full mb-8 shadow-inner">
        <h3 class="text-xl font-bold text-white">{{ currentConcept?.title }}</h3>
      </div>

      <div class="w-full relative z-10">
        <textarea 
          v-model="currentInput" 
          @input="checkMatch"
          rows="3"
          placeholder="Escribe la respuesta exacta..."
          class="w-full bg-[#1e293b] border-2 border-red-500/50 rounded-xl p-4 text-app-text focus:outline-none focus:border-app-primary transition-colors resize-none text-lg"
          :class="{'border-green-500 bg-green-500/10': flashSuccess}"
        ></textarea>
        <p class="text-xs text-app-text-muted mt-2 text-left">
          * Sin botón de cerrar. Piensa. Escribe. Sobrevive.
        </p>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { brainStore } from '../store/brainStore'

const isVisible = ref(false)
const currentConcept = ref(null)
const currentInput = ref('')
const flashSuccess = ref(false)
let quizInterval = null

// Disparar un Pop Quiz cada 60 segundos (para demostración, luego se puede ajustar)
const INTERVAL_MS = 60000; 

const triggerQuiz = () => {
  // No interrumpir si ya está visible
  if (isVisible.value) return;

  const concept = brainStore.getRandomConcept();
  if (concept) {
    currentConcept.value = concept;
    currentInput.value = '';
    isVisible.value = true;
  }
}

onMounted(() => {
  // Iniciar el temporizador global
  quizInterval = setInterval(() => {
    // Solo disparamos si hay un 30% de probabilidad (para que sea una sorpresa)
    // Pero si queremos que pase seguro para probar, lo forzamos.
    if (Math.random() > 0.5) {
      triggerQuiz();
    }
  }, INTERVAL_MS)
  
  // Para propósitos de testing/demostración, también exponemos triggerQuiz en window
  window.triggerBrainQuiz = triggerQuiz;
})

onUnmounted(() => {
  if (quizInterval) clearInterval(quizInterval)
})

// Función para normalizar strings igual que en TypingDrill
const normalizeString = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
    .replace(/[.,:;¡!¿?()]/g, "") 
    .replace(/\s+/g, ' ') 
    .trim()
}

const targetNormalized = computed(() => {
  return currentConcept.value ? normalizeString(currentConcept.value.text) : ''
})

const checkMatch = () => {
  const inputNormalized = normalizeString(currentInput.value)

  if (inputNormalized === targetNormalized.value) {
    // ¡Acierto! Rompe el secuestro
    flashSuccess.value = true
    setTimeout(() => {
      flashSuccess.value = false
      isVisible.value = false
      currentConcept.value = null
      currentInput.value = ''
    }, 800)
  }
}
</script>
