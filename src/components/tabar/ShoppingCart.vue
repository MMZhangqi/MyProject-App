<template>
    <div>
        <!-- 购物车列表 -->
        <div class="shopList">
            <div class="mui-card" v-for="(item,index) in shopcartList" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <img src="@/images/menu03.png" alt="">
                        <div class="info">
                            <p class="title">{{ item.title }}</p>
                            <cart-number 
                                :goodsId="item.id"
                                :count="$store.getters.getGoodCount[item.id]"
                                :maxNum="$store.state.cart[index].stock_quantity" class="number"></cart-number>
                            <mt-switch 
                                @change="changeSelected(item.id,$store.getters.getGoodSelected[item.id])" 
                                v-model="$store.getters.getGoodSelected[item.id]"></mt-switch>
                            <a @click="removeHandle(index, item.id)" href="javascript:;">删除</a>
                            <span class="price">￥{{ item.sell_price }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <!-- 结算区域 -->
       <div class="mui-card settle-accounts">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <div class="left">
                       <p>总计（不含运费）</p>
                       <p>
                           已勾选商品
                           <span class="red">{{ this.$store.getters.getaccount.count }}</span>
                           件，总计
                           <span class="red">￥{{ this.$store.getters.getaccount.account }}</span>
                       </p>
                   </div>
                   <mt-button type="danger" >结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CartNumber from '@/components/common/CartNumber.vue'
export default {
    data() {
        return {
            // 购物车所有商品数据
            shopcartList: []
        }
    },
    components:{
        CartNumber
    },
    created() {
        this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            this.$axios.get('api/goods/getshopcarlist/' + this.$store.getters.getId.join(","))
            .then(result => {
                if(result.data.status === 0){
                    this.shopcartList = result.data.message
                }
            })
        },
        // 删除对应的商品
        removeHandle(index, id){
            this.shopcartList.splice(index, 1)
            this.$store.commit('delHandle',id)
        },
        // 更新商品状态
        changeSelected(id, status){
            this.$store.commit('selectedHandel', { id: id, status: status})
        }
    },
}
</script>

<style scoped>
.mui-card .mui-card-content .mui-card-content-inner{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.mui-card .mui-card-content .mui-card-content-inner img{
    width: 70px;
}
.mui-card .mui-card-content .mui-card-content-inner .info{
    width: 70%;
}
.mui-card .mui-card-content .mui-card-content-inner .info .title{
    font-size: 14px;
    width: 100%;
    line-height: 2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mui-card .mui-card-content .mui-card-content-inner .info .number{
    width: fit-content;
}
.mint-switch{
    float: right;
    position: relative;
    top: -40px
}
.price{
    color: red;
}
.settle-accounts{
    background-color: rgb(242, 221, 221);
    margin-bottom: 50px;
}
.red{
    color: red;
}
</style>