import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { fileURLToPath, URL } from 'url';
import postcssPxToRem from 'postcss-pxtorem';

export default defineConfig({
    server: {
        port: 8090,
    },
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
    build: {
        outDir: 'dist',
    },
    css: {
        //查看CSS属于哪个css文件
        // sourceMap: true,
        loaderOptions: {
            // css: {},
            postcss: {
                plugins: [
                    postcssPxToRem({
                        rootValue: 192,
                        propList: ['*'],
                    })
                    // require('postcss-px2rem')({
                    //     // 以设计稿1920为例， 1920 / 10 = 192
                    //     remUnit: 192
                    // }),
                ]
            }
        }
    },
});
