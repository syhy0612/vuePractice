import {defineStore} from 'pinia'

// 定义并导出一个名为 'user' 的 store
export const useUserStore = defineStore('user', {
    // 定义 store 的初始状态
    state: () => ({
        username: '',     // 用户名，初始为空字符串
        isLoggedIn: false // 登录状态，初始为 false
    }),
    // 定义可以修改状态的 actions
    actions: {
        // 登录操作
        login(username) {
            this.username = username            // 设置用户名
            this.isLoggedIn = true              // 更新登录状态为 true
            // 将用户信息保存到 localStorage
            localStorage.setItem('user', JSON.stringify({username, isLoggedIn: true}))
        },
        // 登出操作
        logout() {
            this.username = ''                  // 清空用户名
            this.isLoggedIn = false             // 更新登录状态为 false
            localStorage.removeItem('user')     // 从 localStorage 移除用户信息
        },
        // 初始化 store 状态
        initializeStore() {
            // 从 localStorage 获取存储的用户信息
            const storedUser = JSON.parse(localStorage.getItem('user'))
            if (storedUser) {
                // 如果存在用户信息，更新 store 的状态
                this.username = storedUser.username
                this.isLoggedIn = storedUser.isLoggedIn
            }
        }
    }
})