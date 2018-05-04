<template>
  <div id="app">
    <users/>
    <hr>
    <h1>在线翻译</h1>
    <h4 class="text-muted">简单 / 实用 / 便捷</h4>
    <translateForm v-on:formSubmit='tanslateText'/>
    <translateOutput v-text="TranslateText"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Users from "./components/Users";
import TranslateForm from "./components/translateForm";
import TranslateOutput from "./components/translateOutput";

export default {
  name: "App",
  data() {
    return {
      TranslateText: ""
    };
  },
  components: {
    HelloWorld,
    Users,
    TranslateForm,
    TranslateOutput
  },
  methods: {
    tanslateText: function(text, language) {
      //console.log(language+text)
      this.$http
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180504T063442Z.2faebcdf8c7e9b7d.20b43e41a701d026b668ed73ea1dcf6cb943cfc9&lang=" +
            language +
            "&text=" +
            text
        )
        .then((response) => {
          //console.log(response.body.text[0])
          this.TranslateText = response.body.text[0];
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
