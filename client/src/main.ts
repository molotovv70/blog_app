import { createApp } from 'vue'
import '@/assets/styles/style.css'
import App from './App.vue'

import router from '@/lib/router.ts'

createApp(App)
    .use(router)
    .mount('#app')
