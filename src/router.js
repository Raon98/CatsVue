// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'chap1',
        component: () => import('@/components/chap1'), // 동적 import
    },
    {
        path: '/chap2',
        name: 'chap2',
        component: () => import('@/components/chap2'), // 동적 import
    },

];

// 이렇게 해도 된다.
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
// export default router;

export const router = createRouter({
    history: createWebHistory(),
    routes,
});