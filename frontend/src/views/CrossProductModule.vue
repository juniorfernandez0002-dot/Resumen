<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Triple Producto y Proyección</h1>
      <p class="text-app-text-muted">Cálculos avanzados de vectores ortogonales</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Físico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Imagina que pones un faro de luz gigante apuntando directamente hacia abajo sobre el vector azul. La "sombra" que proyecta el vector azul sobre la línea del vector verde es exactamente lo que llamamos la <strong>Proyección Ortogonal</strong>.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Matemática</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="\text{Proj}_{\vec{v}}\vec{u} = \left(\frac{\vec{u} \cdot \vec{v}}{||\vec{v}||^2}\right) \vec{v}" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Es un vector nuevo (la sombra) que vive encima de v.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/5-4" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import VectorInteractive from '../components/VectorInteractive.vue'

const moduleSteps = [
  {
    title: 'Desafío Interactivo: La Sombra Perfecta',
    question: 'Arrastra el vector azul (u) hasta que la sombra violeta (Proyección) encaje exactamente en la punta del vector verde (v).',
    needsDiagram: false,
    interactiveComponent: VectorInteractive,
    interactiveData: {
      mode: 'projection',
      message: 'Usa el ratón para mover el vector azul. Observa cómo cambia la sombra violeta.',
      initialU: { x: 3, y: 5 },
      initialV: { x: 7, y: 0 }
    },
    options: [
      { id: 1, text: '¡Lo hice! Para lograrlo, tuve que poner la punta del vector azul exactamente en línea recta vertical (ortogonal) sobre la punta del verde.', isMath: false, correct: true },
      { id: 2, text: 'Tuve que alejarlo mucho.', isMath: false, correct: false }
    ]
  },
  {
    title: 'La Anti-Sombra',
    question: 'Si arrastras el vector azul hacia el lado negativo (hacia atrás, pasando el origen). ¿Qué sucede con la proyección violeta?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Desaparece.', isMath: false, correct: false },
      { id: 2, text: 'Se invierte y apunta en la dirección opuesta al vector verde.', isMath: false, correct: true }
    ]
  }
]
</script>
