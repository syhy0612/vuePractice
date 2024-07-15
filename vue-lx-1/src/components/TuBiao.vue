<template>
  <div>
    <div class="chart">
      <Echarts :option="barOption" class="bar-chart"></Echarts>
    </div>
    <div class="chart">
      <Echarts :option="pieOption" class="pie-chart"></Echarts>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const info = ref([
  { name: 'Mon', value: 120 },
  { name: 'Tue', value: 200 },
  { name: 'Wed', value: 150 },
  { name: 'Thu', value: 80 },
  { name: 'Fri', value: 70 },
  { name: 'Sat', value: 110 },
  { name: 'Sun', value: 130 }
]);

const lrs = [
  { value: 5, name: '标准场' },
  { value: 20, name: '镜隐迷踪' },
  { value: 36, name: '奇迹商人' },
  { value: 10, name: '狼美人骑士' },
  { value: 10, name: '觉醒狼王' },
  { value: 20, name: '孤独少女' },
  { value: 10, name: '丘比特奇缘' }
];

const barOption = {
  title: {
    text: '柱状图示例',
    subtext: '柱状图示例',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    data: info.value.map(item => item.name),
    axisLabel: {
      color: 'black',
      fontSize: 12
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: 'black',
      fontSize: 12
    }
  },
  series: [
    {
      data: info.value.map(item => item.value),
      type: 'bar'
    }
  ]
};

const pieOption = {
  title: {
    text: '玩家爱好版型',
    subtext: 'by刘诗望',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [{
    name: '数据',
    type: 'pie',
    radius: '50%',
    data: lrs
  }]
};
</script>

<style scoped>
.chart {
  width: 600px;
  height: 400px;
  margin-bottom: 20px;
}
</style>
