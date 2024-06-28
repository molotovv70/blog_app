import {createWebHistory, createRouter, Router, RouteRecordRaw} from 'vue-router'

import Index from "@/pages/Index.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Home from "@/pages/Home/Home.vue";


const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router