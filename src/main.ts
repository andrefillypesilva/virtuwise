import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';
import store from './Store';

createApp(App).use(router).use(store).mount('#app');
