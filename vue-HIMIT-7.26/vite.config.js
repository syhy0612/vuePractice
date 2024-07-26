// vite.config.js
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import {fileURLToPath, URL} from 'url'
import postcsspxtorem from 'postcss-pxtorem'

export default defineConfig({
    base: './',
    plugins: [
        vue(),
        components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        postcss: {
            plugins: [
                postcsspxtorem({
                    rootValue: 192, // 对应 1920px 设计稿
                    propList: ['*'],
                    selectorBlackList: ['.no-rem'], // 添加不需要转换的类名
                    minPixelValue: 2, // 最小像素值
                    mediaQuery: false // 允许在媒体查询中转换px
                })
            ]
        }
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
    server: {
        port: 8090,
    },
})