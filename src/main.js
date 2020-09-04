import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

// import { createRouter } from './router/index';
import store from './store'
import router from './router'

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
  store,
  router,
  render:h=>h(App)
}).$mount("#app")
