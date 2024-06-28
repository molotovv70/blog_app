<script setup lang="ts">
import { cn } from '@/lib/utils'

import { useRoute } from 'vue-router';
const route = useRoute();

const isActive = (path: string) => {
  return route.path === path;
};

</script>

<template>
  <nav
      :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')"
  >
    <a
        :class="['text-sm font-medium transition-colors hover:text-primary', { 'text-muted-foreground': !isActive('/home') }]"
    >
      <routerLink to="/home">Home</routerLink>
    </a>
    <a
        :class="['text-sm font-medium transition-colors hover:text-primary', { 'text-muted-foreground': !isActive('/users') }]"
    >
      <routerLink to="/users">Users</routerLink>
    </a>
  </nav>
</template>