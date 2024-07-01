<script setup lang="js">

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

defineProps({
  post: {
    required: false,
    type: Object
  }
})

</script>

<template>
  <RouterLink :to="`/post/${post.id}`">
    <button class="flex flex-grow mb-4 w-full min-w-full flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
      <div class="flex w-full flex-col gap-1">
        <div class="flex items-center">
          <div class="flex items-center gap-2">
            <div class="font-semibold">{{ post.title }}</div>
            <span class="flex h-2 w-2 rounded-full bg-blue-600"></span>
          </div>
          <div class="ml-auto text-xs text-muted-foreground">
            {{ post.created_at }}
          </div>
        </div>
        <div class="text-xs font-medium flex-row items-center gap-x-2">
          <Avatar class="h-8 w-8">
            <AvatarImage :src="post.user.profile_photo_url" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div class="">
            {{ post.user.name }}
          </div>
        </div>
      </div>
      <div class="line-clamp-2 w-full text-xs text-muted-foreground">
        {{ post.content.blocks[0]?.data.text }}
      </div>
      <div class="flex flex-row-reverse items-center gap-2">
        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
          Like
        </div>
    </div>
    </button>
  </RouterLink>
</template>
