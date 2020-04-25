import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const axios = require('axios')
// 设置反向代理，前端请求默认发送到http://localhost:8443/api
axios.defaults.baseURL = 'http://140.143.243.117:9080/portal'
// 使请求带上凭证信息
// axios.defaults.withCredentials = true
// 全局注册，之后可在其他组件中通过this.$axios发送数据
Vue.prototype.$axios = axios

// Vue.component(Button.name, Button)
Vue.config.productionTip = false
Vue.use(Antd)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
