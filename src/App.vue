<template>
  <div id="app">
    <!-- header -->
    <mt-header fixed title="ZHANQI">
      <span v-show="flag" @click="back" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>

   <!-- 窗口 -->
   <transition name="home-transtion">   
    <router-view/>
   </transition>

   <!-- footer -->
   <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="my-mui-tab-item" href="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/member" class="my-mui-tab-item" href="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/shoppingCart" class="my-mui-tab-item" href="/shoppingCart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">{{ this.$store.getters.getCount }}</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="my-mui-tab-item" href="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag : false
    }
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
  },
  watch: {
    '$route.path': function(newVal){
      this.flag = newVal === '/home' ? false : true
    }
  }
}
</script>

<style >
body{
  margin: 0;
  padding: 0;
  touch-action: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  overflow-x: hidden;
  margin-top: 40px;
}
header{
  height: 40px;
  background-color: pink;
}
header h1{
  font-size: 18px;
}
.mui-bar-tab .my-mui-tab-item.mui-active{
  color: pink;
}

.home-transtion-enter{
  opacity: 0;
  transform: translateX(100vw);
}
.home-transtion-leave-to{
  opacity: 0;
  position: absolute;
  transform: translateX(-100px);
}
.home-transtion-enter-active,
.home-transtion-leave-active{
  transition: all, .5s ;
}
/*样式冲突my-*/ 
.mui-bar-tab .my-mui-tab-item {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .my-mui-tab-item .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .my-mui-tab-item .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
figure {
    float: left;
    width: 60px;
    display: flex;
    justify-content: space-between;
}
figure img{
  width: 60px
}
</style>
