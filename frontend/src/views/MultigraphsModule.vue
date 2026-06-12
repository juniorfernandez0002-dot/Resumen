<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Multigrafos</h1>
      <p class="text-app-text-muted">Múltiples conexiones y lazos</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Un grafo simple es un dibujo ordenado: líneas rectas y únicas entre puntos. 
          Un <strong>multígrafo</strong> es más desordenado: ¡permite múltiples caminos entre los mismos dos puntos o incluso caminos que regresan al mismo lugar (lazos)!
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Diferencia Clave</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            Grafo Simple vs Multígrafo
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Un grafo simple no tiene lazos ni aristas paralelas. Un multígrafo sí permite múltiples aristas conectando el mismo par de vértices.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/4-3" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Grafos Simples',
    question: '¿Cuál es la principal característica de un grafo simple?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Permite tener lazos (bucles).', isMath: false, correct: false },
      { id: 2, text: 'No tiene lazos ni múltiples aristas.', isMath: false, correct: true },
      { id: 3, text: 'Todas sus aristas tienen dirección.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Modelado con Multigrafos',
    question: '¿Qué tipo de grafo usarías para representar múltiples vuelos directos entre dos mismas ciudades?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Grafo simple.', isMath: false, correct: false },
      { id: 2, text: 'Multígrafo.', isMath: false, correct: true },
      { id: 3, text: 'Grafo bipartito.', isMath: false, correct: false }
    ]
  }
]
</script>
