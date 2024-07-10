import { defineStore } from 'pinia'
import { ref } from 'vue'

const useUserStore = defineStore('user', () => {

    const username = ref('')
    const password = ref('111111')
    const isLogin = ref(false)

    function updateUsername(_username) {
        username.value = _username;
    }

    function updatePassword(_password) {
        password.value = _password;
    }

    function updateIsLogin(_isLogin) {
        isLogin.value = _isLogin;
    }

    return {
        username,
        password,
        isLogin,
        updateUsername,
        updatePassword,
        updateIsLogin
    }

})

export default useUserStore