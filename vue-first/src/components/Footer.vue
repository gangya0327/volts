<template>
  <footer>
    <h2>{{footer}} {{slogan}}</h2>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  props: {
    slogan: {
      type: String
    }
  },
  data(){
    return {
      footer: 'I am footer.'
    }
  }
}
</script>

<style scoped>
  footer {
    background: palegreen;
    padding: 10px;
  }
  h2 {
    color: darkcyan;
    text-align: center;
  }
</style>

