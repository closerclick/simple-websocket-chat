import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: { compilerOptions: { isCustomElement: (tag) => tag === 'closer-click-support' } },
    }),
  ],
  base: './',
  server: {
    port: 5174,
    open: true
  }
})
