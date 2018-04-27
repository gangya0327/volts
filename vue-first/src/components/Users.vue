<template>
  <div>
    <ul>
      <li v-for='user in users'>{{user}}</li>
    </ul>
    <ul class="people-ul">
      <li v-for='person in people' v-on:click='person.show = !person.show'>
        <h3>{{person.name}}</h3>
        <p v-show='person.show'>{{person.position}}</p>
        <p>{{person.email}}</p>
      </li>
    </ul>
    <button v-on:click='delPeople'>删除末尾</button>
  </div>
</template>

<!--
传值：string number boolean
传引用：array object 
 -->

<script>
export default {
  name: "users",
  props: {
    people: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      users: ["raven", "betty", "zard"]      
    };
  },
  methods: {
    delPeople: function(){
      this.people.pop()
    }
  }
};
</script>

<style scoped>
li {
  color: blue;
}
.people-ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: center;
}
.people-ul li {
  padding: 0;
  list-style-type: none;
  margin: 20px;
  flex-grow: 1;
  flex-basis: 200px;
  border: 1px solid #777;
  text-align: center;
}
</style>

