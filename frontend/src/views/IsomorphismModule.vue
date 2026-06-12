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
          <p class="text-center text-xs text-app-text-muted mt-3">Deben tener la misma cantidad de vértices, aristas y misma secuencia de grados de conexión.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/4-4" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import GraphInteractive from '../components/GraphInteractive.vue'

const moduleSteps = [
  {
    title: 'Desentrañando el Isomorfismo',
    question: 'Este grafo parece un corbatín cruzado. ¡Arrastra los nodos para desenredarlo y convertirlo en un cuadrado perfecto! Ambos (el corbatín y el cuadrado) son ISOMORFOS porque sus conexiones nunca cambiaron.',
    needsDiagram: false,
    interactiveComponent: GraphInteractive,
    interactiveData: {
      mode: 'isomorphism-drag',
      message: '¡Arrastra los vértices para desenredar el grafo!',
      // Grafo cruzado
      initialNodes: [
        { id: '1', x: 150, y: 100, label: '1' },
        { id: '2', x: 350, y: 300, label: '2' },
        { id: '3', x: 150, y: 300, label: '3' },
        { id: '4', x: 350, y: 100, label: '4' }
      ],
      initialEdges: [
        { id: 'e1', source: '1', target: '2' },
        { id: 'e2', source: '2', target: '4' },
        { id: 'e3', source: '4', target: '3' },
        { id: 'e4', source: '3', target: '1' }
      ]
    },
    options: [
      { id: 1, text: 'Entiendo, ¡la forma cambia pero la red de conexiones es la misma!', isMath: false, correct: true },
      { id: 2, text: 'No entiendo nada.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Condiciones Obligatorias',
    question: 'Si dos grafos son isomorfos (gemelos disfrazados), ¿es posible que uno tenga 5 vértices y el otro 6?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Sí, porque el dibujo cambia.', isMath: false, correct: false },
      { id: 2, text: 'No, deben tener EXACTAMENTE la misma cantidad de vértices y aristas.', isMath: false, correct: true }
    ]
  }
]
</script>
