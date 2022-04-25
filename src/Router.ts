import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './views/Main.vue';
import Viewer from './views/360Viewer.vue';
import store from './Store';

const routes = [
    {
        path: '/',
        component: Main,
        name: 'Main',
    },
    {
        path: '/360viewer',
        component: Viewer,
        name: 'Viewer',
        meta: { hideOn360Mode: true },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach(to => {
    if (to.name === 'Viewer' && !store.getters.selectedVehicle.title) {
        return { name: 'Main' };
    }
});

export default router;
