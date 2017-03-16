<template>
    <div class="test2">
        {{data}}
    </div>
</template>
<style>
</style>
<script scoped>
export default {
    data() {
            return {
               
            }
        },
    computed: {
        data() {
            //因为在main.js里注入了store，下面的组件就可以用this.$store
            return  this.$store.state.data1
        }      

    },
}
</script>
