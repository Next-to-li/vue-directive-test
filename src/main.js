/*
 * @Author: lichenxi
 * @Date: 2023-05-11 22:12:54
 * @LastEditors: lichenxi
 * @LastEditTime: 2023-05-11 23:05:15
 * @Description: 
 */
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import resizable from '@/directive/resizable';

const app = createApp(App);

app.use(resizable);

app.use(createPinia());
app.use(router);

app.mount('#app');
