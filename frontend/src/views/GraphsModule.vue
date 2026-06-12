<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Grafos Básicos</h1>
      <p class="text-app-text-muted">Nodos y aristas en acción</p>
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
          <p class="text-center text-app-text-muted text-sm">Grafo Simple</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="G = (V,E)" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">La suma de los grados (conexiones) de todos los vértices siempre es el doble del número de aristas (porque cada arista toca 2 vértices).</p>
        </div>
      </div>
    </section>

    <!-- Pasa el componente GraphInteractive importado -->
    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/4-2" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import GraphInteractive from '../components/GraphInteractive.vue'

const moduleSteps = [
  {
    title: 'Interacción: Cuenta los Grados',
    question: '¡Haz clic en los nodos de este grafo para ver su Grado (número de aristas conectadas a él)! Puedes arrastrarlos si quieres. Si sumas los grados de A, B y C... ¿cuál es el resultado?',
    needsDiagram: false,
    interactiveComponent: GraphInteractive,
    interactiveData: {
      mode: 'degree-count',
      message: '👆 Haz clic en los nodos para ver su grado (aristas que lo tocan)',
      initialNodes: [
        { id: 'A', x: 200, y: 100, label: 'A', showDegree: false },
        { id: 'B', x: 100, y: 250, label: 'B', showDegree: false },
        { id: 'C', x: 300, y: 250, label: 'C', showDegree: false }
      ],
      initialEdges: [
        { id: 'e1', source: 'A', target: 'B' },
        { id: 'e2', source: 'B', target: 'C' },
        { id: 'e3', source: 'C', target: 'A' }
      ]
    },
    options: [
      { id: 1, text: '6 (¡El doble de las 3 aristas!)', isMath: false, correct: true },
      { id: 2, text: '3', isMath: false, correct: false },
      { id: 3, text: 'Ninguna de las anteriores', isMath: false, correct: false }
    ]
  },
  {
    title: 'Suma de Grados',
    question: 'Si un grafo tiene 10 aristas en total, ¿cuál será la suma obligatoria de los grados de todos sus vértices combinados?',
    needsDiagram: false,
    options: [
      { id: 1, text: '20', isMath: false, correct: true },
      { id: 2, text: '10', isMath: false, correct: false },
      { id: 3, text: '5', isMath: false, correct: false }
    ]
  }
]
</script>
