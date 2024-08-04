<template>
  <div ref="webgl">
  </div>
</template>

<script>
import { renderer } from "./threejs/index.js";


export default {
  name: "HelloWorld",
  created: function () {
    // this.$refs.webgl.appendChild(renderer.domElement);//不可以
    // Three.js渲染结果Canvas画布插入到body元素中
    // document.body.appendChild(renderer.domElement);//可以访问body
  },
  mounted: function () {
    this.$refs.webgl.appendChild(renderer.domElement);
    // // Three.js渲染结果Canvas画布插入到body元素中
    // document.body.appendChild(renderer.domElement);
  },
};
</script>

<style scoped>
</style>
