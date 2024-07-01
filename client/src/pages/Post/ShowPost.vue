<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axiosInstance from '@/lib/axios.ts'

import Layout from "@/components/layouts/Layout.vue";
import { renderBlock } from "@/hooks/RenderBlock.ts";

const route = useRoute()
const postId = ref(route.params.id)
const post = ref('')
const renderedContent = ref('')


onMounted(async () => {
  try {
    const response = await axiosInstance.get(`/api/posts/${postId.value}`)
    post.value = await response.data
    renderedContent.value = post.value.content.blocks.map(renderBlock).join('')
  } catch (error) {
    console.error('Error fetching post:', error)
  }
})

</script>

<template>
  <Layout>
    <div>
      <h1>{{ post.title }}</h1>
      <p>Post ID: {{ postId }}</p>
      <div v-html="renderedContent"></div>
    </div>
  </Layout>
</template>

<style scoped>

</style>