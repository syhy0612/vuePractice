<template>
  <div>
    <div :ref="chart" style="height:600px;width:400px"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const chart = ref(null)
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
    }]
  }
  myChart.setOption(option)
})
</script>

<style scoped></style>