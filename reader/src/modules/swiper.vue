<template>
    <div class="swiper">
        <transition name="changeleft">
        <div class="container" :style="{width:width + 'rem',left:left + 'rem'}">
            <div class="img" v-for="img in info.data.data">
                <img :src="img.ad_pic_url || 'http://image.read.duokan.com/mfsv2/download/fdsc3/p01tBqnupVze/qayTXiXrMm1lVm.jpg'" alt="">
            </div>
        </div>
        </transition>
        <div class="btn"><button @click="nextpage()">下一页</button></div>
    </div>
</template>
<script>
    export default{
        props:['info'],
        data(){
            return{
                total:this.info.data.total,
                currentpage:1,
                left:0,
                width:11
            }
        },
        methods:{
            nextpage:function(){
                this.left -= 11;
            }
        },
        created(){
            this.width = this.total * 11;
        }
    }
</script>
<style lang="stylus">
.swiper
    position:relative
    width:11rem
    height: 5.5rem
    margin:0.5rem auto
    overflow:hidden
    .container
        position:absolute
        top:0
        left:0rem
        transition:left 0.5s
        height:4.5rem
        .img
            float:left
            display:inline-block
            width: 11rem;
            img
                width: 100%
    .btn
        position:absolute
        bottom:0
</style>