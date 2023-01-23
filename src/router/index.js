import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home'
import layoutVue from '@/views/layout.vue'

const routes = [
  {
    path: '/',
    component: layoutVue,
    children: [{
      path: '/',
      component: home
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
