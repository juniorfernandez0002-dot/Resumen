<template>
  <div class="bg-[#0f172a] rounded-2xl border-2 border-app-primary overflow-hidden shadow-lg mb-8 select-none">
    
    <div class="bg-app-bg p-6 border-b border-[#334155] text-center">
      <h2 class="text-2xl font-black text-white mb-2">Simulador de Conjunto Potencia (2ⁿ)</h2>
      <p class="text-app-text-muted">¿Por qué multiplicamos por 2? Porque para cada ingrediente, tienes 2 opciones: <strong class="text-green-400">Ponerlo</strong> o <strong class="text-red-400">No Ponerlo</strong>.</p>
    </div>

    <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <!-- Panel de Control (Los Elementos) -->
      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-bold text-white mb-2 border-b border-[#334155] pb-2">Tus Ingredientes (Conjunto Original)</h3>
        
        <div 
          v-for="(item, index) in items" 
          :key="item.id"
          class="bg-app-surface p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-colors"
          :class="item.active ? 'border-green-500 bg-green-500/10' : 'border-[#334155] hover:border-gray-400'"
          @click="toggleItem(index)"
        >
          <div class="flex items-center gap-3">
            <span class="text-3xl">{{ item.icon }}</span>
            <span class="font-bold text-white text-lg">{{ item.name }}</span>
          </div>
          
          <!-- Switch Visual -->
          <div class="w-14 h-8 rounded-full p-1 transition-colors relative"
               :class="item.active ? 'bg-green-500' : 'bg-gray-600'">
            <div class="w-6 h-6 bg-white rounded-full transition-transform"
                 :class="item.active ? 'translate-x-6' : 'translate-x-0'"></div>
          </div>
        </div>

        <div class="mt-4 p-4 bg-app-primary/10 border border-app-primary rounded-xl">
          <p class="text-sm font-bold text-app-primary mb-1">Cálculo de Posibilidades:</p>
          <p class="text-2xl font-black text-white font-mono flex items-center gap-2">
            <span :class="items[0].active ? 'text-green-400' : 'text-gray-500'">2</span> 
            <span class="text-app-text-muted">×</span> 
            <span :class="items[1].active ? 'text-green-400' : 'text-gray-500'">2</span> 
            <span class="text-app-text-muted">×</span> 
            <span :class="items[2].active ? 'text-green-400' : 'text-gray-500'">2</span> 
            <span class="text-app-text-muted">=</span> 
            <span class="text-app-secondary">8 combinaciones</span>
          </p>
          <p class="text-xs text-app-text-muted mt-2">
            El 2 significa (Sí o No). Tienes 3 ingredientes, por eso multiplicas el 2 tres veces (2³).
          </p>
        </div>
      </div>

      <!-- Panel de Resultado (El Subconjunto Actual) -->
      <div class="bg-app-surface rounded-xl border border-[#334155] p-6 flex flex-col items-center justify-center relative overflow-hidden">
        <h3 class="absolute top-4 left-6 text-sm font-bold text-app-text-muted uppercase tracking-widest">Subconjunto Actual</h3>
        
        <div class="text-6xl mb-4 mt-8 flex min-h-[80px] items-end justify-center gap-2">
          <span v-if="activeItems.length === 0" class="text-gray-500 text-4xl animate-pulse">🥪 (Pan Vacío)</span>
          <span v-for="item in activeItems" :key="item.id" class="animate-bounce">{{ item.icon }}</span>
        </div>

        <div class="text-center">
          <p class="text-lg text-white font-mono bg-[#0f172a] px-4 py-2 rounded-lg border border-[#334155]">
            { <span v-if="activeItems.length === 0"> ∅ </span>
            <span v-else>{{ activeItems.map(i => i.name).join(', ') }}</span> }
          </p>
          <p class="text-xs text-app-text-muted mt-4">
            Este es <strong>1</strong> de los <strong>8</strong> subconjuntos posibles que forman el Conjunto Potencia.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { id: 1, name: 'Queso', icon: '🧀', active: false },
  { id: 2, name: 'Tocino', icon: '🥓', active: false },
  { id: 3, name: 'Lechuga', icon: '🥬', active: false }
])

const toggleItem = (index) => {
  items.value[index].active = !items.value[index].active
}

const activeItems = computed(() => {
  return items.value.filter(i => i.active)
})
</script>
