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
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross' }
  },
  legend: {
    type: 'scroll',
    orient: 'horizontal',
    right: 'center',
    top: 'top',
    data: ['降水量', '温度']
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ]
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '降水量',
      min: 0,
      max: 250,
      position: 'right',
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: '温度',
      min: 0,
      max: 25,
      position: 'left',
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
  series: [
    {
      name: '降水量',
      type: 'bar',
      yAxisIndex: 0,
      data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3]
    },
    {
      name: '温度',
      type: 'line',
      smooth: true,
      yAxisIndex: 1,
      data: [
        6.0,
        10.2,
        10.3,
        11.5,
        10.3,
        13.2,
        14.3,
        16.4,
        18.0,
        16.5,
        12.0,
        5.2
      ]
    }
  ]
};
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