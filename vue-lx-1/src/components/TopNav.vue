<!--
 * @Author: cjh
 * @Date: 2024-07-10 14:49:18
 * @LastEditors: cjh
 * @LastEditTime: 2024-07-10 15:23:22
 * @FilePath: \vue-lx-1\src\components\TopNav.vue
 * @Description: 文件描述
-->
<template>
  <div class="nav">
    <router-link to="/home"><b>首页</b></router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nav {
  width: 100%;
  height: 50px;
  background-color: blue;
  line-height: 50px;
}
.nav b {
  float: right;
  color: white;
  margin-right: 20px;
}
</style>