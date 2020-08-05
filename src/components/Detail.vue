<template>
  <div>
      <h4>this is detail...</h4>
      <p>$route.params.id::{{$route.params.id}}</p>
      <p>id::{{id}}</p>
  </div>
</template>

<script>
export default {
    name:"Detail",
    props:["id"]
}
</script>

<style>

</style>