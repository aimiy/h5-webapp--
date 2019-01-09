<template>
    <div class="list">
        <div class="list-title">
        {{info.ad_name}}
        </div>
        <div class="list-wrapper">
            <div class="item" :class="'item' + column" v-for="(item,index) in flexarr" :key="index">
                <div class="img"><img :src="item.cover || item.ad_pic_url || item.data.book_cover" alt=""></div>
                <div class="info">
                    <div class="name">{{item.title}}</div>
                    <div class="author">{{item.authors}}</div>
                    <div class="more" v-if="column === 1">
                        <div class="categories">
                            <span class="categorie" v-for="ca in item.categories">
                                {{ca.label}}
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="page-wrapper" v-show="totalpage>1">
            <div class="pageprev pagebtn" @click="pageprev()"><</div>
            <div class="pagenext pagebtn" @click="pagenext()">></div>
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
                total:this.info.data.total,
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
                console.log(this.totalpage)
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
    margin:0.5rem
    .list-title
        text-align: left
        font-size: 0.7rem
    .list-wrapper
        display: flex
        flex-wrap: wrap
        .item
            text-align:center
            .img
                width: 85%
                height:80%
                margin:0rem auto
                overflow:hidden
                img
                    text-align:center
                    width: 100%;
                    height: auto;
            .name
                font-size:0.5rem
            .author
                color:#cecece
        .item1
            width:100%
            height:6rem
            padding: 0.5rem 0;
            display:inline
            text-align:left
            .img
                display:inline-block
                width:30%
                margin:0
            .info
                display:inline-block
                vertical-align:top
                width:60%
                .name
                    font-size:0.6rem
                .author
                    font-size:0.4rem
                .categories
                    .categorie
                        font-size:0.3rem
        .item2
            width: 50%;
            height:9rem
            padding: 0.5rem 0;
        .item3
            width: 33.33%;
            height:6rem
            padding: 0.5rem 0;
        .item4
            width: 25%;
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