<template>
  <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm">
    <div class="mb-6">
      <h3 class="font-semibold text-app-text mb-2">{{ title }}</h3>
      
      <div v-if="rules.length > 0" class="bg-app-bg p-4 rounded-lg border border-app-border mb-4 text-sm text-app-text">
        <p class="mb-2"><strong class="text-app-primary">{{ rulesTitle }}</strong></p>
        <ul class="list-disc pl-5 space-y-2 text-app-text-muted">
          <li v-for="(rule, i) in rules" :key="i" v-html="rule"></li>
        </ul>
      </div>

      <p class="text-sm text-app-text-muted">
        Selecciona un número abajo y haz clic en su región más específica (A, B, Intersección o Universo).
      </p>
    </div>

    <!-- Elementos no asignados -->
    <div class="flex flex-wrap gap-2 mb-6 min-h-[48px] p-4 bg-app-bg rounded-lg border border-app-border">
      <div v-if="unassignedElements.length === 0" class="text-app-text-muted text-sm italic w-full text-center">
        Diagrama completado.
      </div>
      <button 
        v-for="el in unassignedElements" :key="el.id"
        @click="selectElement(el)"
        class="w-10 h-10 rounded-full font-medium transition-all flex items-center justify-center text-sm"
        :class="selectedElement?.id === el.id 
          ? 'bg-app-primary text-white ring-2 ring-offset-2 ring-offset-app-bg ring-app-primary' 
          : 'bg-app-surface text-app-text border border-app-border hover:border-app-primary'"
      >
        {{ el.value }}
      </button>
    </div>

    <!-- Diagrama SVG -->
    <div class="relative w-full aspect-video bg-app-surface rounded-lg border border-app-border overflow-hidden">
      
      <!-- Feedback -->
      <div v-if="showSuccess" class="absolute inset-0 bg-app-success-light z-50 flex items-center justify-center transition-opacity pointer-events-none">
        <span class="px-4 py-2 bg-app-success text-white rounded-md font-medium text-sm shadow-sm">Correcto</span>
      </div>

      <svg viewBox="0 0 400 250" class="w-full h-full">
        <!-- Universo (U) -->
        <rect x="10" y="10" width="380" height="230" rx="4" fill="#1c2128" stroke="#444c56" stroke-width="1.5" stroke-dasharray="4,4" 
              class="cursor-pointer transition-colors"
              :class="{'fill-[#22272e]': selectedElement}"
              @click="moveToRegion('U')" />
        <text x="20" y="30" fill="#768390" font-weight="bold" font-family="sans-serif" font-size="14">U</text>

        <!-- Conjunto A -->
        <circle cx="150" cy="125" r="90" 
                fill="#539bf5" fill-opacity="0.15" stroke="#539bf5" stroke-width="2"
                class="cursor-pointer transition-all hover:fill-opacity-0.25"
                :class="{'stroke-[3px]': selectedElement}"
                @click.stop="moveToRegion('A')" />
        <text x="80" y="50" fill="#539bf5" font-weight="bold" font-family="sans-serif" font-size="16">A</text>

        <!-- Conjunto B -->
        <circle cx="250" cy="125" r="90" 
                fill="#b392f0" fill-opacity="0.15" stroke="#b392f0" stroke-width="2"
                class="cursor-pointer transition-all hover:fill-opacity-0.25"
                :class="{'stroke-[3px]': selectedElement}"
                @click.stop="moveToRegion('B')" />
        <text x="300" y="50" fill="#b392f0" font-weight="bold" font-family="sans-serif" font-size="16">B</text>

        <!-- Intersección -->
        <path d="M 200 50 A 90 90 0 0 0 200 200 A 90 90 0 0 0 200 50 Z" 
              fill="transparent" 
              class="cursor-pointer"
              @click.stop="moveToRegion('INTERSECTION')" />

        <!-- Render Elements in Regions -->
        <g v-for="(el, index) in elementsInA" :key="'A'+el.id">
          <circle :cx="110 + (index * 15)" :cy="125 + (index % 2 === 0 ? 15 : -15)" r="10" fill="#2d333b" stroke="#539bf5" stroke-width="1.5" />
          <text :x="110 + (index * 15)" :y="125 + (index % 2 === 0 ? 15 : -15)" fill="#adbac7" font-size="10" font-weight="500" text-anchor="middle" dominant-baseline="central">{{ el.value }}</text>
        </g>
        
        <g v-for="(el, index) in elementsInB" :key="'B'+el.id">
          <circle :cx="290 - (index * 15)" :cy="125 + (index % 2 === 0 ? 15 : -15)" r="10" fill="#2d333b" stroke="#b392f0" stroke-width="1.5" />
          <text :x="290 - (index * 15)" :y="125 + (index % 2 === 0 ? 15 : -15)" fill="#adbac7" font-size="10" font-weight="500" text-anchor="middle" dominant-baseline="central">{{ el.value }}</text>
        </g>

        <g v-for="(el, index) in elementsInIntersection" :key="'I'+el.id">
          <circle :cx="200" :cy="100 + (index * 25)" r="10" fill="#2d333b" stroke="#8cb6ff" stroke-width="1.5" />
          <text :x="200" :y="100 + (index * 25)" fill="#adbac7" font-size="10" font-weight="500" text-anchor="middle" dominant-baseline="central">{{ el.value }}</text>
        </g>

        <g v-for="(el, index) in elementsInU" :key="'U'+el.id">
          <circle :cx="50 + (index * 30)" :cy="200" r="10" fill="#2d333b" stroke="#768390" stroke-width="1.5" />
          <text :x="50 + (index * 30)" :y="200" fill="#adbac7" font-size="10" font-weight="500" text-anchor="middle" dominant-baseline="central">{{ el.value }}</text>
        </g>

      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Interacción: Asignación de Elementos' },
  rulesTitle: { type: String, default: 'Reglas lógicas del diagrama:' },
  rules: { type: Array, default: () => [
    '<strong>Universo (U)</strong>: Son todos los números del juego {2, 4, 6, 8, 9}. <em>Ojo: Si un número no pertenece a A ni a B, se coloca aquí afuera de los círculos.</em>',
    '<strong>Conjunto A</strong>: Debe contener los números menores que 7.',
    '<strong>Conjunto B</strong>: Debe contener los números pares mayores que 2.',
    '<em>Si cumple ambas reglas, va en la Intersección.</em>'
  ]},
  initialElements: { type: Array, default: () => [
    { id: 1, value: '2', region: 'UNASSIGNED', correctRegion: 'A' },
    { id: 2, value: '4', region: 'UNASSIGNED', correctRegion: 'INTERSECTION' },
    { id: 3, value: '6', region: 'UNASSIGNED', correctRegion: 'INTERSECTION' },
    { id: 4, value: '8', region: 'UNASSIGNED', correctRegion: 'B' },
    { id: 5, value: '9', region: 'UNASSIGNED', correctRegion: 'U' }
  ]}
})

