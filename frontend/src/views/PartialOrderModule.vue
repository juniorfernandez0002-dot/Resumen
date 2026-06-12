<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Relación de Orden Parcial</h1>
      <p class="text-app-text-muted">Creando jerarquías y rutinas lógicas</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          A diferencia de la equivalencia (que agrupa), el Orden Parcial sirve para <strong>jerarquizar</strong>. <br><br>
          Imagina que te vas a vestir: obligatoriamente los calcetines van ANTES que los zapatos. No puedes saltarte ese orden. Se dibuja con algo llamado <strong>Diagrama de Hasse</strong>, donde lo que va primero se dibuja más abajo.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Cambia la Simetría</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            Reflexiva + Antisimétrica + Transitiva
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Al usar Antisimétrica en lugar de Simétrica, nos aseguramos de que no haya ciclos infinitos y se pueda establecer quién está arriba de quién (Jerarquía).</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/3-1" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import DragDropSorter from '../components/DragDropSorter.vue'

const moduleSteps = [
  {
    title: 'Juego: Diagrama de Hasse (Orden Lógico)',
    question: 'La relación es "X se hace antes que Y". Arrastra las tareas a las posiciones correctas para crear una jerarquía lógica de vestimenta (Diagrama de Hasse, desde abajo hacia arriba).',
    needsDiagram: false,
    interactiveComponent: DragDropSorter,
    interactiveData: {
      mode: 'tree',
      message: '👆 Ordena de abajo (Paso 1) hacia arriba (Paso 3)',
      items: [
        { id: 'shoes', label: '👟 Ponerse Zapatos', step: 2 },
        { id: 'walk', label: '🚶‍♂️ Salir a caminar', step: 3 },
        { id: 'socks', label: '🧦 Ponerse Calcetines', step: 1 }
      ],
      boxes: [
        { id: 'box3', title: 'Cima (Paso 3)', accepts: (item) => item.step === 3 },
        { id: 'box2', title: 'Medio (Paso 2)', accepts: (item) => item.step === 2 },
        { id: 'box1', title: 'Fondo (Paso 1)', accepts: (item) => item.step === 1 }
      ]
    },
    options: [
      { id: 1, text: '¡Hecho! Un Diagrama de Hasse se lee de abajo hacia arriba respetando el orden.', isMath: false, correct: true },
      { id: 2, text: 'No supe cómo ordenarlos.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Orden Parcial vs Equivalencia',
    question: '¿Qué propiedad matemática es la que EVITA que los zapatos se pongan antes que los calcetines? (Evita que la flecha vaya en ambas direcciones)',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Reflexiva', isMath: false, correct: false },
      { id: 2, text: 'Transitiva', isMath: false, correct: false },
      { id: 3, text: 'Antisimétrica', isMath: false, correct: true }
    ]
  }
]
</script>
