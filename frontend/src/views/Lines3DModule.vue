<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Ecuación de la Recta en 3D</h1>
      <p class="text-app-text-muted">Vectorial, paramétrica y simétrica</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Físico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Una recta en 3D ya no se puede definir solo con "y = mx + b". Necesitamos un punto de anclaje flotando en el espacio y un <strong>Vector Director</strong> que nos diga hacia dónde disparar el láser.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Ecuación Vectorial</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="\vec{r} = P_0 + t\vec{v}" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Donde P0 es tu punto de anclaje, 'v' es tu dirección, y 't' es el tiempo (cuánto avanzas o retrocedes en esa dirección).</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Regla de Oro: El parámetro 't'" 
          targetText="El tiempo t te dice en qué punto de la recta estás parado en este instante." 
          :requiredReps="2" 
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import TypingDrill from '../components/TypingDrill.vue'
</script>
