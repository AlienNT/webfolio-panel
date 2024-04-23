<script setup lang="ts">

import VInput from '@/components/UI/VInput.vue'
import { Input } from '@/types/fieldTypes.ts'

import { fieldEmits } from '@/helpers/fieldEmits.ts'

interface TextFieldProps extends Omit<Input, 'type'> {
}

defineProps<TextFieldProps>()
const emit = defineEmits(fieldEmits)
</script>

<template>
  <label class="label">
    <VInput
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      @on-focus="(e) => emit('onFocus', e)"
      @on-blur="(e) => emit('onBlur', e)"
      @on-input="(e) => emit('onInput', e)"
      @on-change="(e) => emit('onChange', e)"
    />
  </label>
</template>