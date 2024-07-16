<template>
  <div>
    <div>首页</div>
    <div class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-config-provider :message="config">
        <el-button @click="open">OPEN</el-button>
      </el-config-provider>
      <br />
      <!-- 按钮 -->
      <el-switch v-model="value1" />
      <el-switch v-model="value2" class="ml-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin-left: 10px;" />
      <!-- 日期 -->
      <div class="block">
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day" :size="size" />
      </div>
      <br />
      <!-- 密码 -->
      <el-input v-model="input" style="width: 240px" type="password" placeholder="请输入密码" show-password />

    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import NavMemu from './NavMemu.vue'
const config = reactive({
  max: 3,
})

const value1 = ref(false)
const value2 = ref(false)
const input = ref('')
const open = () => {
  ElMessage('Emmmmm')
}
</script>

<style lang="scss" scoped></style>