<script setup lang="ts">
import { computed } from 'vue'
import { formattedDate } from '@/helpers'

interface DisplayDateProps {
  date: string | Date,
  showTime?: boolean
}

const props = withDefaults(defineProps<DisplayDateProps>(), {
  showTime: false
})

const displayValues = computed(() => {
  return formattedDate(props.date)
})
const isToday = computed(() => {
  return formattedDate(new Date()).date === displayValues.value.date
})

const date = computed((): string => {
  return isToday.value ? 'today' : displayValues.value.date
})

const time = computed((): string | null => {
  return props.showTime ? displayValues.value.time : null
})
</script>

<template>
  <div class="displayed-date">
    <div
      v-if="date"
      class="date"
    >
      {{ date }}
    </div>
    <div
      v-if="time && isToday"
      class="time"
    >
      {{ time }}
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>