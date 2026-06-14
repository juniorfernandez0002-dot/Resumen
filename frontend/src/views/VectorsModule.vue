<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Vectores en 2D y 3D</h1>
      <p class="text-app-text-muted">Conceptos y relaciones espaciales</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Físico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Un vector no es solo un número. Es una "flecha" espacial que indica hacia dónde vas y con qué fuerza. A diferencia de tu edad o peso (escalares), un vector necesita dirección.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Representación Analítica</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Vector en R²</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="\vec{v} = (v_x, v_y)" />
          </div>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/5-2" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import VectorInteractive from '../components/VectorInteractive.vue'

const moduleSteps = [
  {
    title: 'Desafío Interactivo: La Isla de Rescate',
    question: 'Eres un helicóptero (Vector u, Azul). El viento (Vector v, Verde) te está empujando. Mueve tu vector azul hasta que la Suma Resultante (Rojo) aterrice exactamente en la Isla ubicada en (8.0, 5.0).',
    needsDiagram: false,
    interactiveComponent: VectorInteractive,
    interactiveData: {
      mode: 'sum',
      message: 'Arrastra las puntas de las flechas azul y verde.',
      initialU: { x: 2, y: 3 },
      initialV: { x: 5, y: -1 } // The user needs to drag U to (3, 6)
    },
    options: [
      { id: 1, text: '¡Aterrizaje Perfecto! Entiendo que la suma es encadenar las flechas.', isMath: false, correct: true },
      { id: 2, text: 'No llego a la isla.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Concepto de Magnitud',
    question: 'Si jalas el vector verde hasta la posición (3, 4), mira el panel superior de Magnitud. ¿Por qué marca exactamente 5.00?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Porque el viento es de 5 nudos.', isMath: false, correct: false },
      { id: 2, text: 'Porque es la hipotenusa de un triángulo de base 3 y altura 4 (Teorema de Pitágoras).', isMath: false, correct: true }
    ]
  }
]
</script>
