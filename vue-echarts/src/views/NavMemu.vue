<template>
  <div>
    <el-aside width="200px">
      <el-menu class="el-menu-vertical-demo" @select="handleSelect" :default-active="currentRoutePath">
        <el-menu-item :index="v.path" v-for="v in data" :key="v.path">
          <el-icon><IconMenu /></el-icon>
          <span>{{ v.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElIcon } from 'element-plus'
import { Menu as IconMenu } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()

const data = ref([
  { path: '/home', name: '首页' },
  { path: '/about', name: '关于' },
  { path: '/echartsBar', name: '柱状图' },
  { path: '/echartsLine', name: '折线图' },
  { path: '/echartsPie', name: '饼状图' },
  { path: '/echartsScatter', name: '散点图' },
  { path: '/echartsMap', name: '地图' },
  { path: '/echartsGauge', name: '仪表盘' },
  { path: '/echartsRadar', name: '雷达图' },
  { path: '/echartsFunnel', name: '漏斗图' },
  { path: '/others', name: '其他' }
])

const currentRoutePath = ref('')

onMounted(() => {
  currentRoutePath.value = route.path
})

const handleSelect = (index) => {
  router.push(index)
}
</script>

<style scoped>
</style>
