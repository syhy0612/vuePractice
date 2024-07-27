<template>
  <div>
    <h1>我是首页</h1>
    <hr>
    <a href="https://github.com/syhy0612/vuePractice" target="_blank"><p>npm install</p></a>
    <p>npm run dev</p>
    <router-link to="oqc"><p>npm run build</p></router-link>
    <router-link to="oqc"><p>OQC品质信息</p></router-link>
  </div>
</template>

<script setup>

import {useTitleStore} from "@/stores/titleStore.js";

useTitleStore().setTitle('数字化工厂线上运营中心')
useTitleStore().setDescription('iDMS PaaS System')
</script>

<style lang="scss" scoped>
div {
  height: 90vh;
  width: 100%;
  overflow: hidden;
}

h1, p {
  color: white;
  text-align: center;
}

h1{
  letter-spacing: 6px;
}

:deep(a) {
  text-decoration: none;
}
</style>