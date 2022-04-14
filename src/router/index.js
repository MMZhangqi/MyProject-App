import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabar/Home.vue'
import Member from '@/components/tabar/Member.vue'
import ShoppingCart from '@/components/tabar/ShoppingCart.vue'
import Search from '@/components/tabar/Search.vue'
import News from '@/components/News/News.vue'
import NewsInfo from '@/components/News/NewsInfo.vue'
import Imgs from '@/components/imgshare/Imgs.vue'
import ImgInfo from '@/components/imgshare/ImgInfo.vue'
import Goodslist from '@/components/Goods/Goodslist.vue'
import Goods from '@/components/Goods/Goods.vue'
import GoodsInfo from '@/components/Goods/GoodsInfo.vue'
import GoodComment from '@/components/Goods/GoodComment.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/home/news',
      name: 'News',
      component: News
    },
    {
      path: '/home/news/newsInfo/:id',
      name: 'NewsInfo',
      component: NewsInfo
    },
    {
      path: '/home/imgs',
      name: 'Imgs',
      component: Imgs
    },
    {
      path: '/home/imgs/:id',
      name: 'ImgInfo',
      component: ImgInfo
    },
    {
      path: '/home/Goodslist',
      name: 'GoodsList',
      component: Goodslist
    },
    {
      path: '/home/goods/:id',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/home/goodInfo/:id',
      name: 'GoodsInfo',
      component: GoodsInfo
    },
    {
      path: '/home/goodComment/:id',
      name: 'GoodComment',
      component: GoodComment
    },
  ],
  mode: 'history',
  linkActiveClass: 'mui-active'
})
