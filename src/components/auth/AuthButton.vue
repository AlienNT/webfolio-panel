<script setup lang="ts">

import VButton from '@/components/UI/VButton.vue'

interface AuthButtonProps {
  type?: 'button' | 'submit',
  customClass?: string,
  title?: string,
  label?: string
}

defineProps<AuthButtonProps>()

const emit = defineEmits<{
  (e: 'onClick'): void
}>()
</script>

<template>
  <VButton
    class="auth-button"
    :class="customClass"
    :label="label"
    :title="title"
    :type="type"
    @on-click="emit('onClick')"
  />
</template>

<style scoped lang="scss">

$buttonColor: #6f5edc;

.auth-button {
  padding: 5px 15px;
  border-radius: 10px;
  background: transparent;
  border: 2px solid $buttonColor;
  color: $buttonColor;
  text-transform: uppercase;
  transition: .2s ease;
  &:hover {
    background: $buttonColor;
    color: white;
  }
}
</style>