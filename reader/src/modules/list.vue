<template>
    <div class="list">
        <div class="list-title">
        {{info.ad_name}}
        </div>
        <div class="list-wrapper">
            <div class="item" :class="'item' + column" v-for="(item,index) in flexarr" :key="index">
                <div class="img" v-show="column !== 2"><img :src="item.cover || item.ad_pic_url || item.data.book_cover" alt=""></div>
                <div class="info">
                    <div class="index" v-show="column===2">{{index+1}}</div>
                    <div class="name">{{item.title}}</div>
                    <div class="author">{{item.authors}}</div>
                    <div class="more" v-if="column === 1">
                        <div class="summary">
                            {{item.summary}}
                        </div>
                        <div class="categories">
                            <span class="categorie" v-for="(ca,index) in item.categories" :key="index">
                                {{ca.label}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-wrapper" v-show="totalpage>1">
            <div class="pageprev pagebtn" @click="pageprev()">上</div>
            <div class="pagenext pagebtn" @click="pagenext()">下</div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['info','column','row'],
        data(){
            return{
                srcarr:this.info.data.data,
                currentpage:1,
                total:this.info.data.count,
                pageflex:this.column * this.row
            }
        },
        computed:{
            totalpage:function(){
                return Math.ceil(this.total/this.pageflex);
            },
            flexarr:function(){
                return this.srcarr.slice(((this.currentpage - 1) * this.pageflex),(this.currentpage * this.pageflex));
            } 
        },
        methods:{
            init:function(){
            },
            setview:function(){
            },
            pageprev:function(){
                if (this.currentpage>1) {
                    this.currentpage--;
                }   
            },
            pagenext:function(){
                if (this.currentpage<this.totalpage) {
                    this.currentpage++;
                }
            }
        },
        created(){
        }
    }
</script>
<style lang="stylus">
.list
    margin:0.5rem 0.3rem 1rem 0.3rem
    .list-title
        text-align: left
        font-size: 0.7rem
    .list-wrapper
        display: flex
        flex-wrap: wrap
        margin-top:0.5rem
        .item
            text-align:center
            .img
                width: 90%
                height:90%
                margin:0rem auto
                overflow:hidden
                img
                    text-align:center
                    width: 100%;
                    height: auto;
            .name
                font-size:0.38rem
                font-weight:bold
                margin-bottom:0.1rem
            .author
                font-size:0.3rem
                color:#cecece
        .item1
            width:100%
            height:3rem
            margin: 0.3rem 0;
            display:inline
            text-align:left
            .img
                display:inline-block
                width:15%
                height:100%
                margin:0
            .info
                margin-left:0.3rem
                display:inline-block
                vertical-align:top
                width:80%
                .name
                    font-size:0.5rem
                    font-weight:bold
                    margin-bottom:0.1rem
                .author
                    font-size:0.3rem
                    margin-bottom:0.1rem
                .summary
                    font-size:0.22rem
                    margin-bottom:0.2rem
                .categories
                    .categorie
                        margin:0 0.1rem
                        color:#008b06
                        font-size:0.22rem
                        padding:0rem 0.1rem
                        border:1px solid #008b06
                        border-radius:0.1rem
        .item2
            width: 50%
            height:1.1rem
            line-height:0.45rem
            text-align:left
            .img
                display:inline-block
                width:15%
                height:100%
                margin:0
            .info
                margin-left:0.3rem
                display:inline-block
                .index
                    margin:0 0.3rem 0 0
                    display:inline-block
                    color: #FF9800;
                    font-size: 0.38rem;
                    font-weight: bold;
                .name
                    display:inline-block
                .author
                    display:inline-block
                    margin-left:0.2rem
        .item3
            width: 33.33%
            height:6rem
            padding: 0.5rem 0
        .item4
            width: 25%;
            height:4rem
            padding: 0.5rem 0
        .item5
            width: 20%;
            height:3rem
            padding: 0.5rem 0
        .item6
            width: 20%;
            height:4rem
            padding: 0.5rem 0
    .page-wrapper .pagebtn
        display: inline-block;
        color: #fff;
        margin:0 1rem;
        text-align: center;
        width: 1rem;
        height: 1rem;
        border-radius: 0.1rem;
        line-height: 1rem;
        background: #cecece;
</style>