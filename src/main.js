import Vue from 'vue'
import App from './App.vue'
// import { createRouter } from './router/index';
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

// export function createApp(){

//   const router = createRouter()

//   const app = new Vue({
//     router,
//     render: h => h(App)
//   })
//   return { app,router }
// }

new Vue({
  router,
  store,
  render:h=>h(App)
}).$mount("#app")
