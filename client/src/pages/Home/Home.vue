<script setup lang="ts">
import { Layout } from "@/components/layouts";
import { SortItemsBy } from "@/components/ui/sort-items-by";
import Button from "@/components/ui/button/Button.vue";
import FilterItemsBy from "@/components/ui/filter-items-by/FilterItemsBy.vue";

</script>

<template>
  <Layout>
    <div class="flex flex-col">
      <div class="flex justify-between gap-x-4">
        <div class="flex gap-x-2 w-3/4 justify-between">
          <SortItemsBy />
          <RouterLink to="/post/create">
            <Button>Create Post</Button>
          </RouterLink>
        </div>
        <FilterItemsBy />
      </div>
    </div>
  </Layout>
</template>

<style scoped>

</style>