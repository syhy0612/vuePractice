<template>
  <div>
    <el-aside width="200px">
      <el-menu class="el-menu-vertical-demo" default-active="/home" @select="handleSelect">
        <el-menu-item :index="v.index" v-for="v in data" :key="v.index">
          <el-icon><IconMenu /></el-icon>
          <span>{{ v.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElIcon } from 'element-plus'
import { Menu as IconMenu } from '@element-plus/icons-vue'

const router = useRouter()

const data = ref([
  { index: '/home', name: '首页' },
  { index: '/about', name: '关于' },
  { index: '/echarts', name: '图表' }
])

const handleSelect = (index) => {
  router.push(index) // 点击时跳转到对应路由
}
</script>

<style scoped>
</style>
