<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axiosInstance from '@/lib/axios.ts'

import Layout from "@/components/layouts/Layout.vue";

const route = useRoute()
const postId = ref(route.params.id)
const post = ref(null)

onMounted(async () => {
  try {
    const response = await axiosInstance.get(`/api/posts/${postId.value}`)
    post.value = response.data
  } catch (error) {
    console.error('Error fetching post:', error)
  }
})

</script>

<template>
  <Layout>
    <div>
      <h1>Post Details</h1>
      <p>Post ID: {{ postId }}</p>
       Другие данные поста...
    </div>
  </Layout>
</template>

<style scoped>

</style>