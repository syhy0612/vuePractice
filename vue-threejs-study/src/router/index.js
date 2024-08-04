import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/home.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL), routes: [{
        path: '/', redirect: '/home'
    }, {
        path: '/home', name: 'home', component: HomeView
    }, {
        path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
    }]
})

router.afterEach((to, from) => {
    if (to.name === 'NotFound') {
        // 如果是404页面，3秒后跳转到主页
        setTimeout(() => {
            router.push({name: 'home'})
        }, 3000)
    }
})

export default router
