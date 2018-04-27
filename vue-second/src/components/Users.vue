<template>
  <div>
    <h1>Users</h1>
    <ul>
      <!-- <li v-for='user in users'>{{user.name}}: {{user.email}}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
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
  methods: {}
};
</script>

<style>

</style>
