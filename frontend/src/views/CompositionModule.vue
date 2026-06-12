<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Composición y Tipos de Relaciones</h1>
      <p class="text-app-text-muted">Uniendo los puntos para encontrar nuevas conexiones</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Imagina un vuelo con escala: Vas de tu Casa (A) al Aeropuerto (B), y del Aeropuerto (B) a la Playa (C). <br><br>
          La <strong>Composición</strong> te dice cómo ir de tu Casa directamente a la Playa.<br>
          Además, las relaciones tienen "personalidades": Reflexiva (se relaciona consigo misma), Simétrica (va y viene), etc.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Composición S o R</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="S \circ R = \{(a,c) \in A \times C \mid \exists b \in B, (a,b) \in R \land (b,c) \in S\}" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Para que sea posible, el conjunto de llegada de R debe coincidir con el de partida de S.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/2-3" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Condición de Composición',
    question: 'Para que la composición de dos relaciones (R y S) sea posible, ¿qué se debe cumplir?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Ambas deben ser reflexivas.', isMath: false, correct: false },
      { id: 2, text: 'El conjunto de llegada de R debe coincidir con el de partida de S.', isMath: false, correct: true },
      { id: 3, text: 'Deben tener el mismo número de elementos.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Tipos de Relación',
    question: 'Si (x,y) está en R, y siempre que está, también (y,x) está en R. ¿Qué tipo de relación es?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Reflexiva', isMath: false, correct: false },
      { id: 2, text: 'Transitiva', isMath: false, correct: false },
      { id: 3, text: 'Simétrica', isMath: false, correct: true }
    ]
  }
]
</script>
