<!--
 * @Author: cjh
 * @Date: 2024-07-10 16:46:43
 * @LastEditors: cjh
 * @LastEditTime: 2024-07-10 17:29:53
 * @FilePath: \vue-lx-1\src\components\ComponentLogin.vue
 * @Description: 文件描述
-->
<template>
  <div>
    <div class="login">
      <label for="user">账号：</label>
      <input type="text" id="user" v-model="user" />
      <br />
      <label for="password">密码：</label>
      <input type="password" id="password" v-model="password" />
      <br />
      <button @click="loginUser" class="buttonLogin">登录</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const user = ref("");
const password = ref("");
const loginUser = () => {
  console.log(user.value);
  console.log(password.value);
};
</script>

<style scoped>
.login {
  margin: 30px auto 0;
  max-width: 300px;
  text-align: center;
}
.buttonLogin {
  margin-top: 10px;
  background-color: #41a9ff;
  color: white;
  border: none;
  padding: 3px 6px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.buttonLogin:hover {
  background-color: #1890ff;
}

</style>