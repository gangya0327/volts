<template>
  <div id="todolist">
    {{msg}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "lifecycle"
    };
  },
  methods: {
    getLists() {
      return "getLists";
    }
  },
  beforeCreate() {
    console.log("beforeCreate: 暂时得不到数据，属性，函数，报错");
    console.log(this.msg, this.getLists());
  },
  created() {
    console.log("created: 可以得到数据，属性，函数");
    console.log(this.msg, this.getLists());
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  deactivated() {},
  errorCapture() {}
};
</script>

<style>

</style>
