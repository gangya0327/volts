<template>
  <div>
    <h1>在Vue中{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "learnES6_2",
  data() {
    return {
      msg: "学习ES6（二）"
    };
  },
  created() {
    //8. Iterator 是一种接口，为不同数据结构提供统一的访问机制，数组对象SetMap
    let arr = ["资源库", "www.baidu.com", 4, "xxx"];
    let it = arr[Symbol.iterator]();
    for (;;) {
      let elem = it.next();
      if (elem.done) {
        break;
      }
      console.log(elem.value);
    }
    let arr1 = ["资源库", "www.baidu.com", 4, "xxx"];
    console.log("for of:");
    for (let elem of arr1) {
      console.log(elem);
    }
    console.log("展开运算符：", ...arr1);
    //9. Generator 函数结构，异步编程方案，遍历器对象生成器
    function* gene() {
      console.log("1");
      yield "资源库";
      console.log("1");
      yield "www.qq.com";
      console.log("1");
      yield 5;
      console.log("1");
      return "end";
    }
    let y = gene();
    console.log(y.next());
    console.log(y.next());
    console.log(y.next());
    console.log(y.next());
    console.log(y.next());
    var func = function(time) {
      setTimeout(function() {
        console.log(time, "on");
      }, time);
    };
    var gene1 = function*() {
      var f1 = yield func(2000);
      console.log("f1", f1);
      var f2 = yield func(1000);
      console.log("f2", f2);
    };
    let y1 = gene1()
    y1.next()
    y1.next()
    y1.next()
    //10. Promise 回调函数，异步操作解决方案，pending等待，resolved成功，rejected未完成
    //11. async声明一个异步函数，返回一个Promise对象，await等待Promise函数
    var sleep = function(time){
      return new Promise(function(resolved, rejected){
        console.log('执行')
        setTimeout(() => {
          resolved('completed')
        }, time);
      })
    }
    var start = async function(){
      console.log('start')
      let rs = await sleep(3000)
      console.log('end: ' + rs)
    }
    start()
    //12. 箭头函数 this始终指向函数定义时的this，而非执行时
  }  
};
</script>

<style>
h1 {
  color: brown;
}
</style>

