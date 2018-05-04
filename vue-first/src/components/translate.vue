<template>
  <div id="translate">
    <!-- <users/> -->
    <hr>    
    <translateForm v-on:formSubmit='tanslateText'/>
    <translateOutput v-text="TranslateText"/>
  </div>
</template>

<script>
// import Users from "./components/Users";
import TranslateForm from "./translateForm";
import TranslateOutput from "./translateOutput";

export default {
  name: "Translate",
  data() {
    return {
      TranslateText: ""
    };
  },
  components: {
    // Users,
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

</style>
