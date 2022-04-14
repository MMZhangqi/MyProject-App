<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="maxNum">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" :value="count" 
            @change="countChangeHandle" ref="num">
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
import mui from '@/lib/dist/js/mui.js'
export default {
    props: [
        "maxNum",
        "count",
        "goodsId"
    ],
    mounted() {
        mui('.mui-numbox').numbox()
    },
    methods: {
        countChangeHandle(){
            // this.$emit('getCount',parseInt(this.$refs.num.value))
            // 调用store中修改数量的方法
            console.log(this.goodsId)
            this.$store.commit('updateGood',{ id: this.goodsId, count: parseInt(this.$refs.num.value)})
        }    
    },
    watch: {
        maxNum: function(newVal, oldVal) {
            // console.log(newVal,oldVal)
            mui('.mui-numbox').numbox().setOption('max', newVal)
        }
    }
}
</script>

<style scoped>
.mui-numbox{
    margin: 10px 0;
    transform: scale(.8);
}
</style>