<!--
 * @Author: cjh
 * @Date: 2024-07-05 19:41:15
 * @LastEditors: cjh
 * @LastEditTime: 2024-07-06 08:18:13
 * @FilePath: \Vue_lianxi\vue-components\src\pages\Aside.vue
 * @Description: 文件描述
-->
<template>
  <div class="aside">
    <h3>Aside</h3>
    <Item />
    <Item />
    <Item />
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  components: {
    Item,
  },
};
</script>

<style scoped>
.aside {
  float: right;
  width: 30%;
  height: 400px;
  border: 5px solid #999;
  box-sizing: border-box;
  /* border-left: 0; */
  /* border-top: 0; */
}
</style>
