import axios from 'axios';
import Vue from 'vue';
import App from './App.vue';
import './plugins/element';
import './plugins/avue';
import router from './router';
// import EleForm from 'vue-ele-form'

Vue.config.productionTip = false

const http = axios.create({
  // baseURL: process.env.VUE_APP_API_URL
  baseURL: 'http://localhost:3002'
})
Vue.prototype.$httpajax = http
Vue.prototype.$http = http

// 注册 vue-ele-form
// Vue.use(EleForm)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
