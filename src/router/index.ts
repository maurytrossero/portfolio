import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PortfolioView from '../views/PortfolioView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'portfolio-view',
    component: PortfolioView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || '/'), 
  routes
})

export default router
