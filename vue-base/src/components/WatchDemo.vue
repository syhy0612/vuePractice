<template>
  <div>
    <h3>侦听器</h3>
    <p>{{ msg }}</p>
    <button @click="update">更新</button>
    |
    <button @click="del">清空</button>
    |
    <button @click="reset">重置</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "默认",
    };
  },
  methods: {
    update() {
      this.msg = "已更改";
    },
    del() {
      this.msg = "";
    },
    reset() {
      this.msg = "默认";
    },
  },
  watch: {
    msg(newValue, oldValue) {
      console.log("旧值是：" + oldValue, "新值是：" + newValue);
    },
  },
};
</script>
