import { createRouter, createWebHistory } from 'vue-router'
import { getIsAuth } from '@/helpers'

import { routes } from './routes.ts'

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to) => {
  const isAuth = getIsAuth()

  if (!isAuth) {
    if (to.name !== 'auth') {
      return { name: 'auth' }
    }
  } else {
    if (to.name === 'auth') {
      return false
    }
    if (to.path === '/')
      return { name: 'profile' }
  }
})

export default router