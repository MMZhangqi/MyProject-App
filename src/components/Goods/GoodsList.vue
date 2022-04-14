<template>
    <div>
        <ul class="mui-table-view mui-grid-view">
            <li v-for="item in list" :key="item.id" class="mui-table-view-cell mui-media mui-col-xs-6">
                <router-link :to="'/home/goods/'+item.id">
                    <div class="mui-media-body">
                        <img :src="item.img_url">
                        <div class="shop-imformation">
                            <p class="title">{{ item.title }}</p>
                            <span class="sell_price">{{ item.sell_price }}</span>
                            <del class="market_price">{{ item.market_price }}</del>
                            <p class="stock_quantity">库存{{ item.stock_quantity }}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <mt-button @click="getGood" class="loadMorebtn" type="primary" size="large">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            list: [],
            count: 0
        }
    },
    created() {
        this.getGood()
    },
    methods: {
        getGood(){
            this.count++
            this.$axios.get('/api/getgoods?pageindex=' + this.count)
            .then(result => {
                console.log(result);
                if(result.data.status === 0){
                    if(result.data.message.length > 0){
                        this.list = this.list.concat(result.data.message)
                    }else{
                        Toast({
                            message: '已加载完毕',
                            position: 'center',
                            duration: 5000
                        });
                    }
                }
            })
        }
    },
}
</script>

<style scoped>
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    padding: 5px;
    border-radius: 5px;
    width: 100%;
    height: 200px;
    border: 1px solid #e5e5e5;
    box-shadow: 0px 0px 10px #888888;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body img{
    width: 70%;
    margin-top: 10px;
}
.shop-imformation{
    height: 40px;
    margin-top: 10px;
    text-align: left;
    position: relative;
}
.shop-imformation p.title{
    font-size: 12px;
    padding: 0 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.market_price{
    display: inline-block;
    font-size: 12px;
    font-weight: 100;
    transform: scale(0.8);
    color: #888888;
}
.sell_price{
    font-size: 12px;
    font-weight: 400;
    color: red;
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
    transform: scale(0.9);
}
.sell_price::before{
    content: "售价:";
}
.stock_quantity{
    font-size: 12px;
    transform: scale(.9);
    text-align: right;
}
.loadMorebtn{
    margin-bottom: 60px;
}
</style>