<template>
    <div>
         <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swiper" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data() {
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
    },
}
</script>

<style scoped>
.mint-swipe{
    height: 200px;
    background-color: aqua;
}
.mint-swipe img{
    width: 100%;
    height: 100%;
}
</style>