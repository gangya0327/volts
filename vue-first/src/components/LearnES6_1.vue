<template>
  <div>
    <h1>在Vue中{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "learnES6_1",
  data() {
    return {
      msg: "学习ES6（一）"
    };
  },
  created() {
    //1. let const
    //2. 结构赋值（数组，对象，字符串）
    //3. symbol 唯一值
    let a = Symbol(6);
    let b = Symbol(6);
    console.log(a == b); //false
    console.log(a);
    //4. Set 成员唯一
    let set = new Set([1, 2, 3, 5, 3, 2, 1]);
    set.add(7); //添加
    set.delete(1); //删除
    for (let elem of set) {
      console.log(elem); //1 2 3 5
    }
    console.log("set:" + set);
    var arr = [...set]; //扩展运算符
    console.log("arr:" + arr);
    set.forEach(function(value, index) {
      //遍历键值对
      console.log(index + "=" + value);
    });
    console.log("是否含有6：" + set.has(6));
    console.log("set的个数：" + set.size);
    var newSet = [1, 2, 3].map(function(e) {
      return e * 2;
    });
    console.log(newSet);
    var filterSet = [1, 2, 3].filter(function(e) {
      if (e > 1) return true;
      else return false;
    });
    console.log("过滤器>1：" + filterSet);
    set.clear(); //清空

    //求set的并集，交集
    var set1 = new Set([1, 5, 3, 2, 9]);
    var set2 = new Set([1, 2, 4, 1, 8]);
    let union = new Set([...set1, ...set2]);
    console.log("并集：" + [...union]);
    let intersect = new Set(
      [...set1].filter(function(e) {
        return set2.has(e);
      })
    );
    console.log("交集：" + intersect);
    let different = new Set(
      [...set1].filter(function(e) {
        return set2.has(e);
      })
    );
    console.log("差集：" + different);
    //5. WeakSet
    var weakset = new WeakSet();
    let obj1 = new Number(6);
    let obj2 = new String(6);
    let obj3 = { a: "aaa" };
    weakset.add(obj1); //内容只能是对象
    weakset.add(obj2);
    weakset.add(obj3);
    console.log(weakset.has(obj2)); //不可遍历
    weakset.delete(obj2);
    console.log(weakset.has(obj2)); //不可遍历

    //6. Map 与object不同在于，键可以是各种类型的数值，而object只能是字符串或Symbol类型
    let objKey1 = {};
    let objKey2 = {};
    let obj = new Object();
    obj[objKey1] = 101;
    obj[objKey2] = 201;
    for (let key in obj) {
      console.log(key); //只会输出一行[object Object]，后者object
    }
    var mapData = new Map();
    var objKey3 = { p: "antzone" };
    mapData.set(objKey3, "对象键");
    console.log("获取objkey3：" + mapData.get(objKey3));
    console.log("是否还有objkey3：" + mapData.has(objKey3));
    console.log("删除objkey3：" + mapData.delete(objKey3));
    console.log("是否还有objkey3：" + mapData.has(objKey3));
    mapData.clear();
    var mapArray = new Map([["webName", "web名称"], ["url", "www.baidu.com"]]); //数组作为构造函数参数
    console.log("获取webName：" + mapArray.get("webName"));
    console.log("forEach:");
    mapArray.forEach(function(value, key) {
      //值，键
      console.log(key + "=" + value);
    });
    console.log("for of:");
    for (let elem of mapArray) {
      console.log(elem);
    }
    var keysIterator = mapArray.keys(); // 键遍历器
    console.log("键遍历器：");
    console.log(keysIterator.next().value);
    console.log(keysIterator.next().value);
    var valuesIterator = mapArray.values(); // 值遍历器
    console.log("值遍历器：");
    for (let elem of valuesIterator) {
      console.log(elem);
    }
    console.log("值：" + valuesIterator);
    for(let elem in mapArray){
      console.log(elem)
    }
    var maparr = [...mapArray]; //转成二维数组
    console.log(typeof maparr); //返回一个用来表示表达式的数据类型的字符串
    console.log(maparr instanceof Array); //instanceof来检测某个对象是不是另一个对象的实例
    console.log(maparr);
    //7. WeakMap 只接受对象作为键名，当对象被回收后自动移除对应键值，不可遍历，没有size属性
  }
};
</script>

<style>
h1 {
  color: brown;
}
</style>

