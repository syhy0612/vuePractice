<!--
 * @Author: cjh
 * @Date: 2024-07-10 14:47:08
 * @LastEditors: cjh
 * @LastEditTime: 2024-07-10 16:57:51
 * @FilePath: \vue-lx-1\src\pages\Login.vue
 * @Description: 文件描述
-->
<template>
  <div>
    <h2 class="sy">登录页面</h2>
    <ComponentLoginVue />
  </div>
</template>

<script setup>
import ComponentLoginVue from "@/components/ComponentLogin.vue";

//业务逻辑------------分割线
console.log("目前暂设默认密码为123456");

</script>

<style lang="scss" scoped>
</style>