<template>
  <div class="mt-8 border-t border-app-border pt-8">
    <h2 class="text-lg font-semibold text-app-text mb-6">Práctica Guiada</h2>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- Panel de Pasos -->
      <div class="col-span-1 flex flex-col gap-3">
        <div 
          v-for="(step, index) in steps" :key="index"
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
        
        <div v-if="isCompleted" class="absolute inset-0 bg-[#1e1f20]/95 backdrop-blur-sm z-10 rounded-xl flex flex-col items-center justify-center p-8 text-center border border-app-success/20">
          <div class="w-12 h-12 rounded-full bg-app-success-light text-app-success flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-xl font-bold text-app-text mb-2">Módulo Completado</h3>
          <p class="text-sm text-app-text-muted mb-6">Has demostrado comprensión de los conceptos básicos de conjuntos.</p>
          <button @click="reset" class="px-4 py-2 bg-app-primary hover:bg-app-primary-hover text-white text-sm font-medium rounded transition-colors">
            Reiniciar Práctica
          </button>
        </div>

        <div v-else>
          
          <!-- DIAGRAMA INTERACTIVO GLOBAL PARA LA PRÁCTICA -->
          <div class="mb-8">
            <p v-if="!diagramCompleted[0]" class="text-sm text-app-primary mb-4 font-bold">👉 Paso fundamental: Construye el diagrama arrastrando los números para poder visualizar las respuestas.</p>
            <p v-else class="text-sm text-app-success mb-4 font-bold">✅ Diagrama construido. Úsalo como tu mapa visual para responder las preguntas de abajo:</p>
            
            <VennDiagramInteractive 
              title="Tu Mapa Visual"
              :rulesTitle="steps[0].diagramData.rulesTitle"
              :rules="steps[0].diagramData.rules"
              :initialElements="steps[0].diagramData.elements"
              @completed="handleDiagramCompleted(0)"
            />
          </div>

          <!-- PREGUNTA Y OPCIONES (Solo aparecen cuando el diagrama inicial está listo) -->
          <div v-if="diagramCompleted[0]" class="bg-app-bg p-6 rounded-lg border border-app-primary-light">
            <h3 class="text-lg font-bold text-app-text mb-2">Paso {{ currentStep + 1 }}: {{ steps[currentStep].title }}</h3>
            <p class="text-app-text-muted mb-6">{{ steps[currentStep].question }}</p>
            
            <div class="grid grid-cols-2 gap-3 mt-4">
              <button 
                v-for="opt in steps[currentStep].options" :key="opt.id"
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
import MathFormula from './MathFormula.vue'
import VennDiagramInteractive from './VennDiagramInteractive.vue'

const currentStep = ref(0)
const diagramCompleted = ref({
  0: false,
  1: false
})

const steps = [
  {
    title: 'Identificar Intersección',
    question: 'Dado A = {2, 4, 6} y B = {4, 6, 8}. Identifica el conjunto resultante de A ∩ B (Intersección).',
    needsDiagram: true,
    diagramData: {
      rulesTitle: 'Datos del problema:',
      rules: [
        'Conjunto A: {2, 4, 6}',
        'Conjunto B: {4, 6, 8}',
        'Coloca los números repetidos en la intersección.'
      ],
      elements: [
        { id: 10, value: '2', region: 'UNASSIGNED', correctRegion: 'A' },
        { id: 11, value: '4', region: 'UNASSIGNED', correctRegion: 'INTERSECTION' },
        { id: 12, value: '6', region: 'UNASSIGNED', correctRegion: 'INTERSECTION' },
        { id: 13, value: '8', region: 'UNASSIGNED', correctRegion: 'B' }
      ]
    },
    options: [
      { id: 1, text: '\\{2, 8\\}', isMath: true, correct: false },
      { id: 2, text: '\\{4, 6\\}', isMath: true, correct: true },
      { id: 3, text: '\\{2, 4, 6, 8\\}', isMath: true, correct: false },
      { id: 4, text: '\\emptyset', isMath: true, correct: false }
    ]
  },
  {
    title: 'Análisis de Cardinalidad',
    question: 'Determine la cardinalidad de la unión |A ∪ B| (Cuenta cuántos elementos distintos hay en total dentro de los círculos)',
    needsDiagram: false,
    options: [
      { id: 1, text: '6', isMath: false, correct: false },
      { id: 2, text: '4', isMath: false, correct: true },
      { id: 3, text: '2', isMath: false, correct: false },
      { id: 4, text: '8', isMath: false, correct: false }
    ]
  }
]

const isCompleted = computed(() => currentStep.value >= steps.length)

const handleDiagramCompleted = (stepIndex) => {
  diagramCompleted.value[stepIndex] = true
}

const checkAnswer = (isCorrect) => {
  if (isCorrect) {
    currentStep.value++
  } else {
    alert("Respuesta incorrecta. Revise el diagrama y vuelva a intentarlo.")
  }
}

const reset = () => {
  currentStep.value = 0
  diagramCompleted.value = { 0: false, 1: false }
}
</script>
