<!--
 * @Author: cjh
 * @Date: 2024-07-15 10:25:57
 * @LastEditors: cjh
 * @LastEditTime: 2024-07-15 11:19:40
 * @FilePath: \Vue_lianxi\vue-lx-1\src\components\TuBiao.vue
 * @Description: 文件描述
-->
<template>
  <div id="myChart" style="width: 600px; height: 400px;"></div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue';

onMounted(() => {
  const instance = getCurrentInstance();
  const echarts = instance.appContext.config.globalProperties.$echarts;

  // 获取图表容器
  const chartDom = document.getElementById('myChart');
  // 初始化图表
  const myChart = echarts.init(chartDom);
  // 设置图表的配置项和数据
  const option = {
    title: {
      text: '游戏场次',
      subtext: 'by lsw', // 副标题文本
      left: 'center', // 水平居中
      // top: 'top', // 垂直居中
      // textStyle: {
      //   color: '#333', // 文字颜色
      //   fontStyle: 'normal', // 文字样式
      //   fontWeight: 'bold', // 文字粗细
      //   fontFamily: 'sans-serif', // 字体
      //   fontSize: 24, // 字体大小
      //   align: 'center', // 水平对齐方式
      //   verticalAlign: 'middle', // 垂直对齐方式
      //   lineHeight: 30, // 行高
      //   textBorderColor: '#000', // 文字边框颜色
      //   textBorderWidth: 2, // 文字边框宽度
      //   textShadowColor: 'rgba(0, 0, 0, 0.5)', // 文字阴影颜色
      //   textShadowBlur: 10, // 文字阴影模糊度
      //   textShadowOffsetX: 3, // 文字阴影水平偏移
      //   textShadowOffsetY: 3, // 文字阴影垂直偏移
      // },
      // subtextStyle: {
      //   color: '#999', // 副标题文字颜色
      //   fontStyle: 'italic', // 副标题文字样式
      //   fontWeight: 'normal', // 副标题文字粗细
      //   fontFamily: 'sans-serif', // 副标题字体
      //   fontSize: 18, // 副标题字体大小
      //   align: 'center', // 副标题水平对齐方式
      //   verticalAlign: 'middle', // 副标题垂直对齐方式
      //   lineHeight: 20, // 副标题行高
      // },
      // padding: [20, 20, 20, 20], // 标题的内边距 [上, 右, 下, 左]
      // itemGap: 10, // 主副标题间距
      // backgroundColor: 'rgba(255, 255, 255, 0.8)', // 背景颜色
      // borderColor: '#ccc', // 边框颜色
      // borderWidth: 1, // 边框宽度
      // shadowColor: 'rgba(0, 0, 0, 0.5)', // 阴影颜色
      // shadowBlur: 10, // 阴影模糊度
      // shadowOffsetX: 3, // 阴影水平偏移
      // shadowOffsetY: 3, // 阴影垂直偏移
    },
    tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [{
    name: '胜率',
    type: 'pie', // 饼图
    radius: '50%', // 饼图半径
    data: [
      {value: 5, name: '标准场'},
      {value: 20, name: '镜隐迷踪'},
      {value: 36, name: '奇迹商人'},
      {value: 10, name: '狼美人骑士'},
      {value: 10, name: '觉醒狼王'},
      {value: 20, name: '孤独少女'},
      {value: 10, name: '丘比特奇缘'}
    ]
  }]
  };

  // 使用刚指定的配置项和数据显示图表
  myChart.setOption(option);
});
</script>