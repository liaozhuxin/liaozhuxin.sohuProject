import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from './js/router.js'
import Mint from 'mint-ui';
import Animate from './assets/css/animate.css'
import base from './assets/css/base.css'
import '../node_modules/mint-ui/lib/style.css'
//轮播
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//按字母查找
import { IndexList, IndexSection } from 'mint-ui';
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
//使用AJAX
import axios from 'axios'
Vue.prototype.$http = axios;


Vue.use(Mint);
Vue.use(VueRouter);
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
