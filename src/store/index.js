import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment(state,payload){
            state.count += payload.step || 1;
        }
    },
    actions:{
        incrementAsync(context,payload){
            setInterval(()=>context.commit('increment',payload),1000)
        }
    }
})

export default store