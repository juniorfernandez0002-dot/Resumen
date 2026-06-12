<template>
  <div class="w-full bg-[#0f172a] border border-app-border rounded-xl overflow-hidden shadow-inner flex flex-col items-center justify-center min-h-[350px] py-4 font-mono select-none">
    
    <!-- Barra Superior -->
    <div v-if="gameMessage" class="mb-2 bg-app-surface px-6 py-2 rounded-full shadow-lg font-bold text-sm text-center border border-app-primary text-app-primary max-w-[90%]">
      {{ gameMessage }}
    </div>

    <!-- Pizarra de Circuitos (SVG y superposición HTML) -->
    <svg class="w-full h-[400px]" viewBox="0 0 750 400" preserveAspectRatio="xMidYMid meet" style="filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));">
      <defs>
        <!-- Filtro Resplandor para Cables Energizados -->
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- CABLES (Wires) -->
      <g v-for="(wire, index) in computedWires" :key="'wire-'+index">
        <path
          :d="getWirePath(wire)"
          fill="none"
          :stroke="wire.state ? '#22c55e' : '#475569'"
          :stroke-width="wire.state ? 4 : 2"
          :filter="wire.state ? 'url(#glow)' : ''"
          class="transition-all duration-300"
        />
        <!-- Animación de "corriente" fluyendo -->
        <circle v-if="wire.state" r="3" fill="#ffffff">
          <animateMotion :path="getWirePath(wire)" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>

      <!-- NODOS LÓGICOS -->
      <g v-for="node in computedNodes" :key="node.id" :transform="`translate(${node.x}, ${node.y})`">
        
        <!-- SWITCH (Interruptor) -->
        <g v-if="node.type === 'SWITCH'" class="cursor-pointer" @click="toggleSwitch(node.id)">
          <rect x="-30" y="-20" width="60" height="40" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2" />
          <rect x="-20" y="-10" width="40" height="20" rx="4" :fill="node.value ? '#22c55e' : '#ef4444'" class="transition-colors" />
          <circle :cx="node.value ? 10 : -10" cy="0" r="8" fill="white" class="transition-all duration-200" />
          <text x="0" y="-25" text-anchor="middle" fill="#94a3b8" font-size="12">{{ node.label }}</text>
          <text x="0" y="32" text-anchor="middle" font-weight="bold" :fill="node.value ? '#22c55e' : '#ef4444'" font-size="14">{{ node.value ? 'ON (1)' : 'OFF (0)' }}</text>
        </g>

        <!-- COMPUERTAS (AND, OR, NOT, HIDDEN) -->
        <g v-else-if="['AND', 'OR', 'NOT', 'HIDDEN'].includes(node.type)" 
           class="cursor-pointer" 
           @click="onGateClick(node.id)">
          
          <rect x="-40" y="-30" width="80" height="60" rx="8" 
                :fill="node.type === 'HIDDEN' ? '#3b82f6' : '#334155'" 
                :stroke="node.type === 'HIDDEN' ? '#60a5fa' : '#475569'" stroke-width="2" />
          
          <!-- Texto de Compuerta -->
          <text x="0" y="5" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="18">
            {{ node.type === 'HIDDEN' ? '???' : node.type }}
          </text>
          <text v-if="node.type === 'HIDDEN'" x="0" y="20" text-anchor="middle" fill="#bfdbfe" font-size="10">Haz clic</text>
        </g>

        <!-- FOCO (BULB) -->
        <g v-else-if="node.type === 'BULB'">
          <circle x="0" y="0" r="25" 
                  :fill="node.state ? '#fbbf24' : '#1e293b'" 
                  :stroke="node.state ? '#f59e0b' : '#334155'" 
                  stroke-width="3" 
                  :filter="node.state ? 'url(#glow)' : ''"
                  class="transition-colors duration-300" />
          <text x="0" y="6" text-anchor="middle" font-size="20">{{ node.state ? '💡' : '🌑' }}</text>
          <text x="0" y="-35" text-anchor="middle" font-weight="bold" :fill="node.state ? '#fbbf24' : '#64748b'" font-size="14">
            {{ node.label || 'OUT' }}
          </text>
        </g>

      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const props = defineProps({
  mode: { type: String, default: 'free' }, 
  initialNodes: { type: Array, required: true },
  initialWires: { type: Array, required: true },
  message: { type: String, default: '' },
  targetGoal: { type: Boolean, default: null } // Si es true, el juego se gana cuando el FOCO final es 1
})

