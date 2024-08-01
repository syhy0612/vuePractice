optionGYlv.value = { // 设置图表的配置选项
  tooltip: { // 配置提示框组件
      extraCssText: "min-width:150px;", // 设置提示框的最小宽度为150px
      formatter: function (params) { // 自定义提示框内容
          // console.log("params", params); // 注释掉的调试代码
          var str = ""; // 初始化提示框内容字符串
          str += // 以下是构建提示框内容的代码
              params[0].name + // 添加数据项的名称
              "</br>" + // 换行
              " &nbsp" + // 添加空格
              "<b>" + // 开始粗体
              params[0].marker + // 添加图例标记
              " 总不良占比:" + // 添加文本标签
              " " + // 添加空格
              Math.floor(Gybl.value[params[0].dataIndex].nG率 * 1000) / 10 + // 计算并显示总不良占比，保留一位小数
              "%" + // 添加百分号
              "<br/>" + // 换行
              ' <span style="display:inline-block;margin-left:4px;line-height: 10px;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#999999 ;"></span>' + // 添加小圆点样式
              " 自身不良率:" + // 添加文本标签
              " " + // 添加空格
              Math.floor(Gybl.value[params[0].dataIndex].自身NG率 * 1000) / 10 + // 计算并显示自身不良率，保留一位小数
              "%" + // 添加百分号
              "<br/>" + // 换行
              // 以下是重复的代码结构，分别显示内部不良率、外部不良率、总批次、不良总批次、内部返工、外部返工
              // 每项都有相似的格式：小圆点 + 文本标签 + 数值 + 单位（如果有）
              ' <span style="display:inline-block;margin-left:4px;line-height: 10px;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#999999 ;"></span>' +
              " 内部不良率:" +
              Math.floor(
                  (Gybl.value[params[0].dataIndex].内部返工 /
                      Gybl.value[params[0].dataIndex].送检数量) *
                  100
              ) +
              "%" +
              "<br/>" +
              ' <span style="display:inline-block;margin-left:4px;line-height: 10px;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#999999 ;"></span>' +
              " 外部不良率:" +
              Math.floor(
                  (Gybl.value[params[0].dataIndex].外部返工 /
                      Gybl.value[params[0].dataIndex].送检数量) *
                  100
              ) +
              "%" +
              "<br/>" +
              ' <span style="display:inline-block;margin-left:4px;line-height: 10px;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#999999 ;"></span>' +
              " 总批次:" +
              useThousands(GyLable.value[params[0].dataIndex].送检数量) +
              "<br/>" +
              ' <span style="display:inline-block;margin-left:4px;line-height: 10px;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#999999 ;"></span>' +
              " 不良总批次:" +
              useThousands(GyLable.value[params[0].dataIndex].不良数) +
              "<br/>" +
              ' <span style="display:inline-block;margin-left:4px;line-height: 10px;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#999999 ;"></span>' +
              " 内部返工:" +
              " " +
              Gybl.value[params[0].dataIndex].内部返工 +
              "<b>" +
              "<br/>" +
              ' <span style="display:inline-block;margin-left:4px;line-height: 10px;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#999999 ;"></span>' +
              " 外部返工:" +
              " " +
              Gybl.value[params[0].dataIndex].外部返工 +
              "<b>";

          return str; // 返回构建好的提示框内容字符串
      },
      trigger: "axis", // 触发类型设置为坐标轴触发
      confine: true, // 将提示框限制在图表的区域内
      axisPointer: { // 坐标轴指示器配置
          type: "shadow", // 指示器类型设置为阴影
      },
  },
  grid: { // 直角坐标系内绘图网格配置
      top: "20%", // 上边距
      right: "2%", // 右边距
      left: "2%", // 左边距
      bottom: "25%", // 下边距
  },
  dataZoom: [ // 数据区域缩放组件配置
      {
          type: "slider", // 滑动条型数据区域缩放组件
          height: 6, // 组件高度
          backgroundColor: "transparent", // 滑动条背景颜色设为透明
          borderColor: "transparent", // 滑动条边框颜色设为透明
          bottom: 0, // 组件距离容器下侧的距离
          textStyle: { // 文本样式
              color: "transparent", // 文本颜色设为透明
          },
          zoomLock: true, // 是否锁定选择区域（或叫做数据窗口）的大小
          realtime: true, // 是否实时更新视图
          startValue: 0, // 数据窗口范围的起始百分比
          endValue: 11, // 数据窗口范围的结束百分比
          show: showname, // 是否显示组件，由外部变量控制
      },
  ],
  xAxis: [ // X轴配置
      {
          type: "category", // 类目轴
          max: function () { // 动态设置坐标轴最大值
              if (Gyblx.value.length < 11) {
                  return 7; // 如果数据少于11个，最多显示8个（索引0-7）
              } else {
                  return null; // 否则不限制
              }
          },
          triggerEvent: true, // 坐标轴的标签是否响应和触发鼠标事件
          axisLabel: { // 坐标轴刻度标签配置
              color: "#b9bec6", // 标签颜色
              interval: 0, // 设置为 0 强制显示所有标签
              rotate: 46, // 标签旋转46度
              fontSize: 11, // 标签字体大小
              formatter: function (value) { // 标签内容格式化函数
                  if (value.length > 5) {
                      return `${value.slice(0, 5)}...`; // 如果文本长度超过5，截断并添加省略号
                  }
                  return value;
              },
          },
          axisLine: { // 坐标轴线配置
              show: true, // 显示坐标轴线
              lineStyle: {
                  color: "#0a3e98", // 坐标轴线颜色
              },
          },
          axisTick: { // 坐标轴刻度配置
              show: false, // 不显示坐标轴刻度
          },
          splitLine: { // 分隔线配置
              show: false, // 不显示分隔线
              lineStyle: {
                  color: "#195384", // 分隔线颜色（虽然未显示）
                  type: "dotted", // 分隔线类型为点线（虽然未显示）
              },
          },
          data: Gyblx.value, // X轴数据
      },
  ],
  yAxis: [ // Y轴配置
      {
          type: "value", // 数值轴
          // name: "百分比", // 注释掉的轴名称
          min: 0, // 坐标轴最小值
          // max: 100, // 注释掉的坐标轴最大值
          position: "left", // 轴的位置
          nameTextStyle: { // 坐标轴名称的文字样式
              color: "#b9bec6", // 文字颜色
              fontSize: 10, // 文字大小
          },
          axisLine: { // 坐标轴线配置
              lineStyle: {
                  color: "#0a3e98", // 坐标轴线颜色
              },
          },
          axisTick: { // 坐标轴刻度配置
              show: false, // 不显示坐标轴刻度
          },
          splitLine: { // 分隔线配置
              show: true, // 显示分隔线
              lineStyle: {
                  color: "rgba(255,255,255,.2)", // 分隔线颜色
                  type: "dotted", // 分隔线类型为点线
              },
          },
          axisLabel: { // 坐标轴刻度标签配置
              formatter: "{value}" + "%", // 标签格式化为百分比
              color: "transparent", // 标签颜色设为透明
              fontSize: 10, // 标签字体大小
          },
      },
  ],
  series: [ // 系列列表
      { // 第一个系列配置（内部返工）
          name: "", // 系列名称
          type: "bar", // 柱状图
          stack: "Ad", // 数据堆叠，相同stack值的系列会在同一个柱子上堆叠
          barMaxWidth: 23, // 柱条最大宽度
          barGap: 0.3, // 不同系列的柱间距离，在同一个stack上无效
          itemStyle: { // 图形样式
              label: { // 图形上的文本标签
                  textStyle: {
                      fontSize: 10, // 标签字体大小
                  },
              },
              color: "rgba(73, 188, 247,1)", // 柱条颜色
          },
          label: { // 图形上的文本标签
              show: true, // 显示标签
              position: "inside", // 标签位置
              fontSize: 11, // 标签字体大小
              color: "#fff", // 标签颜色
          },
          data: Gybl.value.map((v) => { // 系列的数据内容
              return v.内部返工; // 返回每个数据点的内部返工值
          }),
      },
      { // 第二个系列配置（外部返工）
          name: "", // 系列名称
          type: "bar", // 柱状图
          stack: "Ad", // 数据堆叠，与第一个系列相同，会堆叠在一起
          barMaxWidth: 23, // 柱条最大宽度
          barGap: 0.3, // 不同系列的柱间距离，在同一个stack上无效
          itemStyle: { // 图形样式
              label: { // 图形上的文本标签
                  textStyle: {
                      fontSize: 10, // 标签字体大小
                  },
              },
              color: "rgba(254,255,0,.8)", // 柱条颜色
          },
          label: { // 图形上的文本标签
              show: true, // 显示标签
              position: "top", // 标签位置
              formatter: function (params) { // 标签内容格式化函数
                  let str = "";
                  str += `${Math.floor(Gybl.value[params.dataIndex].nG率 * 1000) / 10}%\n${Math.floor(Gybl.value[params.dataIndex].自身NG率 * 1000) / 10}%\n${useThousands(Gybl.value[params.dataIndex].不良数)}`;
                  return str; // 返回格式化后的标签内容
              },
              align: "right", // 标签对齐方式
              padding: [0, -10, 0, 0], // 标签内边距
              fontSize: 11, // 标签字体大小
              color: "#fff", // 标签颜色
          },
          data: Gybl.value.map((v) => { // 系列的数据内容
              return v.外部返工; // 返回每个数据点的外部返工值
          }),
      },
  ],
};