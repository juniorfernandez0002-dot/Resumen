<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Grafos Básicos</h1>
      <p class="text-app-text-muted">Nodos y aristas en acción</p>
    </header>

    <section class="mb-12">
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Concepto: Vértice (Nodo)" 
          targetText="Un vértice es simplemente un punto. Representa una entidad, como una ciudad, una persona o un router." 
          :requiredReps="3" 
        />
        <TypingDrill 
          title="Concepto: Arista (Línea)" 
          targetText="Una arista es la línea que conecta dos vértices. Representa una relación, como una carretera o un cable." 
          :requiredReps="3" 
        />
      </div>

      <GraphVisualizer 
        title="Anatomía de un Grafo Simple" 
        subtitle="Visualizando un grafo G = (V, E) con 4 Vértices y 4 Aristas."
        :width="500"
        :height="300"
        :nodes="[
          { id: 'A', x: 100, y: 150, label: 'A' },
          { id: 'B', x: 250, y: 50, label: 'B' },
          { id: 'C', x: 400, y: 150, label: 'C' },
          { id: 'D', x: 250, y: 250, label: 'D' }
        ]"
        :edges="[
          { source: 'A', target: 'B', directed: false },
          { source: 'B', target: 'C', directed: false },
          { source: 'C', target: 'D', directed: false },
          { source: 'A', target: 'D', directed: false }
        ]"
      />

      <header class="mb-6 mt-12">
        <h2 class="text-2xl font-bold text-app-text">Traductor de Símbolos</h2>
      </header>

      <SymbolExplainer 
        symbol="V(G)" 
        name="Conjunto de Vértices" 
        translation="Es la 'Caja' que contiene todos los Puntos." 
        usage="Simplemente abres llaves y haces una lista de los nombres de todos los puntos del dibujo."
        :cases="[
          { valid: true, math: 'V(G) = {A, B, C, D}', explanation: 'Correcto. Nuestro grafo de arriba tiene 4 puntos.' }
        ]"
        quizQuestion="Si un mapa tiene 10 ciudades, ¿cuántos elementos tiene V(G)?"
        :quizOptions="[
          { id: 1, text: 'No se puede saber sin las carreteras.', correct: false },
          { id: 2, text: '10 elementos.', correct: true }
        ]"
      />

      <SymbolExplainer 
        symbol="E(G)" 
        name="Conjunto de Aristas" 
        translation="Es la lista de 'Puentes' o conexiones." 
        usage="Cada arista se escribe como un par de puntos, por ejemplo (A,B), indicando que hay una línea que los une."
        :cases="[
          { valid: true, math: 'E(G) = {(A,B), (B,C), (C,D), (A,D)}', explanation: 'Correcto. Estas son las 4 líneas de nuestro grafo.' },
          { valid: false, math: 'E(G) = {(A,C)}', explanation: 'Falso. En el dibujo de arriba, no hay una línea directa que cruce de A hasta C.' }
        ]"
        quizQuestion="¿Qué significa matemáticamente que (X, Y) ∈ E(G)?"
        :quizOptions="[
          { id: 1, text: 'Que X es más grande que Y.', correct: false },
          { id: 2, text: 'Que existe una línea conectando el punto X con el punto Y.', correct: true }
        ]"
      />
    </section>

    <!-- Pasa el componente GraphInteractive importado -->
    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/4-2" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import TypingDrill from '../components/TypingDrill.vue'
import SymbolExplainer from '../components/SymbolExplainer.vue'
import GraphVisualizer from '../components/GraphVisualizer.vue'
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
