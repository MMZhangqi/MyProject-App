<template>
    <div>
        <div class="Comment">
            <h3>评论内容</h3>
            <textarea v-model="comment" placeholder="请输入内容" name="comment" id="comment" maxlength='120'></textarea>
            <mt-button class="btn" @click="addCommentHandel" type="primary" size="large">点击发表</mt-button>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell" v-for="(item,index) in commentList" :key="item.id">
                    <p>
                        <span class="comment_people">{{ item.user_name }}</span>
                        <span class="comment_time">{{ item.add_time | dateFormat }}</span>
                    </p>
                    <span class="content">{{ item.content }}</span>
                    <span class="mui-badge mui-badge-primary">{{ index + 1 }}</span>
                </li>
                <mt-button class="btn" @click="getComment" type="primary" size="large">加载更多</mt-button>
            </ul>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
           commentList: [],
           comment: '',
           pageindex: 0
        }
    },
    props: [
        'id'
    ],
    created() {
        this.getComment()
    },
    methods: {
        getComment(){
            this.pageindex++
            this.$axios.get('/api/getcomments/' + this.id + '?pageindex=' + this.pageindex)
            .then(result => {
                if(result.data.status === 0){
                    if(result.data.message.length >0){
                        this.commentList = this.commentList.concat(result.data.message)
                    }
                }
            })
        },
        addCommentHandel(){
            if(this.comment.trim() == ''){
                Toast({
                    message: '评论内容不能为空',
                    position: 'center',
                    duration: 5000
                });
            }else{
                this.$axios.post('/api/postcomment/'+this.id,{content: this.comment})
                .then(result => {
                    if(result.data.status === 0){
                        Toast({
                            message: result.data.message,
                            position: 'center',
                            duration: 5000
                        })
                        let cmt = {
                            user_name : "匿名用户",
                            content: this.comment,
                            add_time: Date.now()
                        }
                        this.commentList.unshift(cmt)
                        this.comment = ''
                    }
                })
            }
        }
    },
}
</script>

<style scoped>
.mui-table-view{
    margin-bottom: 100px;
}
.mui-table-view-cell{
    height: 80px;
}
#comment{
    margin-bottom: 10px;
    border-radius: 4px;
}
P{
    font-size: 12px;
    position: relative;
}
p span:nth-of-type(2){
    position: absolute;
    top: 50px;
    left: 0;
}
.content{
    font-size: 14px;
    font-weight: 400;
    color: blue;
}
.btn{
    margin-bottom: 10px;
    background-color: rgb(68, 63, 63);
}
</style>