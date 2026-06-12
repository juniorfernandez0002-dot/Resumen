<template>
  <div class="animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6 mb-8 text-center">
      <h1 class="text-4xl font-black text-app-primary mb-2 uppercase tracking-tight">Examen Final: Unidad 3</h1>
      <p class="text-app-text-muted text-lg">Reprogramando tu cerebro sobre Álgebra de Boole</p>
    </header>

    <ExamEngine :questions="examQuestions" nextRoute="/modulo/4-1" />
  </div>
</template>

<script setup>
import ExamEngine from '../components/ExamEngine.vue'

const examQuestions = [
  {
    id: 1,
    question: "Para que un foco se encienda al pasar por una compuerta AND...",
    options: [
      { id: 1, text: "Basta con que UNO de sus dos interruptores esté en 1.", correct: false },
      { id: 2, text: "Obligatoriamente AMBOS interruptores deben estar en 1 (ON).", correct: true }
    ]
  },
  {
    id: 2,
    question: "Si la Ley de Identidad dice que 'A AND 1 = A', ¿eso significa que...?",
    options: [
      { id: 1, text: "El resultado es siempre 1.", correct: false },
      { id: 2, text: "El resultado depende exclusivamente de lo que valga A. Si A es 0, sale 0. Si A es 1, sale 1.", correct: true }
    ]
  },
  {
    id: 3,
    question: "En el Álgebra de Boole solo existen dos estados. ¿Cuáles son?",
    options: [
      { id: 1, text: "0 (Falso/Apagado) y 1 (Verdadero/Encendido)", correct: true },
      { id: 2, text: "Positivo, Negativo y Neutro", correct: false }
    ]
  },
  {
    id: 4,
    question: "¿Para qué nos sirve una 'Tabla de Verdad'?",
    options: [
      { id: 1, text: "Para saber si alguien miente.", correct: false },
      { id: 2, text: "Para mapear TODOS los posibles resultados que dará nuestro circuito lógico.", correct: true }
    ]
  }
]
</script>
