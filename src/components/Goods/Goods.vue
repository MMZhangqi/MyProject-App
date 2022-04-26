<template>
    <div>
        <!-- 小球 -->
         <transition 
            name="ball"
            @before-enter='beforeEnter'
            @enter='enter'
            @after-enter='afterEnter'>
            <div @transitionecd="finishhandle" v-show="flag" class="ball"></div>
        </transition>
        <!-- 轮播图 -->
        <swiper class="swiper"></swiper>
        <!-- 商品购买 -->
        <div class="Goods-shoper">
            <h3>{{ goodInfo.title }}</h3>
            <hr>
            <div class="price">
                <span class="market_price">市场价:
                    <del><b>￥{{goodInfo.market_price}}</b></del>
                </span>
                <span class="sell_price">销售价:
                    <span class="red">￥{{goodInfo.sell_price}}</span>
                </span>
            </div>
            <div class="count">
                <span>购买数量:</span>
                <number 
                    :maxNum="goodInfo.stock_quantity"
                    @getCount="getSelectedCountHandle">
                </number>
            </div>
            <div class="buy">
                <mt-button type="primary" size="normal">立即购买</mt-button>
                <mt-button class="shopcart" type="danger" size="normal"
                @click="ShopingCartHandle">加入购物车</mt-button>
            </div>
            <hr>
            产品参数
            <p>产品单号：{{ goodInfo.goods_no }}</p>
            <p>产品库存：{{ goodInfo.stock_quantity }}</p>
            <p>上架时间：{{ goodInfo.add_time | dateFormat}}</p>
            <hr>
            <router-link :to="'/home/goodInfo/'+this.$route.params.id">
                <mt-button type="default" size="large">图文信息</mt-button>
            </router-link>
            <router-link :to="'/home/goodComment/'+this.$route.params.id">
                <mt-button type="default" size="large">评论列表</mt-button>
            </router-link>
        </div>
    </div>
</template>

<script>
import swiper from '@/components/common/swiper.vue'
import number from '@/components/common/number.vue'
export default {
    data() {
        return {
            goodInfo: {},
            flag: false,
            selectedCount: 1,
            isShow: false
        }
    },
    components:{
        swiper,
        number
    },
    created() {
        this.getinfo()
    },
    methods: {
        getinfo(){
            this.$axios.get('api/goods/getinfo/' + this.$route.params.id)
            .then( result => {
                if(result.data.status === 0){
                    this.goodInfo = result.data.message[0]
                }
            })
        },
        // 加入购物车
        ShopingCartHandle(){
            if(!this.isShow){
                this.isShow = false
                this.flag = !this.flag
                // 把数据添加到store
                let goodList = {
                    id: this.goodInfo.id,
                    stock_quantity: this.goodInfo.stock_quantity,
                    count: this.selectedCount,
                    price: this.goodInfo.sell_price,
                    selected: true
                }
                this.$store.commit('addCartHandle', goodList)
            }
        },
        beforeEnter(el){
            if(!this.isShow){
                el.style.transform = "translate(0, 0)"
            }
        },
        enter(el, done){
            if(!this.isShow){
                const badge = document.querySelector('.mui-badge').getBoundingClientRect()
                const ball = document.querySelector('.ball').getBoundingClientRect()

                // // 求差
                const x = badge.left - ball.left
                const y = badge.top - ball.top
                el.offsetWidth
                el.style.transform = `translate(${x}px, ${y}px)`
                el.style.transition = "all 1s"
                done()
            }
        },
        afterEnter(){
            this.flag = !this.flag
        },
        finishhandle(){
            this.isShow = true
        },
        // 获取商品的数量
        getSelectedCountHandle(num){
            // console.log(num)
            this.selectedCount = num
        }
    },
}
</script>

<style scoped>
.swiper{
    width: 100%;
    height: 200px;
}
.Goods-shoper{
    height: 500px;
    margin-bottom: 50px;
    padding: 10px 20px 0;
}
.price{
    color: rgb(127, 126, 126);
}
.market_price{
    display: inline-block;
    transform: scale(.8);
}
.market_price del{
    color: rgb(80, 80, 80);
}
.sell_price{
    display: inline-block;
    transform: scale(.9);
}
.sell_price .red{
    display: inline-block;
    transform: scale(1.2);
    color:red
}
.count{
    margin-top: 20px;
}
.count span{
    margin-right: 20px;
} 
.buy{
    margin-bottom: 20px;
}
.ball{
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    z-index: 999;
    top: 430px;
    left: 170px;
}
</style>