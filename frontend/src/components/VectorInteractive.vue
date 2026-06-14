<template>
  <div class="vector-interactive-container bg-app-bg border border-[#334155] rounded-xl overflow-hidden shadow-lg select-none relative"
       @mousemove="onMouseMove"
       @mouseup="onMouseUp"
       @mouseleave="onMouseUp"
       @touchmove.prevent="onTouchMove"
       @touchend="onMouseUp">
    
    <!-- Info Panel -->
    <div class="absolute top-4 left-4 right-4 bg-[#0f172a]/90 backdrop-blur border border-[#334155] p-4 rounded-lg z-10 pointer-events-none flex flex-col md:flex-row justify-between gap-4">
      <div class="text-white text-sm font-medium">
        <div class="flex items-center gap-2 mb-1">
          <span class="w-3 h-3 rounded-full bg-blue-500"></span>
          <span>Vector <span class="font-bold text-blue-400">\vec{u}</span>: 
            ({{ u.x.toFixed(1) }}, {{ u.y.toFixed(1) }})
          </span>
          <span class="text-app-text-muted ml-2">Magnitud: {{ magnitude(u).toFixed(2) }}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-green-500"></span>
          <span>Vector <span class="font-bold text-green-400">\vec{v}</span>: 
            ({{ v.x.toFixed(1) }}, {{ v.y.toFixed(1) }})
          </span>
          <span class="text-app-text-muted ml-2">Magnitud: {{ magnitude(v).toFixed(2) }}</span>
        </div>
      </div>

      <div class="text-app-primary text-sm font-bold bg-[#1e293b] px-4 py-2 rounded-md border border-[#334155] flex flex-col items-center justify-center min-w-[150px]">
        <span class="text-xs uppercase tracking-wider text-app-text-muted mb-1">{{ modeTitle }}</span>
        <span class="text-lg">{{ modeResult }}</span>
      </div>
    </div>

    <!-- Controles extra para modo paramétrico -->
    <div v-if="mode === 'parametric'" class="absolute bottom-4 left-4 right-4 bg-[#0f172a]/90 backdrop-blur border border-[#334155] p-4 rounded-lg z-10">
      <div class="flex flex-col gap-2">
        <label class="text-white text-sm font-bold flex justify-between">
          <span>Parámetro de tiempo 't'</span>
          <span class="text-app-primary">{{ tParam.toFixed(1) }}s</span>
        </label>
        <input type="range" min="-3" max="3" step="0.1" v-model.number="tParam" class="w-full accent-app-primary pointer-events-auto">
      </div>
    </div>

    <!-- Mensaje UI superior -->
    <div v-if="message" class="absolute top-28 left-4 right-4 bg-app-primary/10 border border-app-primary/30 text-app-primary-light px-4 py-2 rounded text-center text-sm font-medium z-10 pointer-events-none">
      {{ message }}
    </div>

    <!-- Lienzo SVG -->
    <svg :width="width" :height="height" class="w-full h-auto cursor-crosshair" viewBox="-10 -10 20 20" style="overflow: visible;">
      <defs>
        <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
        </marker>
        <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
        </marker>
        <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
        </marker>
        <marker id="arrow-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
        </marker>
      </defs>

      <!-- Grilla -->
      <g class="grid-lines">
        <line v-for="i in 21" :key="'v'+i" :x1="(i-11)" y1="-10" :x2="(i-11)" y2="10" stroke="#334155" stroke-width="0.05" />
        <line v-for="i in 21" :key="'h'+i" x1="-10" :y1="(i-11)" x2="10" :y2="(i-11)" stroke="#334155" stroke-width="0.05" />
      </g>

      <!-- Ejes X e Y -->
      <line x1="-10" y1="0" x2="10" y2="0" stroke="#64748b" stroke-width="0.1" />
      <line x1="0" y1="-10" x2="0" y2="10" stroke="#64748b" stroke-width="0.1" />

      <!-- Modo: SUMA (Paralelogramo) -->
      <g v-if="mode === 'sum'" class="sum-mode">
        <!-- Proyecciones -->
        <line :x1="u.x" :y1="-u.y" :x2="u.x + v.x" :y2="-(u.y + v.y)" stroke="#64748b" stroke-width="0.08" stroke-dasharray="0.2,0.2" />
        <line :x1="v.x" :y1="-v.y" :x2="u.x + v.x" :y2="-(u.y + v.y)" stroke="#64748b" stroke-width="0.08" stroke-dasharray="0.2,0.2" />
        <!-- Resultante -->
        <line x1="0" y1="0" :x2="u.x + v.x" :y2="-(u.y + v.y)" stroke="#ef4444" stroke-width="0.2" marker-end="url(#arrow-red)" />
      </g>

      <!-- Modo: PROYECCION o DOT -->
      <g v-if="mode === 'projection' || mode === 'dot'" class="proj-mode">
        <!-- Línea infinita de v -->
        <line :x1="-v.x * 10" :y1="v.y * 10" :x2="v.x * 10" :y2="-v.y * 10" stroke="#22c55e" stroke-width="0.02" opacity="0.3" />
        <!-- Línea ortogonal desde u hasta v -->
        <line :x1="u.x" :y1="-u.y" :x2="projUonV.x" :y2="-projUonV.y" stroke="#ef4444" stroke-width="0.08" stroke-dasharray="0.2,0.2" />
        <!-- Sombra -->
        <line x1="0" y1="0" :x2="projUonV.x" :y2="-projUonV.y" stroke="#a855f7" stroke-width="0.25" marker-end="url(#arrow-purple)" />
      </g>

      <!-- Modo: PARAMÉTRICO -->
      <g v-if="mode === 'parametric'" class="param-mode">
        <line :x1="u.x - v.x * 10" :y1="-(u.y - v.y * 10)" :x2="u.x + v.x * 10" :y2="-(u.y + v.y * 10)" stroke="#64748b" stroke-width="0.05" opacity="0.5" />
        <line :x1="u.x" :y1="-u.y" :x2="u.x + v.x * tParam" :y2="-(u.y + v.y * tParam)" stroke="#a855f7" stroke-width="0.2" marker-end="url(#arrow-purple)" />
        <line x1="0" y1="0" :x2="u.x + v.x * tParam" :y2="-(u.y + v.y * tParam)" stroke="#ef4444" stroke-width="0.15" marker-end="url(#arrow-red)" stroke-dasharray="0.3,0.3" />
        <circle :cx="u.x + v.x * tParam" :cy="-(u.y + v.y * tParam)" r="0.3" fill="#ef4444" />
      </g>

      <!-- Vector V -->
      <line v-if="mode !== 'parametric'" x1="0" y1="0" :x2="v.x" :y2="-v.y" stroke="#22c55e" stroke-width="0.15" marker-end="url(#arrow-green)" />
      <line v-if="mode === 'parametric'" :x1="u.x" :y1="-u.y" :x2="u.x + v.x" :y2="-(u.y + v.y)" stroke="#22c55e" stroke-width="0.1" marker-end="url(#arrow-green)" opacity="0.4" />

      <!-- Vector U -->
      <line x1="0" y1="0" :x2="u.x" :y2="-u.y" stroke="#3b82f6" stroke-width="0.15" marker-end="url(#arrow-blue)" />

      <!-- Drag Handles -->
      <circle :cx="u.x" :cy="-u.y" r="0.6" fill="transparent" stroke="#3b82f6" stroke-width="0.1" 
              class="cursor-grab hover:fill-[#3b82f6]/30 transition-colors pointer-events-auto"
              @mousedown="startDrag('u', $event)" @touchstart.prevent="startDrag('u', $event)" />
      
      <circle v-if="mode !== 'parametric'" :cx="v.x" :cy="-v.y" r="0.6" fill="transparent" stroke="#22c55e" stroke-width="0.1" 
              class="cursor-grab hover:fill-[#22c55e]/30 transition-colors pointer-events-auto"
              @mousedown="startDrag('v', $event)" @touchstart.prevent="startDrag('v', $event)" />
              
      <circle v-if="mode === 'parametric'" :cx="u.x + v.x" :cy="-(u.y + v.y)" r="0.6" fill="transparent" stroke="#22c55e" stroke-width="0.1" 
              class="cursor-grab hover:fill-[#22c55e]/30 transition-colors pointer-events-auto"
              @mousedown="startDrag('v-param', $event)" @touchstart.prevent="startDrag('v-param', $event)" />

      <!-- Ángulo Arc -->
      <path v-if="mode === 'dot'" :d="angleArcPath" fill="none" stroke="#fcd34d" stroke-width="0.1" />
    </svg>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  width: { type: Number, default: 800 },
  height: { type: Number, default: 500 },
  mode: { type: String, default: 'sum', validator: (v) => ['sum', 'dot', 'projection', 'parametric'].includes(v) },
  message: { type: String, default: '' },
  initialU: { type: Object, default: () => ({ x: 3, y: 4 }) },
  initialV: { type: Object, default: () => ({ x: 6, y: 0 }) },
})

