<template>
  <div>
    <h1>Users</h1>
    <form v-on:submit='addUser'>
      <input type="text" v-model='newUser.name' placeholder="Enter name">
      <input type="text" v-model='newUser.email' placeholder="Enter email">
      <input type="submit" value="submit">
    </form>
    <ul>
      <li v-for='user in users'>
        <input type="checkbox" class="toggle" v-model='user.contacted'>
        <span v-bind:class='{contacted: user.contacted}'>
          {{user.name}}: {{user.email}}
          <button v-on:click='delUser(user)'>删除</button>
        </span>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "userlist",
  data() {
    return {
      newUser: {},
      users: [
        {
          name: "peter",
          email: "peter4499427@163.cmo",
          contacted: false
        },
        {
          name: "mike",
          email: "mike9529427@163.cmo",
          contacted: false
        },
        {
          name: "raven",
          email: "raven3529427@163.cmo",
          contacted: false
        }
      ]
    };
  },
  methods: {
    addUser: function(e) {
      e.preventDefault();
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      console.log("adduser");
    },
    delUser: function(user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  }
};
</script>

<style>
.contacted {
  text-decoration: line-through;
}
</style>
