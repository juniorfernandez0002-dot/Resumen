<template>
  <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm">
    <div class="mb-6">
      <h3 class="font-semibold text-app-text mb-2">Juego Interactivo: La Caja de Conteo</h3>
      <p class="text-sm text-app-text-muted mb-4">
        Haz clic en las esferas para contar los elementos del conjunto. 
        <strong class="text-app-primary">Regla de oro:</strong> En los conjuntos, los elementos repetidos solo cuentan UNA vez.
      </p>

      <div class="flex items-center justify-between bg-app-bg p-4 rounded-lg border border-app-border">
        <div>
          <span class="text-xs font-bold text-app-text-muted uppercase tracking-wider">Cardinalidad |A|</span>
          <div class="text-3xl font-bold text-app-primary mt-1">{{ uniqueCount }}</div>
        </div>
        <div v-if="allUniqueClicked" class="text-app-success font-bold text-sm bg-app-success-light px-3 py-1 rounded-full animate-pulse">
          ¡Conteo Finalizado!
        </div>
      </div>
    </div>

    <!-- Área de juego -->
    <div class="relative bg-[#1c2128] rounded-lg border border-app-border p-8 min-h-[250px] flex flex-wrap gap-4 items-center justify-center">
      
      <button
        v-for="(item, index) in localElements" 
        :key="index"
        @click="clickElement(item, index)"
        class="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 transform hover:scale-110"
        :class="[
          item.clicked 
            ? (item.isDuplicate ? 'bg-app-surface text-app-text-muted border-2 border-app-danger/50 opacity-50 scale-95' : 'bg-app-primary text-white shadow-lg shadow-app-primary/30 ring-2 ring-offset-2 ring-offset-[#1c2128] ring-app-primary') 
            : 'bg-app-surface text-app-text border border-app-border hover:border-app-primary cursor-pointer'
        ]"
      >
        {{ item.value }}
        
        <!-- Indicador de duplicado -->
        <span v-if="item.clicked && item.isDuplicate" class="absolute -top-2 -right-2 bg-app-danger text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
          Repetido
        </span>
      </button>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps({
  elements: {
    type: Array,
    default: () => [2, 4, 5, 5, 8, 8, 8]
  }
})

const emit = defineEmits(['completed'])

const localElements = ref([])
const seenValues = ref(new Set())

const initGame = () => {
  localElements.value = props.elements.map(val => ({
    value: val,
    clicked: false,
    isDuplicate: false
  }))
  seenValues.value.clear()
}

onMounted(initGame)

watch(() => props.elements, initGame, { deep: true })

const uniqueCount = computed(() => seenValues.value.size)
const totalUniqueExpected = computed(() => new Set(props.elements).size)
const allUniqueClicked = computed(() => uniqueCount.value === totalUniqueExpected.value)

const clickElement = (item, index) => {
  if (item.clicked) return // Ya fue clickeado

  item.clicked = true

  if (seenValues.value.has(item.value)) {
    // Es un duplicado, no aumenta el contador
    item.isDuplicate = true
  } else {
    // Es nuevo, aumenta el contador
    seenValues.value.add(item.value)
    
    // Verificamos si completó
    if (seenValues.value.size === totalUniqueExpected.value) {
      setTimeout(() => {
        emit('completed')
      }, 800)
    }
  }
}
</script>
