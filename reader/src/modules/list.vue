<template>
    <div class="list">
        <div class="title">
        {{info.ad_name}}
        </div>
        <div class="list-wrapper">
            <div class="item" v-for="item in info.data.data">
                <img :src="item.cover" alt="">
            </div>
        </div>
        {{count}}
    </div>
</template>
<script>
    export default{
        props:['info','count']
    }
</script>
<style>
    .list{
        margin:0.5rem;
    }
    .title{
        text-align: left;
        font-size: 0.7rem;
    }
    .list-wrapper{
        display: flex;
        flex-wrap: wrap;
    }
    .list-wrapper .item{
        width: 33.33%;
    }
    .list-wrapper .item img{
        width: 100%;
        height: auto;
    }
</style>