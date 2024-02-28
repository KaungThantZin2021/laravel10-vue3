import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../components/auth/Register.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../components/Profile.vue')
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: () => import('../components/Detail.vue')
    },
    {
        path: '/create',
        name: 'Form',
        component: () => import('../components/Form.vue')
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

