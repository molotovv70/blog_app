<script setup lang="ts">
import { Layout } from "@/components/layouts";
import { Button } from '@/components/ui/button'
import {ref} from "vue";

const count = ref(0);

</script>

<template>
  <Layout>
    Hello World <br>
    Current count is: {{ count }}
    <div>
      <Button @click="count++">Click me</Button>
    </div>
  </Layout>
</template>

<style scoped>

</style>