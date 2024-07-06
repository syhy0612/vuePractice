<template>
  <div>
    <h3>组件事件</h3>
    <Child @someEvent="handleEvent" @childEvent="handleChildEvent" />
    <!-- <p>父元素：{{ father }}</p> -->
    <p v-if="receivedData">{{ receivedData.message }}，次数：{{ receivedData.count }}</p>
    <p v-if="num">hhh</p>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  data() {
    return {
      name: "",
      father: "",
      receivedData: null,
      num: "",
    };
  },
  components: {
    Child,
  },
  methods: {
    // 处理子组件传递过来的数据
    handleEvent(data) {
      console.log("触发了", data, "abc"); // 打印接收到的数据
      this.father = data;
    },
    handleChildEvent(data) {
      console.log("接收到子组件传递的数据：", data);
      this.receivedData = data;
    },
  },
};
</script>
