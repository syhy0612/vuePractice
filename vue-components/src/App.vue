<!--
 * @Author: cjh
 * @Date: 2024-07-05 15:57:36
 * @LastEditors: cjh
 * @LastEditTime: 2024-07-06 09:04:19
 * @FilePath: \Vue_lianxi\vue-components\src\App.vue
 * @Description: 文件描述
-->
<template>
  <div>
    <!-- 第二步：显示组件 -->
    <!-- <MyComponent /> -->
    <!-- <Header />
    <Main />
    <Aside /> -->
    <Parent />
  </div>
</template>

<script setup>
//第一步：引入控件
import MyComponent from "./components/MyComponent.vue";
// import Header from "./pages/Header.vue";
// import Header from "./pages/Header.vue";
import Main from "./pages/Main.vue";
import Aside from "./pages/Aside.vue";
import Parent from "./components/Parent.vue";
import Chird from "./components/Chird.vue";
</script>

<style></style>
