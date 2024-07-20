<template>
  <div ref="chart" class="chartCss"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  chartOptions: {
    type: Object,
    required: true
  }
});

const chart = ref(null);

const initChart = () => {
  if (chart.value) {
    const myChart = echarts.init(chart.value);
    myChart.setOption(props.chartOptions);
    window.addEventListener('resize', () => {
      myChart.resize();
    });
  }
};

// 初始化图表
onMounted(() => {
  initChart();
});

// 监听 chartOptions 的变化并更新图表
watch(() => props.chartOptions, (newOptions) => {
  if (chart.value) {
    const myChart = echarts.init(chart.value);
    myChart.setOption(newOptions);
  }
}, { deep: true });
</script>

<style scoped>
.chartCss {
  height: 600px;
  width: 80%;
}
</style>
