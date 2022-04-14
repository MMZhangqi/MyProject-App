<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="maxNum">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" 
            @change="countChangeHandle" ref="num">
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
import mui from '@/lib/dist/js/mui.js'
export default {
    props: [
        "maxNum"
    ],
    methods: {
        countChangeHandle(){
            // console.log(this.$refs.num.value);
            this.$emit('getCount',parseInt(this.$refs.num.value))
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