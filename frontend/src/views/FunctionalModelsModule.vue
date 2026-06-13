<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Modelos Funcionales</h1>
      <p class="text-app-text-muted">Modelos lineales y cuadráticos</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Práctico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Los <strong>Modelos Funcionales</strong> son formas de usar las rectas y las parábolas para predecir el futuro en la vida real. 
          Como calcular costos en una empresa (lineal) o predecir el punto máximo de ganancias antes de que caigan (parábola).
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Función de Costo</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="C(x) = C_{fijo} + C_{variable} \cdot x" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Es simplemente una línea recta donde el cruce Y son los costos fijos y la pendiente es el costo por unidad.</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Regla de Oro: Vértice = Máximo o Mínimo" 
          targetText="En problemas de optimización con parábolas, el vértice siempre te dirá el punto de máxima ganancia o de mínimo costo." 
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
