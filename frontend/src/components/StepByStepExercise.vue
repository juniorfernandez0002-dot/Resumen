<template>
  <div class="mt-8 border-t border-app-border pt-8">
    <h2 class="text-lg font-semibold text-app-text mb-6">Práctica Guiada</h2>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- Panel de Pasos -->
      <div class="col-span-1 flex flex-col gap-3">
        <div 
          v-for="(step, index) in exerciseSteps" :key="index"
          class="p-4 rounded-lg border transition-all relative"
          :class="[
            currentStep === index ? 'bg-app-surface border-app-primary shadow-sm' : 
            currentStep > index ? 'bg-app-bg border-app-border opacity-70' : 'bg-app-bg border-app-border opacity-40'
          ]"
        >
          <div v-if="currentStep > index" class="absolute right-3 top-1/2 -translate-y-1/2 text-app-success">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          
          <h4 class="font-medium text-sm text-app-text mb-1">Paso {{ index + 1 }}</h4>
          <p class="text-xs text-app-text-muted">{{ step.title }}</p>
        </div>
      </div>

      <!-- Área de Interacción -->
      <div class="col-span-1 lg:col-span-2 bg-app-surface p-6 rounded-xl border border-app-border relative">
        
        <!-- Pantalla de Éxito y Siguiente Módulo -->
        <div v-if="isCompleted" class="absolute inset-0 bg-[#1e1f20]/95 backdrop-blur-sm z-10 rounded-xl flex flex-col items-center justify-center p-8 text-center border border-app-success/20">
          <div class="w-12 h-12 rounded-full bg-app-success-light text-app-success flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-xl font-bold text-app-text mb-2">¡Módulo Completado!</h3>
          <p class="text-sm text-app-text-muted mb-6">Has demostrado comprensión total de este tema.</p>
          
          <div class="flex gap-4">
            <button @click="reset" class="px-4 py-2 bg-app-surface border border-app-border hover:bg-app-bg text-app-text text-sm font-medium rounded transition-colors">
              Repasar Práctica
            </button>
            <button v-if="nextModuleRoute" @click="goToNextModule" class="px-4 py-2 bg-app-primary hover:bg-app-primary-hover text-white text-sm font-medium rounded transition-colors shadow-lg shadow-app-primary/20">
              Siguiente Módulo &rarr;
            </button>
          </div>
        </div>

        <div v-else>
          <!-- DIAGRAMA INTERACTIVO GLOBAL PARA LA PRÁCTICA -->
          <div class="mb-8" v-if="exerciseSteps[0]?.needsDiagram || exerciseSteps[0]?.interactiveComponent">
            <p v-if="!diagramCompleted[0]" class="text-sm text-app-primary mb-4 font-bold">👉 Paso fundamental: Construye o interactúa con el visualizador para poder responder las preguntas.</p>
            <p v-else class="text-sm text-app-success mb-4 font-bold">✅ Visualización construida. Úsala como mapa para responder las preguntas de abajo:</p>
            
            <VennDiagramInteractive 
              v-if="exerciseSteps[0].needsDiagram"
              title="Tu Mapa Visual"
              :rulesTitle="exerciseSteps[0].diagramData.rulesTitle"
              :rules="exerciseSteps[0].diagramData.rules"
              :initialElements="exerciseSteps[0].diagramData.elements"
              @completed="handleDiagramCompleted(0)"
            />

            <!-- Soporte dinámico para otros componentes interactivos como el juego de Cardinalidad -->
            <component 
              v-else-if="exerciseSteps[0].interactiveComponent"
              :is="exerciseSteps[0].interactiveComponent"
              v-bind="exerciseSteps[0].interactiveData"
              @completed="handleDiagramCompleted(0)"
            />
          </div>

          <!-- PREGUNTA Y OPCIONES (Aparecen cuando el diagrama/juego está listo, o inmediatamente si no hay diagrama) -->
          <div v-if="diagramCompleted[0] || (!exerciseSteps[0]?.needsDiagram && !exerciseSteps[0]?.interactiveComponent)" class="bg-app-bg p-6 rounded-lg border border-app-primary-light">
            <h3 class="text-lg font-bold text-app-text mb-2">Paso {{ currentStep + 1 }}: {{ exerciseSteps[currentStep].title }}</h3>
            <p class="text-app-text-muted mb-6">{{ exerciseSteps[currentStep].question }}</p>
            
            <div class="grid grid-cols-2 gap-3 mt-4">
              <button 
                v-for="opt in exerciseSteps[currentStep].options" :key="opt.id"
                @click="checkAnswer(opt.correct)"
                class="p-4 bg-app-surface border border-app-border rounded-lg hover:border-app-primary hover:bg-app-primary-light/30 transition-all text-sm font-bold text-app-text text-center flex items-center justify-center min-h-[80px]"
              >
                <MathFormula v-if="opt.isMath" :math="opt.text" />
                <span v-else>{{ opt.text }}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import MathFormula from './MathFormula.vue'
import VennDiagramInteractive from './VennDiagramInteractive.vue'
import CardinalityInteractiveGame from './CardinalityInteractiveGame.vue' // Lo usaremos pronto

const props = defineProps({
  exerciseSteps: {
    type: Array,
    required: true
  },
  nextModuleRoute: {
    type: String,
    default: ''
  }
})

const router = useRouter()
const currentStep = ref(0)

const initDiagramState = () => {
  const state = {}
  props.exerciseSteps.forEach((step, idx) => {
    state[idx] = false
  })
  return state
}

const diagramCompleted = ref(initDiagramState())

const isCompleted = computed(() => currentStep.value >= props.exerciseSteps.length)

const handleDiagramCompleted = (stepIndex) => {
  diagramCompleted.value[stepIndex] = true
}

const checkAnswer = (isCorrect) => {
  if (isCorrect) {
    currentStep.value++
  } else {
    alert("Respuesta incorrecta. Analiza bien antes de hacer clic y vuelve a intentarlo.")
  }
}

const reset = () => {
  currentStep.value = 0
  diagramCompleted.value = initDiagramState()
}

const goToNextModule = () => {
  if (props.nextModuleRoute) {
    router.push(props.nextModuleRoute)
  }
}
</script>
