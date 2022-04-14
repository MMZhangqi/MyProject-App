import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cart = JSON.parse(localStorage.getItem('cart')) || []
export const store = new Vuex.Store({
    state: {
        cart: cart
    },
    mutations: {
        // 点击加入购物车
        addCartHandle(state, goodList){
            let flag = true
            // 是否有相应的商品信息，更新数据
            state.cart.forEach(element => {
                if(element.id === goodList.id){
                    element.count += parseInt(goodList.count)  
                    flag = false
                    return true
                }
            })
            if(flag){
                state.cart.push(goodList)
            }
            state.count += goodList.count
            console.log(state.cart);
            // 本地存储
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
         // 修改购物车商品件数
        updateGood(state, goodList){
            state.cart.forEach(element => {
                if(element.id === goodList.id){
                    element.count = parseInt(goodList.count)
                    return true
                }
            })
            // 修改后的商品保存到本地存储
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        // 删除对应的商品
        delHandle(state, id){
            state.cart.some((item,index) => {
                if(item.id === id){
                    state.cart.splice(index, 1)
                    return true
                }
            })
            // 修改后的商品保存到本地存储
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        // 更新商品状态
        selectedHandel(state, goodList){
            state.cart.forEach((item) => {
                if(item.id === goodList.id){
                    item.selected = goodList.status
                    return true
                }
            })
            // 修改后的商品保存到本地存储
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    getters: {
        // 计算总条数
        getCount(state){
            let count = 0
            state.cart.forEach(element => {
                count += element.count
            });
            return count
        },
        // 获取购物车列表id
        getId(state){
            let Ids = []
            state.cart.forEach(element => {
                Ids.push(element.id)
            })
            return Ids
        },
        // 获取购物车列表的数量
        getGoodCount(state){
            let count = []
            state.cart.forEach(element => {
                count[element.id] = element.count
            });
            return count
        },
        // 设置商品状态
        getGoodSelected(state){
            let selectedState = []
            state.cart.forEach(element => {
                selectedState[element.id] = element.selected
            })
            return selectedState
        },
        // 获取选中的商品和结算总的金额
        getaccount(state){
            let total = {
                count: 0,
                account: 0
            }
            state.cart.forEach(element =>{
                if(element.selected){
                    total.count += element.count
                    total.account += element.price * element.count
                }
            })
            return total
        }
    }
})