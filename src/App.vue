<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheMain from '@/components/TheMain.vue'
import TheFooter from '@/components/TheFooter.vue'

import { useAuth } from '@/store/useAuth.ts'
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const { getTokenInStorage, setToken, token } = useAuth()
const router = useRouter()

onMounted(() => {
  const localToken = getTokenInStorage()
  if (localToken) setToken(localToken)
})

watch(() => token.value, (isAuth) => {
  const isAuthPage = router.currentRoute.value.name === 'auth'
  const path = window.location.pathname

  if (!isAuth && !isAuthPage) {
    return router.push('/auth')
  }
  if (isAuth) {
    if (path !== '/' && path !== '/auth') {
      return router.push(path)
    }
    if (router.currentRoute.value.path === '/' || router.currentRoute.value.path === '/auth') {
      return router.push('/profile')
    }
  }
}, {
  immediate: true
})
</script>

<template>
  <TheHeader />
  <TheMain />
  <TheFooter />
</template>
