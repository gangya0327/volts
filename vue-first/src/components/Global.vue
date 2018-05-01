<template>
  <div>
    <ul>
      <li v-for='user in users'>{{user}}</li> 
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

