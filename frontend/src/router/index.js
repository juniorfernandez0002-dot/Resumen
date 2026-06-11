import { createRouter, createWebHistory } from 'vue-router'
import SetsModule from '../views/SetsModule.vue'

const routes = [
  {
    path: '/',
    redirect: '/modulo/conjuntos'
  },
  {
    path: '/modulo/conjuntos',
    name: 'Sets',
    component: SetsModule
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
