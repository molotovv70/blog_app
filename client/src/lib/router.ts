import {createWebHistory, createRouter, Router, RouteRecordRaw} from 'vue-router'

import Index from "@/pages/Index.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Home from "@/pages/Home/Home.vue";
import UsersList from "@/pages/User/UsersList.vue";
import CreatePost from "@/pages/Post/CreatePost.vue";
import ShowPost from "@/pages/Post/ShowPost.vue";


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
    {
        path: '/users',
        name: 'users',
        component: UsersList
    },
    {
        path: '/post/create',
        name: 'create-post',
        component: CreatePost
    },
    {
        path: '/post/:id',
        name: 'show-post',
        component: ShowPost,
        props: true
    },
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router