<template>
  <div>
    <div ref="chart" style="height:600px;width:400px"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const chart = ref()

onMounted(() => {
  const myChart = echarts.init(chart.value)
  const option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar', // 如果是柱状图，需要指定类型
      data: [5, 20, 36, 10, 10, 20] // 对应 xAxis 的数据，确保一一对应
    }]
  }
  myChart.setOption(option)
})
</script>

<style scoped></style>