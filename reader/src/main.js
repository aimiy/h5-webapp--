import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.headers.post['Content-Type'] = 'application/json'; // 设置默认Content-Type
Vue.prototype.axios = axios;

console.log(process.env.VUE_APP_API)

new Vue({
  render: h => h(App),
}).$mount('#app')
