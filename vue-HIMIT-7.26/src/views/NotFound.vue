<template>
  <div>
    <br/><b>该页面不存在~<br/>3秒后会跳转到主页</b>
  </div>
</template>

<script setup>
import {useTitleStore} from "@/stores/titleStore.js";

useTitleStore().setTitle('404')
useTitleStore().setDescription('Not Found~')
</script>

<style lang="scss" scoped>
div {
  color: white;
  font-size: 40px;
  text-align: center;
  height: 90vh;
}
</style>