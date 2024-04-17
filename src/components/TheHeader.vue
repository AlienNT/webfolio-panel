<script setup lang="ts">
import Navigation from '@/components/navigation/Navigation.vue'
import { useNavigation } from '@/store/useNavigation.ts'

const { navigationList } = useNavigation()
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col navigation-col">
          <Navigation
            :navigation-list="navigationList"
          />
        </div>
        <div class="col logout-col">
          <button
            type="button"
            class="logout-button"
          >
            logout
          </button>
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