import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// import pinia from './store';
// import axios from 'axios';
// import qs from 'qs';

const app =createApp(App)

app.use(router)
app.mount('#app')   
