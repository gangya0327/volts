<template>
  <div id="app">
    <users/>
    <translateForm v-on:formSubmit='tanslateText'/>
    <translateOutput/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Users from './components/Users'
import TranslateForm from './components/translateForm'
import TranslateOutput from './components/translateOutput'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Users,
    TranslateForm,
    TranslateOutput
  },
  methods: {
    tanslateText: function(text){
      console.log(text)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
