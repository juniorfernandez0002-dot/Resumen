<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">La Parábola</h1>
      <p class="text-app-text-muted">Ecuaciones, gráficas y aplicaciones</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Físico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          La parábola es la curva que describe una pelota cuando la lanzas al aire. Tiene un punto más bajo o más alto llamado <strong>Vértice</strong>, y un punto mágico llamado <strong>Foco</strong> hacia donde rebotan todas las señales (¡así funcionan las antenas parabólicas!).
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Ecuación Cuadrática</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="y = ax^2 + bx + c" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">El término al cuadrado (x²) es lo que le da su forma de 'U' o herradura.</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Regla de Oro: La sonrisa parabólica" 
          targetText="Si el número 'a' es positivo, la parábola sonríe (U). Si 'a' es negativo, está triste y mira hacia abajo." 
          :requiredReps="2" 
        />
      </div>

      <header class="mb-6 mt-12">
        <h2 class="text-2xl font-bold text-app-text">Traductor de Símbolos</h2>
      </header>

      <SymbolExplainer 
        symbol="(x - h)^2 = 4p(y - k)" 
        name="Ecuación Canónica de la Parábola" 
        translation="Significa: 'Ubícate en el Vértice (h,k) y ábrete'." 
        usage="Es una forma mucho más limpia de escribirla porque te dice exactamente dónde está la punta de la curva (h,k) y qué tan abierta es (p)."
        :cases="[
          { valid: true, math: 'x^2 = 4y', explanation: 'El vértice está en el centro (0,0) y se abre hacia arriba como una copa.' }
        ]"
        quizQuestion="¿Qué es 'p' en esta fórmula?"
        :quizOptions="[
          { id: 1, text: 'Es la distancia exacta desde el vértice hasta el foco (el punto donde concentra las señales).', correct: true },
          { id: 2, text: 'Es el peso de la parábola.', correct: false }
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
