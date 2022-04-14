<template>
    <div>
        <!-- 轮播 -->
        <!-- <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swiper" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe> -->
        <swiper></swiper>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9"> 
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="/home/news">
                    <img src="@/images/menu01.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </a>
            </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="/home/imgs">
                    <img src="@/images/menu02.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="/home/goodslist">
                    <img src="@/images/menu03.png" alt="">
                    <div class="mui-media-body">商品列表</div>
                </a>
            </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="/news">
                    <img src="@/images/menu04.png" alt="">
                    <div class="mui-media-body">记事本</div>
                </a>
            </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="/news">
                    <img src="@/images/menu05.png" alt="">
                    <div class="mui-media-body">视频播放</div>
                </a>
            </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="/news">
                    <img src="@/images/menu06.png" alt="">
                    <div class="mui-media-body">联系客服</div>
                </a>
            </li>
        </ul> 
    </div>
</template>

<script>
import swiper from '@/components/common/swiper.vue'
export default {
    name: 'Home',
    components: {
        swiper
    },
    data(){
        return {
            swiper: [
                {
                    "id": 1,
                    "url": "https://m.zztion.com/",
                    "img": "http://wangxiao.zztion.com/static/course/20200516/fddd41a35418417507afc0a60cc58bed.png"
                },
                {
                    "id": 2,
                    "url": "https://m.zztion.com/",
                    "img": "http://wangxiao.zztion.com/static/course/20200516/75b7e3d68507c95fa725374c1dc560c2.png"
                },
                {
                    "id": 3,
                    "url": "https://m.zztion.com/",
                    "img": "http://wangxiao.zztion.com/static/course/20200516/83eba24f22e2c1426be628984b24dc6a.jpg"
                }
            ]
        }
    }
}
</script>

<style>
ul li img{
    width: 30%;
    height: 30%;
}
</style>