<template>
  <div class="vector-interactive-container bg-[#050B14] border-2 border-[#1E293B] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] select-none relative w-full aspect-video"
       @mousemove="onMouseMove"
       @mouseup="onMouseUp"
       @mouseleave="onMouseUp"
       @touchmove.prevent="onTouchMove"
       @touchend="onMouseUp">
    
    <!-- Background Gradient (Radar vibe) -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a]/40 via-[#050B14]/80 to-[#050B14] pointer-events-none"></div>

    <!-- Info Panel -->
    <div class="absolute top-4 left-4 right-4 bg-[#0B1221]/80 backdrop-blur-md border border-[#334155]/50 p-4 rounded-xl z-10 pointer-events-none flex flex-col md:flex-row justify-between gap-4 shadow-xl">
      <div class="text-white text-sm font-medium flex flex-col justify-center">
        <div class="flex items-center gap-3 mb-2">
          <span class="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
          <span class="font-mono text-blue-100">
            Vector <span class="font-bold text-blue-400">u</span>: 
            <span class="text-blue-300">[{{ u.x.toFixed(1) }}, {{ u.y.toFixed(1) }}]</span>
          </span>
          <span class="text-blue-500/50">|</span>
          <span class="text-blue-200">Mag: {{ magnitude(u).toFixed(2) }}</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
          <span class="font-mono text-green-100">
            Vector <span class="font-bold text-green-400">v</span>: 
            <span class="text-green-300">[{{ v.x.toFixed(1) }}, {{ v.y.toFixed(1) }}]</span>
          </span>
          <span class="text-green-500/50">|</span>
          <span class="text-green-200">Mag: {{ magnitude(v).toFixed(2) }}</span>
        </div>
      </div>

      <div class="bg-[#050B14] px-6 py-2 rounded-lg border border-[#1E293B] flex flex-col items-center justify-center min-w-[180px] shadow-inner relative overflow-hidden group">
        <div class="absolute inset-0 bg-app-primary/5 group-hover:bg-app-primary/10 transition-colors"></div>
        <span class="text-xs uppercase tracking-widest text-app-text-muted mb-1 font-bold">{{ modeTitle }}</span>
        <span class="text-xl font-black text-app-primary font-mono drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">{{ modeResult }}</span>
      </div>
    </div>

    <!-- Controles extra para modo paramétrico -->
    <div v-if="mode === 'parametric'" class="absolute bottom-4 left-4 right-4 bg-[#0B1221]/80 backdrop-blur-md border border-[#334155]/50 p-4 rounded-xl z-10 shadow-xl">
      <div class="flex flex-col gap-3">
        <label class="text-white text-sm font-bold flex justify-between items-center">
          <span class="tracking-widest uppercase text-xs text-app-text-muted">Parámetro de tiempo (t)</span>
          <span class="text-app-primary font-mono bg-app-primary/10 px-2 py-1 rounded text-lg">{{ tParam.toFixed(1) }}s</span>
        </label>
        <input type="range" min="-5" max="5" step="0.1" v-model.number="tParam" class="w-full accent-app-primary pointer-events-auto h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer">
      </div>
    </div>

    <!-- Mensaje UI -->
    <div v-if="message" :class="[
      'absolute left-1/2 -translate-x-1/2 bg-[#0B1221]/90 backdrop-blur-md border border-[#334155] text-app-text-muted px-4 py-2 rounded-full text-center text-xs font-medium z-20 shadow-lg max-w-[90%] flex items-center gap-2 pointer-events-none',
      mode === 'parametric' ? 'bottom-28' : 'bottom-6'
    ]">
      <span class="text-app-primary">💡</span> 
      <span>{{ message }}</span>
    </div>

    <!-- Lienzo SVG (Ratio 1:1, Slice mode para llenar sin deformar) -->
    <svg width="100%" height="100%" class="cursor-crosshair absolute inset-0" viewBox="-12 -12 24 24" preserveAspectRatio="xMidYMid slice">
      <defs>
        <!-- Glow filters -->
        <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <!-- Arrowheads -->
        <marker id="arrow-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#3b82f6" />
        </marker>
        <marker id="arrow-green" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#22c55e" />
        </marker>
        <marker id="arrow-red" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#ef4444" />
        </marker>
        <marker id="arrow-purple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#a855f7" />
        </marker>
      </defs>

      <!-- Grilla Infinita (Adaptada de -50 a 50 para que nunca se acabe en slice) -->
      <g class="grid-lines" opacity="0.4">
        <!-- Verticales y Horizontales (Unidades) -->
        <line v-for="i in 101" :key="'v'+i" :x1="(i-51)" y1="-50" :x2="(i-51)" y2="50" stroke="#1E293B" stroke-width="0.05" />
        <line v-for="i in 101" :key="'h'+i" x1="-50" :y1="(i-51)" x2="50" :y2="(i-51)" stroke="#1E293B" stroke-width="0.05" />
        
        <!-- Líneas maestras cada 5 unidades -->
        <line v-for="i in 21" :key="'vm'+i" :x1="(i-11)*5" y1="-50" :x2="(i-11)*5" y2="50" stroke="#334155" stroke-width="0.1" />
        <line v-for="i in 21" :key="'hm'+i" x1="-50" :y1="(i-11)*5" x2="50" :y2="(i-11)*5" stroke="#334155" stroke-width="0.1" />
      </g>

      <!-- Ejes X e Y Centrales -->
      <line x1="-50" y1="0" x2="50" y2="0" stroke="#475569" stroke-width="0.15" />
      <line x1="0" y1="-50" x2="0" y2="50" stroke="#475569" stroke-width="0.15" />
      <circle cx="0" cy="0" r="0.2" fill="#cbd5e1" />

      <!-- Modo: SUMA (Paralelogramo) -->
      <g v-if="mode === 'sum'" class="sum-mode">
        <!-- Proyecciones -->
        <line :x1="u.x" :y1="-u.y" :x2="u.x + v.x" :y2="-(u.y + v.y)" stroke="#64748b" stroke-width="0.1" stroke-dasharray="0.3,0.3" />
        <line :x1="v.x" :y1="-v.y" :x2="u.x + v.x" :y2="-(u.y + v.y)" stroke="#64748b" stroke-width="0.1" stroke-dasharray="0.3,0.3" />
        <!-- Resultante -->
        <line x1="0" y1="0" :x2="u.x + v.x" :y2="-(u.y + v.y)" stroke="#ef4444" stroke-width="0.25" marker-end="url(#arrow-red)" filter="url(#glow-red)" />
      </g>

      <!-- Modo: PROYECCION o DOT -->
      <g v-if="mode === 'projection' || mode === 'dot'" class="proj-mode">
        <!-- Línea infinita de v -->
        <line :x1="-v.x * 50" :y1="v.y * 50" :x2="v.x * 50" :y2="-v.y * 50" stroke="#22c55e" stroke-width="0.03" opacity="0.4" stroke-dasharray="0.5,0.5" />
        <!-- Línea ortogonal desde u hasta v -->
        <line :x1="u.x" :y1="-u.y" :x2="projUonV.x" :y2="-projUonV.y" stroke="#ef4444" stroke-width="0.1" stroke-dasharray="0.2,0.2" opacity="0.8" />
        <!-- Sombra -->
        <line x1="0" y1="0" :x2="projUonV.x" :y2="-projUonV.y" stroke="#a855f7" stroke-width="0.3" marker-end="url(#arrow-purple)" />
      </g>

      <!-- Modo: PARAMÉTRICO -->
      <g v-if="mode === 'parametric'" class="param-mode">
        <line :x1="u.x - v.x * 50" :y1="-(u.y - v.y * 50)" :x2="u.x + v.x * 50" :y2="-(u.y + v.y * 50)" stroke="#475569" stroke-width="0.08" stroke-dasharray="0.5,0.5" />
        <!-- Vector Velocidad v dibujado desde P_0 -->
        <line :x1="u.x" :y1="-u.y" :x2="u.x + v.x * tParam" :y2="-(u.y + v.y * tParam)" stroke="#a855f7" stroke-width="0.25" marker-end="url(#arrow-purple)" />
        <!-- Resultante r(t) -->
        <line x1="0" y1="0" :x2="u.x + v.x * tParam" :y2="-(u.y + v.y * tParam)" stroke="#ef4444" stroke-width="0.15" stroke-dasharray="0.2,0.2" opacity="0.6" />
        <!-- Partícula -->
        <circle :cx="u.x + v.x * tParam" :cy="-(u.y + v.y * tParam)" r="0.4" fill="#ef4444" filter="url(#glow-red)" />
      </g>

      <!-- Vector V -->
      <line v-if="mode !== 'parametric'" x1="0" y1="0" :x2="v.x" :y2="-v.y" stroke="#22c55e" stroke-width="0.25" marker-end="url(#arrow-green)" filter="url(#glow-green)" />
      <line v-if="mode === 'parametric'" :x1="u.x" :y1="-u.y" :x2="u.x + v.x" :y2="-(u.y + v.y)" stroke="#22c55e" stroke-width="0.15" marker-end="url(#arrow-green)" opacity="0.5" />

      <!-- Vector U -->
      <line x1="0" y1="0" :x2="u.x" :y2="-u.y" stroke="#3b82f6" stroke-width="0.25" marker-end="url(#arrow-blue)" filter="url(#glow-blue)" />

      <!-- Drag Handles (Nodos de arrastre premium) -->
      <g :transform="`translate(${u.x}, ${-u.y})`" class="cursor-pointer pointer-events-auto" @mousedown="startDrag('u', $event)" @touchstart.prevent="startDrag('u', $event)">
        <circle r="0.8" fill="transparent" class="hover:fill-blue-500/20" />
        <circle r="0.25" fill="#fff" stroke="#3b82f6" stroke-width="0.15" />
      </g>
      
      <g v-if="mode !== 'parametric'" :transform="`translate(${v.x}, ${-v.y})`" class="cursor-pointer pointer-events-auto" @mousedown="startDrag('v', $event)" @touchstart.prevent="startDrag('v', $event)">
        <circle r="0.8" fill="transparent" class="hover:fill-green-500/20" />
        <circle r="0.25" fill="#fff" stroke="#22c55e" stroke-width="0.15" />
      </g>
              
      <g v-if="mode === 'parametric'" :transform="`translate(${u.x + v.x}, ${-(u.y + v.y)})`" class="cursor-pointer pointer-events-auto" @mousedown="startDrag('v-param', $event)" @touchstart.prevent="startDrag('v-param', $event)">
        <circle r="0.8" fill="transparent" class="hover:fill-green-500/20" />
        <circle r="0.25" fill="#fff" stroke="#22c55e" stroke-width="0.15" />
      </g>

      <!-- Ángulo Arc (Mejorado) -->
      <g v-if="mode === 'dot'">
        <path :d="angleArcPath" fill="none" stroke="#fcd34d" stroke-width="0.15" />
        <path :d="angleSectorPath" fill="#fcd34d" opacity="0.1" />
      </g>
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

const minX = -50, maxX = 50, minY = -50, maxY = 50
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

const angleSectorPath = computed(() => {
  const d = angleArcPath.value
  if (!d) return ''
  return d + ' L 0 0 Z'
})

const angleArcPath = computed(() => {
  const magU = magnitude(u.value)
  const magV = magnitude(v.value)
  if (magU === 0 || magV === 0) return ''
  
  const r = 2.0 // Mayor radio para el arco
  const uNorm = { x: u.value.x / magU, y: u.value.y / magU }
  const vNorm = { x: v.value.x / magV, y: v.value.y / magV }
  
  const startX = uNorm.x * r
  const startY = -uNorm.y * r
  const endX = vNorm.x * r
  const endY = -vNorm.y * r
  
  const crossZ = u.value.x * v.value.y - u.value.y * v.value.x
  const largeArcFlag = angleBetween.value > 180 ? 1 : 0
  const sweepFlag = crossZ < 0 ? 1 : 0 

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
