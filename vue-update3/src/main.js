// 导入 Vue 应用和根组件
import { createApp } from 'vue';
import App from './App.vue';
// 导入路由实例
import router from './router'; 

// 创建 Vue 应用实例
const app = createApp(App);

// 手动挂载到指定的 DOM 元素上
app.use(router)
app.mount('#app');

