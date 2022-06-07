// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from 'vue-router';

function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`)
}

const routes = [
    {
        path: '/',
        name: 'chap1',
        component: loadView('chap1'), // 동적 import
    },
    {
        path: '/chap2',
        name: 'chap2',
        component: loadView('chap2'), // 동적 import
    },
    {
        path: '/axiosEx',
        name: 'axiosEx',
        component: loadView('axiosEx'), // 동적 import
    },
];

// 이렇게 해도 된다.
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
//
// export default router;

export const router = createRouter({
    history: createWebHistory(),
    routes,
});