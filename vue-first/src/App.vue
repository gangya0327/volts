<template>
  <div id="app">
    <ul>
      <li>
        <router-link to='/'>Home</router-link>         
      </li>
      <li>
        <router-link to='/helloworld'>Hello World</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
    };
  },
  created(){
    //fetch
    // fetch('http://106.12.7.122:8080/oauth/token', {
    //   methods:'post',
    //   body: 'hello'
    //   })
    //axios
  }
};
</script>

<style>

</style>
