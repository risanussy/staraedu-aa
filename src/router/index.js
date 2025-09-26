import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ProblemSolution from '../views/ProblemSolution.vue'
import Roadmap from '../views/Roadmap.vue'
import Deliverables from '../views/Deliverables.vue'
import Team from '../views/Team.vue'
import LifeAfter from '../views/LifeAfter.vue'
import Parents from '../views/Parents.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'Purpose', component: About },
  { path: '/problem-solution', name: 'ProblemSolution', component: ProblemSolution },
  { path: '/roadmap', name: 'Roadmap', component: Roadmap },
  { path: '/deliverables', name: 'Deliverables', component: Deliverables },
  { path: '/team', name: 'Team', component: Team },
  { path: '/life-after', name: 'LifeAfter', component: LifeAfter },
  { path: '/parents', name: 'Parents', component: Parents },
  { path: '/contact', name: 'Enroll', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
