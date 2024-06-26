import { createApp } from 'vue'
import '@/assets/styles/style.css'
import App from './App.vue'

import { pinia } from "@/lib/pinia.ts";
import router from '@/lib/router.ts'
import axiosInstance from "@/lib/axios.ts";


createApp(App)
    .use(axiosInstance)
    .use(pinia)
    .use(router)
    .mount('#app')
