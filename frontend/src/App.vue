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
            <li><router-link to="/modulo/conjuntos" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">1.1 Definición y Diagramas</router-link></li>
            <li><router-link to="/modulo/cardinalidad" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">1.2 Cardinalidad</router-link></li>
            <li><router-link to="/modulo/subconjuntos" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">1.3 Subconjuntos y Potencia</router-link></li>
            <li><router-link to="/modulo/operaciones" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">1.4 Operaciones y Leyes</router-link></li>
            <li class="mt-2"><router-link to="/examen/1" class="sidebar-link text-yellow-500 font-bold bg-yellow-500/10 border border-yellow-500/30" active-class="sidebar-link-active">🏆 Examen U1</router-link></li>
          </ul>
        </div>
        
        <!-- Unidad 2 -->
        <div>
          <h2 class="text-xs font-bold text-app-text-muted uppercase tracking-wider mb-2">Unidad 2: Relaciones</h2>
          <ul class="space-y-1">
            <li><router-link to="/modulo/2-1" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">2.1 Definición y Representación</router-link></li>
            <li><router-link to="/modulo/2-2" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">2.2 Composición y Tipos</router-link></li>
            <li><router-link to="/modulo/2-3" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">2.3 Relación de Equivalencia</router-link></li>
            <li><router-link to="/modulo/2-4" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">2.4 Orden Parcial</router-link></li>
            <li class="mt-2"><router-link to="/examen/2" class="sidebar-link text-yellow-500 font-bold bg-yellow-500/10 border border-yellow-500/30" active-class="sidebar-link-active">🏆 Examen U2</router-link></li>
          </ul>
        </div>

        <!-- Unidad 3 -->
        <div>
          <h2 class="text-xs font-bold text-app-text-muted uppercase tracking-wider mb-2">Unidad 3: Lógica y Boole</h2>
          <ul class="space-y-1">
            <li><router-link to="/modulo/3-1" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">3.1 Proposiciones y Conectores</router-link></li>
            <li><router-link to="/modulo/3-2" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">3.2 Circuitos e Inducción</router-link></li>
            <li><router-link to="/modulo/3-3" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">3.3 Álgebra de Boole</router-link></li>
            <li><router-link to="/modulo/3-4" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">3.4 Funciones Booleanas</router-link></li>
            <li class="mt-2"><router-link to="/examen/3" class="sidebar-link text-yellow-500 font-bold bg-yellow-500/10 border border-yellow-500/30" active-class="sidebar-link-active">🏆 Examen U3</router-link></li>
          </ul>
        </div>

        <!-- Unidad 4 -->
        <div>
          <h2 class="text-xs font-bold text-app-text-muted uppercase tracking-wider mb-2">Unidad 4: Grafos</h2>
          <ul class="space-y-1">
            <li><router-link to="/modulo/4-1" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">4.1 Definiciones Básicas</router-link></li>
            <li><router-link to="/modulo/4-2" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">4.2 Simples y Multigrafos</router-link></li>
            <li><router-link to="/modulo/4-3" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">4.3 Isomorfismo</router-link></li>
            <li><router-link to="/modulo/4-4" class="sidebar-link" active-class="sidebar-link-active" exact-active-class="sidebar-link-active">4.4 Eulerianos y Hamiltonianos</router-link></li>
            <li class="mt-2"><router-link to="/examen/4" class="sidebar-link text-yellow-500 font-bold bg-yellow-500/10 border border-yellow-500/30" active-class="sidebar-link-active">🏆 Examen U4</router-link></li>
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
            <div class="h-full bg-app-primary w-[30%] transition-all duration-500"></div>
          </div>
          <span class="text-sm font-medium text-app-text-muted">30%</span>
        </div>
      </header>

      <main class="flex-1 p-8 overflow-y-auto">
        <div class="max-w-5xl mx-auto">
          <router-view :key="$route.path"></router-view>
        </div>
      </main>
    </div>

  </div>
</template>

<style>
.sidebar-link {
  display: block;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  font-weight: 500;
  color: var(--color-app-text-muted);
  transition: all 0.2s;
}
.sidebar-link:hover {
  background-color: var(--color-app-bg);
  color: var(--color-app-text);
}
.sidebar-link-active {
  background-color: var(--color-app-primary-light) !important;
  color: var(--color-app-primary) !important;
}
</style>

<script setup>
</script>
