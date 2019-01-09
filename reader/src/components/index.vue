<template>
  <div class="hello">
    <swiper v-if="msg!==''" :info='msg[0]'/>
    <list v-if="msg!==''" :column=1 :row=3 :info='msg[1]'/>
    <list v-if="msg!==''" :column=4 :row=2 :info='msg[2]'/>
    <list v-if="msg!==''" :column=3 :row=2 :info='msg[3]'/>
    <list v-if="msg!==''" :column=2 :row=2 :info='msg[4]'/>  
    <list v-if="msg!==''" :column=4 :row=2 :info='msg[5]'/>
    <list v-if="msg!==''" :column=4 :row=2 :info='msg[6]'/>
    <div v-for="item in msg">
      {{item.ad_name}}
    </div>
    <!-- <img :src=(baseUrl+msg) alt=""> -->
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
    this.axios.get(this.baseUrl + 'api_index').then(result => {
      this.msg = result.data.items;
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
