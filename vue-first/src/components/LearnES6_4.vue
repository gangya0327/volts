<template>
  <div>
    <h1>在Vue中{{msg}}</h1>
    <input type="file" name='fileInput' id='fileInput' v-on:change='showImg'/>
    <img :src="buffer"/>
  </div>
</template>

<script>
function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
var thisa;
export default {
  name: "learnES6_4",
  data() {
    return {
      buffer: "",
      msg: "学习ES6（四）"
    };
  },
  created() {
    //17. 二进制数组,ArrayBuffer对象代表原始的二进制数据，
    //    TypedArray用来读写简单的二进制数据，DataView读写复杂类型
    thisa = this;
  },
  methods: {
    showImg: function() {
      var fileInput = document.getElementById("fileInput");
      var file = fileInput.files[0];
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function() {
        var arrayBuffer = reader.result;
        let arrayBase = arrayBufferToBase64(arrayBuffer);
        thisa.buffer = "data:image/png;base64," + arrayBase;
      };
    }
  }
};
</script>

<style>
h1 {
  color: brown;
}
</style>

