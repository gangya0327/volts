<template>
  <div id="app">
    <ul>
      <li>
        <router-link to='/'>Home</router-link>         
      </li>
      <li>
        <router-link to='/helloworld'>Hello World</router-link>
      </li>
      <li>
        <router-link to='/learnES6'>learnES6</router-link>
      </li>
      <li>
        <router-link to='/userlist'>userlist</router-link>
      </li>
      <li>
        <router-link to='/translate'>translate</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style>

</style>
