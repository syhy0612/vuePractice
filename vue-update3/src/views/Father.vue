<!-- Father.vue -->
<template>
  <div class="father">
    <h1>父组件 Father.vue</h1>
    <div>父组件接收的消息：{{ receivedMsg }}</div>
    <Son
      :msg="parentMsg"
      @callParentMethod="handleCallParentMethod"
      @updateAndNotifyParent="handleUpdateAndNotifyParent"
    ></Son>
  </div>
</template>

<script setup>
import Son from "./Son.vue";
import { ref } from "vue";

const parentMsg = "我是父组件传递给子组件的消息";
const receivedMsg = ref("");

const handleCallParentMethod = (msgFromSon) => {
  receivedMsg.value = msgFromSon;
};

const handleUpdateAndNotifyParent = (msgFromSon) => {
  receivedMsg.value = msgFromSon;
};
</script>

<style scoped>
.father {
  border: 1px solid blue;
  padding: 20px;
}
</style>
