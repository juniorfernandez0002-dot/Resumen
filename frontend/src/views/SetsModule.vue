<template>
  <div class="pb-20">
    <!-- Encabezado -->
    <header class="mb-10 border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Teoría de Conjuntos</h1>
      <p class="text-app-text-muted">Definición, diagramas y tipos</p>
    </header>

    <!-- Sección 1: Concepto Central -->
    <section class="mb-10">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">
          Concepto Central
        </h2>
        <ul class="space-y-3 text-app-text-muted text-sm">
          <li class="flex items-start gap-2">
            <span class="font-bold text-app-primary block mt-0.5">•</span>
            <span>Un <strong>Conjunto</strong> es una agrupación de elementos únicos. No hay elementos repetidos y el orden no importa.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="font-bold text-app-primary block mt-0.5">•</span>
            <span>Entender conjuntos nos permite agrupar, clasificar y operar lógicamente con información estructurada.</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Sección 2: Teoría Formal -->
    <section class="mb-10">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">
          Definición Formal
        </h2>
        <p class="text-sm text-app-text-muted mb-4">
          Un conjunto se denota habitualmente con letras mayúsculas y sus elementos se encierran entre llaves.
        </p>
        
        <div class="bg-app-bg p-4 rounded border border-app-border mb-4">
          <MathFormula math="A = \{ x \in \mathbb{Z} \mid 1 \le x \le 3 \}" :display="true" />
          <p class="text-center text-app-text font-medium mt-2">
            Por extensión: A = {1, 2, 3}
          </p>
        </div>

        <div class="grid grid-cols-3 gap-4 mt-6">
          <div class="p-3 border border-app-border rounded-lg bg-app-surface">
            <MathFormula math="A \cup B" class="block mb-1 font-bold text-app-primary text-center" />
            <p class="text-xs text-center text-app-text-muted">Unión</p>
          </div>
          <div class="p-3 border border-app-border rounded-lg bg-app-surface">
            <MathFormula math="A \cap B" class="block mb-1 font-bold text-app-primary text-center" />
            <p class="text-xs text-center text-app-text-muted">Intersección</p>
          </div>
          <div class="p-3 border border-app-border rounded-lg bg-app-surface">
            <MathFormula math="x \in A" class="block mb-1 font-bold text-app-primary text-center" />
            <p class="text-xs text-center text-app-text-muted">Pertenencia</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección 3: Interactivo -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold text-app-text mb-4">Representación Visual (Diagramas de Venn)</h2>
      <VennDiagramInteractive />
    </section>

    <!-- Sección 4: Práctica -->
    <section>
      <StepByStepExercise />
    </section>

  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import VennDiagramInteractive from '../components/VennDiagramInteractive.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
</script>
