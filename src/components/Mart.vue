<template>
  <div>
     <h2>Mart</h2>
     <ol>
         <li v-for="(item,index) in martList" :key="index">
             <router-link :to="'mart/'+item.name">{{item.name}}</router-link>
        </li>
     </ol>

  </div>
</template>

<script>
export default {
    name:"Mart",
    data(){
        return{
            martList:[
                {
                    id:1,
                    name:"foo"
                },
                {
                    id:2,
                    name:"bar"
                },
                {
                    id:3,
                    name:"baz"
                }
            ]
        }
    }
}
</script>

<style>

</style>