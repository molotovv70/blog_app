<script setup lang="ts">

import Layout from "@/components/layouts/Layout.vue";

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

const editor = new EditorJS({
  holder: 'editorjs',
  tools: {
    header: {
      class: Header,
      inlineToolbar: ['link']
    },
    list: {
      class: List,
      inlineToolbar: true
    }
  }
});
</script>

<template>
  <Layout>
    add post
    <div id="editorjs"></div>
  </Layout>
</template>

<style scoped>

</style>