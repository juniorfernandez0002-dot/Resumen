<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">La Recta</h1>
      <p class="text-app-text-muted">Ecuaciones, gráficas y aplicaciones</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Físico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Una línea recta es el camino más corto entre dos puntos. En álgebra, la definimos por su <strong>pendiente</strong> (qué tan inclinada está) y por dónde cruza el eje Y.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Ecuación Principal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="y = mx + b" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Donde 'm' es la pendiente (inclinación) y 'b' es el punto donde choca con el eje vertical.</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Regla de Oro: La Pendiente" 
          targetText="Si la pendiente es positiva, la recta sube; si es negativa, la recta baja; si es cero, es totalmente plana." 
          :requiredReps="2" 
        />
      </div>

      <header class="mb-6 mt-12">
        <h2 class="text-2xl font-bold text-app-text">Traductor de Símbolos</h2>
      </header>

      <SymbolExplainer 
        symbol="m = \frac{y_2 - y_1}{x_2 - x_1}" 
        name="Cálculo de la Pendiente" 
        translation="Significa: 'Sube dividido entre Avanza'." 
        usage="Para saber qué tan empinada es una montaña, divides cuántos metros subiste entre cuántos metros avanzaste hacia adelante."
        :cases="[
          { valid: true, math: 'm = 2', explanation: 'Por cada paso que das a la derecha, subes 2 escalones.' }
        ]"
        quizQuestion="¿Qué pasa si tienes una línea vertical perfecta (caída libre)?"
        :quizOptions="[
          { id: 1, text: 'La pendiente es infinita (indefinida), ¡no puedes dividir entre cero avance!', correct: true },
          { id: 2, text: 'La pendiente es cero.', correct: false }
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
