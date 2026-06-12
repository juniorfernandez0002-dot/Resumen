<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Operaciones y Leyes</h1>
      <p class="text-app-text-muted">Álgebra de conjuntos</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Este módulo introduce los conceptos clave de <strong>Operaciones y Leyes</strong>. 
          Aquí exploraremos sus propiedades fundamentales y cómo se aplican en la matemática discreta.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Fórmula base para Operaciones y Leyes</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="X \rightarrow Y" />
          </div>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/2-1" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Pregunta Teórica',
    question: 'Selecciona la opción que mejor describe este concepto matemático.',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Opción Correcta', isMath: false, correct: true },
      { id: 2, text: 'Opción Falsa', isMath: false, correct: false }
    ]
  }
]
</script>
