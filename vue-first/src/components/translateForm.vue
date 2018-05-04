<template>
  <div class="row" id="translateForm">
    <div class="col-md-6 col-md-offset-3">
      <h1>在线翻译</h1>
      <h4 class="text-muted">简单 / 实用 / 便捷</h4>
      <form class="well" v-on:submit='formSubmit'>
        <input class="form-control" type="text" name="" placeholder="输入翻译的内容" v-model="textToTranslate">
        <select class="form-control" v-model="language">
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="ko">Korean</option>
          <option value="ja">Japanese</option>
        </select>
        <input class="btn btn-primary" type="submit" name="" id="" value="翻译">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "translateForm",
  data: function() {
    return {
      textToTranslate: "",
      language: ""
    };
  },
  methods: {
    formSubmit: function(e) {
      e.preventDefault();
      console.log(this.textToTranslate);
      this.$emit("formSubmit", this.textToTranslate, this.language);
    }
  },
  created: function() {
    this.language = "en";
  }
};
</script>

<style>
.col-md-6 {
  width: 50%;
}
.col-md-offset-3 {
  margin-left: 25%;
}
.well {
  background-color: #eee;
  padding: 30px 60px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.form-control {
  margin: 20px 0;
}
h1,
h4 {
  text-align: center;
}
</style>
