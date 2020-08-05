import Vue from "vue"
import Router from "vue-router"
import Home from "../components/Home.vue"
import Vuexdemo from '../views/vuex-demo/Index'

Vue.use(Router)

// export function createRouter(){
//     return new Router({
//         mode:'history',
//         routes:[{
//             path:"/",
//             component:()=>import('../components/Home.vue')
//         }]
//     })
// }

export default new Router({
    mode:"history",
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/mart",
            component:()=>import('../components/Mart.vue')
        },
        {
            path:"/mart/:id",
            component:()=>import('../components/Detail.vue'),
            props:true
        },
        {
            path:'/vuexdemo',
            component:Vuexdemo
        }
    ]
})