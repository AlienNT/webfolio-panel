<script setup lang="ts">

interface ButtonProps {
  type?: 'button' | 'submit',
  title?: string,
  label?: string,
  disabled?: boolean
}

withDefaults(defineProps<ButtonProps>(), {
  label: 'button',
  title: 'button',
  type: 'button',
  disabled: false
})

const emit = defineEmits<{
  (e: 'onClick'): void
}>()
</script>

<template>
  <button
    class="button"
    :type="type"
    :title="title"
    :disabled="disabled"
    @click="emit('onClick')"
  >
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.button {
  cursor: pointer;
}
</style>