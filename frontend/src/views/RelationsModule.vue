<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Definición y Representación de Relaciones</h1>
      <p class="text-app-text-muted">Conectando ideas con lógica</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Imagina que tienes dos grupos: <strong>Personas</strong> y <strong>Puestos de trabajo</strong>. <br><br>
          El <em>Producto Cartesiano</em> es la lista gigante de TODAS las combinaciones posibles. Una <strong>Relación</strong> es solo la lista de quién tiene qué puesto en la vida real. ¡Es como hacer match!
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Relación Binaria R</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="R \subseteq A \times B" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Es cualquier subconjunto del producto cartesiano. Los primeros elementos son el <strong>Dominio</strong> y los segundos el <strong>Rango</strong>.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/2-2" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {
    title: 'Relación Binaria',
    question: '¿Qué es exactamente una relación binaria entre dos conjuntos A y B?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'La suma de todos los elementos de A y B.', isMath: false, correct: false },
      { id: 2, text: 'Un subconjunto del producto cartesiano A×B.', isMath: false, correct: true },
      { id: 3, text: 'Solo los elementos que se repiten en ambos conjuntos.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Dominio y Rango',
    question: 'Si tenemos los pares (Juan, Chef) y (Ana, Cajera), ¿cuál es el Rango?',
    needsDiagram: false,
    options: [
      { id: 1, text: '\\{Juan, Ana\\}', isMath: true, correct: false },
      { id: 2, text: '\\{Chef, Cajera\\}', isMath: true, correct: true },
      { id: 3, text: '\\{Juan, Cajera\\}', isMath: true, correct: false }
    ]
  }
]
</script>
