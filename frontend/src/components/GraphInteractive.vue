<template>
  <div class="relative w-full bg-app-bg border border-app-border rounded-xl overflow-hidden shadow-inner flex flex-col items-center justify-center min-h-[350px]">
    
    <!-- Barra Superior de Instrucciones del Juego -->
    <div v-if="gameMessage" class="absolute top-4 left-1/2 -translate-x-1/2 bg-app-surface px-6 py-2 rounded-full shadow-md z-10 font-medium text-sm text-center border border-app-primary text-app-primary">
      {{ gameMessage }}
    </div>

    <!-- Canvas SVG para el Grafo -->
    <svg 
      class="w-full h-[400px] cursor-crosshair" 
      @mousemove="handleMouseMove" 
      @mouseup="handleMouseUp" 
      @mouseleave="handleMouseUp"
    >
      <defs>
        <!-- Filtro para sombra de nodos -->
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.1" />
        </filter>
        <!-- Marcador para grafos dirigidos (si los usamos después) -->
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="22" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
        </marker>
      </defs>

      <!-- Grupo de Aristas (Líneas) -->
      <g v-for="edge in edges" :key="edge.id">
        <!-- Lazo (Loop) -->
        <path v-if="edge.isLoop"
          :d="getLoopPath(edge)"
          fill="none"
          :stroke="getEdgeColor(edge)"
          :stroke-width="getEdgeWidth(edge)"
          class="transition-colors duration-300"
          :class="{'cursor-pointer hover:stroke-app-primary': mode === 'euler-trace' && !edge.traced}"
          @click="onEdgeClick(edge)"
        />
        
        <!-- Arista Paralela o Curva -->
        <path v-else-if="edge.offset"
          :d="getCurvePath(edge)"
          fill="none"
          :stroke="getEdgeColor(edge)"
          :stroke-width="getEdgeWidth(edge)"
          class="transition-colors duration-300"
          :class="{'cursor-pointer hover:stroke-app-primary': mode === 'euler-trace' && !edge.traced}"
          @click="onEdgeClick(edge)"
        />

        <!-- Arista Recta Normal -->
        <line v-else
          :x1="getNode(edge.source).x"
          :y1="getNode(edge.source).y"
          :x2="getNode(edge.target).x"
          :y2="getNode(edge.target).y"
          :stroke="getEdgeColor(edge)"
          :stroke-width="getEdgeWidth(edge)"
          class="transition-colors duration-300"
          :class="{'cursor-pointer hover:stroke-app-primary': mode === 'euler-trace' && !edge.traced}"
          @click="onEdgeClick(edge)"
        />
      </g>

      <!-- Grupo de Vértices (Nodos) -->
      <g v-for="node in nodes" :key="node.id" 
         class="cursor-grab active:cursor-grabbing"
         :class="{'cursor-pointer': mode === 'degree-count'}"
         @mousedown="handleMouseDown($event, node)"
         @click="onNodeClick(node)"
      >
        <circle 
          :cx="node.x" 
          :cy="node.y" 
          :r="nodeRadius" 
          :fill="getNodeColor(node)"
          stroke="#fff"
          stroke-width="3"
          filter="url(#shadow)"
          class="transition-colors duration-300"
        />
        <!-- Etiqueta del Nodo (Letra) -->
        <text 
          :x="node.x" 
          :y="node.y" 
          text-anchor="middle" 
          dy=".3em" 
          font-weight="bold" 
          fill="#ffffff"
          class="pointer-events-none select-none text-sm"
        >
          {{ node.label || node.id }}
        </text>
        
        <!-- Etiqueta Flotante para Grado (Si aplica) -->
        <text v-if="node.showDegree"
          :x="node.x" 
          :y="node.y - nodeRadius - 10" 
          text-anchor="middle" 
          font-weight="bold" 
          class="fill-app-primary pointer-events-none text-lg select-none animate-bounce"
        >
          Grado: {{ calculateDegree(node.id) }}
        </text>
      </g>
    </svg>

    <!-- Botón de Reinicio (Juegos) -->
    <button v-if="mode === 'euler-trace'" @click="resetGame" class="absolute bottom-4 right-4 bg-app-surface border border-app-border text-app-text-muted px-4 py-2 rounded-lg text-sm hover:bg-app-bg transition-colors">
      🔄 Reiniciar Camino
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const props = defineProps({
  mode: { type: String, default: 'view' }, // view, degree-count, isomorphism-drag, euler-trace
  initialNodes: { type: Array, required: true },
  initialEdges: { type: Array, required: true },
  message: { type: String, default: '' }
})

const emit = defineEmits(['degree-clicked', 'edge-traced', 'game-completed'])

// Estado reactivo
const nodes = ref([])
const edges = ref([])
const gameMessage = ref(props.message)
const nodeRadius = 22

// Drag and Drop State
const draggedNode = ref(null)
const offset = ref({ x: 0, y: 0 })

// Euler Trace State
const currentPathNode = ref(null) // Último nodo visitado en el camino

// Inicializar
const initGraph = () => {
  // Clonar profundo para no mutar props directamente
  nodes.value = JSON.parse(JSON.stringify(props.initialNodes))
  edges.value = JSON.parse(JSON.stringify(props.initialEdges))
  gameMessage.value = props.message
  currentPathNode.value = null
}

