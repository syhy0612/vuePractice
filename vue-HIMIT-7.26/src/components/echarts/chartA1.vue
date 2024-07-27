<template>
  <div>
    <EchartsBase :chart-options="option"/>
  </div>
</template>

<script setup>
import EchartsBase from "@/components/echarts/echartsBase.vue";
import dailyDataImport from '../../assets/data/dailyData.json'

const dailyData = dailyDataImport
const option = {
  // 数据缩放组件配置
  dataZoom: [
    {
      type: 'slider',          // 滑动条型数据区域缩放组件
      height: 7,               // 组件高度
      backgroundColor: "transparent",  // 背景透明
      borderColor: "transparent",      // 边框透明
      bottom: 0,               // 组件位于底部
      textStyle: {
        color: "transparent",  // 文本颜色透明
      },
      zoomLock: true,          // 锁定选择区域大小
      startValue: 0,           // 数据窗口范围的起始值
      endValue: 18,            // 数据窗口范围的结束值，默认显示前19天
      moveHandleSize: 7,      // 移动手柄尺寸高度
      show: true,              // 显示滑动条
    }
  ],

  // 提示框配置
  /*tooltip: {
    trigger: 'axis',           // 触发类型：坐标轴触发
    axisPointer: {
      type: 'shadow'
    }
    //'line' 直线指示器   'shadow' 阴影指示器    'none' 无指示器    'cross' 十字准星指示器。
  },*/
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    textStyle: {
      align: 'left'  // 设置文本左对齐
    },
  },

  // 图例配置
  legend: {
    show: true,                // 显示图例
    right: "0px",             // 右侧距离
    // left:"center",              // 水平居中
    width: "100%",           // 宽度
    data: ['PASS批次数', 'NG批次数', '上班人数', '打卡工时'],  // 图例项
    textStyle: {
      color: "#fff"              // 图例文字颜色
    },
  },

  // 绘图网格配置
  grid: {
    top: "35%",
    right: "0%",
    left: "0%",
    bottom: "15%",
  },

  // X轴配置
  xAxis: [
    {
      triggerEvent: true,      // 开启事件触发
      type: 'category',        // 类目轴
      axisLabel: {
        color: "#b9bec6",      // 轴标签颜色
        interval: 0,           // 全部显示
        fontSize: 12,          // 字体大小
        formatter: function (value) {  // 自定义标签内容
          if (value.length > 9) {
            return `${value.slice(0, 9)}...`;
          }
          return value;
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#0a3e98",    // 轴线颜色
        },
      },
      axisTick: {
        show: false,           // 不显示刻度
      },
      // data: Array.from({length: 31}, (_, i) => `${i + 1}日`)  // 生成31天的数据
      data: dailyData.map(item => item.日期)
    }
  ],

  // Y轴配置
  yAxis: [
    {
      type: 'value',           // 数值轴
      min: 0,                  // 最小值
      axisLine: {
        lineStyle: {
          color: "#0a3e98",    // 轴线颜色
        },
      },
      axisTick: {
        show: false,           // 不显示刻度
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,.2)",  // 分隔线颜色
          type: "dotted",      // 分隔线类型
        },
      },
      axisLabel: {
        // formatter: "{value}cm",  // 标签格式
        color: "transparent",  // 标签颜色透明
      },
    },
    {
      type: 'value',           // 数值轴
      min: 0,                  // 最小值
      max: Math.max(...dailyData.map(item => item.打卡工时)) * 2.2,
      position: 'right',        // 位置
      axisLine: {
        lineStyle: {
          color: "#0a3e98",    // 轴线颜色
        },
      },
      axisTick: {
        show: false,           // 不显示刻度
      },
      splitLine: {
        show: false,           // 不显示分隔线
      },
      axisLabel: {
        // formatter: "{value}mc",  // 标签格式
        color: "transparent",  // 标签颜色透明
      },
    }
  ],

  // 系列列表配置
// series 配置
  series: [
    {
      yAxisIndex: 0,
      name: 'NG批次数',
      type: 'bar',
      stack: 'bar',
      barMaxWidth: 25,
      barGap: 0.3,
      itemStyle: {
        color: "#ff5858",
      },
      label: {
        show: false,
      },
      // 修改: 使用dailyData中的nG数量数据
      data: dailyData.map(item => item.nG数量)
    },
    {
      yAxisIndex: 0,
      name: 'PASS批次数',
      type: 'bar',
      stack: 'bar',
      barMaxWidth: 25,
      barGap: 0.3,
      itemStyle: {
        color: "rgba(73, 188, 247,1)",
      },
      label: {
        show: true,
        position: 'top',
        formatter: function (params) {
          // 修改: 使用实际数据而不是随机生成
          let ngValue = dailyData[params.dataIndex].nG数量;
          let passValue = dailyData[params.dataIndex].oK数量;
          let peopleValue = dailyData[params.dataIndex].上班人数;
          let workHourValue = dailyData[params.dataIndex].打卡工时;
          // 根据NG数量决定使用哪种样式
          let ngStyle = ngValue > 0 ? 'ng' : 'normal';
          return `{${ngStyle}|${ngValue}}\n{normal|${passValue}}\n{normal|${peopleValue}}\n{normal|${workHourValue}}`;
        },
        rich: {
          ng: {
            color: "#F00",
            fontWeight: 900,
            fontSize: 12,
          },
          normal: {
            color: "rgba(255,255,255,0.5)",
            fontSize: 12,
          }
        },
        fontSize: 12,
        color: "rgba(255,255,255,0.5)",
        align: "right",
        padding: [0, -10, 0, 0],
      },
      data: dailyData.map(item => item.oK数量 || 0)
    },
    {
      yAxisIndex: 0,
      name: '上班人数',
      type: 'line',
      symbolSize: 3,
      smooth: true,
      itemStyle: {
        color: "#00d6e1",
      },
      label: {
        show: false,
      },
      lineStyle: {
        width: 2,
      },
      data: dailyData.map(item => item.上班人数)
    },
    {
      yAxisIndex: 1,
      name: '打卡工时',
      type: 'line',
      symbolSize: 3, //折点大小
      smooth: true,  //折线平滑
      itemStyle: {
        color: "#99cc00",
      },
      label: {
        show: false,
      },
      lineStyle: {
        width: 2,
      },
      data: dailyData.map(item => item.打卡工时)
    }
  ]
};
</script>

<style scoped>
div{
  height: 100%;
  width: 100%;
}
</style>