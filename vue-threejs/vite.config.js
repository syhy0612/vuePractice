import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'stl-viewer-libs': fileURLToPath(new URL('./src/components/stl-viewer-libs', import.meta.url))
    }
  },
  server: {
    fs: {
      // 允许为项目根目录以外的文件提供服务
      allow: ['..']
    }
  },
  build: {
    rollupOptions: {
      external: ['three']
    }
  },
  optimizeDeps: {
    exclude: ['stl-viewer-libs']
  }
})