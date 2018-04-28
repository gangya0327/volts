<template>
  <div id="home">
    <app-header v-on:sloganChange='sloganUpdate($event)' v-bind:slogan='slogan'></app-header>
    <h1>{{title}}</h1>
    <global/>
    <users v-bind:people='people'/>
    <users v-bind:people='people'/>
    <app-footer v-bind:slogan='slogan'/>
  </div>
</template>

<script>
// 局部注册组件
import Users from "./Users";
import Header from "./Header";
import Footer from "./Footer";
// var postData = {
//     client_id: admin,
//     client_secret: 123,
//     username: admin,
//     password: 123,
//     grant_type: password
//   };
export default {
  name: "home",
  data() {
    return {
      title: "这是我的第一个vue项目",
      people: [
        // { name: "raven", position: "web开发", show: false },
        // { name: "betty", position: "java开发", show: false },
        // { name: "zard", position: "mysql数据库", show: false },
        // { name: "mori", position: "前台", show: false },
        // { name: "larry", position: "人事", show: false },
        // { name: "mark", position: "销售", show: false },
        // { name: "peter", position: "运营", show: false }
      ],
      slogan: "这是一段传值"
    };
  },
  methods: {
    sloganUpdate(title) {
      this.slogan = title;
    }
  },
  components: {
    users: Users,
    "app-header": Header,
    "app-footer": Footer
  },
  created() {
    this.$http.get("http://jsonplaceholder.typicode.com/users").then(data => {
      //console.log(data);
      this.people = data.body;
    }),
      fetch("/apis/oauth/token", {
        method: "post",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          client_secret: "123",
          client_id: "admin",
          username: "admin",
          grant_type: "password",
          password: "123"
        })
      })
        .then(result => {
          console.log(result);
          return result.json();
        })
        .then(data => {
          console.log(data);
        });

    // this.$axios
    //   .post("/apis/oauth/token", {
    //     client_secret: "123",
    //     client_id: "admin",
    //     username: "admin",
    //     grant_type: "password",
    //     password: "123"
    //   })
    //   .then(data => {
    //     console.log(data);
    //   });
  }
};
</script>

<style>

</style>
