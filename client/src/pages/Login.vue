<script setup lang="ts">
import { ref } from "vue";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import axiosInstance from "@/lib/axios.ts";
import { useColorMode } from "@vueuse/core";
import { useUserStore } from "@/stores/user.js";
import router from "@/lib/router.ts";
const mode = useColorMode();

const user = ref({
  email: '',
  password: ''
});

const handleLogin = async () => {
  try {
    await useUserStore().login(user);
    router.push('home')
  } catch (error) {
    console.error('Error logging in user:', error);
  }
};
</script>

<template>
  <Card class="m-auto max-w-sm">
    <CardHeader>
      <CardTitle class="text-2xl">
        Login
      </CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              v-model="user.email"
              required
          />
        </div>
        <div class="grid gap-2">
          <div class="flex items-center">
            <Label for="password">Password</Label>
            <a href="#" class="ml-auto inline-block text-sm underline">
              Forgot your password?
            </a>
          </div>
          <Input
              id="password"
              type="password"
              v-model="user.password"
              required
          />
        </div>
        <Button type="button" class="w-full" @click="handleLogin">
          Login
        </Button>
      </div>
      <div class="mt-4 text-center text-sm">
        Don't have an account?
        <a href="#" class="underline">
          Sign up
        </a>
      </div>
    </CardContent>
  </Card>
</template>