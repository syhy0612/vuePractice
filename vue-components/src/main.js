// import './assets/main.css'
import { createApp } from 'vue';  // 从 Vue 中导入 createApp 函数
import App from './App.vue';     // 导入根组件 App.vue
import Header from './pages/Header.vue';  // 导入 Header 组件，路径可能需要根据实际情况调整

const app = createApp(App);     // 创建一个 Vue 应用实例，将 App 组件作为根组件

// 在这里注册 Header 组件，使其在整个应用中可用
app.component('Header', Header);

// 将应用挂载到具有 id="app" 的 DOM 元素上
app.mount('#app');