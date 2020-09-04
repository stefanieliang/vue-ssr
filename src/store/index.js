import Vue from 'vue'
import Vuex from 'vuex'

// 使用常量来表示 mutation
import { INCREMENT } from './mutation-types';
import modulesA from './modules/moduleA';

Vue.use(Vuex)

const getData = function(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("getData...")
            resolve()
            reject()
        }, 1000);
    })
}

const getOtherData = function(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("getOtherData...")
            resolve()
            reject()
        }, 1000);
    })
}

const store = new Vuex.Store({
    modules:{
        a:modulesA,

    },
    state:{
        count:0,
        todos:[
            {
                id:1,
                text:"js",
                done:true
            },
            {
                id:2,
                text:"react",
                done:true
            },
            {
                id:3,
                text:"node",
                done:false
            }
        ]
    },
    getters:{
        doneTodos(state){
            return state.todos.filter(todo=>todo.done)
        },
        doneTodosCount(state,getters){
            return getters.doneTodos.length
        },
        // 通过方法访问
        // getTodoById: (state) => (id) => {
        //     return state.todos.find(todo => todo.id === id)
        // },
        getTodoById(state){
            return id=>{
                return state.todos.find(todo=>todo.id==id)
            }
        }
    },
    mutations:{
        [INCREMENT](state,payload){
            state.count += payload.step || 1;
        },
        someMutation(state){
            console.log(state.count,"someMutation...")
        },
        someOtherMutation(state){
            console.log(state.count,"someOtherMutation...")
        },
    },
    actions:{
        incrementAsync(context,payload){
            setInterval(()=>context.commit(INCREMENT,payload),1000)
        },
        // 组合 action
        async actionA({commit}){
            commit('someMutation',await getData())
        },
        async actionB({dispatch,commit}){
            await dispatch('actionA')
            commit('someOtherMutation',await getOtherData())
        }
    }
})

export default store