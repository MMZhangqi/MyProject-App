<template>
    <div class="imginfo">
        <h3 class="title">{{ imgInfo.title }}</h3>
        <p>
            <span>发布时间：{{ imgInfo.add_time | dateFormat }}</span>
            <span>点击次数：{{ imgInfo.click }}</span>
        </p>
        <hr>
        <vue-preview class="thumlist" :slides="thumimg" @close="handleClose"></vue-preview>
        <hr>
        <!-- 内容 -->
        <div class="content" v-html="imgInfo.content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: 0,
            imgInfo: {},
            thumimg: []
        }
    },
    created() {
        this.getInfo(),
        this.getthumimg()
    },
    methods: {
        getInfo(){
            this.id = this.$route.params.id
            this.$axios.get('api/getimageInfo/' + this.id)
            .then(result => {
                if(result.data.status === 0){
                    this.imgInfo = result.data.message[0]
                }
            })
        },
        getthumimg(){
             this.$axios.get('api/getthumimages/' + this.id)
            .then(result => {
                if(result.data.status === 0){
                    result.data.message.forEach(element => {
                        element.msrc = element.src;
                        element.w = 600
                        element.h = 600
                    });
                    this.thumimg = result.data.message
                    console.log(this.thumimg);
                }
            })
        },
        handleClose(){
            
        }
    },
}
</script>

<style scoped>
.imginfo{
    padding: 0 10px;
    margin-bottom: 60px;
}
.imginfo h3{
    text-align: center;
    color: black;
    font-size: 18px;
    padding: 0 10px;
    margin-top: 10px;
}
img {
    border: 0;
    width: 100px;
}
/* 缩略图盒子 */
.thumlist{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    padding: 0;
}
figure {
    float: left;
}
</style>

