<template>
  <div class="container">
    <div class="leftBox">
      <echarts :chartOptions="waitingTimeForInspection"/>
    </div>
    <div class="rightBox">
      <echarts/>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import echarts from './echarts.vue'

const waitingTimeForInspection = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [{value: 2, name: 'Search Engine'}]
    }
  ]

});
</script>

<style lang="scss" scoped>
.container {
  display: flex; //设置弹性布局
  height: 790px; //设置固定高度
}

.leftBox {
  flex: 5.5;
  background-color: rgba(16, 27, 49, .6);
  //width: 90%;
}

.rightBox {
  flex: 4.5;
  background-color: rgba(16, 27, 49, .6);
}
</style>