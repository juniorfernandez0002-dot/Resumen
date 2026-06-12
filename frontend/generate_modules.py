import os

modules = [
    {"filename": "SubsetsModule.vue", "title": "Subconjuntos y Potencia", "desc": "Entendiendo las partes de un conjunto", "next": "/modulo/2-1"},
    {"filename": "SetOperationsModule.vue", "title": "Operaciones y Leyes", "desc": "Álgebra de conjuntos", "next": "/modulo/2-1"},
    {"filename": "RelationsModule.vue", "title": "Relaciones: Definición", "desc": "Cómo interactúan los elementos", "next": "/modulo/2-2"},
    {"filename": "CompositionModule.vue", "title": "Composición y Tipos", "desc": "Cadenas de relaciones", "next": "/modulo/2-3"},
    {"filename": "EquivalenceModule.vue", "title": "Relación de Equivalencia", "desc": "Agrupando elementos similares", "next": "/modulo/2-4"},
    {"filename": "PartialOrderModule.vue", "title": "Orden Parcial", "desc": "Estructurando jerarquías", "next": "/modulo/3-1"},
    {"filename": "LogicModule.vue", "title": "Proposiciones", "desc": "El lenguaje de la verdad", "next": "/modulo/3-2"},
    {"filename": "CircuitsModule.vue", "title": "Circuitos Lógicos", "desc": "Compuertas y señales", "next": "/modulo/3-3"},
    {"filename": "BooleanAlgebraModule.vue", "title": "Álgebra de Boole", "desc": "Matemática binaria", "next": "/modulo/3-4"},
    {"filename": "BooleanFunctionsModule.vue", "title": "Funciones Booleanas", "desc": "Mapas y simplificación", "next": "/modulo/4-1"},
    {"filename": "GraphsModule.vue", "title": "Grafos Básicos", "desc": "Nodos y aristas", "next": "/modulo/4-2"},
    {"filename": "MultigraphsModule.vue", "title": "Multigrafos", "desc": "Múltiples conexiones", "next": "/modulo/4-3"},
    {"filename": "IsomorphismModule.vue", "title": "Isomorfismo", "desc": "Misma estructura, diferente dibujo", "next": "/modulo/4-4"},
    {"filename": "EulerianModule.vue", "title": "Caminos Eulerianos", "desc": "Recorriendo el grafo sin repetir", "next": "/modulo/conjuntos"}
]

template = """<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <header class="border-b border-app-border pb-6">
      <h1 class="text-3xl font-bold text-app-text mb-2">{title}</h1>
      <p class="text-app-text-muted">{desc}</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm flex flex-col justify-center">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Concepto Principal</h2>
        <p class="text-app-text-muted text-sm mb-4">
          Este módulo introduce los conceptos clave de <strong>{title}</strong>. 
          Aquí exploraremos sus propiedades fundamentales y cómo se aplican en la matemática discreta.
        </p>
      </div>
      <div class="bg-app-surface p-6 rounded-xl border border-app-border shadow-sm">
        <h2 class="text-lg font-semibold text-app-text mb-4 border-b border-app-border pb-2">Definición Formal</h2>
        <div class="bg-app-bg p-4 rounded-lg border border-app-border">
          <p class="text-center text-app-text-muted text-sm">Fórmula base para {title}</p>
          <div class="mt-2 text-center text-sm font-bold text-app-primary">
            <MathFormula math="X \\rightarrow Y" />
          </div>
        </div>
      </div>
    </section>

    <StepByStepExercise :exerciseSteps="moduleSteps" nextModuleRoute="{next}" />
  </div>
</template>

<script setup>
import MathFormula from '../components/MathFormula.vue'
import StepByStepExercise from '../components/StepByStepExercise.vue'

const moduleSteps = [
  {{
    title: 'Pregunta Teórica',
    question: 'Selecciona la opción que mejor describe este concepto matemático.',
    needsDiagram: false,
    options: [
      {{ id: 1, text: 'Opción Correcta', isMath: false, correct: true }},
      {{ id: 2, text: 'Opción Falsa', isMath: false, correct: false }}
    ]
  }}
]
</script>
"""

base_dir = r"C:\Users\JUNIOR\Desktop\math-adhd-app\frontend\src\views"

for mod in modules:
    content = template.format(title=mod['title'], desc=mod['desc'], next=mod['next'])
    path = os.path.join(base_dir, mod['filename'])
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
        
print("14 components generated.")