const emit = defineEmits(['completed'])

const elements = ref([])

onMounted(() => {
  elements.value = JSON.parse(JSON.stringify(props.initialElements))
})

watch(() => props.initialElements, (newVal) => {
  elements.value = JSON.parse(JSON.stringify(newVal))
}, { deep: true })

const selectedElement = ref(null)
const showSuccess = ref(false)

const unassignedElements = computed(() => elements.value.filter(e => e.region === 'UNASSIGNED'))
const elementsInA = computed(() => elements.value.filter(e => e.region === 'A'))
const elementsInB = computed(() => elements.value.filter(e => e.region === 'B'))
const elementsInIntersection = computed(() => elements.value.filter(e => e.region === 'INTERSECTION'))
const elementsInU = computed(() => elements.value.filter(e => e.region === 'U'))

const selectElement = (el) => {
  selectedElement.value = selectedElement.value?.id === el.id ? null : el
}

const moveToRegion = (region) => {
  if (!selectedElement.value) return

  if (selectedElement.value.correctRegion === region) {
    const el = elements.value.find(e => e.id === selectedElement.value.id)
    if (el) {
      el.region = region
      selectedElement.value = null
      
      showSuccess.value = true
      setTimeout(() => {
        showSuccess.value = false
        // Check if all assigned
        if (unassignedElements.value.length === 0) {
          emit('completed')
        }
      }, 800)
    }
  } else {
    selectedElement.value = null
    alert("Incorrecto. Analiza a qué conjunto pertenece el elemento e inténtalo de nuevo.")
  }
}
</script>
