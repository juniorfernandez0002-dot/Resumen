<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Subconjuntos y Conjunto Potencia</h1>
      <p class="text-app-text-muted">Las partes de un conjunto</p>
    </header>

    <section class="mb-12">
      <!-- Taladros de Memoria Muscular -->
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Concepto Central: Subconjunto" 
          targetText="Un subconjunto es cuando separas algunos elementos de un grupo más grande." 
          :requiredReps="3" 
        />
        <TypingDrill 
          title="Concepto Central: Conjunto Potencia" 
          targetText="El conjunto potencia es la lista completa de todas las combinaciones posibles que puedes armar." 
          :requiredReps="3" 
        />
      </div>

      <!-- Simulador Visual -->
      <PowerSetSimulator />

      <!-- Traductor de Símbolos -->
      <header class="mb-6 mt-12">
        <h2 class="text-2xl font-bold text-app-text">Traductor de Símbolos Alienígenas</h2>
      </header>

      <SymbolExplainer 
        symbol="⊆" 
        name="Subconjunto (Inclusión)" 
        translation="Significa 'Es una parte de' o 'Está metido dentro de'." 
        usage="A ⊆ B significa que TODO lo que está en A, también está dentro de B."
        :cases="[
          { valid: true, math: '{Gato} ⊆ {Gato, Perro}', explanation: 'Correcto. El conjunto del Gato es una pequeña parte del conjunto de Gato y Perro.' },
          { valid: false, math: '{Loro} ⊆ {Gato, Perro}', explanation: 'Falso. El Loro no está dentro de la caja de Gato y Perro.' }
        ]"
        quizQuestion="¿Cuál es la diferencia entre Pertenencia (∈) y Subconjunto (⊆)?"
        :quizOptions="[
          { id: 1, text: 'Son exactamente lo mismo.', correct: false },
          { id: 2, text: '∈ es para elementos individuales (un animal), ⊆ es para comparar cajas enteras (conjuntos).', correct: true }
        ]"
      />

      <SymbolExplainer 
        symbol="P(A)" 
        name="Conjunto Potencia" 
        translation="Significa 'La Lista de todas las Combinaciones'." 
        usage="Si A tiene 3 elementos, P(A) es el conjunto gigante que contiene adentro a los 8 subconjuntos posibles."
        :cases="[
          { valid: true, math: 'Si A = {1}, entonces P(A) = { ∅, {1} }', explanation: 'Con 1 solo elemento, tienes 2 combinaciones: o no lo llevas (Vacío), o te lo llevas ({1}).' }
        ]"
        quizQuestion="¿Qué tamaño tiene siempre el Conjunto Potencia P(A)?"
        :quizOptions="[
          { id: 1, text: 'El doble del conjunto original.', correct: false },
          { id: 2, text: '2 elevado a la cantidad de elementos de A.', correct: true }
        ]"
      />
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/operaciones" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import TypingDrill from '../components/TypingDrill.vue'
import SymbolExplainer from '../components/SymbolExplainer.vue'
import PowerSetSimulator from '../components/PowerSetSimulator.vue'

const moduleSteps = [
  {
    title: 'Definición de Subconjunto',
    question: '¿Qué significa exactamente que el conjunto M sea un "subconjunto" del conjunto N?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Que tienen los mismos elementos exactos', isMath: false, correct: false },
      { id: 2, text: 'Que todo elemento de M está también dentro de N', isMath: false, correct: true },
      { id: 3, text: 'Que no tienen ningún elemento en común', isMath: false, correct: false }
    ]
  },
  {
    title: 'Fórmula de Potencia',
    question: 'Si tenemos el conjunto de líderes L = {Ana, Luis, Pedro}, ¿cuántos subconjuntos posibles tiene su Conjunto Potencia?',
    needsDiagram: false,
    options: [
      { id: 1, text: '3', isMath: false, correct: false },
      { id: 2, text: '6', isMath: false, correct: false },
      { id: 3, text: '8', isMath: false, correct: true },
      { id: 4, text: '9', isMath: false, correct: false }
    ]
  }
]
</script>
