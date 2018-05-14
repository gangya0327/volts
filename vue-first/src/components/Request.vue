<template>
  <div id="qequest">
    {{msg}}
    <img src="" alt="">
    <button v-on:click="getToken">getToken</button>
    <button v-on:click="goIndex">goIndex</button>
    <button v-on:click="getImage">getImage</button>
    <ul>
      <li v-for="(item, index) in images" v-if='images&&images.length'>
        <img :src='item.prefix + item.content + item.end' alt="">
      </li>
    </ul>
    <ul id='arrUl'>
      <li v-for="(item, index) in arr" :key="index" v-if='arr&&arr.length'>{{item}}</li>
    </ul>
  </div>
</template>

<script>
let access_token;
let url = "http://rap2api.taobao.org/app/mock/12747/getImages";
let url2 = "http://106.12.7.122:8080/api/index";
export default {
  data() {
    return {
      msg: "lifecycle",
      images: null,
      arr: [11, 12, 13]
    };
  },
  methods: {
    getLists() {
      return "getLists";
    },
    getToken() {
      this.$http
        .post(
          "http://106.12.7.122:8080/oauth/token",
          {
            client_secret: "123",
            client_id: "admin",
            username: "admin",
            grant_type: "password",
            password: "123"
          },
          { emulateJSON: true }
        )
        .then(
          function(data) {
            console.log(data.body.access_token);
            access_token = data.body.access_token;
          },
          function() {
            console.log("token error");
          }
        );
    },
    goIndex() {
      this.$http.get(url2).then(
        res => {
          console.log(res.body.user);
          console.log("ok");
        },
        function() {
          console.log("index error");
        }
      );
    },
    getImage() {
      this.$http.get(url).then(
        res => {
          console.log(res.body.slideList);
          this.images = res.body.slideList;
        },
        function() {
          console.log("image error");
        }
      );
    }
  },
  beforeCreate() {
    console.log("beforeCreate: 暂时得不到数据，属性，函数，报错");
    //console.log(this.msg, this.getLists());
  },
  created() {
    console.log("created: 可以得到数据，属性，函数");
    console.log(this.msg, this.getLists());
    setTimeout(() => {
      console.log("created", document.querySelectorAll("#arrUl li").length);
      this.arr = [1, 2, 3, 4, 5];
      this.$nextTick(() => {
        console.log("nextTick", document.querySelectorAll("#arrUl li").length);
      });
    }, 1000);
  },
  beforeMount() {},
  mounted() {
    console.log("mounted", document.querySelectorAll("#arrUl li").length);
  },
  beforeUpdate() {},
  updated() {
    console.log("updated", document.querySelectorAll("#arrUl li").length);
  },
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  deactivated() {},
  errorCapture() {
    console.log("有错了.");
  },
  watch: {
    arr: function() {
      console.log("arr ", document.querySelectorAll("#arrUl li").length);
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  list-style: none;
}
img {
  width: 200px;
  margin: 0 10px;
  border: 1px solid #eee;
}
</style>
