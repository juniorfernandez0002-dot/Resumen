<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Funciones Booleanas</h1>
      <p class="text-app-text-muted">¡Máquinas de decisión lógicas!</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Una función booleana es como un <strong>filtro inteligente</strong>: le das varias respuestas de SÍ o NO, las combina usando reglas claras, y al final te da un único resultado: ¡Aprobado o Rechazado!
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Formas Canónicas</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            Suma de Productos o Producto de Sumas
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Operan con "n" variables binarias y se pueden representar mediante Tablas de Verdad.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/4-1" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Tablas de Verdad',
    question: 'Si una función booleana tiene 3 variables (A, B, C), ¿cuántas combinaciones posibles tendrá su tabla de verdad?',
    needsDiagram: false,
    options: [
      { id: 1, text: '3', isMath: false, correct: false },
      { id: 2, text: '6', isMath: false, correct: false },
      { id: 3, text: '8', isMath: false, correct: true },
      { id: 4, text: '9', isMath: false, correct: false }
    ]
  },
  {
    title: 'Aplicaciones Reales',
    question: '¿Para qué son muy útiles las funciones booleanas en la Inteligencia Artificial?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Para dibujar gráficos en 3D.', isMath: false, correct: false },
      { id: 2, text: 'Para crear reglas condicionales y representar conocimiento.', isMath: false, correct: true },
      { id: 3, text: 'Para generar números aleatorios infinitos.', isMath: false, correct: false }
    ]
  }
]
</script>
