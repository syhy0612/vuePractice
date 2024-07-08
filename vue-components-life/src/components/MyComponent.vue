<template>
  <div>
    <h3>生命周期示例</h3>
    <button @click="updateComponent">更新消息</button>
    <button @click="destroyComponent">隐藏消息</button>
    <button @click="initComponent">重置消息</button>
    <b v-if="showComponent">{{ message }}</b>
  </div>
</template>

<script>
/**
 * 生命周期函数
 * 创建期:beforeCreate created
 * 挂载期:beforeMount mounted
 * 更新期:beforeUpdate updated
 * 销毁期:beforeUnmount unmounted
 */
export default {
  data() {
    return {
      message: "初始消息",
      showComponent: true,
    };
  },
  methods: {
    updateComponent() {
      this.message = "更新后的消息";
      this.showComponent = true;
    },
    destroyComponent() {
      this.showComponent = false;
    },
    initComponent() {
      this.message = "初始消息";
      this.showComponent = true;
    },
  },
  beforeCreate() {
    console.log("生命周期:beforeCreate - 组件实例创建前");
  },
  created() {
    console.log("生命周期:created - 组件实例创建完成");
  },
  beforeMount() {
    console.log("生命周期:beforeMount - 挂载前");
  },
  mounted() {
    console.log("生命周期:mounted - 挂载完成");
  },
  beforeUpdate() {
    console.log("生命周期:beforeUpdate - 更新前, 消息：" + this.message);
  },
  updated() {
    console.log("生命周期:updated - 更新完成, 消息：" + this.message);
  },
  beforeUnmount() {
    console.log("生命周期:beforeUnmount - 销毁前");
  },
  unmounted() {
    console.log("生命周期:unmounted - 销毁完成");
  },
};
</script>

<style>
h1 {
  font-family: Arial, sans-serif;
  color: #333;
}
button {
  margin: 10px;
  padding: 8px 16px;
  font-size: 14px;
}
</style>
