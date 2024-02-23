import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/Home.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../components/Profile.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../components/Detail.vue')
    },
    {
        path: '/:patchMatch(.*)*',
        component: () => import('../components/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

