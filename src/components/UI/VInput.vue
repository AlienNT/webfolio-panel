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
  background: #1e1f22;
  display: flex;
  flex: 1;
  padding: 10px 15px;
  transition: .2s ease;
  border-radius: 5px;
  width: 100%;
  color: #c4c4c4;
  font-family: monospace;
  font-size: 16px;

  &::placeholder {
    display: block;
    font-weight: bold;
    text-transform: capitalize;
  }

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }
}
</style>