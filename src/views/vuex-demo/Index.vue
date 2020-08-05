<template>
  <div>
      <button @click="increment(payload)"> 同步 + {{payload.step}}</button>
      <button @click="incrementAsync(payload)"> 异步 + {{payload.step}}</button>
      <p>{{count}}</p>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
            payload:{
                step:10
            }
        }
    },
    computed:{
        ...mapState(['count']),
    },
    methods:{
        // 方法调用时传递参数，可以传递载荷 @click="increment(payload)"
        ...mapMutations(['increment']),
        ...mapActions(['incrementAsync']),

        // increment(payload){
        //     this.$store.commit('increment',payload)
        // },
        // incrementAsync(payload){
        //     this.$store.dispatch('incrementAsync',payload)
        // }
    }

}
</script>

<style>

</style>