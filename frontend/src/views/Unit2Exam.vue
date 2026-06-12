<template>
  <div class="animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6 mb-8 text-center">
      <h1 class="text-4xl font-black text-app-primary mb-2 uppercase tracking-tight">Examen Final: Unidad 2</h1>
      <p class="text-app-text-muted text-lg">Reprogramando tu cerebro sobre Relaciones</p>
    </header>

    <ExamEngine :questions="examQuestions" nextRoute="/modulo/3-1" />
  </div>
</template>

<script setup>
import ExamEngine from '../components/ExamEngine.vue'

const examQuestions = [
  {
    id: 1,
    question: "En una relación dibujada con flechas, ¿quién es el Dominio?",
    options: [
      { id: 1, text: "A los elementos a los que LLEGAN las flechas.", correct: false },
      { id: 2, text: "De donde SALEN las flechas originales.", correct: true },
      { id: 3, text: "Todos los elementos sin flecha.", correct: false }
    ]
  },
  {
    id: 2,
    question: "Si haces un viaje Lima -> Bogotá -> Cancún, la línea directa de Lima a Cancún se llama...",
    options: [
      { id: 1, text: "Relación Reflexiva", correct: false },
      { id: 2, text: "Diagrama de Hasse", correct: false },
      { id: 3, text: "Composición de Relaciones", correct: true }
    ]
  },
  {
    id: 3,
    question: "¿Qué tres propiedades obligatorias necesita una Relación de EQUIVALENCIA?",
    options: [
      { id: 1, text: "Reflexiva, Simétrica y Transitiva.", correct: true },
      { id: 2, text: "Reflexiva, Antisimétrica y Transitiva.", correct: false }
    ]
  },
  {
    id: 4,
    question: "En un Orden Parcial (como ponerte calcetines y luego zapatos), ¿qué propiedad usamos para que no haya ciclos invertidos?",
    options: [
      { id: 1, text: "Simétrica (Flechas dobles)", correct: false },
      { id: 2, text: "Antisimétrica (Flechas de una sola vía)", correct: true }
    ]
  }
]
</script>
