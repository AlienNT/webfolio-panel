import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'

import autoprefixer from 'autoprefixer'

export default defineConfig(({ mode }) => {
  console.log('mode', mode)
  return {
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      postcss: {
        plugins: [autoprefixer]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/css/variables/index.scss";`
        }
      }
    }
  }
})
