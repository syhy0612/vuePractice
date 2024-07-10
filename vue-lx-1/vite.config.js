/*
 * @Author: cjh
 * @Date: 2024-07-10 13:52:12
 * @LastEditors: cjh
 * @LastEditTime: 2024-07-10 14:58:15
 * @FilePath: \vue-lx-1\vite.config.js
 * @Description: 文件描述
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080, // 修改为你想要的端口号
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
