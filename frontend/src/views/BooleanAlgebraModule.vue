<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Álgebra de Boole</h1>
      <p class="text-app-text-muted">¡El idioma secreto de las computadoras!</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Si las computadoras hablaran, usarían el Álgebra de Boole. Usan solo <strong>ceros (apagado)</strong> y <strong>unos (encendido)</strong>. <br><br>
          La maravilla de Boole es que inventó "Leyes". Estas leyes te permiten agarrar un circuito gigante lleno de cables cruzados y reducirlo a un circuito súper pequeño que hace exactamente lo mismo. ¡Ahorras dinero y espacio!
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Postulados y Simplificación</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            Leyes de Idempotencia, Identidad, De Morgan
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Por ejemplo, la ley de identidad para el AND dicta que A ∧ 1 = A. Esto significa que si conectas un interruptor a una fuente de energía constante mediante un AND, el resultado depende 100% de ese interruptor.</p>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="/modulo/3-4" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'
import LogicCircuitInteractive from '../components/LogicCircuitInteractive.vue'

const moduleSteps = [
  {
    title: 'Simulación: Ley de Identidad',
    question: 'Observa la Ley "A AND 1 = A". Aquí tienes un interruptor normal (A) y debajo un interruptor trabado permanentemente en ON (representando al 1). Conéctalos usando una compuerta AND. ¿De quién depende que se encienda el foco final?',
    needsDiagram: false,
    interactiveComponent: LogicCircuitInteractive,
    interactiveData: {
      mode: 'free',
      message: 'Juega con el interruptor A. Nota cómo el foco imita exactamente lo que hace A.',
      initialNodes: [
        { id: 'A', type: 'SWITCH', x: 100, y: 150, label: 'Interruptor A', value: 0 },
        { id: 'Constant', type: 'SWITCH', x: 100, y: 250, label: 'Siempre ON', value: 1 }, // Simula el "1"
        { id: 'gate', type: 'AND', x: 300, y: 200 },
        { id: 'out', type: 'BULB', x: 500, y: 200, label: 'Foco (Salida)' }
      ],
      initialWires: [
        { source: 'A', target: 'gate' },
        { source: 'Constant', target: 'gate' },
        { source: 'gate', target: 'out' }
      ]
    },
    options: [
      { id: 1, text: 'Depende de la compuerta AND.', isMath: false, correct: false },
      { id: 2, text: 'Depende únicamente de A. Si A es 1, se prende. Si A es 0, se apaga.', isMath: false, correct: true },
      { id: 3, text: 'Siempre estará encendido sin importar A.', isMath: false, correct: false }
    ]
  },
  {
    title: 'El Poder de Simplificar',
    question: 'Sabiendo que "A AND 1 = A"... si fueras un ingeniero electrónico, en lugar de gastar en comprar una compuerta AND y un cable extra... ¿qué harías?',
    needsDiagram: false,
    options: [
      { id: 1, text: 'Compraría un OR mejor.', isMath: false, correct: false },
      { id: 2, text: 'Quitaría la compuerta AND y conectaría el interruptor A directo al foco.', isMath: false, correct: true },
      { id: 3, text: 'Pondría un NOT en medio.', isMath: false, correct: false }
    ]
  }
]
</script>