const emit = defineEmits(['update'])

const u = ref({ x: props.initialU.x, y: props.initialU.y })
const v = ref({ x: props.initialV.x, y: props.initialV.y })
const tParam = ref(1.0)

const minX = -10, maxX = 10, minY = -10, maxY = 10
const activeDrag = ref(null)

const magnitude = (vec) => Math.sqrt(vec.x * vec.x + vec.y * vec.y)
const dotProduct = computed(() => u.value.x * v.value.x + u.value.y * v.value.y)

const projUonV = computed(() => {
  const vMagSq = v.value.x * v.value.x + v.value.y * v.value.y
  if (vMagSq === 0) return { x: 0, y: 0 }
  const scalar = dotProduct.value / vMagSq
  return { x: v.value.x * scalar, y: v.value.y * scalar }
})

const angleBetween = computed(() => {
  const magU = magnitude(u.value)
  const magV = magnitude(v.value)
  if (magU === 0 || magV === 0) return 0
  let cosTheta = dotProduct.value / (magU * magV)
  cosTheta = Math.max(-1, Math.min(1, cosTheta))
  return Math.acos(cosTheta) * (180 / Math.PI)
})

const angleArcPath = computed(() => {
  const magU = magnitude(u.value)
  const magV = magnitude(v.value)
  if (magU === 0 || magV === 0) return ''
  
  const r = 1.5
  const uNorm = { x: u.value.x / magU, y: u.value.y / magU }
  const vNorm = { x: v.value.x / magV, y: v.value.y / magV }
  
  const startX = uNorm.x * r
  const startY = -uNorm.y * r
  const endX = vNorm.x * r
  const endY = -vNorm.y * r
  
  const crossZ = u.value.x * v.value.y - u.value.y * v.value.x
  const largeArcFlag = angleBetween.value > 180 ? 1 : 0
  const sweepFlag = crossZ < 0 ? 1 : 0 // Ajustado para correcta dirección de arco

  return `M ${startX} ${startY} A ${r} ${r} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`
})

