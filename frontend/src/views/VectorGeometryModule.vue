<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Geometría Dinámica</h1>
      <p class="text-app-text-muted">Visualización y cálculo por software</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">¿Para qué sirve esto en la vida real?</h2>
        <p class="text-app-text-muted text-sm mb-4">
          La <strong>Geometría Dinámica</strong> usando software (como GeoGebra o Python) permite ver cómo cambian las proyecciones y los ángulos cuando arrastras un vector en tiempo real. 
          Es la base de cómo funcionan los motores de videojuegos 3D y las físicas de colisiones.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Ecuación Paramétrica Básica</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="\vec{r}(t) = \vec{r}_0 + t\vec{v}" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Describe el movimiento de un punto a lo largo de una línea usando un vector de dirección y el tiempo 't'.</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Regla de Oro: Vectores en Movimiento" 
          targetText="En un motor de física, la posición final es igual a la posición inicial más la velocidad multiplicada por el tiempo." 
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
