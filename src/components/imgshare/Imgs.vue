<template>
    <div>
       <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-scroll-wrapper">
            <div class="mui-scroll">
                <a @click="getImg(item.id)" class="mui-control-item" v-for="item in imgcategory" :key="item.id">
                    {{ item.title }}
                </a>
            </div>
        </div>
        <ul class="photo_list">
            <router-link tag="li" :to="'/home/imgs/'+item.id" v-for="item in photolist" :key="item.id">
                <img :src="item.img_url" alt="" v-lazy="item.img_url">
                <div>
                    <h3>{{ item.title }}</h3>
                    <span>{{ item.zhaiyao }}</span>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import mui from '@/lib/dist/js/mui.js'
export default {
    data() {
        return {
            imgcategory: [],
            photolist: []
        }
    },
    created() {
        this.getimgcategory(),
        this.getImg(0)
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods: {
        getimgcategory(){
            this.$axios.get('/api/getimgcategory')
            .then(result => {
                if(result.data.status === 0){
                    result.data.message.unshift({title: "全部分类", id: 0})
                    this.imgcategory = result.data.message
                }
            })
        },
        getImg(getcategoryId){
            this.$axios.get('/api/getimages/' + getcategoryId)
            .then(result => {
                console.log(result);
                if(result.data.status === 0){
                    this.photolist = result.data.message
                }
            })
        },
    },
}
</script>

<style scoped>
/*顶部*/
#sliderSegmentedControl{
    display: fixed;
    /* top:40px */
    height: 40px;
    background-color: #fff;
    border-bottom: 1px solid rgb(239, 230, 230);
}
/* imglist */
.photo_list{
    margin: 5px auto 50px;
    padding: 10px;
    list-style: none; 
}
.photo_list li{
    border-radius: 5px;
    position: relative;
    margin: 0 auto 10px;
    box-shadow: 0 0 10px #000;
}
.photo_list li div{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 30%;
    background-color: rgba(0, 0, 0, 0.305);
    border-radius: 0 0 5px 5px;
    padding: 9px;
}
.photo_list li div h3{
    font-size: 15px;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    letter-spacing: .13em;
}
.photo_list li div span{
    margin-top: 10px;
    font-size: 12px;
    letter-spacing: .1em;
    line-height: 14px;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    display: -webkit-box;
    color: #fff;
}
.photo_list li img{
    width: 100%;
    display: block;
    border-radius: 0 0 5px 5px
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>