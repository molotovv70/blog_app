<script setup lang="ts">
import { SwitchThemeButton } from "@/components/ui/switch-theme-button";
import { MainNav } from "@/components/ui/main-nav";
import Search from "@/components/widgets/search/Search.vue";
import UserNav from "@/components/widgets/user-nav/UserNav.vue";

</script>

<template>
  <div class="border-b mb-4">
    <div class="flex h-16 items-center px-4 justify-between">
      <MainNav />
      <div class="justify-self-end flex gap-x-4 items-center">
        <SwitchThemeButton />
        <Search />
        <UserNav />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>