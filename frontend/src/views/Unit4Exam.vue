<template>
  <div class="animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6 mb-8 text-center">
      <h1 class="text-4xl font-black text-app-primary mb-2 uppercase tracking-tight">Examen Final: Unidad 4</h1>
      <p class="text-app-text-muted text-lg">Reprogramando tu cerebro sobre Grafos</p>
    </header>

    <ExamEngine :questions="examQuestions" nextRoute="/" />
  </div>
</template>

<script setup>
import ExamEngine from '../components/ExamEngine.vue'

const examQuestions = [
  {
    id: 1,
    question: "Si haces clic en un vértice para saber cuántas líneas le tocan, estás averiguando su...",
    options: [
      { id: 1, text: "Grado", correct: true },
      { id: 2, text: "Bucle", correct: false },
      { id: 3, text: "Camino", correct: false }
    ]
  },
  {
    id: 2,
    question: "¿Qué es un LAZO en Teoría de Grafos?",
    options: [
      { id: 1, text: "Una línea recta.", correct: false },
      { id: 2, text: "Una arista que sale de un vértice y entra al MISMO vértice.", correct: true }
    ]
  },
  {
    id: 3,
    question: "Si dos grafos tienen el mismo número de vértices y las mismas conexiones pero están dibujados totalmente diferentes...",
    options: [
      { id: 1, text: "No tienen nada que ver.", correct: false },
      { id: 2, text: "Son Isomorfos (gemelos disfrazados).", correct: true }
    ]
  },
  {
    id: 4,
    question: "Para que puedas dibujar el Camino Euleriano perfecto en un grafo (sin repetir líneas ni levantar el lápiz)...",
    options: [
      { id: 1, text: "Debe ser un cuadrado.", correct: false },
      { id: 2, text: "Todos los vértices deben tener grado PAR (o máximo dos impares si solo quieres un camino abierto).", correct: true }
    ]
  }
]
</script>
