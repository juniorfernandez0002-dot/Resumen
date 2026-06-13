<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Distancias y Posiciones</h1>
      <p class="text-app-text-muted">Relativas entre rectas y planos</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Físico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          En el espacio 3D, las cosas pueden chocar (intersección), correr una al lado de la otra (paralelas) o simplemente cruzarse sin tocarse nunca (alabeadas, como dos aviones volando a distinta altura).
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Distancia Punto a Plano</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="d = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Calcula la distancia más corta (línea recta a 90 grados) desde un dron hasta el suelo.</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Regla de Oro: Rectas Alabeadas" 
          targetText="En 3D, dos rectas pueden cruzarse sin chocar. A estas rectas se les llama alabeadas." 
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
