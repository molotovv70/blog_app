<script setup lang="ts">
import { RouterView } from 'vue-router';
import {onMounted} from "vue";
import {useUserStore} from "@/stores/user.js";

// onMounted(() => {
//   useUserStore().loadUser()
// })
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
