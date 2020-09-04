<template>
  <div>
      <button @click="increment(payload)"> mutation + {{payload.step}}</button>
      <button @click="incrementAsync(payload)"> action + {{payload.step}}</button>
      <p>state: {{count}}</p>
      <button @click="actionAB">组合action</button>
      <hr>
      <div>
          <p>getters: 已完成的数量为{{doneTodosCount}}</p>
          <ol>
              <li v-for="(item,index) in doneTodos" :key="index">
                  {{item.text}} -- {{item.done}}
              </li>
          </ol>
          <p>获取ID为2的todo: {{getTodoById}}</p>
      </div>
      <hr>
      <p>module</p>
      {{fullName}}
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions, mapGetters} from 'vuex'
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
        ...mapGetters(['doneTodos','doneTodosCount']),
        // vuex getters 中传入ID
        getTodoById(){
            return this.$store.getters.getTodoById(2)
        },
        fullName(){
            return this.$store.state.a
        }
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
        ...mapActions({
            actionAB:'actionB'
        })
    }

}
</script>

<style>

</style>