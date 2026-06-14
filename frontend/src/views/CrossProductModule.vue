<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Triple Producto y Proyección</h1>
      <p class="text-app-text-muted">Cálculos avanzados de vectores ortogonales</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Producto Vectorial (Cruz)</h2>
        <p class="text-app-text-muted text-sm mb-4">
          A diferencia del Producto Escalar (que escupe un número), el <strong>Producto Cruz</strong> escupe un nuevo vector completamente perpendicular a los otros dos. ¡Como la esquina de tu habitación!
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Proyección Ortogonal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="Proj_{\vec{v}}(\vec{u})" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Es la "sombra" matemática que proyecta un vector sobre otro si les pones un foco arriba.</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Regla de Oro: La Mano Derecha" 
          targetText="El producto cruz de u por v crea un nuevo vector que sale disparado a 90 grados de la superficie." 
          :requiredReps="2" 
        />
      </div>

      <header class="mb-6 mt-12">
        <h2 class="text-2xl font-bold text-app-text">Triple Producto Escalar</h2>
      </header>

      <SymbolExplainer 
        symbol="\vec{u} \cdot (\vec{v} \times \vec{w})" 
        name="Volumen del Paralelepípedo" 
        translation="Significa: 'Calcula el volumen de la caja 3D deformada'." 
        usage="Mezcla el producto punto y el producto cruz. El resultado numérico es el volumen físico de la figura que forman los 3 vectores."
        :cases="[
          { valid: true, math: '\\vec{u} \\cdot (\\vec{v} \\times \\vec{w}) = 0', explanation: 'Si da cero, significa que la caja está totalmente aplastada (los 3 vectores están en el mismo plano 2D).' }
        ]"
        quizQuestion="Si el Triple Producto da cero, ¿qué podemos concluir?"
        :quizOptions="[
          { id: 1, text: 'Que los vectores son paralelos entre sí.', correct: false },
          { id: 2, text: 'Que los tres vectores son coplanares (viven en la misma hoja de papel).', correct: true }
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
