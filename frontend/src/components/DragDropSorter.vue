<template>
  <div class="relative w-full bg-[#0f172a] border border-app-border rounded-xl overflow-hidden shadow-inner flex flex-col p-6 min-h-[400px] select-none">
    
    <div v-if="gameMessage" class="absolute top-4 left-1/2 -translate-x-1/2 bg-app-surface px-6 py-2 rounded-full shadow-lg z-10 font-bold text-sm text-center border border-app-primary text-app-primary">
      {{ gameMessage }}
    </div>

    <div class="mt-12 flex-1 flex flex-col gap-8">
      
      <!-- ZONA DE ORIGEN (POOL) -->
      <div class="bg-[#1e293b] p-4 rounded-xl border-2 border-dashed border-[#334155] min-h-[100px] flex flex-wrap gap-4 items-center justify-center transition-colors"
           @dragover.prevent
           @drop="onDrop($event, 'pool')">
        <div v-if="poolItems.length === 0" class="text-app-text-muted text-sm w-full text-center">
          ¡Piscina vacía! Buen trabajo.
        </div>
        
        <div v-for="item in poolItems" :key="item.id"
             draggable="true"
             @dragstart="onDragStart($event, item)"
             class="cursor-grab active:cursor-grabbing bg-app-surface border-2 border-app-primary px-4 py-2 rounded-lg font-bold text-app-text shadow-md hover:-translate-y-1 transition-transform">
          {{ item.label }}
        </div>
      </div>

      <!-- ZONA DE DESTINO (CAJAS O ÁRBOL) -->
      <div :class="['grid gap-4 flex-1', mode === 'boxes' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 max-w-sm mx-auto w-full']">
        
        <div v-for="box in boxesState" :key="box.id"
             class="bg-[#0f172a] p-4 rounded-xl border-2 border-[#475569] flex flex-col items-center min-h-[120px] transition-colors duration-300"
             :class="{'border-app-primary bg-[#1e293b]': dragHoverBox === box.id}"
             @dragover.prevent="dragHoverBox = box.id"
             @dragleave="dragHoverBox = null"
             @drop="onDrop($event, box.id)">
          
          <div class="text-sm font-bold text-app-text-muted mb-3 border-b border-[#334155] pb-1 w-full text-center">
            {{ box.title }}
          </div>
          
          <div class="flex flex-wrap gap-2 justify-center w-full">
            <div v-for="item in box.items" :key="item.id"
                 draggable="true"
                 @dragstart="onDragStart($event, item, box.id)"
                 class="cursor-grab active:cursor-grabbing bg-app-primary text-white px-3 py-1 rounded-md font-medium text-sm shadow">
              {{ item.label }}
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'

const props = defineProps({
  mode: { type: String, default: 'boxes' }, // 'boxes' (Equivalencia) o 'tree' (Orden Parcial)
  message: { type: String, default: '' },
  items: { type: Array, required: true },
  boxes: { type: Array, required: true }
})

const emit = defineEmits(['goal-reached'])

const poolItems = ref([])
const boxesState = ref([])
const gameMessage = ref(props.message)
const dragHoverBox = ref(null)

const initGame = () => {
  poolItems.value = props.items.map(i => ({...i}))
  boxesState.value = props.boxes.map(b => ({...b, items: []}))
  gameMessage.value = props.message
}

onMounted(() => { initGame() })
watch(() => props.items, () => initGame(), { deep: true })

let draggedItem = null;
let sourceBoxId = null;

const onDragStart = (e, item, boxId = 'pool') => {
  draggedItem = item;
  sourceBoxId = boxId;
  e.dataTransfer.effectAllowed = 'move';
}

const onDrop = (e, targetBoxId) => {
  dragHoverBox.value = null;
  if (!draggedItem) return;

  // Si lo suelta en la misma caja, no hacer nada
  if (sourceBoxId === targetBoxId) return;

  // Validar si la caja acepta el item
  if (targetBoxId !== 'pool') {
    const targetBoxConfig = props.boxes.find(b => b.id === targetBoxId);
    if (targetBoxConfig && typeof targetBoxConfig.accepts === 'function') {
      const isValid = targetBoxConfig.accepts(draggedItem);
      if (!isValid) {
        gameMessage.value = "❌ ¡Esa no es su clase de equivalencia/orden!";
        setTimeout(() => gameMessage.value = "Arrastra los elementos a su caja correcta", 2000);
        return; // Rebota
      }
    }
  }

  // Mover el item
  // 1. Quitar del origen
  if (sourceBoxId === 'pool') {
    poolItems.value = poolItems.value.filter(i => i.id !== draggedItem.id);
  } else {
    const srcBox = boxesState.value.find(b => b.id === sourceBoxId);
    srcBox.items = srcBox.items.filter(i => i.id !== draggedItem.id);
  }

  // 2. Agregar al destino
  if (targetBoxId === 'pool') {
    poolItems.value.push(draggedItem);
  } else {
    const tgtBox = boxesState.value.find(b => b.id === targetBoxId);
    tgtBox.items.push(draggedItem);
  }

  draggedItem = null;
  checkWin();
}

const checkWin = () => {
  if (poolItems.value.length === 0) {
    // Verificar si cada caja tiene lo que debe tener
    // En nuestro diseño simple, la función `accepts` ya filtra los errores.
    // Por lo tanto, si pool está vacío y no hubo errores de drop, ¡Ganó!
    gameMessage.value = "🎉 ¡EXCELENTE! Has ordenado el conjunto perfectamente.";
    emit('goal-reached');
  }
}
</script>
