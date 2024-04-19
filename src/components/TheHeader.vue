<script setup lang="ts">
import Navigation from '@/components/navigation/Navigation.vue'
import VButton from '@/components/UI/VButton.vue'

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
          <VButton
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

$logoutColor: #705fd9;
.logout-col {
  flex: none;

  .button {
    transition: .2s ease;
    background: transparent;
    border: 2px solid $logoutColor;
    border-radius: 5px;
    padding: 5px 15px;
    color: $logoutColor;
    font-weight: 600;
    font-family: monospace;
    font-size: 16px;

    &:hover {
      background: $logoutColor;
      color: white;
    }

    &:first-letter {
      text-transform: uppercase;
    }
  }
}
</style>