<template>
  <div>
    <div ref="chart" class="chartCss"></div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import * as echarts from 'echarts'

const chart = ref()
const option = {
  title: {
    text: '柱状图示例'
  },
  tooltip: {
    show: true,
    position: 'top',
  },
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20],
    label:{
      show: true,
      position: 'top',
      fontSize: 20,
      color: 'purple'
    }
  }]
}
onMounted(() => {
  initChart();
})
const initChart = () => {
  const myChart = echarts.init(chart.value)
  myChart.setOption(option)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}
</script>

<style scoped></style>