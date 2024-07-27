import {createRouter, createWebHashHistory} from 'vue-router'
import {useUserStore} from "@/stores/userStore.js";
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL), routes: [{
        path: '/', redirect: '/home'
    }, {
        path: '/login', name: 'login', component: () => import('../views/Login.vue')
    }, {
        path: '/home', name: 'home', component: HomeView
    }, {
        path: '/oqc', name: 'oqc', component: () => import('../views/Oqc.vue')
    }, {
        path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
    }]
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore()

    if (to.name === 'login') {
        // 如果已经在登录页，直接通过
        next()
    } else if (!userStore.isLoggedIn) {
        // 如果未登录且不是去登录页，重定向到登录页
        if (to.name === 'NotFound') {
            // 如果是404页面，显示3秒后跳转
            next() // 先让路由正常进行到404页面
        } else {
            // 其他页面直接跳转到登录页
            next({name: 'login'})
        }
    } else {
        // 已登录，正常进行
        next()
    }
})

router.afterEach((to, from) => {
    const userStore = useUserStore()

    if (to.name === 'NotFound' && !userStore.isLoggedIn) {
        // 如果是未登录状态下的404页面，3秒后跳转到登录页
        setTimeout(() => {
            router.push({name: 'login'})
        }, 3000)
    }
})

export default router
