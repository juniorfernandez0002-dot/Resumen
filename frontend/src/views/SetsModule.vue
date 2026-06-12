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
          targetText="Un Conjunto es una agrupación de elementos únicos. No hay elementos repetidos y el orden no importa." 
          :requiredReps="3" 
        />
        <TypingDrill 
          title="Concepto Central (2/2)" 
          targetText="Entender conjuntos nos permite agrupar, clasificar y operar lógicamente con información estructurada." 
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

    <!-- TRADUCTOR DE SÍMBOLOS -->
    <section>
      <header class="mb-6">
        <h2 class="text-2xl font-bold text-app-text">Traductor de Símbolos Alienígenas</h2>
        <p class="text-sm text-app-text-muted">Aprende a leer el código antes de intentar programar.</p>
      </header>

      <SymbolExplainer 
        symbol="{ }" 
        name="Llaves de Conjunto" 
        translation="Es la 'Caja' donde guardamos las cosas." 
        usage="Todo lo que esté dentro de las llaves pertenece al conjunto. Si está fuera, no es parte del grupo."
        :cases="[
          { valid: true, math: 'A = {1, 2, 3}', explanation: 'El conjunto A es una caja que contiene el 1, 2 y 3.' },
          { valid: false, math: 'A = 1, 2, 3', explanation: 'Error: Los números están tirados en el piso, no están agrupados en una caja.' }
        ]"
        quizQuestion="Si escribes B = Gato, Perro (sin llaves), ¿matemáticamente es un conjunto válido?"
        :quizOptions="[
          { id: 1, text: 'Sí, porque son animales.', correct: false },
          { id: 2, text: 'No, porque no están encerrados en su caja { }.', correct: true }
        ]"
      />

      <SymbolExplainer 
        symbol="∈" 
        name="Pertenencia" 
        translation="Significa literalmente 'vive en' o 'pertenece a'." 
        usage="A la izquierda pones al elemento (la persona) y a la derecha pones el Conjunto (la casa)."
        :cases="[
          { valid: true, math: '2 ∈ {1, 2, 3}', explanation: 'El número 2 vive dentro de esa caja.' },
          { valid: false, math: '{1, 2, 3} ∈ 2', explanation: 'Absurdo: Una casa entera no puede vivir dentro de una persona.' },
          { valid: true, math: '5 ∉ {1, 2, 3}', explanation: 'El símbolo tachado significa NO pertenece (el 5 no vive ahí).' }
        ]"
        quizQuestion="¿Cuál de estas afirmaciones es la forma correcta de decir que Ana pertenece a la familia F?"
        :quizOptions="[
          { id: 1, text: 'F ∈ Ana', correct: false },
          { id: 2, text: 'Ana = F', correct: false },
          { id: 3, text: 'Ana ∈ F', correct: true }
        ]"
      />

      <SymbolExplainer 
        symbol="∪" 
        name="Unión" 
        translation="Significa 'Juntar TODO' en un solo grupo." 
        usage="A ∪ B significa que invitas a los amigos del grupo A y a los amigos del grupo B a la misma fiesta. Si alguien está en ambos grupos, igual cuenta una sola vez."
        :cases="[
          { valid: true, math: '{1, 2} ∪ {3, 4} = {1, 2, 3, 4}', explanation: 'Correcto. Juntamos todo.' },
          { valid: true, math: '{1, 2} ∪ {2, 3} = {1, 2, 3}', explanation: 'Correcto. El 2 estaba repetido, así que solo se pone una vez.' }
        ]"
        quizQuestion="¿Qué representa visualmente la operación A ∪ B?"
        :quizOptions="[
          { id: 1, text: 'Solo lo que tienen en común.', correct: false },
          { id: 2, text: 'Juntar todo sin duplicar.', correct: true },
          { id: 3, text: 'Lo que le falta a A.', correct: false }
        ]"
      />

      <SymbolExplainer 
        symbol="∩" 
        name="Intersección" 
        translation="Significa 'Solo lo que tienen en COMÚN'." 
        usage="A ∩ B busca únicamente a los elementos que están presentes al mismo tiempo tanto en A como en B. Es como buscar el choque o cruce."
        :cases="[
          { valid: true, math: '{1, 2, 3} ∩ {3, 4, 5} = {3}', explanation: 'El único número que está en ambas cajas es el 3.' },
          { valid: false, math: '{1, 2} ∩ {3, 4} = {1, 2, 3, 4}', explanation: 'Falso. No tienen NADA en común. Ese es el resultado de una Unión, no Intersección.' }
        ]"
        quizQuestion="Si A = {Gatos} y B = {Perros}. ¿Cuál es la intersección A ∩ B?"
        :quizOptions="[
          { id: 1, text: 'Gatos y Perros juntos.', correct: false },
          { id: 2, text: 'Un animal que es mitad gato y mitad perro.', correct: false },
          { id: 3, text: 'Un conjunto vacío (∅), porque no hay algo que sea 100% perro y gato a la vez.', correct: true }
        ]"
      />
    </section>

    <!-- Componente de Ejercicio Dinámico -->
    <StepByStepExercise :exerciseSteps="setsSteps" nextModuleRoute="/modulo/cardinalidad" />

  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import TypingDrill from '../components/TypingDrill.vue'
import SymbolExplainer from '../components/SymbolExplainer.vue'

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
