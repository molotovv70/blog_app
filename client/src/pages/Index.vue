<script setup lang="ts">
import { Layout } from "@/components/layouts";
import { Button } from '@/components/ui/button'
import { ref } from "vue";
import axiosInstance from "@/lib/axios.ts";

const count = ref(0);

const fetchData = async () => {
  const response = await axiosInstance.get('/api/user')
  console.log(response)
}

</script>

<template>
  <Layout>
    Hello World <br>
    Current count is: {{ count }}
    <div>
      <Button @click="count++">Click me</Button>
      <Button @click="fetchData">Fetch User</Button>
    </div>
  </Layout>
</template>

<style scoped>

</style>