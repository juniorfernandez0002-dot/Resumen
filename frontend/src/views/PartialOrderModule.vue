<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Relación de Orden Parcial</h1>
      <p class="text-app-text-muted">Creando jerarquías y estructuras paso a paso</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Piensa en los requisitos para cursos en la universidad. Matemáticas I va antes que Matemáticas II. <br><br>
          Pero, ¿puedes comparar Matemáticas I con Arte I? Probablemente no. <br>
          Se llama "parcial" porque puedes ordenar <strong>algunas</strong> cosas, pero no necesariamente todas. ¡Y se dibuja lindo con el <em>Diagrama de Hasse</em>!
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Propiedades Requeridas</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            Reflexiva + Antisimétrica + Transitiva
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Al usar Antisimétrica en lugar de Simétrica, nos aseguramos de que no haya ciclos que rompan la jerarquía o el "orden".</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/3-1" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Orden Parcial vs Equivalencia',
    question: '¿Qué propiedad reemplaza a la simetría en el Orden Parcial?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Reflexiva', isMath: false, correct: false },
      { id: 2, text: 'Transitiva', isMath: false, correct: false },
      { id: 3, text: 'Antisimétrica', isMath: false, correct: true }
    ]
  },
  {
    title: 'Diagramas de Hasse',
    question: 'En un Diagrama de Hasse, ¿por qué NO se dibujan las flechas de un elemento hacia sí mismo (lazos)?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Porque el dibujo se vería feo y confuso.', isMath: false, correct: false },
      { id: 2, text: 'Porque se sobreentiende, ya que la relación SIEMPRE es reflexiva.', isMath: false, correct: true },
      { id: 3, text: 'Porque el orden parcial no es reflexivo.', isMath: false, correct: false }
    ]
  }
]
</script>
