<template>
    <div>
        <div class="newsInfo">
            <h3 class="title">{{ newsInfo.title }}</h3>
            <p>
                <span>发布时间：{{ newsInfo.add_time | dateFormat }}</span>
                <span>点击次数：{{ newsInfo.click }}</span>
            </p>
            <hr>
            <!-- 内容 -->
            <div class="content" v-html="newsInfo.content"></div>
            <hr>
            <!-- 评论区 -->
            <comment :id="this.id"></comment>
        </div>
    </div>
</template>

<script>
import Comment from '@/components/common/comment.vue'
export default {
    components: {Comment},
   
    data() {
        return {
            id: null,
            newsInfo: {}
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo(){
            this.id = this.$route.params.id
            this.$axios.get('/api/getnew/'+this.id)
            .then(result => {
                if(result.data.status === 0){
                    this.newsInfo = result.data.message[0]
                }
            })
        }
    },
}
</script>

<style scoped>
div.newsInfo{
    margin-top: 20px;
    padding: 0 15px;
    margin-bottom: 50px;
}
.title{
    text-align: center;
    font-size: 16px;
    padding: 0 20px;
    line-height: 20px;
    font-weight: 400;
}
.newsInfo p{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 20px;
}
.content img{
    margin: 10px auto;
}
</style>