const modeTitle = computed(() => {
  switch (props.mode) {
    case 'sum': return 'Suma u + v'
    case 'dot': return 'Producto Punto (Escalar)'
    case 'projection': return 'Proyección Ortogonal'
    case 'parametric': return 'Posición r(t)'
    default: return ''
  }
})

const modeResult = computed(() => {
  switch (props.mode) {
    case 'sum': return `(${(u.value.x + v.value.x).toFixed(1)}, ${(u.value.y + v.value.y).toFixed(1)})`
    case 'dot': return `${dotProduct.value.toFixed(2)} (Ángulo: ${angleBetween.value.toFixed(1)}°)`
    case 'projection': return `(${(projUonV.value.x).toFixed(1)}, ${(projUonV.value.y).toFixed(1)})`
    case 'parametric': return `(${(u.value.x + v.value.x * tParam.value).toFixed(1)}, ${(u.value.y + v.value.y * tParam.value).toFixed(1)})`
    default: return ''
  }
})

const getSVGCoordinates = (event) => {
  const svg = event.target.closest('svg')
  if (!svg) return null
  
  const pt = svg.createSVGPoint()
  
  if (event.touches) {
    pt.x = event.touches[0].clientX
    pt.y = event.touches[0].clientY
  } else {
    pt.x = event.clientX
    pt.y = event.clientY
  }

  const svgP = pt.matrixTransform(svg.getScreenCTM().inverse())
  return {
    x: Math.max(minX, Math.min(maxX, svgP.x)),
    y: Math.max(minY, Math.min(maxY, -svgP.y))
  }
}

const startDrag = (nodeId, event) => {
  activeDrag.value = nodeId
  event.target.classList.add('cursor-grabbing')
  event.target.classList.remove('cursor-grab')
}

const onMouseMove = (event) => {
  if (!activeDrag.value) return
  
  const coords = getSVGCoordinates(event)
  if (!coords) return

  if (activeDrag.value === 'u') {
    u.value = { x: coords.x, y: coords.y }
  } else if (activeDrag.value === 'v') {
    v.value = { x: coords.x, y: coords.y }
  } else if (activeDrag.value === 'v-param') {
    v.value = { x: coords.x - u.value.x, y: coords.y - u.value.y }
  }

  notifyUpdate()
}

const onTouchMove = (event) => {
  onMouseMove(event)
}

const onMouseUp = () => {
  activeDrag.value = null
  const elements = document.querySelectorAll('.cursor-grabbing')
  elements.forEach(e => {
    e.classList.remove('cursor-grabbing')
    e.classList.add('cursor-grab')
  })
}

const notifyUpdate = () => {
  emit('update', {
    u: u.value,
    v: v.value,
    dotProduct: dotProduct.value,
    proj: projUonV.value,
    angle: angleBetween.value,
    t: tParam.value
  })
}

watch(tParam, () => notifyUpdate())
setTimeout(() => notifyUpdate(), 100)
</script>
