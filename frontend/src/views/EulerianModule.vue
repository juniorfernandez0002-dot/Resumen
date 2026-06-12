<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Grafos Eulerianos y Hamiltonianos</h1>
      <p class="text-app-text-muted">Recorriendo el grafo sin repetir</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Un <strong>camino euleriano</strong> es como dibujar una figura sin levantar el lápiz y sin repasar ninguna línea (aristas).<br><br>
          Un <strong>camino hamiltoniano</strong> es como ser un cartero: debes visitar cada casa del vecindario (vértices) exactamente una vez.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Reglas de Recorrido</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            Euleriano (Aristas) vs Hamiltoniano (Vértices)
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Para ser un circuito euleriano, todos los vértices del grafo deben tener grado par.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Circuitos Eulerianos',
    question: '¿Cuál es el requisito para que un grafo conexo admita un circuito euleriano?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Que todos sus vértices tengan grado par.', isMath: false, correct: true },
      { id: 2, text: 'Que todos sus vértices tengan grado impar.', isMath: false, correct: false },
      { id: 3, text: 'Que no tenga lazos.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Circuitos Hamiltonianos',
    question: 'Un circuito que pasa exactamente una vez por cada vértice del grafo se llama:',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Circuito euleriano.', isMath: false, correct: false },
      { id: 2, text: 'Circuito hamiltoniano.', isMath: false, correct: true },
      { id: 3, text: 'Circuito simple.', isMath: false, correct: false }
    ]
  }
]
</script>
