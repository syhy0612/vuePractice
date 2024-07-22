import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';

export default defineConfig({
    base: './',
    plugins: [
        vue(),
        components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    build: {
        outDir: 'dist', // 将输出目录设置为 docs
    },
}); 
