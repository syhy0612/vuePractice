<template>
  <div id="cmodule">
    <!-- 导航栏 -->
    <el-container>
      <NavMemu />
      <!-- 主体头部 -->
      <el-container>
        <el-header>图表展示</el-header>
        <!-- 主体内容 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import NavMemu from './views/NavMemu.vue';


</script>

<style lang="scss" scoped></style>