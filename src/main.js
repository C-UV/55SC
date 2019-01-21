import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

import './assets/js/jquery.min.js';
import './assets/js/iscroll.js';

import './assets/css/amazeui.min.css';
import './assets/css/style.css';
import './assets/css/check.css';

import 'animate.css';

import axios from 'axios';
Vue.prototype.$http=axios;

import loading from './components/loading'
Vue.use(loading);

axios.interceptors.request.use(function (config) {
  vm.$data.bLoading=true;
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  vm.$data.bLoading=false
  return response;
}, function (error) {
  return Promise.reject(error);
});

var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
