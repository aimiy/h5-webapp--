<template>
    <div class="swiper">
    <div class="img" v-for="img in info.data.data">
        <img :src="img.ad_pic_url" alt="">
    </div>
</div>
</template>
<script>
    export default{
        props:['info']
    }
</script>
<style>
.swiper{
    height: 4.5rem;
}
.img{
    margin:0.5rem;
    width: 11rem;
}
.swiper img{
    width: 100%;
    border-radius: 1rem;
}
</style>