<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Funciones Booleanas</h1>
      <p class="text-app-text-muted">¡Máquinas de decisión lógicas!</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Una <strong>Función Booleana</strong> es como un filtro inteligente: le das varias respuestas de SÍ o NO (Tus variables A, B, C...), las combina usando las compuertas que vimos, y al final escupe una única decisión final: ¡Aprobado o Rechazado!
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Tablas de Verdad y Formas Canónicas</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            Suma de Productos o Producto de Sumas
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Toda tabla de verdad se puede mapear como una función matemática (usando minitérminos). ¡Así es como le damos "inteligencia" condicional a la IA básica!</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/4-1" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import LogicCircuitInteractive from '../components/LogicCircuitInteractive.vue'

const moduleSteps = [
  {
    title: 'Desafío: ¿Cuál es la compuerta secreta?',
    question: 'Quiero que mi función final devuelva 1 (Foco Encendido) SI Y SOLO SI "A está encendido O B está encendido". ¿Qué compuerta debe ir en el cuadro misterioso (???)? Haz clic en la compuerta misteriosa para cambiarla.',
    needsDiagram: false,
    interactiveComponent: LogicCircuitInteractive,
    interactiveData: {
      mode: 'guess-gate',
      targetGoal: true,
      message: '🔍 Haz clic en la compuerta azul (???) para revelar la correcta',
      initialNodes: [
        { id: 'A', type: 'SWITCH', x: 100, y: 150, label: 'A', value: 0 },
        { id: 'B', type: 'SWITCH', x: 100, y: 250, label: 'B', value: 1 }, // Dejo la B en 1 para que al acertar se prenda el foco
        { id: 'gate', type: 'HIDDEN', x: 300, y: 200 },
        { id: 'out', type: 'BULB', x: 500, y: 200, label: 'Foco (Salida)' }
      ],
      initialWires: [
        { source: 'A', target: 'gate' },
        { source: 'B', target: 'gate' },
        { source: 'gate', target: 'out' }
      ]
    },
    options: [
      { id: 1, text: '¡Era la compuerta OR!', isMath: false, correct: true },
      { id: 2, text: '¡Era la compuerta AND!', isMath: false, correct: false }
    ]
  },
  {
    title: 'Tablas de Verdad a gran escala',
    question: 'Si en lugar de 2 interruptores (A, B) tuvieras 3 (A, B, C), ¿cuántas combinaciones de ON/OFF posibles tendrías en tu Tabla de Verdad?',
    needsDiagram: false,
    options: [
      { id: 1, text: '6 combinaciones', isMath: false, correct: false },
      { id: 2, text: '8 combinaciones (2 al cubo)', isMath: false, correct: true },
      { id: 3, text: '9 combinaciones', isMath: false, correct: false }
    ]
  }
]
</script>
