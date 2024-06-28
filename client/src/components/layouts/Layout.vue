<script setup lang="ts">
import { Header } from "@/components/widgets/header";
import { Footer } from "@/components/widgets/footer";
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div class="main">
    <slot />
  </div>
  <div class="footer">
    <Footer />
  </div>
</template>

<style scoped>
.main {
  width: 1320px;
  align-self: center;
  padding: 0 15px;
}
</style>