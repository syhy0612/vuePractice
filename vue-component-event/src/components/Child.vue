<!--
 * @Author: cjh
 * @Date: 2024-07-06 11:18:45
 * @LastEditors: cjh
 * @LastEditTime: 2024-07-06 11:19:58
 * @FilePath: \Vue_lianxi\vue-component-event\src\components\Child.vue
 * @Description: 子组件，点击按钮触发自定义事件
-->
<template>
  <div>
    <!-- <p>测试</p>
    <button @click="clickR">点击</button>
    <hr />
    <input type="text" id="a1" v-model.trim="content" />
    <p>值为：{{ content }}</p> -->

    <button @click="sendData">发送数据给父组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      haha: "你好呀",
      content: "",
    };
  },
  methods: {
    clickR() {
      // 发射名为 someEvent 的自定义事件，并传递字符串 "我是数据"
      this.$emit("someEvent", "我是数据");
      this.content = "";
    },
    sendData() {
      const data = {
        message: "这是子组件传递给父组件的消息",
        count: 10,
      };
      this.$emit("childEvent", data);
    },
  },
};
</script>
