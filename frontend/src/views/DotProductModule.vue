<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Producto Escalar y Ángulos</h1>
      <p class="text-app-text-muted">Proyecciones y multiplicaciones de vectores</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Físico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          El <strong>Producto Escalar</strong> (o Producto Punto) aplasta dos vectores y escupe un simple número (un escalar). Nos dice cuánto de un vector "empuja" en la misma dirección que el otro.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Matemática</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="\vec{u} \cdot \vec{v} = ||\vec{u}|| ||\vec{v}|| \cos(\theta)" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Depende completamente del ángulo que forman los dos vectores.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/5-3" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import VectorInteractive from '../components/VectorInteractive.vue'

const moduleSteps = [
  {
    title: 'Desafío Interactivo: El Radar Invisible',
    question: 'Para ser "invisible" al radar enemigo (Vector verde), tu dron (Vector azul) debe cruzar su campo exactamente a 90 grados. Arrastra tu dron hasta que el panel marque que el Producto Punto es CERO exacto.',
    needsDiagram: false,
    interactiveComponent: VectorInteractive,
    interactiveData: {
      mode: 'dot',
      message: 'Intenta poner los vectores cruzados para anular el Producto Punto a 0.',
      initialU: { x: 3, y: 4 },
      initialV: { x: 6, y: 0 }
    },
    options: [
      { id: 1, text: '¡Lo logré! Al ponerlos como una "T" o "L", el ángulo es 90° y el producto es Cero.', isMath: false, correct: true },
      { id: 2, text: 'Me da un número muy grande negativo.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Vectores Opuestos',
    question: 'Si arrastras el vector azul para que apunte en dirección totalmente opuesta al verde (hacia la izquierda, ángulo de 180°)... ¿Qué pasa con el Producto Punto?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Se vuelve cero absoluto.', isMath: false, correct: false },
      { id: 2, text: 'Se vuelve el número NEGATIVO más grande posible (Empujas en contra).', isMath: false, correct: true }
    ]
  }
]
</script>
