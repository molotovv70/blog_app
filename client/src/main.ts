import { createApp } from 'vue'
import '@/assets/styles/style.css'
import App from './App.vue'

import { pinia } from "@/lib/pinia.ts";
import router from '@/lib/router.ts'

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
