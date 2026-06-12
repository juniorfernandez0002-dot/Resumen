<template>
  <div class="w-full max-w-5xl mx-auto min-h-[400px] flex flex-col font-sans select-none">
    
    <!-- PANTALLA DE EXAMEN -->
    <div v-if="!isFinished" class="flex-1 flex flex-col">
      <!-- Header con Combo Tracker (DOPAMINA) -->
      <div class="flex items-center justify-between bg-app-surface p-4 rounded-t-2xl border-b border-app-border">
        <div class="flex items-center gap-2">
          <span class="text-2xl" :class="{'animate-bounce': streak > 0}">🔥</span>
          <div>
            <div class="text-xs text-app-text-muted font-bold uppercase tracking-wider">Racha Actual</div>
            <div class="text-2xl font-black text-app-primary" :class="{'text-yellow-400': streak > 2, 'text-red-500': streak > 5}">
              x{{ streak }}
            </div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-xs text-app-text-muted font-bold uppercase tracking-wider">Faltan</div>
          <div class="text-xl font-bold text-app-text">{{ queue.length }}</div>
        </div>
      </div>

      <!-- Área de Pregunta -->
      <div class="bg-[#0f172a] p-8 flex-1 border-x border-app-border flex flex-col justify-center">
        <h2 class="text-xl md:text-2xl font-bold text-white mb-6 text-center leading-relaxed">
          {{ currentQuestion?.question }}
        </h2>

        <!-- Opciones -->
        <div class="space-y-3 mt-4">
          <button 
            v-for="option in currentQuestion?.options" 
            :key="option.id"
            @click="selectOption(option)"
            :disabled="showFeedback"
            class="w-full p-4 rounded-xl text-left border-2 transition-all duration-200 font-medium text-lg"
            :class="[
              getOptionClass(option),
              !showFeedback ? 'hover:border-app-primary hover:-translate-y-1 hover:shadow-lg bg-app-surface border-[#334155] text-app-text' : ''
            ]"
          >
            {{ option.text }}
          </button>
        </div>
      </div>

      <!-- Footer Feedback -->
      <div class="h-24 bg-app-surface rounded-b-2xl border-t border-app-border flex items-center justify-center p-4">
        <div v-if="showFeedback" class="text-center animate-fade-in w-full">
          <div v-if="feedbackState === 'success'" class="text-green-400 font-bold text-xl flex items-center justify-center gap-2">
            <span class="text-3xl animate-ping">✨</span> ¡EXCELENTE! ¡Tu cerebro se hace más fuerte! <span class="text-3xl animate-ping">✨</span>
          </div>
          <div v-else class="text-yellow-500 font-bold text-lg">
            ¡Casi! No te preocupes, tu cerebro la procesará al final de la fila. 🔄
          </div>
        </div>
        <div v-else class="text-app-text-muted text-sm font-medium">
          Selecciona la opción correcta para continuar.
        </div>
      </div>
    </div>

    <!-- PANTALLA FINAL (ENCUESTA DE REAFIRMACIÓN) -->
    <div v-else class="bg-app-surface p-8 rounded-2xl border border-app-border text-center flex flex-col items-center animate-fade-in">
      <div class="text-6xl mb-6 animate-bounce">🏆</div>
      <h2 class="text-3xl font-black text-white mb-2">¡Bucle Cerrado!</h2>
      <p class="text-app-text-muted text-lg mb-8 max-w-md">
        Al obligarte a repetir las que fallaste, hemos forzado físicamente a tus neuronas a crear la conexión correcta. Tu Racha Máxima fue de <strong>x{{ maxStreak }}</strong>.
      </p>

      <div class="w-full bg-[#0f172a] p-6 rounded-xl border border-[#334155] mb-8">
        <h3 class="text-xl font-bold text-app-primary mb-4">Reafirmación Psicológica</h3>
        <p class="text-white mb-6">¿Sientes que tu cerebro procesa estos conceptos automáticamente ahora?</p>
        <div class="flex gap-4 justify-center">
          <button @click="finishExam" class="bg-app-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-opacity-80 transition-all hover:-translate-y-1">
            Sí, ¡es instintivo! 🧠
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  questions: { type: Array, required: true },
  nextRoute: { type: String, required: true }
})

const router = useRouter()

const queue = ref([])
const currentQuestion = computed(() => queue.value[0] || null)

const streak = ref(0)
const maxStreak = ref(0)

const showFeedback = ref(false)
const feedbackState = ref('') // 'success' or 'error'
const selectedOptionId = ref(null)

const isFinished = ref(false)

onMounted(() => {
  // Inicializamos la cola de preguntas
  // Para evitar mutar la prop, hacemos una copia profunda.
  // Mezclamos un poco para que no sea predecible.
  let q = JSON.parse(JSON.stringify(props.questions))
  q.sort(() => Math.random() - 0.5)
  queue.value = q
})

const selectOption = (option) => {
  if (showFeedback.value) return;
  
  selectedOptionId.value = option.id
  showFeedback.value = true

  if (option.correct) {
    feedbackState.value = 'success'
    streak.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value

    setTimeout(() => {
      // Remover la pregunta de la cola
      queue.value.shift()
      resetTurn()
    }, 1500)

  } else {
    feedbackState.value = 'error'
    streak.value = 0

    setTimeout(() => {
      // Reprogramación Cerebral: Mover la pregunta al final de la cola
      const failedQuestion = queue.value.shift()
      queue.value.push(failedQuestion)
      resetTurn()
    }, 2500)
  }
}

const getOptionClass = (option) => {
  if (!showFeedback.value) return '';
  
  if (option.id === selectedOptionId.value) {
    return option.correct 
      ? 'border-green-500 bg-green-500/20 text-green-400' 
      : 'border-red-500 bg-red-500/20 text-red-400';
  }
  
  // Resaltar la correcta si falló
  if (feedbackState.value === 'error' && option.correct) {
    return 'border-yellow-500 bg-yellow-500/20 text-yellow-400';
  }

  return 'border-[#334155] bg-app-surface text-app-text opacity-50';
}

const resetTurn = () => {
  showFeedback.value = false
  selectedOptionId.value = null
  if (queue.value.length === 0) {
    isFinished.value = true
  }
}

const finishExam = () => {
  router.push(props.nextRoute)
}
</script>
