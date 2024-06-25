import {createWebHistory, createRouter, Router, RouteRecordRaw} from 'vue-router'

import Index from "@/pages/Index.vue";

const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router