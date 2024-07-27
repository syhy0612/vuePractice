<template>
  <div id="theMain">
    <div class="loginBox">
      <h3>登录界面</h3>
      <!--      <el-form :model="loginForm" label-width="20px">
              <el-form-item label="用户名">
                <el-input v-model="loginForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="loginForm.password"></el-input>
              </el-form-item>
            </el-form>-->
      <label for="username">账号：</label>
      <input type="text" id="username" v-model="loginForm.username" required>
      <div class="errorInfo" v-if="errorUser">{{ errorInfo }}</div>
      <div></div>
      <label for="password">密码：</label>
      <input type="password" name="" id="password" v-model="loginForm.password" readonly></input>
      <div></div>
      <button @click=login>登录</button>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue'
import {useRouter} from 'vue-router'
import {useUserStore} from "@/stores/userStore.js";

const router = useRouter()
const loginForm = reactive({
  username: '',
  password: '123456'  // 默认密码
})
const errorUser = ref(false)
const errorInfo = ref('')

const login = () => {
  const user = loginForm.username.trim()
  if (!user) {
    errorInfo.value = '请输入用户名'
    errorUser.value = true
    loginForm.username = ''
  }
  else if(user.length > 10){
    errorInfo.value = '用户名不能超过10个字符'
    errorUser.value = true
  }

  else {
    console.log(loginForm.username)
    useUserStore().login(loginForm.username)
    router.push('/home')
  }
}
</script>

<style lang="scss" scoped>
#theMain {
  width: 100%;
  height: 90vh;
  overflow: auto;
  color: white;
}

.loginBox {
  text-align: center;
  font-size: 24px;
}

h3 {
  //text-align: center;
  //color: white;
  font-size: 40px;
}

input {
  height: 24px;
}

.errorInfo {
  font-size: 16px;
}
</style>