/*
 * @Author: cjh
 * @Date: 2024-07-08 10:41:55
 * @LastEditors: cjh
 * @LastEditTime: 2024-07-08 10:49:24
 * @FilePath: \Vue_lianxi\vue-components-life\vite.config.js
 * @Description: 文件描述
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080, // 设置端口号为 8080
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
