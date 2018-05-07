<template>
  <div>
    <h1>在Vue中{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "learnES6_3",
  data() {
    return {
      msg: "学习ES6（三）"
    };
  },
  created() {
    //13. class类
    console.log("es6以前的类：");
    function A(id, name) {
      this.id = id;
      this.name = name;
      this.sayName = function() {
        console.log(this.name);
      };
    }
    let a = new A(9, "apple");
    a.sayName();
    console.log("es6以后的类：");
    class Person {
      constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.friends = ["Shlley", "Court"];
      }
      speakName() {
        console.log(this.name);
      }
    }
    let person = new Person("李四", 25, "程序员");
    person.speakName();
    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
      static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
      }
    }
    let pt1 = new Point(2, 4);
    let pt2 = new Point(11, 6);
    let dis = Point.distance(pt1, pt2); //静态方法，用类名调用
    console.log(dis);
    class Cache {
      constructor(id, name) {
        this.id = 123;
        this.name = "张三";
      }
      static getSingleTon() {
        if (!Cache.thisa) {
          console.log("创建");
          Cache.thisa = new Cache();
        }
        return Cache.thisa;
      }
    }
    let c1 = Cache.getSingleTon();
    c1.name = "aa";
    let c2 = Cache.getSingleTon();
    let c3 = Cache.getSingleTon();
    console.log(c3.name);
    class Animal {
      constructor(name) {
        this.name = name;
      }
      hulk() {
        console.log(this.name + "make noise");
      }
    }
    class Dog extends Animal {
      hulk() {
        console.log(this.name + "barks...");
      }
    }
    let dog = new Dog("一只狗");
    dog.hulk();
    //14. proxy 代理
    class Register {}
    let r = new Register();
    // r.id = 3
    // r.name = '王五'
    // console.log(r.name)
    let reg = new Proxy(r, {
      get: function(target, key) {
        console.log("调用get方法");
        return target[key];
      },
      set: function(target, key, value) {
        if (key == "id") {
          if (value == 15) {
            target["prefix"] = "，是逃犯";
          } else {
            target["prefix"] = "";
          }
        }
        if (key == "name") {
          value = value + target["prefix"];
        }
        target[key] = value;
        console.log("调用set方法");
        console.log("key: ", key, "value: ", value);
        return Reflect.set(target, key, value);
      }
    });
    reg.id = 4;
    reg.name = "张三代理";
    console.log(reg.name);
    reg.id = 15;
    reg.name = "马六代理";
    console.log(reg.name);
    //15. Decorator 修饰器
    function chooseCourse(target){
      target.course = '物理'
    }
    function setStudy(target){
      target.study = function(){
        console.log('学习' + target.course)
      }
    }
    @chooseCourse
    @setStudy
    class Student{}
    Student.study()
  }
};
</script>

<style>
h1 {
  color: brown;
}
</style>

