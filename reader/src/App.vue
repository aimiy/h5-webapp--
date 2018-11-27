<template>
  <div id="app">
    {{msg}}
    {{msg1}}
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return {
      baseUrl:process.env.VUE_APP_API,
      msg:'',
      msg1:''
    }
  },
  created(){
    this.axios.get(this.baseUrl + 'search/?keyword=12').then(result => {
      this.msg1 = result;
    });
    this.axios.get(this.baseUrl + 'test').then(result => {
      this.msg = result.data.data;
    });
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
