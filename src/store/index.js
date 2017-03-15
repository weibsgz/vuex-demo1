 import Vue from 'vue'
 import Vuex from 'vuex'
 Vue.use(Vuex);
 const INCREMENT = 'INCREMENT'; //增加的方法名
 const DECREMENT = 'DECREMENT'; //减少的方法名
 export default new Vuex.Store({
     state: {
         count: 0,
         msg:""

     },

     actions: {
         increment(context) {
             context.commit('increment')
         },
         decrement(context) {
             context.commit('decrement')
         },
         changeMsg(context){
         	context.commit('changeMsg')
         }
     },
     
     mutations: {
         increment(state) {
             state.count++
         },
         decrement(state) {
             state.count--
         },
         changeMsg(state){
         	state.msg = "卧槽"
         }
     },
 })

