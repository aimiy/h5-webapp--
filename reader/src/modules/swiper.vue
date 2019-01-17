<template>
    <div class="swiper">
        <transition name="changeleft">
            <div class="container" :style="{width:width + 'rem',left:left + 'rem'}">
                <div class="img" v-for="(img,index) in info.data.data" :key="index">
                    <img :src="img.ad_pic_url || 'http://image.read.duokan.com/mfsv2/download/fdsc3/p01tBqnupVze/qayTXiXrMm1lVm.jpg'" alt="">
                </div>
            </div>
        </transition>
        <div v-show="styindex===1" class="btn btnprev" @click="prevpage()">上</div>
        <div v-show="styindex===1" class="btn btnnext" @click="nextpage()">下</div>
        <div class="page-wrapper" v-show="styindex===2">
            <span @click="topage(index + 1)" class="pagec" :class="{'active':currentpage===(index + 1)}" v-for="(item,index) in info.data.data" :key="index"></span>
        </div>
    </div>
</template>
<script>
    export default{
        props:['info','styindex'],
        data(){
            return{
                total:this.info.data.total,
                currentpage:1,
                left:0,
                width:11
            }
        },
        methods:{
            topage:function(page){
                let r = this.currentpage - page;
                if (r !== 0) {
                    this.left += r*11;
                    this.currentpage = page;
                }
            },
            prevpage:function(){
                if (this.currentpage>1) {
                    this.left+=11;
                    this.currentpage--;
                }
            },
            nextpage:function(){
                if (this.currentpage<this.total) {
                    this.left -= 11;
                    this.currentpage++;
                }
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
    height: 4.1rem
    margin:0.5rem auto
    overflow:hidden
    .container
        position:absolute
        top:0
        left:0rem
        transition:left 0.5s
        height:4.5rem
        z-index:-1
        .img
            float:left
            display:inline-block
            width: 11rem;
            border-radius:0.5rem
            overflow:hidden
            img
                width: 100%
    .btn
        position:absolute
        top:1.5rem
        width:1rem
        height:1rem
        line-height:1rem
        color:#fff
        text-align:center
        background:#a4a4a496
        z-index:0
    .btnprev
        position:absolute
        left:0rem
    .btnnext
        position:absolute
        left:10rem
    .page-wrapper
        margin-top:3.5rem
        z-index:0
        .pagec
            display:inline-block
            width:0.3rem
            height:0.3rem
            background:rgba(153, 153, 153, 0.61)
            margin:0 3px
            border-radius:0.5rem
        .active
            background:#fff
</style>