onMounted(() => { initGraph() })

// Sincronizar si cambian las props
watch(() => props.initialNodes, () => initGraph(), { deep: true })
watch(() => props.message, (newMsg) => { gameMessage.value = newMsg })

// Helpers
const getNode = (id) => nodes.value.find(n => n.id === id) || { x: 0, y: 0 }

const calculateDegree = (nodeId) => {
  let deg = 0;
  edges.value.forEach(e => {
    if (e.source === nodeId && e.target === nodeId) deg += 2; // Lazos suman 2
    else if (e.source === nodeId || e.target === nodeId) deg += 1;
  })
  return deg;
}

// Lógica de Mouse (Arrastrar Nodos)
const handleMouseDown = (e, node) => {
  // Solo se puede arrastrar en modo isomorfismo o view
  if (props.mode !== 'isomorphism-drag' && props.mode !== 'view') return;
  
  draggedNode.value = node;
  // Para coordenadas relativas al SVG podríamos usar CTM, pero para simplicidad usamos offset
  // ya que los eventos son relativos a la ventana. El aproximado suele bastar para gráficas simples.
  const svgRect = e.target.closest('svg').getBoundingClientRect();
  offset.value = {
    x: e.clientX - svgRect.left - node.x,
    y: e.clientY - svgRect.top - node.y
  }
}

const handleMouseMove = (e) => {
  if (!draggedNode.value) return;
  const svgRect = e.target.closest('svg').getBoundingClientRect();
  draggedNode.value.x = e.clientX - svgRect.left - offset.value.x;
  draggedNode.value.y = e.clientY - svgRect.top - offset.value.y;
}

const handleMouseUp = () => {
  draggedNode.value = null;
}

// Interacción Clic en Nodos
const onNodeClick = (node) => {
  if (props.mode === 'degree-count') {
    node.showDegree = !node.showDegree;
    emit('degree-clicked', node, calculateDegree(node.id));
  }
}

// Interacción Clic en Aristas (Camino Euleriano)
const onEdgeClick = (edge) => {
  if (props.mode !== 'euler-trace' || edge.traced) return;

  // Si es la primera arista, podemos empezar en cualquier lugar
  if (!currentPathNode.value) {
    edge.traced = true;
    currentPathNode.value = edge.target; // asume dirección, aunque el grafo es no dirigido, para el jugador empezamos en 'source' y vamos a 'target'
    // Como es no dirigido, el jugador hizo clic en la arista. 
    // Para simplificar, si es el primer clic, marcamos como origen el source.
    gameMessage.value = "¡Sigue el camino verde sin saltar!";
    checkEulerWin();
    return;
  }

  // Validar que la arista seleccionada esté conectada al nodo actual!
  if (edge.source === currentPathNode.value) {
    edge.traced = true;
    currentPathNode.value = edge.target;
    checkEulerWin();
  } else if (edge.target === currentPathNode.value) {
    edge.traced = true;
    currentPathNode.value = edge.source;
    checkEulerWin();
  } else {
    // Intento inválido (arista desconectada del camino actual)
    gameMessage.value = "❌ Tienes que continuar desde donde te quedaste.";
    setTimeout(() => {
      gameMessage.value = "¡Sigue el camino verde sin saltar!";
    }, 2000);
  }
}

const checkEulerWin = () => {
  const allTraced = edges.value.every(e => e.traced);
  if (allTraced) {
    gameMessage.value = "🎉 ¡LOGRASTE EL CAMINO EULERIANO! 🎉";
    emit('game-completed');
  }
}

const resetGame = () => {
  initGraph();
}

// Dibujo de Caminos Curvos (Aristas Paralelas)
const getCurvePath = (edge) => {
  const s = getNode(edge.source)
  const t = getNode(edge.target)
  const dx = t.x - s.x;
  const dy = t.y - s.y;
  const cx = (s.x + t.x) / 2 - dy * edge.offset;
  const cy = (s.y + t.y) / 2 + dx * edge.offset;
  return `M ${s.x} ${s.y} Q ${cx} ${cy} ${t.x} ${t.y}`
}

// Dibujo de Lazos (Loops)
const getLoopPath = (edge) => {
  const s = getNode(edge.source)
  // Dibujar un círculo curvo que sale y entra al mismo nodo hacia arriba
  return `M ${s.x - 10} ${s.y - 15} C ${s.x - 50} ${s.y - 80}, ${s.x + 50} ${s.y - 80}, ${s.x + 10} ${s.y - 15}`
}

// Estilos Dinámicos
const getNodeColor = (node) => {
  if (props.mode === 'degree-count' && node.showDegree) return '#10b981'; // Verde seleccionado
  if (draggedNode.value && draggedNode.value.id === node.id) return '#f59e0b'; // Naranja arrastrando
  if (props.mode === 'euler-trace' && currentPathNode.value === node.id) return '#10b981'; // Posición actual de Euler
  return '#3b82f6'; // Azul app-primary
}

const getEdgeColor = (edge) => {
  if (edge.traced) return '#10b981'; // Verde trazado
  if (props.mode === 'euler-trace') return '#9ca3af'; // Gris oscuro para trazar
  return '#cbd5e1'; // Gris clarito normal
}

const getEdgeWidth = (edge) => {
  return edge.traced ? 6 : 4;
}

</script>
