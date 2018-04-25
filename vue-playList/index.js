//实例化Vue对象
new Vue({
    el: '#app', //element 需要获取的元素，根容器
    data: { //用于数据的存储
        name: 'raven',
        website: 'http://www.baidu.com',
        websiteTag: '<a href="http://www.baidu.com">百度我</a>',
        age: 20,
        x: 0,
        y: 0
    },
    methods: { //存储函数
        greet: function(time) {
            return 'good ' + time + ' ' + this.name + '!';
        },
        add: function(inc) {
            this.age += inc
        },
        subtract: function(dec) {
            this.age -= dec
        },
        updateXY: function(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        stopMoving: function(e){
            e.stopPropagation();
        },
        open: function(){
            alert('open')
        }
    }
})