import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/pages/AuthPage.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/pages/ProfilePage.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('@/pages/SkillsPage.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('@/pages/WorksPage.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: import('@/pages/ContactsPage.vue')
  }
]