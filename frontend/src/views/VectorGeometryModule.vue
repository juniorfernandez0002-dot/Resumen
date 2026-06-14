<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Geometría Dinámica</h1>
      <p class="text-app-text-muted">Visualización y cálculo por software</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Físico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          La <strong>Ecuación Paramétrica</strong> de una recta no describe la recta como un objeto estático. Describe un auto viajando por ella. Tienes un punto de inicio ($P_0$) y una velocidad constante (Vector $v$). El parámetro 't' es el tiempo.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Ecuación de Movimiento</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="\vec{r}(t) = P_0 + t\vec{v}" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Donde r(t) es la posición en el tiempo t.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/6-1" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import VectorInteractive from '../components/VectorInteractive.vue'

const moduleSteps = [
  {
    title: 'Desafío Interactivo: Viajero del Tiempo',
    question: 'Estás en el punto azul (P_0) y quieres moverte por la recta. El control deslizable de abajo es el Tiempo "t". Muévelo a t=2.0. ¿A dónde llega la partícula roja?',
    needsDiagram: false,
    interactiveComponent: VectorInteractive,
    interactiveData: {
      mode: 'parametric',
      message: 'Usa la barra inferior para viajar en el tiempo (t). Arrastra el vector azul para cambiar tu punto de inicio.',
      initialU: { x: 1, y: 1 },
      initialV: { x: 2, y: 2 }
    },
    options: [
      { id: 1, text: 'Avanzó exactamente DOS VECES la distancia del vector dirección verde.', isMath: false, correct: true },
      { id: 2, text: 'No se movió.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Retrocediendo en el Tiempo',
    question: 'Si pones el tiempo t en números negativos (ej. t=-2.0)... ¿qué pasa físicamente?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'La partícula explota.', isMath: false, correct: false },
      { id: 2, text: 'La partícula se mueve en reversa sobre la misma pista infinita.', isMath: false, correct: true }
    ]
  }
]
</script>
