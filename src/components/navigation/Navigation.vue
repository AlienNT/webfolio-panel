<script setup lang="ts">
import NavigationItem from '@/components/navigation/NavigationItem.vue'

interface NavigationProps {
  navigationList: NavigationLink[]
}

defineProps<NavigationProps>()
</script>

<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <NavigationItem
        v-for="(navigationItem, index) in navigationList"
        :navigation-item="navigationItem"
        :key="navigationItem._id || index"
      />
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navigation-list {
  display: flex;
  gap: 5px;
}

.navigation-list__item {
  padding: 15px 5px;
}
</style>