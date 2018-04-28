<template>
  <div id="translateForm">
    <h1>在线翻译</h1>
    <h4>简单 / 实用 / 便捷</h4>
    <form v-on:submit='formSubmit'>
      <input type="text" name="" placeholder="输入翻译的内容" 
      v-model="textToTranslate">
      <select name="" id="">
        <option value="English">English</option>
        <option value="Chinese">Chinese</option>
        <option value="Japanese">Japanese</option>
      </select>
      <input type="submit" name="" id="" value="翻译">
    </form>
  </div>
</template>

<script>
export default {
  name: 'translateForm',
  data: function(){
    return {
      textToTranslate: ''
    }
  },
  methods: {
    formSubmit: function(e){
      e.preventDefault()
      console.log(this.textToTranslate)
      this.$emit('formSubmit', this.textToTranslate)
    }
  }
}
</script>

<style>

</style>
