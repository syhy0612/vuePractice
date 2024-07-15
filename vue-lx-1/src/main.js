
// import axios from 'axios';
// import qs from 'qs';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Echarts from 'vue-echarts'
import App from './App.vue';
import router from './router';
import 'echarts';

const pinia = createPinia();
const app = createApp(App);

app.component('Echarts', Echarts);

app.use(pinia);
app.use(router);

app.mount('#app');
