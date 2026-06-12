<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Subconjuntos y Conjunto Potencia</h1>
      <p class="text-app-text-muted">Las partes de un conjunto</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Imagina que tienes una caja con tus juguetes favoritos (<strong>Conjunto</strong>).
          Un <strong>Subconjunto</strong> es cuando separas algunos de esos juguetes para jugar hoy.
          ¡El <strong>Conjunto Potencia</strong> es la lista de <em>todas las combinaciones posibles</em> de juguetes que podrías elegir! 🚀
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Conjunto Potencia P(A) = { X : X ⊆ A }</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="2^n" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Fórmula rápida: El número total de combinaciones (subconjuntos) es 2 elevado a la cantidad de elementos 'n'.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/operaciones" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Definición de Subconjunto',
    question: '¿Qué significa exactamente que el conjunto M sea un "subconjunto" del conjunto N?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Que tienen los mismos elementos exactos', isMath: false, correct: false },
      { id: 2, text: 'Que todo elemento de M está también dentro de N', isMath: false, correct: true },
      { id: 3, text: 'Que no tienen ningún elemento en común', isMath: false, correct: false }
    ]
  },
  {
    title: 'Fórmula de Potencia',
    question: 'Si tenemos el conjunto de líderes L = {Ana, Luis, Pedro}, ¿cuántos subconjuntos posibles tiene su Conjunto Potencia?',
    needsDiagram: false,
    options: [
      { id: 1, text: '3', isMath: false, correct: false },
      { id: 2, text: '6', isMath: false, correct: false },
      { id: 3, text: '8', isMath: false, correct: true },
      { id: 4, text: '9', isMath: false, correct: false }
    ]
  }
]
</script>
