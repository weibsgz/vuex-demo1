<template>
  <div class="hello">
    <h3>welcome vuex-demo</h3>
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <!-- <input type="button" value="偶数才能点击+" @click="clickOdd">
         <input type="button" value="点击异步" @click="clickAsync">-->
    <div>
        现在数字为: {{count}}
        <!--, 它现在是 {{getOdd}}-->
    </div>


    <h3>第二个vuex-demo</h3>
    <button @click="changeMsg">点击文字改变</button>
    {{msg}}

    <h3>和vuex无关的东西</h3>
    <button @click="doThis()">点击事件</button>
  </div>
</template>

<script>
import {mapActions}  from 'vuex'; 
export default {
  name: 'hello',
  data () {
    return {
      
    }
  },
  computed: {
    count () {
      //因为在main.js里注入了store，下面的组件就可以用this.$store
      return this.$store.state.count
    },
    msg(){
      return this.$store.state.msg
    }

  },
 /*  methods: mapActions([
      'increment',
      'decrement',
      'changeMsg'
  ]),*/
   methods:{
    //...將数组转为 逗号分隔的参数序列
    ...mapActions([
        'increment',
        'decrement',
        'changeMsg'
    ]),
    doThis:function(){
      alert(1)
    }
   }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
