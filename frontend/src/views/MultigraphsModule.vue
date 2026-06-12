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
          Un grafo simple es ordenado: líneas únicas entre puntos. 
          Un <strong>multígrafo</strong> es el desorden divertido: ¡permite múltiples caminos entre los mismos dos puntos o caminos que regresan al mismo lugar (lazos)!
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Diferencia Clave</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            Multígrafo vs Grafo Simple
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Un multígrafo permite aristas múltiples conectando el mismo par de vértices y pseudografos permiten lazos (bucles).</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/4-3" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import GraphInteractive from '../components/GraphInteractive.vue'

const moduleSteps = [
  {
    title: 'Visualización de Multígrafo',
    question: 'Observa el multígrafo. Juega arrastrando los nodos para ver las curvas. ¿Cuántos caminos DIRECTOS (aristas) existen solo entre los nodos A y B?',
    needsDiagram: false,
    interactiveComponent: GraphInteractive,
    interactiveData: {
      mode: 'view',
      message: 'Multígrafo con lazos y aristas paralelas (¡Arrastra los nodos!)',
      initialNodes: [
        { id: 'A', x: 150, y: 150, label: 'A' },
        { id: 'B', x: 400, y: 150, label: 'B' },
        { id: 'C', x: 275, y: 300, label: 'C' }
      ],
      initialEdges: [
        { id: 'e1', source: 'A', target: 'B', offset: 0.2 },
        { id: 'e2', source: 'A', target: 'B', offset: -0.2 },
        { id: 'e3', source: 'B', target: 'C' },
        { id: 'loop1', source: 'C', target: 'C', isLoop: true }
      ]
    },
    options: [
      { id: 1, text: 'Solo 1', isMath: false, correct: false },
      { id: 2, text: '2 (Son aristas paralelas)', isMath: false, correct: true },
      { id: 3, text: 'Ninguno', isMath: false, correct: false }
    ]
  },
  {
    title: 'El Lazo',
    question: 'En el gráfico anterior, fíjate en el nodo C. Tiene un camino que sale y entra de sí mismo. ¿Cómo se llama eso?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Lazo o Bucle', isMath: false, correct: true },
      { id: 2, text: 'Arista Paralela', isMath: false, correct: false },
      { id: 3, text: 'Vértice Aislado', isMath: false, correct: false }
    ]
  }
]
</script>
