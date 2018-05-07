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
        <router-link to='/userslist'>userlist</router-link>
      </li>
      <li>
        <router-link to='/translate'>translate</router-link>
      </li>
      <li>
        <router-link to='/learnES6_1'>learnES6_1</router-link>
      </li>
      <li>
        <router-link to='/learnES6_2'>learnES6_2</router-link>
      </li>
      <li>
        <router-link to='/learnES6_3'>learnES6_3</router-link>
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
