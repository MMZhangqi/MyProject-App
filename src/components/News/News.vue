<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/news/newsInfo/'+item.id">
                    <img class="mui-media-object mui-pull-right" src="@/images/Diana.png" alt="">
                    <div class="mui-media-body">
                        {{ item.title }}
                        <p class="mui-ellipsis">
                            {{ item.zhaiyao }}
                        </p>
                        <p class="my_mui_ellipsis">
                            <span>发表时间：{{ item.add_time | dateFormat("YYYY-MM-DD") }}</span>
                            <span>点击次数：{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newslist: []
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        getNewsList() {
            this.$axios.get('/api/getnewslist')
            .then(result =>{
                console.log(result)
                this.newslist = result.data.message
            })
        }
    },
}
</script>

<style scoped>
.mui-media-body .mui-ellipsis{
    font-size: 12px;
    width: 75%;
    margin-top: 7px;
}
.mui-table-view .mui-media-object{
    max-width: 66px;
}
.my_mui_ellipsis{
    margin-top: 10px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
}
.mui-media-body{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mui-table-view{
    margin-bottom: 50px;
}
</style>