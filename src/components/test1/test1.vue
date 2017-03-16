<template>
    <div class="test1">
        <button @click="send()">向组件2传递数据</button>
    </div>
</template>
<style>
</style>
<script scoped>
export default {
    name: 'hello',
    data() {
        return {
            data1:{
            	msg:"组件1里的数据",
            	num:1
            }
        }
    },
    computed: {
       
    },    
    methods: {     
    
        send: function() {
           var obj = this.data1;
           //dispatch 可以用于异步操作
          // this.$store.dispatch('changeData1',obj);
           //commit 是同步操作
           this.$store.commit('changeData1',obj)
        }
    }
}
</script>
