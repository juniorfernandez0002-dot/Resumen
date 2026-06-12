<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Grafos Básicos</h1>
      <p class="text-app-text-muted">Nodos y aristas</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Un grafo es como un <strong>mapa</strong>. Los vértices (puntos) son lugares y las aristas (líneas) son los caminos o conexiones entre ellos. ¡Se usan para modelar redes sociales o rutas de viaje!
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Un grafo G consiste en vértices V y aristas E</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="G = (V,E)" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">La suma de los grados de todos los vértices es igual al doble del número de aristas.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/4-2" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Definición de Vértice',
    question: '¿Qué es un vértice en un grafo?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Una conexión entre dos lugares.', isMath: false, correct: false },
      { id: 2, text: 'Un nodo o punto que representa un objeto.', isMath: false, correct: true },
      { id: 3, text: 'El peso de una arista.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Suma de Grados',
    question: 'En un grafo, si sumamos los grados de todos los vértices, ¿qué obtenemos?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'El doble del número de aristas.', isMath: false, correct: true },
      { id: 2, text: 'El número total de vértices.', isMath: false, correct: false },
      { id: 3, text: 'El número de lazos.', isMath: false, correct: false }
    ]
  }
]
</script>
