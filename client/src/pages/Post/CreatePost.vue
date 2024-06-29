<script setup lang="ts">

import Layout from "@/components/layouts/Layout.vue";
import Button from "@/components/ui/button/Button.vue";
import createEditor from "@/lib/editorjs.ts";
import useTransformPostData from "@/hooks/TransformPostData.ts";
import axiosInstance from "@/lib/axios.ts";
import {useUserStore} from "@/stores/user.js";
import router from "@/lib/router.ts";


const editor = createEditor('editorjs')
useUserStore()

const fetchData = async () => {
  const response = await axiosInstance.get('/api/user')
  console.log(response)
}
const submitPost = async () => {
  let data = await editor.save()
  const transformPostData = useTransformPostData(data)
  const response = await axiosInstance.post('/api/posts', transformPostData)
  // router.push({
  //
  // })
}
</script>

<template>
  <Layout>
    add post
    <div id="editorjs"></div>
    <Button @click="submitPost" >Create Post</Button>
    <Button @click="fetchData">Fetch User</Button>

  </Layout>
</template>

<style>

</style>