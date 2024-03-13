import { createRouter, createWebHistory } from 'vue-router'
import AllCatsPage from '../views/AllCatsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all-cats',
      component: AllCatsPage
    },
    {
      path: '/vote',
      name: 'vote',

      component: () => import('../views/VotePage.vue')
    }
  ]
})

export default router
