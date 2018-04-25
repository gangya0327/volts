new Vue({
  el: '#app',
  data: {
    name: '',
    age: '',
    a: 0,
    b: 0,
    changeColor: false,
    changeLength: false
  },
  methods: {
    logName: function(){
      this.name = this.$refs.name.value
      console.log('inputing your name')
    },
    logAge: function(){
      this.age = this.$refs.age.value
      console.log('inputing your age')
    }
    // addToA: function(){
    //   console.log('method addToA')
    //   return this.a + this.age
    // },
    // addToB: function(){
    //   console.log('method addToB')
    //   return this.b + this.age
    // }
  },
  computed: {
    addToA: function(){
      console.log('computed addToA')
      return this.a + this.age
    },
    addToB: function(){
      console.log('computed addToB')
      return this.b + this.age
    },
    compClass: function(){
      return {
        changeColor: this.changeColor,
        changeLength: this.changeLength
      }
    }
  }
})