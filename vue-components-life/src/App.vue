<!--
 * @Author: cjh
 * @Date: 2024-07-08 10:41:55
 * @LastEditors: cjh
 * @LastEditTime: 2024-07-08 11:48:03
 * @FilePath: \Vue_lianxi\vue-components-life\src\App.vue
 * @Description: 文件描述
-->
<template>
  <div>
    <UseComponentVue />
    <!-- <MyComponentVue /> -->
  </div>
</template>
<script>
import MyComponentVue from "./components/MyComponent.vue";
import UseComponentVue from "./components/UseComponent.vue";

export default {
  data() {
    return {};
  },
  components: {
    MyComponentVue,
    UseComponentVue,
  },
};
</script>
