<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">Producto Escalar y Ángulos</h1>
      <p class="text-app-text-muted">Proyecciones y multiplicaciones de vectores</p>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">El Concepto Físico</h2>
        <p class="text-app-text-muted text-sm mb-4">
          El <strong>Producto Escalar</strong> (o Producto Punto) aplasta dos vectores y escupe un simple número (un escalar). Nos dice cuánto de un vector "empuja" en la misma dirección que el otro.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Matemática</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="\vec{u} \cdot \vec{v} = ||\vec{u}|| ||\vec{v}|| \cos(\theta)" />
          </div>
          <p class="text-center text-xs text-app-text-muted mt-3">Depende completamente del ángulo que forman los dos vectores.</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="flex flex-col gap-4 mb-8">
        <TypingDrill 
          title="Regla de Oro: Vectores Perpendiculares" 
          targetText="Si el producto escalar de dos vectores da cero, significa que forman un ángulo perfecto de 90 grados." 
          :requiredReps="2" 
        />
      </div>

      <header class="mb-6 mt-12">
        <h2 class="text-2xl font-bold text-app-text">Traductor de Símbolos</h2>
      </header>

      <SymbolExplainer 
        symbol="\vec{u} \cdot \vec{v} = 0" 
        name="Vectores Ortogonales" 
        translation="Significa: 'Estamos cruzados formando una T'." 
        usage="Si la multiplicación de sus coordenadas da 0, es la prueba definitiva de que son perpendiculares (ortogonales)."
        :cases="[
          { valid: true, math: '(1,0) \\cdot (0,1) = (1\\times0) + (0\\times1) = 0', explanation: 'Correcto. El eje X es perpendicular al eje Y.' }
        ]"
        quizQuestion="¿Qué pasa si el producto punto da un número negativo?"
        :quizOptions="[
          { id: 1, text: 'Significa que los vectores apuntan en direcciones opuestas (ángulo mayor a 90°).', correct: true },
          { id: 2, text: 'Significa que calculaste mal.', correct: false }
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
