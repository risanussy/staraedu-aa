<script setup>
import Layout from './components/Layout.vue'
import { onMounted } from 'vue'
import { initCustomScripts } from './assets/js/custom'

onMounted(() => {
  initCustomScripts()
})
</script>

<template>
  <div>
    <Layout />
  </div>
</template>
