<template>
  <el-radio-group v-model="size" aria-label="size control">
    <el-radio-button value="large">大</el-radio-button>
    <el-radio-button value="default">默认</el-radio-button>
    <el-radio-button value="small">小</el-radio-button>
  </el-radio-group>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">普通选日期</span>
      <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
          :size="size"
      />
    </div>
    <div class="block">
      <span class="demonstration">具有快速选项的选择器</span>
      <el-date-picker
          v-model="value2"
          type="date"
          placeholder="选择日期"
          :disabled-date="disabledDate"
          :shortcuts="shortcuts"
          :size="size"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref<'default' | '大' | '小'>('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: '今天',
    value: new Date(),
  },
  {
    text: '昨天',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
</script>

<style scoped>
.demo-date-picker {
  display: flex;          /* 使用 flex 布局 */
  width: 100%;            /* 宽度占满父容器 */
  padding: 0;             /* 移除内边距 */
  flex-wrap: wrap;        /* 允许 flex 项目在需要时换行 */
}

.demo-date-picker .block {
  padding: 30px 0;        /* 上下各添加 30px 的内边距 */
  text-align: center;     /* 文本居中对齐 */
  border-right: solid 1px var(--el-border-color);  /* 右边框，使用 Element Plus 的边框颜色变量 */
  flex: 1;                /* flex 项目平均分配剩余空间 */
}

.demo-date-picker .block:last-child {
  border-right: none;     /* 移除最后一个 block 的右边框 */
}

.demo-date-picker .demonstration {
  display: block;         /* 将 span 显示为块级元素 */
  color: var(--el-text-color-secondary);  /* 使用 Element Plus 的次要文本颜色变量 */
  font-size: 14px;        /* 设置字体大小为 14px */
  margin-bottom: 20px;    /* 底部外边距为 20px */
}
</style>