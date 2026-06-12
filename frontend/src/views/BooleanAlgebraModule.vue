<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Álgebra de Boole</h1>
      <p class="text-app-text-muted">¡El idioma secreto de las computadoras!</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          El Álgebra de Boole usa solo <strong>ceros (apagado)</strong> y <strong>unos (encendido)</strong> en lugar de números normales. <br><br>
          ¡Con unas simples leyes de Boole, puedes agarrar circuitos gigantes y simplificarlos en unos súper pequeños!
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Operaciones Básicas</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            AND (·) , OR (+) , NOT (')
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Sistema matemático apoyándose en leyes como la de De Morgan y Distributividad para la simplificación de circuitos lógicos.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/3-4" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Conjunción en Boole',
    question: 'En el álgebra de Boole, ¿qué operación representa la Conjunción (AND)?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'A + B', isMath: true, correct: false },
      { id: 2, text: 'A \\cdot B', isMath: true, correct: true },
      { id: 3, text: 'A\\oplus B', isMath: true, correct: false }
    ]
  },
  {
    title: 'Leyes de Boole',
    question: 'Según las Leyes de Boole, ¿cuál es el resultado de la Identidad A + 0?',
    needsDiagram: false,
    options: [
      { id: 1, text: '0', isMath: true, correct: false },
      { id: 2, text: '1', isMath: true, correct: false },
      { id: 3, text: 'A', isMath: true, correct: true },
      { id: 4, text: "A'", isMath: true, correct: false }
    ]
  }
]
</script>
