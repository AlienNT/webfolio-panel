import { createRouter, createWebHistory } from 'vue-router'
import { getIsAuth } from '@/helpers'

import { routes } from './routes.ts'

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to) => {
  const isAuth = getIsAuth()

  if (isAuth) return true

  // if (!isAuth && from.name === 'auth') {
  //   return false
  // }
  if (!isAuth && to.name !== 'auth') {
    return { name: 'auth' }
  }
})

export default router