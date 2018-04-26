Vue.component('greeting', {
  template: `
  <div>
    <p>大家好，我是{{name}}，欢迎使用vue</p>
    <button v-on:click="changeName">改名</button>
  </div>
  `,
  data: function() {
    return {
      name: 'peter'
    }
  },
  methods: {
    changeName: function() {
      this.name = 'bank'
    }
  }
})

new Vue({
  el: '#app-one'
})
new Vue({
  el: '#app-two'
})