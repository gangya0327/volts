// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import axios from 'axios'
import Global from './components/Global'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'

// Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
  //配置路由
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/helloworld', component: HelloWorld }
  ],
  mode: 'history'
})

// 全局注册组件
Vue.component('global', Global)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})