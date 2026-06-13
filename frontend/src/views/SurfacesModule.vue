<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Superficies</h1>
      <p class="text-app-text-muted">Definición, clasificación y gráficas</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Físico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Una <strong>Superficie Cuádrica</strong> es lo que pasa cuando llevas las cónicas (parábolas, elipses) a la tercera dimensión. 
          Un círculo se vuelve una Esfera. Una elipse se vuelve un Huevo 3D (Elipsoide). Una parábola se vuelve una Antena Parabólica 3D (Paraboloide).
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Ecuación de la Esfera</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="(x-h)^2 + (y-k)^2 + (z-l)^2 = r^2" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Es igual a la circunferencia, ¡solo le agregamos la coordenada Z del espacio 3D!</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Regla de Oro: Curvas de Nivel" 
          targetText="Si cortas una superficie 3D en rodajas, cada rodaja será una figura 2D (como un círculo o una elipse) llamada traza." 
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
