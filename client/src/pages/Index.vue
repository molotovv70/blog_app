<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {ref} from "vue";

const count = ref(0);

</script>

<template>
  Hello World <br>
  Current count is: {{ count }}
  <div>
    <Button @click="count++">Click me</Button>
  </div>
</template>

<style scoped>

</style>