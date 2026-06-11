<template>
  <div class="min-h-screen bg-app-bg text-app-text flex font-sans">
    
    <!-- Sidebar Navegación Estructurada -->
    <aside class="w-72 bg-app-surface border-r border-app-border flex-shrink-0 flex flex-col">
      <div class="p-6 border-b border-app-border">
        <h1 class="text-xl font-bold tracking-tight text-app-primary">
          Math<span class="text-app-text">Learn</span>
        </h1>
        <p class="text-xs text-app-text-muted mt-1 uppercase tracking-wider">Matemática Discreta</p>
      </div>
      
      <div class="flex-1 overflow-y-auto p-4 space-y-6">
        <!-- Unidad 1 -->
        <div>
          <h2 class="text-xs font-bold text-app-text-muted uppercase tracking-wider mb-2">Unidad 1: Conjuntos</h2>
          <ul class="space-y-1">
            <li>
              <router-link to="/modulo/conjuntos" class="block px-3 py-2 text-sm rounded-md bg-app-primary-light text-app-primary font-medium">
                1.1 Definición y Diagramas
              </router-link>
            </li>
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">1.2 Cardinalidad</span></li>
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">1.3 Subconjuntos y Potencia</span></li>
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">1.4 Operaciones y Leyes</span></li>
          </ul>
        </div>
        
        <!-- Unidad 2 -->
        <div>
          <h2 class="text-xs font-bold text-app-text-muted uppercase tracking-wider mb-2">Unidad 2: Relaciones</h2>
          <ul class="space-y-1">
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">2.1 Definición y Representación</span></li>
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">2.2 Composición y Tipos</span></li>
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">2.3 Relación de Equivalencia</span></li>
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">2.4 Orden Parcial</span></li>
          </ul>
        </div>

        <!-- Unidad 3 -->
        <div>
          <h2 class="text-xs font-bold text-app-text-muted uppercase tracking-wider mb-2">Unidad 3: Lógica y Boole</h2>
          <ul class="space-y-1">
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">3.1 Proposiciones y Conectores</span></li>
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">3.2 Circuitos e Inducción</span></li>
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">3.3 Álgebra de Boole</span></li>
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">3.4 Funciones Booleanas</span></li>
          </ul>
        </div>

        <!-- Unidad 4 -->
        <div>
          <h2 class="text-xs font-bold text-app-text-muted uppercase tracking-wider mb-2">Unidad 4: Grafos</h2>
          <ul class="space-y-1">
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">4.1 Definiciones Básicas</span></li>
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">4.2 Simples y Multigrafos</span></li>
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">4.3 Isomorfismo</span></li>
            <li><span class="block px-3 py-2 text-sm text-app-text-muted opacity-50 cursor-not-allowed">4.4 Eulerianos y Hamiltonianos</span></li>
          </ul>
        </div>
      </div>
    </aside>

    <!-- Contenido Principal -->
    <div class="flex-1 flex flex-col min-h-screen">
      <!-- Navbar superior (Progreso) -->
      <header class="h-16 bg-app-surface border-b border-app-border flex items-center justify-between px-8">
        <h2 class="text-lg font-semibold text-app-text">Progreso del Curso</h2>
        <div class="flex items-center gap-4 w-1/3 max-w-xs">
          <div class="h-2 w-full bg-app-bg rounded-full overflow-hidden border border-app-border">
            <div class="h-full bg-app-primary w-[5%] transition-all duration-500"></div>
          </div>
          <span class="text-sm font-medium text-app-text-muted">5%</span>
        </div>
      </header>

      <!-- Router View -->
      <main class="flex-1 p-8 overflow-y-auto">
        <div class="max-w-4xl mx-auto">
          <router-view></router-view>
        </div>
      </main>
    </div>

  </div>
</template>

<script setup>
</script>
