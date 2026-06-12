<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Composición y Tipos de Relaciones</h1>
      <p class="text-app-text-muted">Uniendo los puntos para encontrar vuelos directos</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Imagina un vuelo con escala: Vas de tu Casa (A) al Aeropuerto (B), y luego del Aeropuerto (B) a la Playa (C). <br><br>
          La <strong>Composición de Relaciones</strong> es la magia matemática que te dibuja una línea directa desde tu Casa hasta la Playa, saltándose el intermediario.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Composición S o R</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="S \circ R = \{(a,c) \mid \exists b \in B, (a,b) \in R \land (b,c) \in S\}" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Para que sea posible crear la nueva flecha (a,c), DEBE existir un intermediario (b) que conecte ambos caminos.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/2-3" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import RelationMapperInteractive from '../components/RelationMapperInteractive.vue'

const moduleSteps = [
  {
    title: 'Simulador: El Vuelo Directo',
    question: 'Haz clic en "Lima" en la primera columna. Verás cómo el vuelo va a Bogotá y luego de Bogotá sale directo a Cancún. En matemáticas, la línea amarilla punteada que saldrá es la "Composición". ¿Qué se debe cumplir para que aparezca esa línea?',
    needsDiagram: false,
    interactiveComponent: RelationMapperInteractive,
    interactiveData: {
      mode: 'compose',
      message: '👆 Haz clic en Lima para ver cómo la escala genera una Composición directa a Cancún.',
      initialColumns: [
        { id: 'A', title: 'Origen', items: [{id: 'A1', label: 'Lima'}, {id: 'A2', label: 'Quito'}] },
        { id: 'B', title: 'Escala', items: [{id: 'B1', label: 'Bogotá'}, {id: 'B2', label: 'Santiago'}] },
        { id: 'C', title: 'Destino', items: [{id: 'C1', label: 'Cancún'}, {id: 'C2', label: 'Miami'}] }
      ],
      initialConnections: [
        { source: 'A1', target: 'B1' }, // Lima -> Bogota
        { source: 'A2', target: 'B2' }, // Quito -> Santiago
        { source: 'B1', target: 'C1' }, // Bogota -> Cancun
        { source: 'B2', target: 'C2' }  // Santiago -> Miami
      ],
      initialCompositions: [
        { source: 'A1', target: 'C1' }, // Lima -> Cancun
        { source: 'A2', target: 'C2' }  // Quito -> Miami
      ]
    },
    options: [
      { id: 1, text: 'Ambas ciudades deben estar muy lejos.', isMath: false, correct: false },
      { id: 2, text: 'El conjunto de llegada de la primera ruta (Bogotá) DEBE ser el inicio de la segunda ruta.', isMath: false, correct: true },
      { id: 3, text: 'Deben tener el mismo número de elementos.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Propiedades Clásicas',
    question: 'Cambiando de tema, si una relación "R" tiene flechas que van de un nodo de vuelta a sí mismo (como si alguien fuera su propio jefe), ¿qué nombre recibe esa propiedad?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Relación Reflexiva', isMath: false, correct: true },
      { id: 2, text: 'Relación Transitiva', isMath: false, correct: false },
      { id: 3, text: 'Relación Simétrica', isMath: false, correct: false }
    ]
  }
]
</script>
