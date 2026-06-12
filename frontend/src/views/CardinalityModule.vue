<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <!-- Encabezado del Módulo -->
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Cardinalidad</h1>
      <p class="text-app-text-muted">El arte de contar elementos matemáticamente</p>
    </header>

    <!-- Sección Teórica Corta -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">¿Qué significa?</h2>
        <p class="text-app-text-muted text-sm mb-4">
          "Cardinalidad" es solo la palabra elegante que usan los matemáticos para decir <strong>"Contar"</strong>. 
          Representa la cantidad exacta de elementos únicos que viven dentro de un conjunto.
        </p>
        <p class="text-app-text-muted text-sm">
          Se escribe poniendo el nombre del conjunto entre barras verticales <strong class="text-app-primary">|A|</strong> o con una 'n' minúscula <strong class="text-app-primary">n(A)</strong>.
        </p>
      </div>

      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Ejemplo Visual</h2>
        <div class="flex flex-col gap-4">
          <div class="bg-app-bg p-4 rounded-lg border border-app-border">
            <MathFormula math="A = \{ 🍎, 🍌, 🍇 \}" />
            <div class="mt-2 text-center text-sm font-bold text-app-success">
              <MathFormula math="|A| = 3" />
            </div>
          </div>
          <div class="bg-app-bg p-4 rounded-lg border border-app-border opacity-80">
            <MathFormula math="B = \{ 🐶, 🐶, 🐱 \}" />
            <div class="mt-2 text-center text-sm font-bold text-app-danger">
              <MathFormula math="|B| = 2 \quad \text{(¡El perro repetido no cuenta!)}" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Componente de Ejercicio Dinámico -->
    <StepByStepExercise :exerciseSteps="cardinalitySteps" nextModuleRoute="/modulo/subconjuntos" />

  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import CardinalityInteractiveGame from '../components/CardinalityInteractiveGame.vue'

const cardinalitySteps = [
  {
    title: 'Filtrar y Contar',
    question: 'Haz clic en las esferas de arriba para contar la cardinalidad del conjunto. Recuerda la regla de los repetidos. ¿Cuál es el resultado final de |A|?',
    interactiveComponent: CardinalityInteractiveGame,
    interactiveData: {
      elements: [2, 4, 5, 5, 8, 8, 8]
    },
    options: [
      { id: 1, text: '7', isMath: false, correct: false },
      { id: 2, text: '4', isMath: false, correct: true },
      { id: 3, text: '3', isMath: false, correct: false },
      { id: 4, text: '5', isMath: false, correct: false }
    ]
  },
  {
    title: 'Cálculo Combinado',
    question: 'Sabiendo que un conjunto vacío se escribe como ∅ (y no tiene elementos). ¿Cuánto es |A| + |∅|?',
    needsDiagram: false,
    options: [
      { id: 1, text: '4', isMath: false, correct: true },
      { id: 2, text: '5', isMath: false, correct: false },
      { id: 3, text: '0', isMath: false, correct: false },
      { id: 4, text: '\\text{Error}', isMath: true, correct: false }
    ]
  }
]
</script>
