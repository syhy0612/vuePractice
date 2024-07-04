<template>
  <div>
    <h3>传递参数</h3>
    <p @click="clickFive(item)" v-for="(item, index) in names" :key="index">
      {{ item }}
    </p>
    <h3>事件修饰符</h3>
    <a @click="clickHandle" href="https://www.baidu.com/">百度一下</a>
    <br />
    <a @click.prevent="eee" href="https://www.sogou.com/">搜狗</a>
    <br />
    <div @click="clickDIV">
      div
      <p @click.stop="clickP">你好</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["金", "木", "水", "火", "土"],
    };
  },
  methods: {
    clickFive(name) {
      console.log(name);
    },
    clickHandle(e) {
      e.preventDefault();
      console.log("点击了");
    },
    clickDIV() {
      console.log("点击了div");
    },
    clickP() {
      console.log("点击了P");
    },
  },
};
</script>
