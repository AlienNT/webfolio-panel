<script setup lang="ts">
import { reactive } from 'vue'
import Loader from '@/components/UI/Loader.vue'

interface ImageProps {
  src: string,
  alt?: string
}

defineProps<ImageProps>()

const state = reactive({
  isLoaded: false,
  isError: false
})

function onLoad() {
  state.isLoaded = true
  state.isError = false
}

function onError() {
  state.isLoaded = false
  state.isError = true
}
</script>

<template>
  <div class="image-wrapper">
    <transition name="fade" appear>
      <img
        v-show="state.isLoaded && !state.isError"
        :src="src"
        :alt="alt"
        @load="onLoad"
        @error="onError"
      >
    </transition>
    <transition name="fade" appear>
      <div
        v-if="!state.isLoaded && !state.isError"
        class="image-loader"
      >
        <Loader />
      </div>
    </transition>
    <transition name="fade" appear>
      <div v-if="state.isError" class="error">Error</div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/css/animations";

.image-wrapper {
  height: 0;
  width: 0;
  padding-top: 100%;
  padding-right: 100%;
  position: relative;

  img, .image-loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: contain;
  }
}

.image-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(151, 185, 243, 0.82);
  backdrop-filter: blur(8px);
  border-radius: 10px;
}
</style>