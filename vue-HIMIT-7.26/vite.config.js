import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import {fileURLToPath, URL} from 'url'
import postcsspxtorem from 'postcss-pxtorem'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
    base: './',
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
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
                    rootValue({file}) {
                        return file.indexOf('element-plus') !== -1 ? 16 : 192;
                    },
                    propList: ['*'],
                    selectorBlackList: ['norem'], // 不转换的类名
                    minPixelValue: 1, // 小于1px的不会被转换
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