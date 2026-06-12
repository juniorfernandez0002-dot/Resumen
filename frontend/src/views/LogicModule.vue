<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Proposiciones y Conectores</h1>
      <p class="text-app-text-muted">¡La lógica detrás de las decisiones!</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Imagina que una <strong>proposición</strong> es como una bombilla: o está encendida (verdadera) o está apagada (falsa). ¡No hay puntos medios!<br><br>
          Los <strong>conectores</strong> son como los cables que unen varias bombillas para crear circuitos.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Evaluación Binaria</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            Verdadero (V) o Falso (F)
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Una proposición es un enunciado que puede ser evaluado como verdadero o falso, pero no ambos a la vez. Los conectores lógicos (∧, ∨, →, ↔, ~) sirven de nexo.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/3-2" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Identificación',
    question: '¿Cuál de los siguientes enunciados es una proposición?',
    needsDiagram: false,
    options: [
      { id: 1, text: '¡Cuidado con el perro!', isMath: false, correct: false },
      { id: 2, text: '3x - 4 = 2', isMath: false, correct: false },
      { id: 3, text: 'La informática es una rama de la ingeniería', isMath: false, correct: true },
      { id: 4, text: 'Ojalá llueva mañana', isMath: false, correct: false }
    ]
  },
  {
    title: 'Conectores Lógicos',
    question: "¿Qué conector representa la frase 'Si 12 es par, entonces es divisible entre 2'?",
    needsDiagram: false,
    options: [
      { id: 1, text: 'Conjunción (Y)', isMath: false, correct: false },
      { id: 2, text: 'Disyunción (O)', isMath: false, correct: false },
      { id: 3, text: 'Condicional (Si... entonces)', isMath: false, correct: true },
      { id: 4, text: 'Bicondicional (Sí y solo sí)', isMath: false, correct: false }
    ]
  }
]
</script>
