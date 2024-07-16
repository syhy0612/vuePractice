<template>
  <div>
    <el-aside width="200px">
      <el-menu class="el-menu-vertical-demo" 
      default-active="/about">
        <el-menu-item :index="v.index" v-for="v in data" :key="v.index">
          <el-icon><icon-menu /></el-icon>
          <span>{{ v.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script setup>
import { ElIcon } from 'element-plus'
import {ref} from 'vue'

const data =ref([
  {index:'/home',name:'首页'},
  {index:'/about',name:'关于'},
  {index:'/echarts',name:'图表'},
])

</script>


<style scoped>
</style>
