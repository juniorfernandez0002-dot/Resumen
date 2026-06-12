<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Relación de Equivalencia</h1>
      <p class="text-app-text-muted">Particionando el mundo en "Clases de Equivalencia"</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Una relación de equivalencia no es más que una regla para <strong>agrupar elementos que son "iguales" bajo cierto criterio</strong>. <br><br>
          Piensa en clasificar a las personas de un salón de clases por su "Mes de Nacimiento". Se formarán grupitos separados (Clases de Equivalencia) donde nadie pertenece a dos grupos distintos. A la separación total de los elementos se le llama "Partición".
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">3 Propiedades Mágicas</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            Reflexiva + Simétrica + Transitiva
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Para ser de equivalencia, todo elemento es equivalente a sí mismo (Reflexiva), la equivalencia va en ambas direcciones (Simétrica) y se traslada en cadena (Transitiva).</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/2-4" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import DragDropSorter from '../components/DragDropSorter.vue'

const moduleSteps = [
  {
    title: 'Juego: Armar las Clases de Equivalencia',
    question: 'La relación (la regla) es: "X está relacionado con Y si ambos tienen la MISMA FORMA". Ignora los colores. ¡Arrastra las figuras desordenadas de la piscina hacia sus Clases de Equivalencia correctas!',
    needsDiagram: false,
    interactiveComponent: DragDropSorter,
    interactiveData: {
      mode: 'boxes',
      message: '👆 Arrastra los elementos a la caja que les corresponda según su FORMA.',
      items: [
        { id: '1', label: '🔺 Triángulo Rojo', type: 'triangle' },
        { id: '2', label: '🟥 Cuadrado Azul', type: 'square' },
        { id: '3', label: '🔺 Triángulo Verde', type: 'triangle' },
        { id: '4', label: '🟥 Cuadrado Rojo', type: 'square' },
        { id: '5', label: '🔴 Círculo Azul', type: 'circle' }
      ],
      boxes: [
        { id: 'box1', title: 'Clase [Triángulos]', accepts: (item) => item.type === 'triangle' },
        { id: 'box2', title: 'Clase [Cuadrados]', accepts: (item) => item.type === 'square' },
        { id: 'box3', title: 'Clase [Círculos]', accepts: (item) => item.type === 'circle' }
      ]
    },
    options: [
      { id: 1, text: '¡Completado! Las cajas ahora son "Particiones" perfectas del conjunto.', isMath: false, correct: true },
      { id: 2, text: 'No entiendo el juego.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Propiedades',
    question: 'Si una relación logra partir todo el grupo en clases separadas como en el juego, ¿qué propiedades OBLIGATORIAS tuvo que cumplir?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Reflexiva, Antisimétrica, Transitiva', isMath: false, correct: false },
      { id: 2, text: 'Reflexiva, Simétrica, Transitiva', isMath: false, correct: true },
      { id: 3, text: 'Inyectiva y Biyectiva', isMath: false, correct: false }
    ]
  }
]
</script>
