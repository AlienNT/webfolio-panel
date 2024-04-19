<script setup lang="ts">

import { Input } from '@/types/fieldTypes.ts'
import { fieldEmits } from '@/helpers/fieldEmits.ts'

interface InputProps extends Input {
}

withDefaults(defineProps<InputProps>(), {
  type: 'text',
  readonly: false,
  disabled: false
})

const emit = defineEmits(fieldEmits)

function getValue(e: Event): string {
  const target = e.target as HTMLInputElement
  return target.value
}
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    class="input"
    @change="(e: Event) => emit('onChange', getValue(e))"
    @input="(e: Event) => emit('onInput', getValue(e))"
  >
</template>

<style scoped lang="scss">
.input {
  all: unset;
  background: white;
  display: flex;
  flex: 1;
  padding: 5px 15px;
  transition: .2s ease;
  border-radius: 5px;

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }
}
</style>