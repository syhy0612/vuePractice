import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import NotFound from '@/pages/404.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/404',
            name: '404',
            component: NotFound
        },
        {
            path: '/:pathMatch(.*)',
            redirect: '/404'
        },
    ]
});

export default router;
