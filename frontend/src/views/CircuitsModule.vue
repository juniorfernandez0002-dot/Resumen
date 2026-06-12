<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Circuitos e Inducción Matemática</h1>
      <p class="text-app-text-muted">¡El efecto dominó de las matemáticas!</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          La inducción matemática es como un <strong>gran efecto dominó</strong>: si empujas la primera pieza (Caso Base) y aseguras que cada pieza empujará a la siguiente (Paso Inductivo), ¡todas caerán, sin importar cuántas sean!
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Método de Demostración</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            n=1 (Base) y n=k → n=k+1 (Inductivo)
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Consta de dos pasos: el Caso Base (demostrar para el inicio) y el Paso Inductivo (asumir cierto para k y demostrar para k+1).</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/3-3" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Pasos de la Inducción',
    question: '¿Cuáles son los dos pasos fundamentales del principio de inducción matemática?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Hipótesis y conclusión', isMath: false, correct: false },
      { id: 2, text: 'Caso base y paso inductivo', isMath: false, correct: true },
      { id: 3, text: 'Suma y multiplicación', isMath: false, correct: false }
    ]
  },
  {
    title: 'El Caso Base',
    question: "En la inducción, ¿qué significa el 'Caso Base'?",
    needsDiagram: false,
    options: [
      { id: 1, text: 'Asumir que la afirmación es verdadera para n=k', isMath: false, correct: false },
      { id: 2, text: 'Demostrar que la afirmación es verdadera para el primer número (ej. n=1)', isMath: false, correct: true },
      { id: 3, text: 'Dividir el problema en dos mitades', isMath: false, correct: false }
    ]
  }
]
</script>
