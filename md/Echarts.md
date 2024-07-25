# ECharts 图表笔记



> 官方文档：

[图例](https://echarts.apache.org/handbook/zh/concepts/legend) -可以点击图例显示与隐藏

[坐标轴](https://echarts.apache.org/handbook/zh/concepts/axis) -直角坐标系中的 x/y 轴

[堆叠柱状图](https://echarts.apache.org/handbook/zh/how-to/chart-types/bar/stacked-bar) -上下可以堆叠柱状图数据





## 1. 饼图（Pie Chart）

### 主要配置项：
```js
{
    series: [{
        type: 'pie',
        data: [
            { value: 235, name: '三天以上' },
            { value: 274, name: '两天内' },
            { value: 310, name: '一天内' }
        ]
    }]
}
```

### 主要配置项：
- `series.type: 'pie'`
- `series.data`: 数据数组，每个元素包含 `value` 和 `name`

### 关键属性：
- `radius`: `['30%', '45%']` // 内外半径，形成环形图
- `center`: `['50%', '50%']` // 中心位置
- `startAngle`: `60` // 起始角度
- `color`: `['#7f2a2a', '#ff5858', '#fbfe27']` // 每个扇形的颜色

- `label`:复杂的标签格式化

```js
label: {
    formatter: '{value|{c}}\n{name|{b}}',
    rich: {
        name: { fontSize: 14, color: '#fff' },
        value: { fontSize: 18, fontWeight: 600, color: '#FEF000' }
    }
}
```

- `emphasis`:鼠标悬停效果

```js
emphasis: {
    itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
}
```



### 特殊效果：
- `roseType`: 设置成 "radius" 可以制作南丁格尔玫瑰图
- `itemStyle`: 为扇形添加阴影效果

```
itemStyle: {
    shadowBlur: 20,
    shadowColor: '#FFA07A'
}
```



## 2. 复合柱状图和折线图

### 主要配置项：
- `xAxis`: X 轴配置
- `yAxis`: Y 轴配置（可以有多个）
- `series`: 系列数据，包含多个图表类型

```js
{
    xAxis: [{ type: 'category', data: ['1/1', '1/2', '1/3', ...] }],
    yAxis: [{ type: 'value' }, { type: 'value' }],
    series: [
        { type: 'bar', name: 'NG批次数', data: [...] },
        { type: 'bar', name: 'PASS批次数', data: [...] },
        { type: 'line', name: '上班人数', data: [...] },
        { type: 'line', name: '打卡工时', data: [...] }
    ]
}
```

### 柱状图（Bar Chart）配置：
- `series.type: 'bar'`
- `barMaxWidth`: 柱子最大宽度
- `barGap`: 柱子之间的间距
- `stack`: 堆叠配置

```js
{
    type: 'bar',
    barMaxWidth: 25,  // 柱子最大宽度
    barGap: 0.3,  // 柱子之间的间距
    stack: 'bar',  // 堆叠配置
    itemStyle: { color: '#ff5858' }  // 柱子颜色
}
```

### 折线图（Line Chart）配置：
- `series.type: 'line'`
- `smooth`: 是否平滑曲线
- `symbolSize`: 数据点大小
- `lineStyle.width`: 线条宽度

```js
{
    type: 'line',
    smooth: true,  // 平滑曲线
    symbolSize: 3,  // 数据点大小
    lineStyle: { width: 2 },  // 线条宽度
    itemStyle: { color: '#00d6e1' }  // 线条颜色
}
```

### 关键属性：
- `tooltip`: 提示框配置

```js
tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    formatter: (params) => { ... }  // 自定义提示框内容
}
```

- `legend`: 图例配置

```js
legend: {
    right: '10px',
    data: ['PASS批次数', 'NG批次数', '上班人数', '打卡工时'],
    textStyle: { color: '#fff' }
}
```

- `grid`: 布局网格配置

```js
grid: {
    top: '35%',
    right: '1%',
    left: '1%',
    bottom: '15%'
}
```

- `dataZoom`: 数据缩放配置

```js
dataZoom: [{
    type: 'slider',
    height: 7,
    bottom: 0,
    startValue: 0,
    endValue: 18
}]
```

- `itemStyle`: 图形样式
- `label`: 标签配置

### 坐标轴（xAxis/yAxis）重要属性：
- `type`: 轴类型（'category'/'value'）
- `position`: 位置
- `axisLine`: 轴线配置
- `axisTick`: 刻度配置
- `axisLabel`: 轴标签配置
- `splitLine`: 分隔线配置



- xAxis

```js
xAxis: [{
    type: 'category',
    axisLabel: {
        color: '#b9bec6',
        interval: 0,
        fontSize: 12,
        formatter: (value) => value.length > 9 ? `${value.slice(0, 9)}...` : value
    },
    axisLine: { show: true, lineStyle: { color: '#0a3e98' } },
    axisTick: { show: false },
    splitLine: { show: false }
}]
```

- yAxis

```js
yAxis: [{
    type: 'value',
    min: 0,
    axisLine: { lineStyle: { color: '#0a3e98' } },
    axisTick: { show: false },
    splitLine: {
        show: true,
        lineStyle: { color: 'rgba(255,255,255,.2)', type: 'dotted' }
    },
    axisLabel: { formatter: '{value}', color: 'transparent' }
}]
```



------

## OQC-Claude解析

这个代码中使用了多个图表,主要是使用了ECharts图表库。以下是使用的主要图表类型及其属性:

1. 待检时长图 (optionDJ)
- 类型:饼图(pie chart)
- 主要属性:
  - title: 中心显示总数
  - tooltip: 鼠标悬停提示
  - series: 定义饼图数据和样式
  - label: 定义标签样式
  - itemStyle: 定义扇形样式

2. 每日数据汇总图 (optionRJTZ)
- 类型:柱状图(bar chart)和折线图(line chart)组合
- 主要属性:
  - dataZoom: 数据缩放
  - tooltip: 鼠标悬停提示
  - legend: 图例
  - xAxis/yAxis: x轴和y轴设置
  - series: 定义多个系列的数据和样式

3. NG批次汇总图 (ngReworkOption)
- 类型:堆叠柱状图(stacked bar chart)
- 主要属性:
  - dataZoom: 数据缩放
  - tooltip: 自定义的复杂提示框
  - xAxis/yAxis: x轴和y轴设置
  - series: 定义两个堆叠的柱状图系列

4. 报检人不良占比图 (optionGYlv)
- 类型:堆叠柱状图(stacked bar chart)
- 主要属性:
  - dataZoom: 数据缩放
  - tooltip: 自定义的复杂提示框
  - xAxis/yAxis: x轴和y轴设置
  - series: 定义两个堆叠的柱状图系列

5. 产品不良占比图 (optionlxlv)
- 类型:堆叠柱状图(stacked bar chart)
- 主要属性:
  - dataZoom: 数据缩放
  - tooltip: 自定义的复杂提示框
  - xAxis/yAxis: x轴和y轴设置
  - series: 定义两个堆叠的柱状图系列

6. NG批次周汇总图 (optionNGs)
- 类型:堆叠柱状图(stacked bar chart)
- 主要属性:
  - dataZoom: 数据缩放
  - tooltip: 自定义的复杂提示框
  - xAxis/yAxis: x轴和y轴设置
  - series: 定义两个堆叠的柱状图系列

这些图表都使用了自定义的颜色、字体大小、标签样式等来适应特定的设计需求。它们还广泛使用了 tooltip 来提供详细的数据信息,dataZoom 来处理大量数据,以及自定义的 formatter 函数来格式化标签和提示框内容。

------



## 自记

[图例](https://echarts.apache.org/handbook/zh/concepts/legend)

[坐标轴](https://echarts.apache.org/handbook/zh/concepts/axis) -直角坐标系中的 x/y 轴

[堆叠柱状图](https://echarts.apache.org/handbook/zh/how-to/chart-types/bar/stacked-bar) -上下可以堆叠柱状图数据



### xAxis 属性

`xAxis` 控制图表的水平轴，常用于显示类别数据或时间序列。

- `type`: 轴的类型，通常是 `'category'` 对于类别数据或 `'time'` 对于时间数据。
- `data`: 包含所有轴标签的数组。
- `axisLabel`: 定义轴标签的外观和行为，例如颜色、字体大小、间隔、格式化函数等。
- `axisLine`: 控制轴线的显示和样式，如颜色和宽度。
- `axisTick`: 定义轴上刻度的显示和样式。
- `triggerEvent`: 设置为 `true` 以启用轴标签的交互事件。

### yAxis 属性

`yAxis` 控制图表的垂直轴，用于表示数值范围。

- `type`: 轴类型，通常为 `'value'`，表示数值轴。
- `min` 和 `max`: 设置轴的最小值和最大值。
- `splitLine`: 控制轴中分隔线的显示和样式。
- `axisLabel`: 设置轴标签的格式、颜色等。
- `axisLine` 和 `axisTick`: 同 `xAxis`，用于控制轴线和刻度的显示样式。

### series 属性

`series` 是一组定义图表如何显示数据的配置项。每个对象代表图表中的一个数据系列。

- `type`: 系列类型，如 `'bar'`（柱状图）、`'line'`（线图）、`'scatter'`（散点图）等。
- `data`: 系列数据，通常是一个数值数组。
- `name`: 系列名称，用于图例（legend）和提示框（tooltip）。
- `stack`: 如果要将多个条形图系列堆叠在一起，使用此属性。
- `label`: 定义数据标签的显示方式和格式。
- `itemStyle` 和 `lineStyle`: 控制系列的视觉样式，如颜色、线宽等。
- `yAxisIndex`: 指定系列使用哪个 y 轴（多轴场景中）。



底部滑动条：

https://echarts.apache.org/zh/option.html#dataZoom-slider



```js
// 数据缩放组件配置
dataZoom: [
  {
    type: 'slider',          // 滑动条型数据区域缩放组件  inside直接触碰或鼠标滑 slider滑动条
    height: 20,              // 组件高度
    backgroundColor: "transparent",  // 背景透明
    borderColor: "transparent",      // 边框透明
    bottom: 0,               // 组件位于底部
    textStyle: {
      color: "transparent",  // 文本颜色透明
    },
    zoomLock: true,          // 锁定选择区域大小
    startValue: 0,           // 数据窗口范围的起始值
    endValue: 18,            // 数据窗口范围的结束值，此处设置显示到第19条
    show: true,              // 显示滑动条
    moveHandleSize: 20,      // 移动手柄尺寸高度
  //brushSelect: false,      // 禁用刷选，因为height=moveHandleSize  所以可以不写
  }
]
```





```js
// 提示框配置
tooltip: {
  trigger: 'axis',           // 触发类型：坐标轴触发
  axisPointer: {
    type: 'cross'
  }
  //'line' 直线指示器   'shadow' 阴影指示器    'none' 无指示器    'cross' 十字准星指示器。
},
```





```js
// 图例配置 tip：图例要和后面实际数据对应 不然会不显示
legend: {
  show: true,                // 显示图例
  right: "10px",             // 右侧距离
  width: "100%",             // 宽度
  data: ['PASS批次数', 'NG批次数', '上班人数', '打卡工时'],  // 图例项
  textStyle: {
    color: "#fff"            // 图例文字颜色
  },
},
```





```js
// 绘图网格配置
grid: {
  top: "35%",                // 上边距
  right: "1%",               // 右边距
  left: "1%",                // 左边距
  bottom: "15%",             // 下边距
},
```





```js
// X轴配置
xAxis: [
  {
    triggerEvent: true,      // 开启事件触发
    type: 'category',        // 类目轴 https://echarts.apache.org/zh/option.html#xAxis.type
    axisLabel: {			 // 坐标轴刻度标签 https://echarts.apache.org/zh/option.html#xAxis.axisLabel
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
    axisLine: {				 // 坐标轴轴线
      show: true,			 // 显示
      lineStyle: {
        color: "#0a3e98",    // 轴线颜色
      },
    },
    axisTick: {				 // 坐标轴刻度
      show: false,           // 不显示刻度
    },
    // 类目数据 https://echarts.apache.org/zh/option.html#xAxis.data
    data: Array.from({length: 31}, (_, i) => `${i + 1}日`)  // 生成31天的数据
  }
],
```



```js
// 关于X轴配置的类目数据补充
// from https://echarts.apache.org/zh/option.html#xAxis.data
// 所有类目名称列表
data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
// 每一项也可以是具体的配置项，此时取配置项中的 `value` 为类目名
data: [{
    value: '周一',
    // 突出周一
    textStyle: {
        fontSize: 20,
        color: 'red'
    }
}, '周二', '周三', '周四', '周五', '周六', '周日']
```





```js
// Y轴配置
yAxis: [
  {
    type: 'value',           // 数值轴
    min: 0,                  // 最小值
    axisLine: {				 // 坐标轴轴线
      show: true,			 // 显示
      lineStyle: {
        color: "#0a3e98",    // 轴线颜色
      },
    },
    axisTick: {
      show: false,           // 不显示刻度
    },
    splitLine: {
      show: true,			 // 是否显示分隔线
      lineStyle: {
        color: "rgba(255,255,255,.2)",  // 分隔线颜色
        type: "dotted",      // 分隔线类型  `solid`-实线 `dashed`-虚线 `dotted`-点线
      },
    },
    axisLabel: {			 //todo 
      // 地址:https://echarts.apache.org/zh/option.html#yAxis.axisLabel.formatter
      formatter: "{value}单位",  // 标签格式 value后接单位 
      color: "transparent",  // 标签颜色透明
      // color: "rgba(0, 0, 0, 0)" 同理透明
    },
  },
  // 另外一个折线数据
  {
    type: 'value',           // 数值轴
    min: 0,                  // 最小值
    max: 10,                 // 最大值
    position: 'left',        // 位置
    axisLine: {
      lineStyle: {
        color: "#0a3e98",    // 轴线颜色
      },
    },
    axisTick: {				 // 坐标轴刻度
      show: false,           // 不显示刻度
    },
    splitLine: {
      show: false,           // 不显示分隔线
    },
    axisLabel: {
      formatter: "{value}",  // 标签格式
      color: "transparent",  // 标签颜色透明
    },
  }
],
```





```js
// 系列列表配置
series: [
  {
    yAxisIndex: 0,           // 使用第一个Y轴
    name: 'NG批次数',
    type: 'bar',             // 柱状图
    stack: 'bar',            // 堆叠
    barMaxWidth: 25,         // 最大宽度
    barGap: 0.3,             // 柱间距离
    itemStyle: {
      color: "#ff5858",      // 柱子颜色
    },
    label: {
      show: false,           // 不显示标签
    },
    data: Array.from({length: 31}, () => Math.floor(Math.random() * 10))  // 生成随机数据
  },
  {
    yAxisIndex: 0,           // 使用第一个Y轴
    name: 'PASS批次数',
    type: 'bar',             // 柱状图
    stack: 'bar',            // 堆叠
    barMaxWidth: 25,         // 最大宽度
    barGap: 0.3,             // 柱间距离
    itemStyle: {
      color: "rgba(73, 188, 247,1)",  // 柱子颜色
    },
    label: {
      show: true,            // 显示标签
      position: 'top',       // 标签位置
      formatter: function (params) {  // 自定义标签内容
        let ngValue = params.data + Math.floor(Math.random() * 10);
        let peopleValue = Math.floor(Math.random() * 30) + 10;
        let workHourValue = (Math.random() * 2 + 7).toFixed(1);
        return `${ngValue}\n${params.value}\n${peopleValue}\n${workHourValue}`;
      },
      rich: {                // 富文本样式
        a: {
          color: "#F00",
          fontWeight: 900,
        },
        b: {
          color: "#FFFF00",
          fontSize: 11,
        },
        c: {
          color: "#eee",
          fontSize: 11,
          fontFamily: "wdch",
        },
        d: {
          color: "rgba(255,255,255,0.5)",
          fontSize: 11,
        },
      },
      fontSize: 12,
      color: "rgba(255,255,255,0.5)",
      align: "right",
      padding: [0, -10, 0, 0],
    },
    data: Array.from({length: 31}, () => Math.floor(Math.random() * 50 + 30))  // 生成随机数据
  },
  {
    yAxisIndex: 0,           // 使用第一个Y轴
    name: '上班人数',
    type: 'line',            // 折线图
    symbolSize: 3,           // 标记大小
    smooth: true,            // 平滑曲线
    itemStyle: {
      color: "#00d6e1",      // 线条颜色
    },
    label: {
      show: false,           // 不显示标签
    },
    lineStyle: {
      width: 2,              // 线宽
    },
    data: Array.from({length: 31}, () => Math.floor(Math.random() * 30 + 10))  // 生成随机数据
  },
  {
    yAxisIndex: 1,           // 使用第二个Y轴
    name: '打卡工时',
    type: 'line',            // 折线图
    symbolSize: 3,           // 标记大小
    smooth: true,            // 平滑曲线
    itemStyle: {
      color: "#99cc00",      // 线条颜色
    },
    label: {
      show: false,           // 不显示标签
    },
    lineStyle: {
      width: 2,              // 线宽
    },
    data: Array.from({length: 31}, () => (Math.random() * 2 + 7).toFixed(1))  // 生成随机数据
  }
]
```



