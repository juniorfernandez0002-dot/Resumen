<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <!-- Encabezado del Módulo -->
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Teoría de Conjuntos</h1>
      <p class="text-app-text-muted">Definición, diagramas y tipos</p>
    </header>

    <!-- Sección Teórica Corta (Micro-learning) -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="flex flex-col gap-4">
        <TypingDrill 
          title="Concepto Central (1/2)" 
          targetText="Un Conjunto es una agrupcion de elementos unicos. No hay elementos repetidos y el orden no importa." 
          :requiredReps="3" 
        />
        <TypingDrill 
          title="Concepto Central (2/2)" 
          targetText="Entender conjuntos nos permite agrupar, clasificar y operar logicamente con informacion estructurada." 
          :requiredReps="3" 
        />
      </div>

      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <p class="text-sm text-app-text-muted mb-4">
          Un conjunto se denota habitualmente con letras mayúsculas y sus elementos se encierran entre llaves.
        </p>
        <div class="bg-app-bg p-4 rounded-lg flex flex-col gap-2 items-center justify-center border border-app-border">
          <MathFormula math="A = \{x \in \mathbb{Z} \mid 1 \le x \le 3\}" />
          <span class="text-xs font-bold text-app-success mt-2">Por extensión: A = {1, 2, 3}</span>
        </div>
      </div>
    </section>

    <!-- Tipos de Conjuntos / Operaciones Visuales -->
    <section>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-app-surface p-4 rounded-lg border border-app-border flex flex-col items-center justify-center text-center hover:border-app-primary transition-colors cursor-pointer">
          <MathFormula math="A \cup B" />
          <span class="text-xs text-app-text-muted mt-2">Unión</span>
        </div>
        <div class="bg-app-surface p-4 rounded-lg border border-app-border flex flex-col items-center justify-center text-center hover:border-app-primary transition-colors cursor-pointer">
          <MathFormula math="A \cap B" />
          <span class="text-xs text-app-text-muted mt-2">Intersección</span>
        </div>
        <div class="bg-app-surface p-4 rounded-lg border border-app-border flex flex-col items-center justify-center text-center hover:border-app-primary transition-colors cursor-pointer">
          <MathFormula math="x \in A" />
          <span class="text-xs text-app-text-muted mt-2">Pertenencia</span>
        </div>
      </div>
    </section>

    <!-- Componente de Ejercicio Dinámico -->
    <StepByStepExercise :exerciseSteps="setsSteps" nextModuleRoute="/modulo/cardinalidad" />

  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import TypingDrill from '../components/TypingDrill.vue'

// Extraemos los pasos que antes estaban quemados en StepByStepExercise
const setsSteps = [
  {
    title: 'Identificar Intersección',
    question: 'Dado A = {2, 4, 6} y B = {4, 6, 8}. Identifica el conjunto resultante de A ∩ B (Intersección).',
    needsDiagram: true,
    diagramData: {
      rulesTitle: 'Datos del problema:',
      rules: [
        'Conjunto A: {2, 4, 6}',
        'Conjunto B: {4, 6, 8}',
        'Coloca los números repetidos en la intersección.'
      ],
      elements: [
        { id: 10, value: '2', region: 'UNASSIGNED', correctRegion: 'A' },
        { id: 11, value: '4', region: 'UNASSIGNED', correctRegion: 'INTERSECTION' },
        { id: 12, value: '6', region: 'UNASSIGNED', correctRegion: 'INTERSECTION' },
        { id: 13, value: '8', region: 'UNASSIGNED', correctRegion: 'B' }
      ]
    },
    options: [
      { id: 1, text: '\\{2, 8\\}', isMath: true, correct: false },
      { id: 2, text: '\\{4, 6\\}', isMath: true, correct: true },
      { id: 3, text: '\\{2, 4, 6, 8\\}', isMath: true, correct: false },
      { id: 4, text: '\\emptyset', isMath: true, correct: false }
    ]
  },
  {
    title: 'Análisis de Cardinalidad',
    question: 'Determine la cardinalidad de la unión |A ∪ B| (La cardinalidad es simplemente "contar". ¿Cuántas "bolitas" o números ves en TOTAL sumando todo lo que está dentro de los círculos A y B?)',
    needsDiagram: false,
    options: [
      { id: 1, text: '6', isMath: false, correct: false },
      { id: 2, text: '4', isMath: false, correct: true },
      { id: 3, text: '2', isMath: false, correct: false },
      { id: 4, text: '8', isMath: false, correct: false }
    ]
  }
]
</script>
