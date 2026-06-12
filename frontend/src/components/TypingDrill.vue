<template>
  <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col relative overflow-hidden group">
    
    <!-- Animación de Fondo al Completar -->
    <div v-if="isComplete" class="absolute inset-0 bg-green-500/10 animate-pulse pointer-events-none"></div>

    <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2 flex justify-between items-center z-10">
      <span>{{ title }}</span>
      <span v-if="!isComplete" class="text-xs font-black bg-app-bg px-2 py-1 rounded text-app-primary">
        {{ completedReps }} / {{ requiredReps }}
      </span>
      <span v-else class="text-xs font-black bg-green-500/20 text-green-400 px-2 py-1 rounded">
        ¡MEMORIZADO! ✓
      </span>
    </h2>

    <div class="text-app-text-muted text-sm mb-4 leading-relaxed z-10 bg-[#0f172a] p-4 rounded-lg border border-[#334155] font-mono select-none">
      {{ targetText }}
    </div>

    <!-- Zona de Tipeo -->
    <div class="z-10 relative">
      <div v-if="!isComplete" class="space-y-2">
        <p class="text-xs text-app-primary font-bold uppercase tracking-wider mb-2 animate-pulse">
          Escribe la oración exacta para avanzar:
        </p>
        <textarea 
          v-model="currentInput" 
          @input="checkMatch"
          rows="3"
          placeholder="Escribe aquí..."
          class="w-full bg-[#1e293b] border-2 border-[#334155] rounded-xl p-3 text-app-text focus:outline-none focus:border-app-primary transition-colors resize-none"
          :class="{'border-green-500 bg-green-500/10': flashSuccess}"
        ></textarea>
        
        <!-- Barra de Progreso -->
        <div class="h-2 w-full bg-[#0f172a] rounded-full overflow-hidden mt-2">
          <div class="h-full bg-app-primary transition-all duration-300" :style="{ width: progressPercent + '%' }"></div>
        </div>
      </div>

      <!-- Mensaje de Éxito -->
      <div v-else class="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
        <p class="text-green-400 font-bold text-lg mb-1">¡Vía Neuronal Creada!</p>
        <p class="text-sm text-green-400/80">Tu cerebro ha registrado este concepto. Prepárate, podría aparecer por sorpresa más tarde.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { brainStore } from '../store/brainStore'

const props = defineProps({
  title: { type: String, required: true },
  targetText: { type: String, required: true },
  requiredReps: { type: Number, default: 5 }
})

const currentInput = ref('')
const completedReps = ref(0)
const isComplete = ref(false)
const flashSuccess = ref(false)

const progressPercent = computed(() => {
  return (completedReps.value / props.requiredReps) * 100
})

// Función para normalizar strings (quitar tildes, signos de puntuación extraños, y múltiples espacios)
const normalizeString = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Quitar tildes
    .replace(/[.,:;¡!¿?()]/g, "") // Quitar puntuación básica
    .replace(/\s+/g, ' ') // Espacios múltiples a uno solo
    .trim()
}

const targetNormalized = computed(() => normalizeString(props.targetText))

const checkMatch = () => {
  if (isComplete.value) return;

  const inputNormalized = normalizeString(currentInput.value)

  if (inputNormalized === targetNormalized.value) {
    // ¡Acierto!
    completedReps.value++
    currentInput.value = ''
    
    // Efecto visual flash
    flashSuccess.value = true
    setTimeout(() => { flashSuccess.value = false }, 300)

    if (completedReps.value >= props.requiredReps) {
      isComplete.value = true
      // Guardar en la memoria global
      brainStore.addConcept(props.title, props.targetText)
    }
  }
}
</script>
