<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Circuitos Lógicos Combinados</h1>
      <p class="text-app-text-muted">¡Creando sistemas complejos paso a paso!</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          La magia de la matemática discreta es que puedes conectar compuertas entre sí. <br><br>
          Al igual que el principio de inducción donde una pieza empuja a la siguiente, en los circuitos lógicos, la <strong>salida de una compuerta se convierte en la entrada de la siguiente</strong>, permitiendo construir el cerebro de una computadora.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Circuitos Combinacionales</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="(A \lor B) \land C" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Es un sistema donde las señales eléctricas pasan por compuertas interconectadas. La expresión matemática representa fielmente el cableado físico.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/3-3" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import LogicCircuitInteractive from '../components/LogicCircuitInteractive.vue'

const moduleSteps = [
  {
    title: 'Desafío: Enciende el Sistema',
    question: 'Este circuito es la ecuación matemática (A OR B) AND C. Tienes 3 interruptores. Tu misión es encender el foco final. ¡Juega con los interruptores para lograr que la corriente verde llegue al final!',
    needsDiagram: false,
    interactiveComponent: LogicCircuitInteractive,
    interactiveData: {
      mode: 'free',
      targetGoal: true,
      message: '🔌 ¡Encuentra la combinación para encender el foco!',
      initialNodes: [
        { id: 'A', type: 'SWITCH', x: 50, y: 80, label: 'A', value: 0 },
        { id: 'B', type: 'SWITCH', x: 50, y: 180, label: 'B', value: 0 },
        { id: 'C', type: 'SWITCH', x: 50, y: 280, label: 'C', value: 0 },
        { id: 'orGate', type: 'OR', x: 250, y: 130 },
        { id: 'andGate', type: 'AND', x: 450, y: 200 },
        { id: 'out', type: 'BULB', x: 650, y: 200, label: 'Foco' }
      ],
      initialWires: [
        { source: 'A', target: 'orGate' },
        { source: 'B', target: 'orGate' },
        { source: 'orGate', target: 'andGate' },
        { source: 'C', target: 'andGate' },
        { source: 'andGate', target: 'out' }
      ]
    },
    options: [
      { id: 1, text: 'Completado: C debe estar encendido SÍ o SÍ, y además A o B.', isMath: false, correct: true },
      { id: 2, text: 'No logré encenderlo.', isMath: false, correct: false }
    ]
  },
  {
    title: 'Reflexión Matemática',
    question: 'Si observaste la estructura, ¿por qué C tiene que estar encendido obligatoriamente para ganar?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Porque está conectado al OR principal.', isMath: false, correct: false },
      { id: 2, text: 'Porque es una de las entradas de la compuerta AND final, y el AND exige que TODAS sus entradas sean verdad (1).', isMath: false, correct: true },
      { id: 3, text: 'Es un error del circuito.', isMath: false, correct: false }
    ]
  }
]
</script>
