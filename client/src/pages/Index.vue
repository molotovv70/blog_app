<script setup lang="ts">
import { Layout } from "@/components/layouts";
import { Button } from '@/components/ui/button'
import { ref } from "vue";
import axiosInstance from "@/lib/axios.ts";

const count = ref(0);

// const fetchData = () => {
//   console.log(axiosInstance)
//   // axiosInstance.get('/test', (res) => {
//   //   console.log(res.data)
//   // })
// }

const fetchData = async () => {
  try {
    await axiosInstance.get('/sanctum/csrf-cookie'); // Получение CSRF cookie
    const response = await axiosInstance.get('/api/user');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

</script>

<template>
  <Layout>
    Hello World <br>
    Current count is: {{ count }}
    <div>
      <Button @click="count++">Click me</Button>
      <Button @click="fetchData">Fetch Data</Button>
    </div>
  </Layout>
</template>

<style scoped>

</style>