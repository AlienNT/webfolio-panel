<script setup lang="ts">
interface NavigationItemProps {
  navigationItem: NavigationLink
}

defineProps<NavigationItemProps>()
</script>

<template>
  <li class="navigation-list__item">
    <router-link
      active-class="active-link"
      class="navigation-link"
      :to="navigationItem.path"
    >
      {{ navigationItem.label || navigationItem.title }}
    </router-link>
  </li>
</template>

<style scoped lang="scss">
.navigation-link {
  transition: .2s ease;
  color: #ccc;
  cursor: pointer;
  display: block;
  font-size: 16px;

  &:first-letter {
    text-transform: uppercase;
    font-family: monospace;
  }
}

.active-link, .navigation-link:hover {
  color: white;
}
</style>