<script setup lang="ts">
import { Layout } from "@/components/layouts";
import { SortItemsBy } from "@/components/ui/sort-items-by";
import Button from "@/components/ui/button/Button.vue";
import FilterItemsBy from "@/components/ui/filter-items-by/FilterItemsBy.vue";
import Tabs from "@/components/ui/tabs/Tabs.vue";
import axiosInstance from "@/lib/axios.ts";
import {onMounted, ref} from "vue";

let posts = ref([]);

onMounted(async () => {
  const response = await axiosInstance.get('/api/posts')
  posts.value = await response.data
})

</script>

<template>
  <Layout>
    <div class="flex flex-col">
      <div class="flex justify-between gap-x-4">
        <div class="flex mb-4 w-3/4 justify-between">
          <SortItemsBy />
          <RouterLink to="/post/create">
            <Button>Create Post</Button>
          </RouterLink>
        </div>
        <FilterItemsBy />
      </div>
      <div class="flex justify-between gap-x-4">
        <div class="flex mb-4 gap-x-2 w-3/4 justify-between">
          <div class="flex-col ">
            <Tabs v-for="post in posts" :post="post" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>

</style>