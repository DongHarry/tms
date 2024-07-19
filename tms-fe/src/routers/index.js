import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Test from '../views/Test.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;