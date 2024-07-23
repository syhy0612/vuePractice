import './assets/main.css';
import {createApp} from 'vue';
import axios from 'axios';
import App from './App.vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

const app = createApp(App);
app.use(ElementPlus, {
    locale: zhCn,
});
app.config.globalProperties.axios = axios; // 将 axios 添加到 Vue 实例中

app.mount('#app');