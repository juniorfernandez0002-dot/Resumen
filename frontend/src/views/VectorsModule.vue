<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Vectores en 2D y 3D</h1>
      <p class="text-app-text-muted">Conceptos y relaciones espaciales</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Físico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Un vector no es solo un número. Es una "flecha" espacial que indica hacia dónde vas y con qué fuerza. A diferencia de tu edad o peso (escalares), un vector necesita dirección.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Representación Analítica</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Vector en R³</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="\vec{v} = (v_x, v_y, v_z)" />
          </div>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Regla de Oro: Magnitud" 
          targetText="La magnitud de un vector es el tamaño o largo de la flecha, y siempre es un número positivo." 
          :requiredReps="2" 
        />
      </div>

      <header class="mb-6 mt-12">
        <h2 class="text-2xl font-bold text-app-text">Traductor de Símbolos: Vectores</h2>
      </header>

      <SymbolExplainer 
        symbol="||\vec{v}||" 
        name="Magnitud (Norma) del Vector" 
        translation="Significa: ¿Cuánto mide la flecha si saco una cinta métrica?" 
        usage="Se calcula usando el Teorema de Pitágoras con las coordenadas del vector."
        :cases="[
          { valid: true, math: '||(3,4)|| = \\sqrt{3^2 + 4^2} = 5', explanation: 'Correcto. La hipotenusa de un triángulo de lados 3 y 4 mide 5.' }
        ]"
        quizQuestion="¿Qué pasa si la magnitud de un vector es exactamente 1?"
        :quizOptions="[
          { id: 1, text: 'Es un vector inútil.', correct: false },
          { id: 2, text: 'Se le llama Vector Unitario.', correct: true }
        ]"
      />
    </section>
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import TypingDrill from '../components/TypingDrill.vue'
import SymbolExplainer from '../components/SymbolExplainer.vue'
</script>
