<script setup lang="ts">

import Layout from "@/components/layouts/Layout.vue";
import Button from "@/components/ui/button/Button.vue";
import createEditor from "@/lib/editorjs.ts";

const editor = createEditor('editorjs')

const testData = () => editor.save().then((outputData) => {
  console.log('Article data: ', outputData)
}).catch((error) => {
  console.log('Saving failed: ', error)
});
</script>

<template>
  <Layout>
    add post
    <div id="editorjs"></div>
    <Button @click="testData" >Create Post</Button>
  </Layout>
</template>

<style>

</style>