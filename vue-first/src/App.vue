<template>
  <div id="app">
    Hello Vue.js
    <h1>{{title}}</h1>
    <global/>
    <users/>
  </div>
</template>

<script>
// 局部注册组件
import Users from './components/Users'

export default {
  name: 'App',
  data(){
    return {
      title: '这是我的第一个vue项目'
    }
  },
  components: {
    'users': Users
  }
}
</script>

<style>

</style>
