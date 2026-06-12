<template>
  <div class="w-full bg-[#0f172a] border border-app-border rounded-xl overflow-hidden shadow-inner flex flex-col items-center justify-center min-h-[350px] py-4 font-mono select-none">
    
    <div v-if="gameMessage" class="mb-2 bg-app-surface px-6 py-2 rounded-full shadow-lg font-bold text-sm text-center border border-app-primary text-app-primary max-w-[90%]">
      {{ gameMessage }}
    </div>

    <svg class="w-full h-[400px]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="glowRelation" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <!-- Flecha para indicar dirección -->
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
        </marker>
        <marker id="arrow-active" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
        </marker>
      </defs>

      <!-- Títulos de Columnas -->
      <text v-for="(col, i) in columns" :key="'title-'+col.id" 
            :x="getColumnX(i)" y="40" 
            text-anchor="middle" font-weight="bold" fill="#94a3b8" font-size="16">
        Conjunto {{ col.title }}
      </text>

      <!-- Cajas de Conjuntos (Fondos) -->
      <rect v-for="(col, i) in columns" :key="'bg-'+col.id"
            :x="getColumnX(i) - 60" y="60" width="120" height="300" rx="20"
            fill="#1e293b" stroke="#334155" stroke-width="2" />

      <!-- CONEXIONES (Aristas) -->
      <g v-for="(conn, idx) in connections" :key="'conn-'+idx">
        <path 
          :d="getConnectionPath(conn)"
          fill="none"
          :stroke="conn.active ? '#10b981' : '#334155'"
          :stroke-width="conn.active ? 4 : 2"
          :marker-end="conn.active ? 'url(#arrow-active)' : 'url(#arrow)'"
          :filter="conn.active ? 'url(#glowRelation)' : ''"
          class="transition-all duration-300 cursor-pointer"
          @click="activatePath(conn)"
        />
      </g>

      <!-- Conexiones Directas (Composición Mágica) -->
      <g v-if="compositionVisible" v-for="(comp, idx) in compositions" :key="'comp-'+idx">
        <path 
          :d="getCompositionPath(comp)"
          fill="none"
          stroke="#f59e0b"
          stroke-width="3" stroke-dasharray="8,4"
          marker-end="url(#arrow)"
          filter="url(#glowRelation)"
          class="transition-all duration-500 animate-pulse"
        />
        <text :x="(getItemCoords(comp.source).x + getItemCoords(comp.target).x) / 2" 
              :y="(getItemCoords(comp.source).y + getItemCoords(comp.target).y) / 2 - 20" 
              fill="#f59e0b" font-size="12" text-anchor="middle" font-weight="bold">
          Composición Directa
        </text>
      </g>

      <!-- ELEMENTOS DE LOS CONJUNTOS -->
      <g v-for="(col, i) in columns" :key="'col-'+col.id">
        <g v-for="(item, j) in col.items" :key="'item-'+item.id"
           class="cursor-pointer"
           @click="onItemClick(item)">
          <!-- Círculo del elemento -->
          <circle 
            :cx="getColumnX(i)" 
            :cy="getItemY(j, col.items.length)" 
            r="20" 
            :fill="item.active ? '#3b82f6' : '#0f172a'"
            :stroke="item.active ? '#60a5fa' : '#475569'" 
            stroke-width="3"
            class="transition-colors duration-300"
          />
          <!-- Etiqueta del elemento -->
          <text 
            :x="getColumnX(i)" 
            :y="getItemY(j, col.items.length) + 5" 
            text-anchor="middle" 
            font-weight="bold" 
            fill="#ffffff" 
            font-size="14">
            {{ item.label }}
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  mode: { type: String, default: 'view' }, // 'view', 'compose'
  message: { type: String, default: '' },
  initialColumns: { type: Array, required: true },
  initialConnections: { type: Array, required: true },
  initialCompositions: { type: Array, default: () => [] } // Relaciones directas de A a C
})

const emit = defineEmits(['goal-reached', 'item-clicked'])

const columns = ref([])
const connections = ref([])
const compositions = ref([])
const compositionVisible = ref(false)
const gameMessage = ref(props.message)

