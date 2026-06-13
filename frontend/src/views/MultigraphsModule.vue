<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Multigrafos</h1>
      <p class="text-app-text-muted">Múltiples conexiones y lazos</p>
    </header>

    <section class="mb-12">
      <!-- Conceptos de Multigrafos -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
          <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Multigrafos y Lazos</h2>
          <p class="text-app-text-muted text-sm mb-4">
            Un grafo simple es ordenado: líneas únicas entre puntos. 
            Un <strong>multígrafo</strong> es el desorden divertido: ¡permite múltiples caminos entre los mismos dos puntos o caminos que regresan al mismo lugar (lazos)!
          </p>
        </div>
        <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
          <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Grafos Ponderados (Con Pesos)</h2>
          <p class="text-app-text-muted text-sm mb-4">
            A veces, no basta con saber que dos puntos están conectados. Necesitamos saber <strong>cuánto cuesta</strong> viajar entre ellos (distancia, tiempo, dinero). A ese valor se le llama <strong>Peso</strong>.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Concepto: Peso de una Arista" 
          targetText="Un grafo ponderado tiene números en sus aristas que representan el costo de cruzar esa línea." 
          :requiredReps="3" 
        />
      </div>

      <!-- Ejemplo Visual Ponderado -->
      <GraphVisualizer 
        title="Anatomía de un Grafo Ponderado" 
        subtitle="Un grafo donde cada arista tiene un costo numérico asignado."
        :width="500"
        :height="250"
        :nodes="[
          { id: '1', x: 100, y: 125, label: 'Inicio' },
          { id: '2', x: 250, y: 50, label: 'Medio A' },
          { id: '3', x: 250, y: 200, label: 'Medio B' },
          { id: '4', x: 400, y: 125, label: 'Fin' }
        ]"
        :edges="[
          { source: '1', target: '2', weight: '5', directed: false },
          { source: '1', target: '3', weight: '2', directed: false },
          { source: '2', target: '4', weight: '3', directed: false },
          { source: '3', target: '4', weight: '8', directed: false }
        ]"
      />
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/4-3" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import GraphInteractive from '../components/GraphInteractive.vue'
import TypingDrill from '../components/TypingDrill.vue'
import GraphVisualizer from '../components/GraphVisualizer.vue'

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
