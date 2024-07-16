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
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
  myChart.setOption(option)
})
</script>

<style scoped></style>