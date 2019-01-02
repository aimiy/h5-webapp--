<template>
  <div class="hello">
    <!-- <swiper v-if="msg" :info='msg[0]'/>
    <list :count=3 :info='msg[1]'/>
    <div v-for="item in msg">
      {{item.ad_name}}
    </div> -->
    <img :src=(baseUrl+msg) alt="">
  </div>
</template>

<script>
  import swiper from '@/modules/swiper'
  import list from '@/modules/list'
export default {
  name: 'index',
  data(){
    return {
      baseUrl:process.env.VUE_APP_API,
      msg:''
    }
  },
  created(){
    this.axios.get(this.baseUrl + 'img').then(result => {
      this.msg = result.data;
    });
  },
  components:{
    swiper,
    list
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
