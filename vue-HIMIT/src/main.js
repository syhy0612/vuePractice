import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
// import router from './router';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { useDark, useToggle } from '@vueuse/core';

// 处理暗黑模式
const isDark = useDark();
const toggleDark = useToggle(isDark);

const app = createApp(App);
app.use(ElementPlus, {
    locale: zhCn,
});
// app.use(router);

// 将暗黑模式的状态和切换方法传递到应用中
app.provide('isDark', isDark);
app.provide('toggleDark', toggleDark);

app.mount('#app');
