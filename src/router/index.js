import {createWebHashHistory, createRouter} from "vue-router";


    function loadView(components){
        return() => import(`@/components/${components}`)
    }

const routes = [
    {
        path: '/',
        name: 'chap1',
        component: loadView() // 동적 import
    },
    {
        path: '/chap3',
        name: 'chap3',
        component: loadView(), // 동적 import
    },
    {
        path: '/chap4',
        name: 'chap4',
        component: loadView(), // 동적 import
    },
    {
        path: '/axiosEx',
        name: 'axiosEx',
        component: loadView(), // 동적 import
    },

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});