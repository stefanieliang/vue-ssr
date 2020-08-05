<template>
  <div id="app">
    <p>
      <a @click="goBack">返回</a>
    </p>
    <router-link to="/home">Home</router-link> | 
    <router-link to="/mart">Mart</router-link> | 
    <router-link to="/vuexdemo">Vuex Demo</router-link> | 

    <!-- <p>this.$route:{{this.$route}}</p>
    <p>this.$router:{{this.$router}}</p> -->

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    goBack(){
      window.history.length?this.$router.go(-1):this.$router.push("/")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
