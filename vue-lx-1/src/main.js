
// import axios from 'axios';
// import qs from 'qs';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import * as echarts from 'echarts';

const pinia = createPinia();
const app = createApp(App);

// 全局挂载 ECharts
app.config.globalProperties.$echarts = echarts;

app.use(pinia);
app.use(router);

app.mount('#app');
