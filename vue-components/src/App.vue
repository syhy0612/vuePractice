<template>
  <div>
    <!-- 第二步：显示组件 -->
    <!-- <MyComponent /> -->
    <Header />
    <Main />
    <Aside />
  </div>
</template>

<script setup>
//第一步：引入控件
import MyComponent from "./components/MyComponent.vue";
// import Header from "./pages/Header.vue";
import Header from "./pages/Header.vue";
import Main from "./pages/Main.vue";
import Aside from "./pages/Aside.vue";
</script>

<style></style>
