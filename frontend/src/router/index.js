import { createRouter, createWebHistory } from 'vue-router'
import SetsModule from '../views/SetsModule.vue'
import CardinalityModule from '../views/CardinalityModule.vue'
import SubsetsModule from '../views/SubsetsModule.vue'
import SetOperationsModule from '../views/SetOperationsModule.vue'

import RelationsModule from '../views/RelationsModule.vue'
import CompositionModule from '../views/CompositionModule.vue'
import EquivalenceModule from '../views/EquivalenceModule.vue'
import PartialOrderModule from '../views/PartialOrderModule.vue'

import LogicModule from '../views/LogicModule.vue'
import CircuitsModule from '../views/CircuitsModule.vue'
import BooleanAlgebraModule from '../views/BooleanAlgebraModule.vue'
import BooleanFunctionsModule from '../views/BooleanFunctionsModule.vue'

import GraphsModule from '../views/GraphsModule.vue'
import MultigraphsModule from '../views/MultigraphsModule.vue'
import IsomorphismModule from '../views/IsomorphismModule.vue'
import EulerianModule from '../views/EulerianModule.vue'

// Nuevas Unidades (Geometría Analítica)
import VectorsModule from '../views/VectorsModule.vue'
import DotProductModule from '../views/DotProductModule.vue'
import CrossProductModule from '../views/CrossProductModule.vue'
import VectorGeometryModule from '../views/VectorGeometryModule.vue'

import LinesModule from '../views/LinesModule.vue'
import ParabolaModule from '../views/ParabolaModule.vue'
import EllipseModule from '../views/EllipseModule.vue'
import FunctionalModelsModule from '../views/FunctionalModelsModule.vue'

import Lines3DModule from '../views/Lines3DModule.vue'
import Planes3DModule from '../views/Planes3DModule.vue'
import RelativePositionsModule from '../views/RelativePositionsModule.vue'
import SurfacesModule from '../views/SurfacesModule.vue'

import Unit1Exam from '../views/Unit1Exam.vue'
import Unit2Exam from '../views/Unit2Exam.vue'
import Unit3Exam from '../views/Unit3Exam.vue'
import Unit4Exam from '../views/Unit4Exam.vue'
import Unit5Exam from '../views/Unit5Exam.vue'
import Unit6Exam from '../views/Unit6Exam.vue'
import Unit7Exam from '../views/Unit7Exam.vue'

const routes = [
  { path: '/', redirect: '/modulo/conjuntos' },
  
  // Unidad 1
  { path: '/modulo/conjuntos', component: SetsModule },
  { path: '/modulo/cardinalidad', component: CardinalityModule },
  { path: '/modulo/subconjuntos', component: SubsetsModule },
  { path: '/modulo/operaciones', component: SetOperationsModule },
  { path: '/examen/1', component: Unit1Exam },

  // Unidad 2
  { path: '/modulo/2-1', component: RelationsModule },
  { path: '/modulo/2-2', component: CompositionModule },
  { path: '/modulo/2-3', component: EquivalenceModule },
  { path: '/modulo/2-4', component: PartialOrderModule },
  { path: '/examen/2', component: Unit2Exam },

  // Unidad 3
  { path: '/modulo/3-1', component: LogicModule },
  { path: '/modulo/3-2', component: CircuitsModule },
  { path: '/modulo/3-3', component: BooleanAlgebraModule },
  { path: '/modulo/3-4', component: BooleanFunctionsModule },
  { path: '/examen/3', component: Unit3Exam },

  // Unidad 4
  { path: '/modulo/4-1', component: GraphsModule },
  { path: '/modulo/4-2', component: MultigraphsModule },
  { path: '/modulo/4-3', component: IsomorphismModule },
  { path: '/modulo/4-4', component: EulerianModule },
  { path: '/examen/4', component: Unit4Exam },

  // Unidad 5
  { path: '/modulo/5-1', component: VectorsModule },
  { path: '/modulo/5-2', component: DotProductModule },
  { path: '/modulo/5-3', component: CrossProductModule },
  { path: '/modulo/5-4', component: VectorGeometryModule },
  { path: '/examen/5', component: Unit5Exam },

  // Unidad 6
  { path: '/modulo/6-1', component: LinesModule },
  { path: '/modulo/6-2', component: ParabolaModule },
  { path: '/modulo/6-3', component: EllipseModule },
  { path: '/modulo/6-4', component: FunctionalModelsModule },
  { path: '/examen/6', component: Unit6Exam },

  // Unidad 7
  { path: '/modulo/7-1', component: Lines3DModule },
  { path: '/modulo/7-2', component: Planes3DModule },
  { path: '/modulo/7-3', component: RelativePositionsModule },
  { path: '/modulo/7-4', component: SurfacesModule },
  { path: '/examen/7', component: Unit7Exam }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
