import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import '@/assets/sethtmlsize.js'
require('@/assets/reset.css');
Vue.config.productionTip = false

axios.defaults.headers.post['Content-Type'] = 'application/json'; // 设置默认Content-Type
Vue.prototype.axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
