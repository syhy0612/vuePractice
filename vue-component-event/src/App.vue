<!--
 * @Author: cjh
 * @Date: 2024-07-06 11:13:11
 * @LastEditors: cjh
 * @LastEditTime: 2024-07-06 11:16:38
 * @FilePath: \Vue_lianxi\vue-component-event\src\App.vue
 * @Description: 文件描述
-->
<template>
  <div>
    <!-- <ComponentEvent /> -->
    <!-- <Main /> -->
    <ComponentA />
  </div>
</template>

<script>
import ComponentEvent from "./components/ComponentEvent.vue";
import Main from "./components/Main.vue";
import ComponentA from "./components/ComponentA.vue";
export default {
  data() {
    return {};
  },
  components: {
    ComponentEvent,
    Main,
    ComponentA,
  },
};
</script>
