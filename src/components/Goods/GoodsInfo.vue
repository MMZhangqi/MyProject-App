<template>
    <div>
        <div class="container">
            <img src="" alt="">
            <div class="title">{{ GoodsInfo.title }}</div>
            <div class="content" v-html="GoodsInfo.content"></div>      
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            GoodsInfo: {}
        }
    },
    created() {
        this.getGoodsInfo()
    },
    methods: {
        getGoodsInfo(){
            this.$axios.get('/api/goods/getdesc/'+this.$route.params.id)
            .then(result => {
                if(result.data.status === 0){
                    this.GoodsInfo = result.data.message[0]
                    console.log(this.GoodsInfo);
                }
            })
        }
    },
}
</script>

<style scoped>
.container{
    width: 90%;
    margin: 20px auto;
}
.content{
    margin-top: 20px;
    padding: 0 5px;
}
</style>