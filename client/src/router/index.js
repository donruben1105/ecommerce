import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '@/pages/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SignUp',
      component: SignUp
    },
  ]
})

export default router
