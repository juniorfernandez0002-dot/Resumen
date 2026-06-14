<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Circunferencia y Elipse</h1>
      <p class="text-app-text-muted">Ecuaciones, gráficas y aplicaciones</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Físico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Una <strong>Circunferencia</strong> es un conjunto de puntos que están todos a la misma distancia de un Centro. 
          Una <strong>Elipse</strong> es como una circunferencia que alguien aplastó o estiró (¡así orbitan los planetas alrededor del sol!).
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Ecuación de la Circunferencia</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="(x - h)^2 + (y - k)^2 = r^2" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Es literalmente el Teorema de Pitágoras aplicado en todos los puntos alrededor del Centro (h,k) con un radio 'r'.</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Regla de Oro: La Elipse" 
          targetText="La elipse tiene dos radios diferentes: uno largo para estirarse y uno corto para aplastarse." 
          :requiredReps="2" 
        />
      </div>

      <header class="mb-6 mt-12">
        <h2 class="text-2xl font-bold text-app-text">Traductor de Símbolos</h2>
      </header>

      <SymbolExplainer 
        symbol="\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1" 
        name="Ecuación de la Elipse (Centrada)" 
        translation="Significa: 'Estírate 'a' hacia los lados, y 'b' hacia arriba/abajo'." 
        usage="Si 'a' es mayor que 'b', el huevo está acostado. Si 'b' es mayor que 'a', el huevo está parado."
        :cases="[
          { valid: true, math: '\\frac{x^2}{25} + \\frac{y^2}{9} = 1', explanation: 'a=5 y b=3. Está más ancha que alta.' }
        ]"
        quizQuestion="¿Qué pasa si en la fórmula de la elipse a = b?"
        :quizOptions="[
          { id: 1, text: 'Si estiras lo mismo para arriba que para los lados, deja de ser elipse y se convierte en una Circunferencia perfecta.', correct: true },
          { id: 2, text: 'Desaparece.', correct: false }
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
