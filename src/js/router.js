//导入文件
import VueRouter from "vue-router"
import index from "../components/index/index.vue"
import searching from "../components/index/searching.vue"
import newsPage from "../components/index/newsPage.vue"
//娱乐新闻模块
import entertainmentNews from "../components/index/entertainmentNews.vue"

import famousWeb from "../components/index/famousWeb.vue"
import galleryList from "../components/index/galleryList.vue"
import galleryIndex from "../components/index/galleryIndex.vue"
import indexArticle from "../components/index/indexArticle.vue"
//新闻页公共头部
import newsHeader from "../components/index/newsHeader.vue"

import login from "../components/login/login.vue"
import searchCountry from "../components/login/searchCountry.vue"
import register from "../components/register/register.vue"

//swiper
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


//导出挂载的路由
export default new VueRouter({
	routes:[
		{
			path:'/',
			component:index
		},
		{
			path:'/login',
			component:login
		},
		{
			path:'/searchCountry',
			component:searchCountry
		},
		{
			path:'/register',
			component:register
		},
		{
			path:'/searching',
			component:searching
		},
		{
			path:'/famousWeb',
			component:famousWeb
		},
		{
			path:'/entertainmentNews',
			component:entertainmentNews
		},
		{
			path:'/galleryList',
			component:galleryList
		},
		{
			path:'/galleryIndex',
			component:galleryIndex
		},
		{
			path:'/newsHeader',
			component:newsHeader,
			children:[
				{
					path:'/indexArticle',
					component:indexArticle
				},
				{
					path:'/newsPage',
					component:newsPage
				}
			]
		}
	]
})

