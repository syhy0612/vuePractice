// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Father from '../views/Father.vue'; // 导入 Father.vue 组件

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/father',
    name: 'Father',
    component: Father
  },
  // 可以继续添加其他路由规则
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