const emit = defineEmits(['goal-reached', 'gate-guessed'])

const nodes = ref([])
const wires = ref([])
const gameMessage = ref(props.message)

const initCircuit = () => {
  nodes.value = JSON.parse(JSON.stringify(props.initialNodes))
  wires.value = JSON.parse(JSON.stringify(props.initialWires))
  gameMessage.value = props.message
}

onMounted(() => { initCircuit() })
watch(() => props.initialNodes, () => initCircuit(), { deep: true })
watch(() => props.message, (newMsg) => { gameMessage.value = newMsg })

// Simulación de Lógica Dinámica
// Calculamos recursivamente el estado de cada nodo y cable
const getNodeOutput = (nodeId, visited = new Set()) => {
  if (visited.has(nodeId)) return 0; // Evitar ciclos infinitos
  visited.add(nodeId);

  const node = nodes.value.find(n => n.id === nodeId);
  if (!node) return 0;

  if (node.type === 'SWITCH') {
    return node.value;
  }

  // Buscar cables de entrada hacia este nodo
  const inputWires = wires.value.filter(w => w.target === nodeId);
  const inputValues = inputWires.map(w => getNodeOutput(w.source, new Set(visited)));

  if (node.type === 'AND') {
    return inputValues.length > 0 ? inputValues.every(v => v === 1) ? 1 : 0 : 0;
  }
  if (node.type === 'OR') {
    return inputValues.some(v => v === 1) ? 1 : 0;
  }
  if (node.type === 'NOT') {
    return inputValues.length > 0 && inputValues[0] === 1 ? 0 : 1;
  }
  
  return 0; // HIDDEN o BULB no emiten salida evaluable de esta forma
}

const computedNodes = computed(() => {
  return nodes.value.map(n => {
    if (n.type === 'BULB') {
      const inputWires = wires.value.filter(w => w.target === n.id);
      const state = inputWires.some(w => getNodeOutput(w.source) === 1);
      return { ...n, state };
    }
    return n;
  })
})

const computedWires = computed(() => {
  return wires.value.map(w => {
    const state = getNodeOutput(w.source);
    return { ...w, state };
  })
})

const checkGoal = () => {
  if (props.targetGoal === null) return;
  const bulb = computedNodes.value.find(n => n.type === 'BULB');
  if (bulb && bulb.state) {
    gameMessage.value = "🎉 ¡EXCELENTE! ¡Completaste el circuito! 🎉";
    emit('goal-reached');
  }
}

const toggleSwitch = (nodeId) => {
  const node = nodes.value.find(n => n.id === nodeId);
  if (node && node.type === 'SWITCH') {
    node.value = node.value ? 0 : 1;
    checkGoal();
  }
}

// Para el juego de "adivinar la compuerta" (3.4)
const availableGates = ['AND', 'OR'];
const onGateClick = (nodeId) => {
  const node = nodes.value.find(n => n.id === nodeId);
  if (node && (node.type === 'HIDDEN' || availableGates.includes(node.type))) {
    // Alternar entre AND y OR
    node.type = node.type === 'AND' ? 'OR' : 'AND';
    gameMessage.value = `Compuerta cambiada a ${node.type}`;
    emit('gate-guessed', node.type);
    checkGoal();
  }
}

// Dibuja el cable estilo placa de circuito (ortogonal)
const getWirePath = (wire) => {
  const s = nodes.value.find(n => n.id === wire.source);
  const t = nodes.value.find(n => n.id === wire.target);
  if (!s || !t) return '';

  // Puntos de salida y entrada (derecha del origen, izquierda del destino)
  const x1 = s.type === 'SWITCH' ? s.x + 30 : s.x + 40;
  const y1 = s.y;
  const x2 = t.type === 'BULB' ? t.x - 25 : t.x - 40;
  const y2 = t.y;

  const midX = (x1 + x2) / 2;

  // Camino ortogonal
  return `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
}
</script>
