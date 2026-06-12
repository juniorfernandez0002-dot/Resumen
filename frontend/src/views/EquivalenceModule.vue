<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Relación de Equivalencia</h1>
      <p class="text-app-text-muted">Agrupando a los que son como "gemelos"</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Piensa en clasificar alumnos por su nota final. Todos los que sacaron 15 están en el mismo grupo. <br><br>
          En este grupo, todos son <strong>equivalentes</strong> entre sí (tienen la misma nota). <br>
          Esto crea una <em>partición</em>: divides toda la clase en grupos separados donde nadie se queda afuera ni está en dos grupos a la vez.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Propiedades Requeridas</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            Reflexiva + Simétrica + Transitiva
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Para ser de equivalencia, todos los elementos deben relacionarse consigo mismos, en ambas direcciones y formar cadenas válidas.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/2-4" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Propiedades de Equivalencia',
    question: '¿Qué tres propiedades debe cumplir una relación para ser de equivalencia?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Reflexiva, Antisimétrica, Transitiva', isMath: false, correct: false },
      { id: 2, text: 'Simétrica, Transitiva, Inyectiva', isMath: false, correct: false },
      { id: 3, text: 'Reflexiva, Simétrica, Transitiva', isMath: false, correct: true }
    ]
  },
  {
    title: 'Clase de Equivalencia',
    question: '¿Qué es una "clase de equivalencia"?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Una clase de la universidad muy aburrida.', isMath: false, correct: false },
      { id: 2, text: 'El subconjunto de todos los elementos que están relacionados/equivalentes a un elemento dado.', isMath: false, correct: true },
      { id: 3, text: 'La suma de las relaciones reflexivas.', isMath: false, correct: false }
    ]
  }
]
</script>
