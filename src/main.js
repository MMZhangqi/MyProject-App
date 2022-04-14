// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import moment from 'moment'
import {store} from '@/store.js'

import 'mint-ui/lib/style.min.css'
import '@/lib/dist/css/mui.min.css'
import '@/lib/dist/css/icons-extra.css'

import axios from 'axios'
Vue.use(Mint)

// 配置全局的url
axios.defaults.baseURL = "http://www.liulongbin.top:3005"
Vue.prototype.$axios = axios

// 时间格式处理
Vue.use(moment)
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD hh:mm:ss") {
  return moment(dataStr).format(pattern)
})
// 缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// vuex

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
