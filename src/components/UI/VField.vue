<script setup lang="ts">
import { Input, InputType } from '@/types/fieldTypes.ts'

import { computed, defineAsyncComponent } from 'vue'
import { fieldEmits } from '@/helpers/fieldEmits.ts'

interface FieldProps extends Input {
  type: InputType
}

const props = withDefaults(defineProps<FieldProps>(), {
  type: 'text'
})

const emit = defineEmits(fieldEmits)

const fieldComponent = computed(() => {
  switch (props.type) {
    case 'email':
      return defineAsyncComponent(() => import('./fields/EmailField.vue'))
    case 'number':
      return defineAsyncComponent(() => import('./fields/NumberField.vue'))
    case 'password':
      return defineAsyncComponent(() => import('./fields/PasswordField.vue'))
    case 'phone':
      return defineAsyncComponent(() => import('./fields/PhoneField.vue'))
    case 'text':
      return defineAsyncComponent(() => import('./fields/TextField.vue'))
    default:
      return defineAsyncComponent(() => import('./fields/TextField.vue'))
  }
})
</script>

<template>
  <component
    :is="fieldComponent"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :value="value"
    @on-focus="(e) => emit('onFocus', e)"
    @on-blur="(e) => emit('onBlur', e)"
    @on-input="(e) => emit('onInput', e)"
    @on-change="(e) => emit('onChange', e)"
  />
</template>