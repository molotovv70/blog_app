import {defineStore} from 'pinia';
import axiosInstance from "@/lib/axios.ts";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {}
    }),
    actions: {
        async getTokens() {
            await axiosInstance.get('/sanctum/csrf-cookie')
        },
        async getUser() {
            const response = await axiosInstance.get('/api/user',);
            this.user = response.data
        },
        async login(user) {
            await this.getTokens()
            await axiosInstance.post('/login', {
                email: user.value.email,
                password: user.value.password
            })
            await this.getUser()
        },
        async register(name, email, password, confirmPassword) {
            await this.getTokens()
            this.user = await axiosInstance.post('/register', {
                name: name,
                email: email,
                password: password,
                password_confirmation: confirmPassword
            })
        },
    }
})