const initGraph = () => {
  columns.value = JSON.parse(JSON.stringify(props.initialColumns)).map(col => {
    col.items = col.items.map(item => ({ ...item, active: false }))
    return col;
  })
  connections.value = JSON.parse(JSON.stringify(props.initialConnections)).map(c => ({ ...c, active: false }))
  compositions.value = JSON.parse(JSON.stringify(props.initialCompositions))
  gameMessage.value = props.message
  compositionVisible.value = false
}

onMounted(() => { initGraph() })
watch(() => props.initialColumns, () => initGraph(), { deep: true })
watch(() => props.message, (newMsg) => { gameMessage.value = newMsg })

// Layout helpers
const getColumnX = (colIndex) => {
  const total = columns.value.length;
  const spacing = 800 / (total + 1);
  return spacing * (colIndex + 1);
}

const getItemY = (itemIndex, totalItems) => {
  const startY = 100;
  const spacing = 240 / Math.max(1, totalItems - 1);
  return totalItems === 1 ? 210 : startY + (itemIndex * spacing);
}

const getItemCoords = (itemId) => {
  for (let i = 0; i < columns.value.length; i++) {
    for (let j = 0; j < columns.value[i].items.length; j++) {
      if (columns.value[i].items[j].id === itemId) {
        return { x: getColumnX(i), y: getItemY(j, columns.value[i].items.length) }
      }
    }
  }
  return { x: 0, y: 0 }
}

const getColIndexByItemId = (itemId) => {
  for (let i = 0; i < columns.value.length; i++) {
    if (columns.value[i].items.some(it => it.id === itemId)) return i;
  }
  return -1;
}

// Interacción
const onItemClick = (item) => {
  // Desactivar todos los ítems y conexiones primero
  columns.value.forEach(col => col.items.forEach(it => it.active = false))
  connections.value.forEach(c => c.active = false)
  compositionVisible.value = false

  // Activar el item clickeado
  item.active = true;

  // Activar conexiones salientes de este item
  let hasPath = false;
  connections.value.forEach(conn => {
    if (conn.source === item.id) {
      conn.active = true;
      hasPath = true;
      // Activar también el destino
      const targetColIdx = getColIndexByItemId(conn.target);
      if (targetColIdx !== -1) {
        const tItem = columns.value[targetColIdx].items.find(it => it.id === conn.target);
        if (tItem) tItem.active = true;
      }

      // Si estamos en modo "compose", seguir la ruta si el destino tiene otra salida
      if (props.mode === 'compose') {
        const nextConn = connections.value.find(c => c.source === conn.target);
        if (nextConn) {
          nextConn.active = true;
          const finalItemColIdx = getColIndexByItemId(nextConn.target);
          if (finalItemColIdx !== -1) {
            const finalItem = columns.value[finalItemColIdx].items.find(it => it.id === nextConn.target);
            if (finalItem) finalItem.active = true;
          }
          // Mostrar la composición (vuelo directo)
          setTimeout(() => {
            compositionVisible.value = true;
            gameMessage.value = "¡Mira la línea punteada! Esa es la COMPOSICIÓN (Vuelo directo de A hacia C).";
            emit('goal-reached');
          }, 800)
        }
      }
    }
  })

  if (props.mode === 'view' && hasPath) {
    gameMessage.value = `¡El Dominio (Origen) es de donde sale la flecha, y el Rango (Destino) a donde llega!`;
  }
}

const activatePath = (conn) => {
  // Si hacen clic en la flecha, activar todo su path
  onItemClick({ id: conn.source });
}

// Dibujar conexiones curvas
const getConnectionPath = (conn) => {
  const p1 = getItemCoords(conn.source);
  const p2 = getItemCoords(conn.target);
  // Pequeño offset para que no nazca exactamente del centro del círculo
  const startX = p1.x + 25;
  const endX = p2.x - 25;
  const midX = (startX + endX) / 2;
  return `M ${startX} ${p1.y} C ${midX} ${p1.y}, ${midX} ${p2.y}, ${endX} ${p2.y}`;
}

const getCompositionPath = (comp) => {
  const p1 = getItemCoords(comp.source);
  const p2 = getItemCoords(comp.target);
  // Arco grande por arriba
  const startX = p1.x + 10;
  const endX = p2.x - 10;
  const midX = (startX + endX) / 2;
  const midY = Math.min(p1.y, p2.y) - 150; 
  return `M ${startX} ${p1.y - 15} Q ${midX} ${midY} ${endX} ${p2.y - 15}`;
}
</script>
