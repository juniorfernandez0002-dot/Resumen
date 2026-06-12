<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Operaciones y Leyes con Conjuntos</h1>
      <p class="text-app-text-muted">Combinando grupos como un profesional</p>
    </header>

    <section class="mb-12">
      <header class="mb-6">
        <h2 class="text-2xl font-bold text-app-text">Traductor de Símbolos: Operaciones</h2>
        <p class="text-sm text-app-text-muted">Desglosando los símbolos antes de calcular.</p>
      </header>

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

      <SymbolExplainer 
        symbol="∅" 
        name="Conjunto Vacío" 
        translation="Es la 'Caja Vacía'. Significa que no hay nada." 
        usage="Se usa para decir '0' en lenguaje de conjuntos. Si buscas qué tienen en común los humanos inmortales y los unicornios, el resultado es ∅."
        :cases="[
          { valid: true, math: 'A ∩ B = ∅', explanation: 'A y B no tienen nada en común.' },
          { valid: false, math: '{∅}', explanation: 'Falso. Al ponerlo entre llaves estás diciendo que hay una caja DENTRO de otra caja. El vacío se pone solo: ∅.' }
        ]"
        quizQuestion="¿Qué significa matemáticamente que un resultado sea ∅?"
        :quizOptions="[
          { id: 1, text: 'Que hay un error en la ecuación.', correct: false },
          { id: 2, text: 'Que el conjunto resultante no tiene ningún elemento.', correct: true }
        ]"
      />
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          ¡Imagina que estás combinando grupos de amigos! 🤝<br><br>
          • <strong>Unión (∪):</strong> Invitar a TODOS a la fiesta.<br>
          • <strong>Intersección (∩):</strong> Los amigos que están en AMBOS grupos.<br>
          • <strong>Diferencia (-):</strong> Tus amigos que NO conocen al otro grupo.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Fórmula de Unión de Conjuntos</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="n(A \cup B) = n(A) + n(B) - n(A \cap B)" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Para contar todos sin duplicar, sumas ambos grupos y restas a los repetidos (intersección).</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/2-1" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import SymbolExplainer from '../components/SymbolExplainer.vue'

const moduleSteps = [
  {
    title: 'Intersección',
    question: 'Si A = {1, 2, 3, 4, 5} y B = {4, 5, 6, 7}. ¿Cuál es la Intersección (A ∩ B)?',
    needsDiagram: false,
    options: [
      { id: 1, text: '\\{1, 2, 3\\}', isMath: true, correct: false },
      { id: 2, text: '\\{4, 5\\}', isMath: true, correct: true },
      { id: 3, text: '\\{1, 2, 3, 4, 5, 6, 7\\}', isMath: true, correct: false },
      { id: 4, text: '\\{6, 7\\}', isMath: true, correct: false }
    ]
  },
  {
    title: 'Aplicación Práctica',
    question: 'En la universidad, 60 alumnos están en Ciencia (C), 45 en Lectura (L), y 25 en AMBOS. ¿Cuántos hay en total en al menos uno de los clubes (C ∪ L)?',
    needsDiagram: false,
    options: [
      { id: 1, text: '80', isMath: false, correct: true },
      { id: 2, text: '105', isMath: false, correct: false },
      { id: 3, text: '55', isMath: false, correct: false },
      { id: 4, text: '35', isMath: false, correct: false }
    ]
  }
]
</script>
