import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './views/Main.vue';
import Viewer from './views/360Viewer.vue';

const routes = [
    {
        path: '/',
        component: Main,
        name: 'Main'
    },
    {
        path: '/360viewer',
        component: Viewer,
        name: 'Viewer'
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
