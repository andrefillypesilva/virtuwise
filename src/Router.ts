import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './views/Main.vue';
import Viewer from './views/360Viewer.vue';
import HowItWorks from './views/HowItWorks.vue';
import CreateAccount from './views/CreateAccount.vue';
import Publish from './views/Publish.vue';
import Success from './views/Success.vue';
import Stand from './views/Stand.vue';
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
    {
        path: '/how-it-works',
        component: HowItWorks,
        name: 'HowItWorks',
        meta: { hideOn360Mode: true },
    },
    {
        path: '/create-account',
        component: CreateAccount,
        name: 'CreateAccount',
    },
    {
        path: '/publish',
        component: Publish,
        name: 'Publish',
    },
    {
        path: '/success',
        component: Success,
        name: 'Success'
    },
    {
        path: '/stand/:id',
        component: Stand,
        name: 'Stand',
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: "active",
});

router.beforeEach(to => {
    if (to.name === 'Viewer' && !store.getters.selectedVehicle.title) {
        return { name: 'Main' };
    }
});

export default router;
