<!-- Son.vue -->
<!-- GPT生成 -->
<template>
  <div class="son">
    <h2>子组件 Son.vue</h2>
    <div>父组件传递的消息：{{ msg }}</div>
    <div>子组件内部状态：{{ internalMsg }}</div>
    <button @click="callParentMethod">调用父组件方法</button>
    <br />
    <button @click="updateAndNotifyParent">修改状态并通知父组件</button>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, defineExpose } from "vue";

const emit = defineEmits();
const props = defineProps({
  msg: String,
});

const internalMsg = ref("");

const callParentMethod = () => {
  emit("callParentMethod", "子组件调用父组件的方法");
};

const updateAndNotifyParent = () => {
  internalMsg.value = "子组件修改了自身状态";
  emit("updateAndNotifyParent", internalMsg.value);
};

defineExpose({
  callParentMethod,
  updateAndNotifyParent,
});
</script>

<style scoped>
.son {
  border: 1px solid red;
  padding: 20px;
  margin-top: 20px;
}
</style>
