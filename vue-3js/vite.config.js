import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
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
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'three': 'three',
            'three/examples/jsm/controls/ArcballControls': 'three/examples/jsm/controls/ArcballControls.js',
            'three/examples/jsm/loaders/STLLoader': 'three/examples/jsm/loaders/STLLoader.js',
            'three/examples/jsm/loaders/RGBELoader': 'three/examples/jsm/loaders/RGBELoader.js',
            'three/examples/jsm/libs/lil-gui.module.min': 'three/examples/jsm/libs/lil-gui.module.min.js'
        }
    },
    server: {
        port: 8080,
    },
})