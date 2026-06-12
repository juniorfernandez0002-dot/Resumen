<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Grafos Eulerianos</h1>
      <p class="text-app-text-muted">El acertijo de dibujar sin levantar el lápiz</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Un <strong>camino euleriano</strong> es como dibujar una figura de un solo trazo continuo sin repasar ninguna línea (aristas).<br><br>
          Si además terminas en el mismo punto donde empezaste, es un <strong>Circuito Euleriano</strong>.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Teorema de Euler</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            Todos los vértices deben tener grado PAR
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Para que exista un circuito euleriano. Si exactamente DOS vértices tienen grado impar, existe un camino pero no circuito.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import GraphInteractive from '../components/GraphInteractive.vue'

const moduleSteps = [
  {
    title: 'Juego: El Camino Euleriano',
    question: '¡Es hora del desafío! Intenta pintar TODAS las aristas de gris a verde. Haz clic en las aristas (líneas) para trazarlas, pero cuidado: debes trazar un camino continuo y ¡NO puedes repetir ninguna línea!',
    needsDiagram: false,
    interactiveComponent: GraphInteractive,
    interactiveData: {
      mode: 'euler-trace',
      message: '👆 Haz clic en una línea para empezar a trazar tu camino continuo.',
      // Grafo de "La Casa"
      initialNodes: [
        { id: '1', x: 150, y: 250, label: '1' }, // base izq
        { id: '2', x: 350, y: 250, label: '2' }, // base der
        { id: '3', x: 150, y: 100, label: '3' }, // techo izq
        { id: '4', x: 350, y: 100, label: '4' }, // techo der
        { id: '5', x: 250, y: 30, label: '5' }   // punta techo
      ],
      initialEdges: [
        { id: 'e1', source: '1', target: '2', traced: false },
        { id: 'e2', source: '2', target: '4', traced: false },
        { id: 'e3', source: '4', target: '3', traced: false },
        { id: 'e4', source: '3', target: '1', traced: false },
        { id: 'e5', source: '3', target: '5', traced: false },
        { id: 'e6', source: '5', target: '4', traced: false },
        { id: 'e7', source: '1', target: '4', traced: false }, // diagonal 1
        { id: 'e8', source: '3', target: '2', traced: false }  // diagonal 2
      ]
    },
    options: [
      { id: 1, text: '¡Lo logré! Pinté todas de verde sin trampa.', isMath: false, correct: true },
      { id: 2, text: 'Me rendí, es imposible.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Análisis del Teorema',
    question: 'En el dibujo anterior de la casa, los nodos de abajo (1 y 2) tienen grado 3 (impar). Según el teorema de Euler, ¿qué significa esto?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Que sí tiene un circuito euleriano perfecto (termina donde empieza).', isMath: false, correct: false },
      { id: 2, text: 'Que NO tiene circuito euleriano perfecto, pero SÍ tiene un camino si empiezas en uno impar y terminas en el otro.', isMath: false, correct: true }
    ]
  }
]
</script>
