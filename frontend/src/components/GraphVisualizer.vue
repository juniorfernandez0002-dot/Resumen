<template>
  <div class="bg-[#0f172a] rounded-2xl border-2 border-[#334155] overflow-hidden shadow-lg select-none">
    
    <div v-if="title" class="bg-app-bg p-4 border-b border-[#334155]">
      <h3 class="text-xl font-bold text-white">{{ title }}</h3>
      <p v-if="subtitle" class="text-xs text-app-text-muted mt-1">{{ subtitle }}</p>
    </div>

    <div class="relative w-full overflow-hidden flex items-center justify-center bg-app-surface p-4" :style="{ height: height + 'px' }">
      <!-- SVG Canvas -->
      <svg class="w-full h-full" :viewBox="`0 0 ${width} ${height}`" preserveAspectRatio="xMidYMid meet">
        
        <!-- Definiciones (Flechas) -->
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
          </marker>
        </defs>

        <!-- Edges (Aristas) -->
        <g v-for="(edge, index) in processedEdges" :key="'e'+index">
          <line 
            :x1="edge.x1" 
            :y1="edge.y1" 
            :x2="edge.x2" 
            :y2="edge.y2" 
            stroke="#475569" 
            stroke-width="3"
            :marker-end="edge.directed ? 'url(#arrowhead)' : ''"
            class="transition-all duration-500"
          />
          <!-- Weight Label (Si existe) -->
          <g v-if="edge.weight">
            <rect 
              :x="edge.midX - 12" 
              :y="edge.midY - 12" 
              width="24" 
              height="24" 
              rx="4" 
              fill="#1e293b" 
              stroke="#334155" 
            />
            <text 
              :x="edge.midX" 
              :y="edge.midY" 
              fill="#38bdf8" 
              font-size="12" 
              font-weight="bold" 
              font-family="monospace" 
              text-anchor="middle" 
              alignment-baseline="middle"
              dy="1"
            >
              {{ edge.weight }}
            </text>
          </g>
        </g>

        <!-- Nodes (Vértices) -->
        <g v-for="node in nodes" :key="node.id" class="cursor-pointer group">
          <circle 
            :cx="node.x" 
            :cy="node.y" 
            r="18" 
            fill="#0f172a" 
            stroke="#38bdf8" 
            stroke-width="3" 
            class="group-hover:stroke-white transition-colors duration-300"
          />
          <text 
            :x="node.x" 
            :y="node.y" 
            fill="white" 
            font-size="14" 
            font-weight="bold" 
            text-anchor="middle" 
            alignment-baseline="middle"
            dy="1"
          >
            {{ node.label || node.id }}
          </text>
        </g>

      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  width: { type: Number, default: 400 },
  height: { type: Number, default: 300 },
  nodes: { 
    type: Array, 
    required: true // [{ id: 'A', x: 50, y: 50, label: 'A' }]
  },
  edges: { 
    type: Array, 
    required: true // [{ source: 'A', target: 'B', weight: '5', directed: false }]
  }
})

// Calcula las posiciones X e Y de cada arista conectando los nodos
const processedEdges = computed(() => {
  return props.edges.map(edge => {
    const sourceNode = props.nodes.find(n => n.id === edge.source)
    const targetNode = props.nodes.find(n => n.id === edge.target)
    
    if (!sourceNode || !targetNode) return null

    return {
      ...edge,
      x1: sourceNode.x,
      y1: sourceNode.y,
      x2: targetNode.x,
      y2: targetNode.y,
      midX: (sourceNode.x + targetNode.x) / 2,
      midY: (sourceNode.y + targetNode.y) / 2
    }
  }).filter(e => e !== null)
})
</script>
