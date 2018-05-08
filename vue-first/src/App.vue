<template>
  <div id="app">
    <ul class="navbarUl">
      <li>
        <router-link to='/'>首页</router-link>
      </li>
      <li>
        <router-link to='/firstclass'>第一课</router-link>
      </li>
      <!-- <li>
        <router-link to='/helloworld'>Hello World</router-link>
      </li> -->
      <li>
        <router-link to='/todolist'>代办事项</router-link>
      </li>
      <li>
        <router-link to='/userslist'>用户列表</router-link>
      </li>
      <li>
        <router-link to='/translate'>在线翻译</router-link>
      </li>
      <li>
        <router-link to='/learnES6_1'>学习ES6_1</router-link>
      </li>
      <li>
        <router-link to='/learnES6_2'>学习ES6_2</router-link>
      </li>
      <li>
        <router-link to='/learnES6_3'>学习ES6_3</router-link>
      </li>
      <li>
        <router-link to='/learnES6_4'>学习ES6_4</router-link>
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

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.navbarUl {
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #000;
}
.navbarUl li {
  border: 1px solid #ccc;
  border-radius: 2px;
  margin: 20px 10px;
  font-size: 18px;
  padding: 3px 7px;
  background-color: skyblue;
  color: #fff;
}
.navbarUl li:hover {
  background-color: #fff;
  color: skyblue;
}
.navbarUl li a {
  text-decoration: none;
  color: inherit;
}
@media screen and (max-width: 1200px){
  .navbarUl li {
    font-size: 16px;
    margin: 20px 5px;
  }
}
@media screen and (max-width: 900px){
  .navbarUl li {
    font-size: 12px;
    margin: 10px 3px;
  }
}
</style>
