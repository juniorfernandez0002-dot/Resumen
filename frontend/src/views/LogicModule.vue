<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Proposiciones y Conectores</h1>
      <p class="text-app-text-muted">¡La lógica detrás de las decisiones!</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Imagina que una <strong>proposición</strong> es como un interruptor de luz: o está encendido (verdadero, 1) o apagado (falso, 0). ¡No hay puntos medios!<br><br>
          Los <strong>conectores lógicos</strong> (Y, O) son como las compuertas que deciden si la energía pasa al foco final dependiendo de cómo estén los interruptores.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Evaluación Binaria y Conectores</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            Conjunción (AND) y Disyunción (OR)
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Una proposición es V o F. El conector <strong>AND (∧)</strong> exige que AMBOS sean verdaderos. El <strong>OR (∨)</strong> exige que AL MENOS UNO sea verdadero.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/3-2" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import LogicCircuitInteractive from '../components/LogicCircuitInteractive.vue'

const moduleSteps = [
  {
    title: 'Simulador: La Compuerta AND (Y)',
    question: 'En un circuito AND (Conjunción), la energía solo pasa si AMBOS interruptores están en ON. Haz clic en los interruptores (A y B) para cambiar su estado a 1 y lograr encender el foco.',
    needsDiagram: false,
    interactiveComponent: LogicCircuitInteractive,
    interactiveData: {
      mode: 'free',
      targetGoal: true,
      message: '🔌 Enciende ambos interruptores para pasar energía a la compuerta AND',
      initialNodes: [
        { id: 'A', type: 'SWITCH', x: 100, y: 150, label: 'Interruptor A', value: 0 },
        { id: 'B', type: 'SWITCH', x: 100, y: 250, label: 'Interruptor B', value: 0 },
        { id: 'gate', type: 'AND', x: 300, y: 200 },
        { id: 'out', type: 'BULB', x: 500, y: 200, label: 'Foco (Salida)' }
      ],
      initialWires: [
        { source: 'A', target: 'gate' },
        { source: 'B', target: 'gate' },
        { source: 'gate', target: 'out' }
      ]
    },
    options: [
      { id: 1, text: '¡Comprendido! Solo prende cuando ambos son 1 (V ∧ V = V)', isMath: false, correct: true },
      { id: 2, text: 'Prendió con solo uno.', isMath: false, correct: false }
    ]
  },
  {
    title: 'La Compuerta OR (O)',
    question: 'Si cambiaras la compuerta AND del circuito anterior por una compuerta OR (O), ¿qué tendría que pasar para que el foco se encienda?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Que obligatoriamente ambos estén encendidos.', isMath: false, correct: false },
      { id: 2, text: 'Que al menos UNO de los dos (o ambos) estén encendidos.', isMath: false, correct: true },
      { id: 3, text: 'Que ambos estén apagados.', isMath: false, correct: false }
    ]
  }
]
</script>
