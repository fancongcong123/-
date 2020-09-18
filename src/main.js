import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 1. 导入组件库
import Vant from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)

// 引入 axios 请求库
// 为什么上方可以用 Vue.use 注册
// 是因为 vant ui 属于 vue 的体系
// axios 是一个通用的请求库, 不属于 Vue
import axios from 'axios'
Vue.prototype.$axios = axios



Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
