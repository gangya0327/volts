// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Global from './components/Global'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'
import UsersList from './components/UsersList'
import LearnES6 from './components/LearnES6'
import Translate from './components/Translate'

// Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
  //配置路由
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/helloworld', component: HelloWorld },
    { path: '/userslist', component: UsersList },
    { path: '/learnES6', component: LearnES6 },
    { path: '/translate', component: Translate }
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