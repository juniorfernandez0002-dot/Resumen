<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Isomorfismo</h1>
      <p class="text-app-text-muted">Misma estructura, diferente dibujo</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          ¡El isomorfismo es como un <strong>buen disfraz</strong>! Dos grafos pueden verse completamente diferentes en papel, pero si conectan exactamente la misma cantidad de puntos de la misma manera, son gemelos idénticos en el fondo.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Correspondencia Biunívoca</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="G \cong G'" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Deben tener la misma cantidad de vértices, aristas y secuencia de grados para que exista isomorfismo.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/4-4" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Concepto de Isomorfismo',
    question: '¿Qué significa que dos grafos sean isomorfos?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Mismo dibujo pero distinto número de aristas.', isMath: false, correct: false },
      { id: 2, text: 'Comparten la misma estructura y conexiones.', isMath: false, correct: true },
      { id: 3, text: 'No tienen vértices en común.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Condiciones Necesarias',
    question: 'Para que dos grafos sean isomorfos, deben cumplir necesariamente con:',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Tener distinto número de vértices.', isMath: false, correct: false },
      { id: 2, text: 'Tener la misma cantidad de vértices y aristas.', isMath: false, correct: true },
      { id: 3, text: 'Que uno sea dirigido y el otro no.', isMath: false, correct: false }
    ]
  }
]
</script>
