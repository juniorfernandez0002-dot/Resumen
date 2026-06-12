<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Operaciones y Leyes con Conjuntos</h1>
      <p class="text-app-text-muted">Combinando grupos como un profesional</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          ¡Imagina que estás combinando grupos de amigos! 🤝<br><br>
          • <strong>Unión (∪):</strong> Invitar a TODOS a la fiesta.<br>
          • <strong>Intersección (∩):</strong> Los amigos que están en AMBOS grupos.<br>
          • <strong>Diferencia (-):</strong> Tus amigos que NO conocen al otro grupo.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Fórmula de Unión de Conjuntos</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="n(A \cup B) = n(A) + n(B) - n(A \cap B)" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Para contar todos sin duplicar, sumas ambos grupos y restas a los repetidos (intersección).</p>
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
    title: 'Intersección',
    question: 'Si A = {1, 2, 3, 4, 5} y B = {4, 5, 6, 7}. ¿Cuál es la Intersección (A ∩ B)?',
    needsDiagram: false,
    options: [
      { id: 1, text: '\\{1, 2, 3\\}', isMath: true, correct: false },
      { id: 2, text: '\\{4, 5\\}', isMath: true, correct: true },
      { id: 3, text: '\\{1, 2, 3, 4, 5, 6, 7\\}', isMath: true, correct: false },
      { id: 4, text: '\\{6, 7\\}', isMath: true, correct: false }
    ]
  },
  {
    title: 'Aplicación Práctica',
    question: 'En la universidad, 60 alumnos están en Ciencia (C), 45 en Lectura (L), y 25 en AMBOS. ¿Cuántos hay en total en al menos uno de los clubes (C ∪ L)?',
    needsDiagram: false,
    options: [
      { id: 1, text: '80', isMath: false, correct: true },
      { id: 2, text: '105', isMath: false, correct: false },
      { id: 3, text: '55', isMath: false, correct: false },
      { id: 4, text: '35', isMath: false, correct: false }
    ]
  }
]
</script>
