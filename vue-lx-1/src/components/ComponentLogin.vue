<!--
 * @Author: cjh
 * @Date: 2024-07-10 16:46:43
 * @LastEditors: cjh
 * @LastEditTime: 2024-07-10 20:16:48
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
import { useRouter } from "vue-router";
import useUserStore from "../store/user.js";

const user = ref("");
const router = useRouter();
const password = ref("");
const userStore = useUserStore();
const loginUser = () => {
  console.log(user.value);
  console.log(password.value);

  if (password.value === "123456") {
    userStore.username=user.value;
    userStore.isLogin=true;
    router.push({ name: "home" });
  }
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