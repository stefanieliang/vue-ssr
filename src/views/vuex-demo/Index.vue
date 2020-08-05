<template>
  <div>
      <button @click="increment"> 同步 + {{payload.step}}</button>
      <button @click="incrementAsync"> 异步 + {{payload.step}}</button>
      <p>{{count}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
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
        increment(){
            this.$store.commit('increment',this.payload)
        },
        incrementAsync(){
            this.$store.dispatch('incrementAsync',this.payload)
        }
    }

}
</script>

<style>

</style>