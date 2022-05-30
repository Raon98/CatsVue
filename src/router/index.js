import {createWebHashHistory, createRouter} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'chap1',
        component: () => import('@/components/chap1'), // 동적 import
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});