<template>
  <div>
    <ul>
      <li v-for='user in users' :key='user'>{{user}}</li> 
    </ul>
  </div>
</template>

<script>
export default {
  name: "global",
  data() {
    return {
      users: ["anmy", "peter", "owen"]
    };
  }
};
</script>

<style scoped>
  li {
    color: blueviolet;
  }
</style>

