<script setup lang="ts">
import Navigation from '@/components/navigation/Navigation.vue'
import AuthButton from '@/components/auth/AuthButton.vue'

import { useNavigation } from '@/store/useNavigation.ts'
import { useAuth } from '@/store/useAuth.ts'

const { navigationList } = useNavigation()
const { removeToken, token } = useAuth()

function logoutHandler() {
  removeToken()
}
</script>

<template>
  <header
    v-if="!!token"
    class="header"
  >
    <div class="container">
      <div class="row">
        <div class="col navigation-col">
          <Navigation
            :navigation-list="navigationList"
          />
        </div>
        <div class="col logout-col">
          <AuthButton
            type="button"
            title="logout"
            label="logout"
            @on-click="logoutHandler"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background: #2b2b2b;

  .row {
    align-items: center;
  }
}
.logout-col {
  flex: none;
}
</style>