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



## 自记

[图例](https://echarts.apache.org/handbook/zh/concepts/legend)





[坐标轴](https://echarts.apache.org/handbook/zh/concepts/axis) -直角坐标系中的 x/y 轴

[堆叠柱状图](https://echarts.apache.org/handbook/zh/how-to/chart-types/bar/stacked-bar) -上下可以堆叠柱状图数据









这个代码中使用了多个图表,主要是使用了ECharts图表库。以下是使用的主要图表类型及其属性:

1. 待检时长图 (optionDJ)

- 类型:饼图(pie chart)
- 主要属性:
  - title: 中心显示总数
  - tooltip: 鼠标悬停提示
  - series: 定义饼图数据和样式
  - label: 定义标签样式
  - itemStyle: 定义扇形样式

1. 每日数据汇总图 (optionRJTZ)

- 类型:柱状图(bar chart)和折线图(line chart)组合
- 主要属性:
  - dataZoom: 数据缩放
  - tooltip: 鼠标悬停提示
  - legend: 图例
  - xAxis/yAxis: x轴和y轴设置
  - series: 定义多个系列的数据和样式

1. NG批次汇总图 (ngReworkOption)

- 类型:堆叠柱状图(stacked bar chart)
- 主要属性:
  - dataZoom: 数据缩放
  - tooltip: 自定义的复杂提示框
  - xAxis/yAxis: x轴和y轴设置
  - series: 定义两个堆叠的柱状图系列

1. 报检人不良占比图 (optionGYlv)

- 类型:堆叠柱状图(stacked bar chart)
- 主要属性:
  - dataZoom: 数据缩放
  - tooltip: 自定义的复杂提示框
  - xAxis/yAxis: x轴和y轴设置
  - series: 定义两个堆叠的柱状图系列

1. 产品不良占比图 (optionlxlv)

- 类型:堆叠柱状图(stacked bar chart)
- 主要属性:
  - dataZoom: 数据缩放
  - tooltip: 自定义的复杂提示框
  - xAxis/yAxis: x轴和y轴设置
  - series: 定义两个堆叠的柱状图系列

1. NG批次周汇总图 (optionNGs)

- 类型:堆叠柱状图(stacked bar chart)
- 主要属性:
  - dataZoom: 数据缩放
  - tooltip: 自定义的复杂提示框
  - xAxis/yAxis: x轴和y轴设置
  - series: 定义两个堆叠的柱状图系列

这些图表都使用了自定义的颜色、字体大小、标签样式等来适应特定的设计需求。它们还广泛使用了 tooltip 来提供详细的数据信息,dataZoom 来处理大量数据,以及自定义的 formatter 函数来格式化标签和提示框内容。



