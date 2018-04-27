<template>
  <header v-on:click='changeSlogan'>
    <h1>{{title}} {{slogan}}</h1>    
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    slogan: {
      type: String
    }
  },
  data(){
    return {
      title: 'I am headers.'
    }
  },
  methods: {
    changeSlogan:function(){
      //this.slogan = '我改变了'
      this.$emit('sloganChange', '一起改变把')
    }
  },
  // beforeCreate: function(){
  //   alert('组件实例化之前')
  // },
  // created: function(){
  //   alert('组件实例化后，但页面还未显示')
  // },
  // beforeMount: function(){
  //   alert('组件挂载之前，页面仍未显示，但虚拟DOM已经配置')
  // },
  // mounted: function(){
  //   alert('组件挂载后，页面即将显示')
  // },
  // beforeUpdate: function(){
  //   alert('组件更新前，页面仍未显示，但虚拟DOM已经配置')
  // },
  // updated: function(){
  //   alert('组件更新后，页面即将显示')
  // },
  // beforeDestroyed: function(){
  //   alert('组件销毁前')
  // },
  // destroyed: function(){
  //   alert('组件销毁后')
  // }
}
</script>

<style scoped>
  header {
    background: lightcoral;
    padding: 10px;
  }
  h1 { 
    color: #fff;
    text-align: center;
  }
</style>
