<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Relaciones Matemáticas</h1>
      <p class="text-app-text-muted">Conectando puntos y encontrando patrones</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Olvídate de las `x` y las `y`. Una relación es simplemente <strong>unir cosas con flechas</strong> que tienen sentido.<br><br>
          Por ejemplo, si el Conjunto A son "Personas" y el Conjunto B son "Mascotas", la flecha significa "es dueño de". De donde sale la flecha se llama <strong>Dominio</strong>, y a donde llega se llama <strong>Rango</strong>.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Subconjunto del Producto Cartesiano</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="R \subseteq A \times B" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Es decir, de todas las combinaciones posibles entre A y B, la "Relación" es solo el grupito de flechas que realmente trazamos según una regla.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/2-2" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import RelationMapperInteractive from '../components/RelationMapperInteractive.vue'

const moduleSteps = [
  {
    title: 'Simulador: Dominio y Rango',
    question: 'Haz clic en las personas del Conjunto A para ver a qué mascota están conectadas. Basándote en el simulador interactivo, ¿cuál es el DOMINIO (de donde salen flechas) de esta relación?',
    needsDiagram: false,
    interactiveComponent: RelationMapperInteractive,
    interactiveData: {
      mode: 'view',
      message: '👆 Haz clic en Ana, Luis o Carlos para revelar sus conexiones.',
      initialColumns: [
        { id: 'A', title: 'A (Personas)', items: [{id: 'A1', label: 'Ana'}, {id: 'A2', label: 'Luis'}, {id: 'A3', label: 'Carlos'}] },
        { id: 'B', title: 'B (Mascotas)', items: [{id: 'B1', label: 'Perro'}, {id: 'B2', label: 'Gato'}, {id: 'B3', label: 'Loro'}] }
      ],
      initialConnections: [
        { source: 'A1', target: 'B2' }, // Ana -> Gato
        { source: 'A1', target: 'B1' }, // Ana -> Perro
        { source: 'A3', target: 'B3' }  // Carlos -> Loro
        // Luis no tiene mascota (no es parte del dominio real de esta relación)
      ]
    },
    options: [
      { id: 1, text: 'Solo Ana y Carlos (porque de ellos salen flechas).', isMath: false, correct: true },
      { id: 2, text: 'Ana, Luis y Carlos.', isMath: false, correct: false },
      { id: 3, text: 'Perro, Gato y Loro.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Definiendo el Rango',
    question: 'Si el Dominio es el origen de las flechas... ¿Qué es el Rango?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Todos los elementos del Conjunto A.', isMath: false, correct: false },
      { id: 2, text: 'Exclusivamente los elementos del Conjunto B a los que SÍ les llega una flecha.', isMath: false, correct: true },
      { id: 3, text: 'La suma de las flechas cruzadas.', isMath: false, correct: false }
    ]
  }
]
</script>
