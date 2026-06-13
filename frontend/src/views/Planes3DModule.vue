<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Ecuación del Plano en 3D</h1>
      <p class="text-app-text-muted">Vectorial, paramétrica, normal y cartesiana</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Físico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Un plano es como una hoja de papel infinita flotando en el espacio. Para definirlo, solo necesitas un punto donde anclar la hoja, y un <strong>Vector Normal</strong> (un palo clavado perfectamente a 90 grados en la hoja) que defina su inclinación.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Ecuación General</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="Ax + By + Cz + D = 0" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Los números A, B y C esconden un secreto: son exactamente las coordenadas del Vector Normal que "clava" al plano.</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Regla de Oro: El Vector Normal" 
          targetText="El vector normal es el jefe del plano. Si conoces su dirección, conoces exactamente cómo está inclinado el plano entero." 
          :requiredReps="2" 
        />
      </div>

      <header class="mb-6 mt-12">
        <h2 class="text-2xl font-bold text-app-text">Traductor de Símbolos</h2>
      </header>

      <SymbolExplainer 
        symbol="\vec{n} \cdot (\vec{r} - P_0) = 0" 
        name="Ecuación Vectorial del Plano" 
        translation="Significa: 'El palo está a 90 grados de cualquier línea dibujada en la hoja'." 
        usage="Usa el Producto Punto. Si cualquier vector en la hoja se multiplica por el vector Normal (palo), siempre debe dar CERO porque son ortogonales."
        :cases="[
          { valid: true, math: '\\vec{n} = (A,B,C)', explanation: 'Saca los coeficientes de X, Y y Z de la ecuación general y tendrás la dirección del palo.' }
        ]"
        quizQuestion="Si dos planos tienen exactamente el mismo vector normal, ¿qué significa?"
        :quizOptions="[
          { id: 1, text: 'Son planos paralelos (como los pisos de un edificio).', correct: true },
          { id: 2, text: 'Chocan entre sí.', correct: false }
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
