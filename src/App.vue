<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
 	html,body{
 		max-width: 780px;
 		margin-left: auto;
 		margin-right: auto;
		overflow-x: hidden;
		background-color: #F5F5F5;
 }
 #app{
 	margin-left: auto;
 	margin-right: auto;
 }
</style>
