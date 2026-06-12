<template>
  <div class="animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6 mb-8 text-center">
      <h1 class="text-4xl font-black text-app-primary mb-2 uppercase tracking-tight">Examen Final: Unidad 1</h1>
      <p class="text-app-text-muted text-lg">Reprogramando tu cerebro sobre Teoría de Conjuntos</p>
    </header>

    <ExamEngine :questions="examQuestions" nextRoute="/modulo/2-1" />
  </div>
</template>

<script setup>
import ExamEngine from '../components/ExamEngine.vue'

const examQuestions = [
  {
    id: 1,
    question: "Tienes el Conjunto A = {Perro, Gato}. ¿Cuál es su cardinalidad |A|?",
    options: [
      { id: 1, text: "Es infinito", correct: false },
      { id: 2, text: "2 (Solo cuenta cuántos elementos hay)", correct: true },
      { id: 3, text: "Perro y Gato juntos", correct: false }
    ]
  },
  {
    id: 2,
    question: "Si la cardinalidad de un conjunto es 3, ¿cuántos subconjuntos tiene su Conjunto Potencia?",
    options: [
      { id: 1, text: "9 (Porque 3 al cuadrado es 9)", correct: false },
      { id: 2, text: "3", correct: false },
      { id: 3, text: "8 (Porque 2 elevado a la 3 es 8)", correct: true }
    ]
  },
  {
    id: 3,
    question: "En las operaciones de conjuntos, ¿qué hace la INTERSECCIÓN (A ∩ B)?",
    options: [
      { id: 1, text: "Busca a los elementos que tienen en COMÚN ambos conjuntos.", correct: true },
      { id: 2, text: "Junta a todos en una sola bolsa.", correct: false },
      { id: 3, text: "Resta los de A menos los de B.", correct: false }
    ]
  },
  {
    id: 4,
    question: "¿Qué es un Conjunto por Comprensión?",
    options: [
      { id: 1, text: "Escribir todos los números uno por uno (ej: 1, 2, 3, 4, 5).", correct: false },
      { id: 2, text: "Poner una regla mágica (ej: x tal que x es menor a 6).", correct: true }
    ]
  }
]
</script>
