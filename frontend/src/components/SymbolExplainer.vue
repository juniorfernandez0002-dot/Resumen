<template>
  <div class="bg-[#0f172a] rounded-2xl border-2 border-[#334155] overflow-hidden shadow-lg mb-8 select-none transition-all duration-500"
       :class="{'border-green-500 shadow-green-500/20': isUnlocked}">
    
    <!-- Header (Símbolo y Nombre) -->
    <div class="flex flex-col md:flex-row border-b border-[#334155]">
      <!-- Bloque del Símbolo Gigante -->
      <div class="bg-app-bg p-8 flex items-center justify-center min-w-[150px] border-b md:border-b-0 md:border-r border-[#334155] relative overflow-hidden group">
        <div class="absolute inset-0 bg-app-primary/5 group-hover:bg-app-primary/10 transition-colors"></div>
        <span class="text-6xl font-black text-app-primary font-serif drop-shadow-md z-10">{{ symbol }}</span>
      </div>
      
      <!-- Información Principal -->
      <div class="p-6 flex-1 flex flex-col justify-center">
        <h3 class="text-xs uppercase tracking-widest text-app-text-muted font-bold mb-1">Nombre Técnico</h3>
        <h2 class="text-2xl font-black text-white mb-4">{{ name }}</h2>
        
        <h3 class="text-xs uppercase tracking-widest text-app-text-muted font-bold mb-1">Traducción Humana</h3>
        <p class="text-app-primary-light text-lg font-medium leading-snug">{{ translation }}</p>
      </div>
    </div>

    <!-- Cuerpo: Uso y Casos -->
    <div class="p-6 bg-app-surface grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Cómo se usa -->
      <div>
        <h3 class="text-sm font-bold text-white mb-3 border-b border-[#334155] pb-2 flex items-center gap-2">
          <span>🛠️</span> ¿Cómo se usa?
        </h3>
        <p class="text-app-text-muted text-sm leading-relaxed">{{ usage }}</p>
      </div>

      <!-- Casos / Ejemplos -->
      <div>
        <h3 class="text-sm font-bold text-white mb-3 border-b border-[#334155] pb-2 flex items-center gap-2">
          <span>🎯</span> Ejemplos Rápidos
        </h3>
        <ul class="space-y-2">
          <li v-for="(c, i) in cases" :key="i" class="text-sm flex items-start gap-2 bg-[#0f172a] p-2 rounded-lg border border-[#334155]">
            <span v-if="c.valid" class="text-green-400 mt-0.5">✅</span>
            <span v-else class="text-red-400 mt-0.5">❌</span>
            <div>
              <span class="font-bold font-mono text-white">{{ c.math }}</span>
              <p class="text-xs text-app-text-muted mt-1">{{ c.explanation }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Mini-Quiz de Bloqueo Cognitivo -->
    <div class="p-6 border-t border-[#334155] relative overflow-hidden transition-colors duration-500"
         :class="isUnlocked ? 'bg-green-500/10' : 'bg-[#1e293b]'">
      
      <div v-if="!isUnlocked" class="relative z-10">
        <h3 class="text-app-primary font-bold mb-4 flex items-center gap-2">
          <span class="animate-pulse">🔒</span> Verificación de Entendimiento:
        </h3>
        <p class="text-white text-lg font-medium mb-4">{{ quizQuestion }}</p>
        
        <div class="space-y-2">
          <button 
            v-for="opt in quizOptions" 
            :key="opt.id"
            @click="checkAnswer(opt)"
            class="w-full text-left p-4 rounded-xl border-2 transition-all font-medium"
            :class="[
              errorId === opt.id 
                ? 'border-red-500 bg-red-500/20 text-red-300 animate-[shake_0.5s_ease-in-out]' 
                : 'border-[#334155] bg-app-surface text-app-text hover:border-app-primary hover:-translate-y-1'
            ]"
          >
            {{ opt.text }}
          </button>
        </div>
      </div>

      <div v-else class="text-center py-4 relative z-10 animate-fade-in">
        <div class="text-4xl mb-2">🔓✨</div>
        <h3 class="text-green-400 font-black text-2xl uppercase tracking-wider">Símbolo Dominado</h3>
        <p class="text-green-400/80 text-sm mt-2">Tu cerebro ya sabe cómo leer este idioma alienígena.</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  translation: { type: String, required: true },
  usage: { type: String, required: true },
  cases: { type: Array, required: true }, // [{ valid: boolean, math: String, explanation: String }]
  quizQuestion: { type: String, required: true },
  quizOptions: { type: Array, required: true } // [{ id: Number, text: String, correct: boolean }]
})

const isUnlocked = ref(false)
const errorId = ref(null)

const checkAnswer = (opt) => {
  if (opt.correct) {
    isUnlocked.value = true
    errorId.value = null
  } else {
    errorId.value = opt.id
    setTimeout(() => {
      if (errorId.value === opt.id) errorId.value = null
    }, 800)
  }
}
</script>

<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
}
</style>
