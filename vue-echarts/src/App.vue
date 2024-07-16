<template>
  <div id="cmodule">
    <!-- 导航栏 -->
    <el-container>
      <NavMemu />
      <!-- 主体头部 -->
      <el-container>
        <el-header><div class="header-title">Echarts图表展示</div></el-header>
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

<style scoped>
.header-title{
  color: purple;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  height: 70px;
  line-height: 70px;
  /* border: solid 1px rgb(255, 0, 0); */
}
</style>