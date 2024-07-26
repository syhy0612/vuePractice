import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
            path: '/oqc',
            name: 'oqc',
            component: () => import('../views/Oqc.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})

router.afterEach((to, from) => {
    if (to.name === 'NotFound') {
        setTimeout(() => {
            router.push({name: 'home'});
        }, 3000);
    }
});

export default router
