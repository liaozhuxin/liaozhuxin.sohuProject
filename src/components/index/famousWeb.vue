<template>
	<main>
		<header>
			<h1>名站</h1>
		</header>
		<ul class="website">
			<li><span class="souhu"></span>搜狐</li>
			<li><span class="eMail"></span>邮箱</li>
			<li><span class="sougou"></span>搜狗</li>
			<li><span class="baidu"></span>百度</li>
			<li><span class="sina"></span>新浪</li>
			<li><span class="tencent"></span>腾讯</li>
			<li><span class="netease"></span>网易</li>
			<li><span class="FEcity"></span>58同城</li>
			<li><span class="taobao"></span>淘宝</li>
		</ul>
		<ul class="websiteName" v-for="(item,index) in websites">
			<li class="websiteType">{{item.websitesType}}</li>
			<li v-for="(item,index) in websites[index].websitesName">{{item}}</li>
		</ul>
		<footer>
			<button class="backTopBtn" @click="backTop()">返回顶部</button>
				<ul class="menuBox">
					<li><router-link to="/">首页</router-link></li>
					<li><router-link to="/newsPage">新闻</router-link></li>
					<li>娱乐</li>
					<li>体育</li>
					<li>财经</li>
					<li><router-link to="/galleryIndex">图库</router-link></li>
				</ul>
				<p class="sugguestText">用户反馈-合作</p>
				<p>Copyright © 2017 Sohu.com</p>
		</footer>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				websites:[]
			}
		},
		methods:{
			backTop(){
				document.documentElement.scrollTop = 0;
			}
		},
		mounted(){
			//AJAX传数据
			this.$http.get('./data/famousWebsites.json')
			.then((res)=>{
				this.websites = res.data.websites;
			})
			.catch(()=>{})
			.finally((f)=>{
				console.log('请求结束')
			})
		}
	}
</script>

<style scoped>
	main{
		background-color: #F3F3F3
	}
	header{
		width: 100%;
		padding-top: 10px;
		padding-bottom: 11px;
		background-color: #434343;
	}
	header>h1{
		width: 100%;
		font-size: 22px;
		font-weight: 500;
		color: white;
		box-sizing: border-box;
		padding-left: 15px;
	}
	.website{
		width: 96%;
		margin: 10px auto;
		overflow: hidden;
		background-color: white;
	}
	.website>li{
		font-size: 15px;
		float: left;
		width: calc((100% - 2px)/3);
		padding-top: 8px;
		text-align: center;
		padding-bottom: 10px;
		position: relative;
		border-bottom: 1px solid #E5E5E5;
		border-right: 1px solid #E5E5E5;
	}
	.website>li:nth-of-type(3n){
		border-right: none;
	}
	.website>li>.souhu{
		position: absolute;
		top: 11px;
		left: 16%;
		width: 16px;
		height: 16px;
		background: url(../../assets/indexPic/websites.png) 0px 0px no-repeat;
		background-size: 16px auto;
	}
	.website>li>.eMail{
		position: absolute;
		top: 11px;
		left: 16%;
		width: 16px;
		height: 16px;
		background: url(../../assets/indexPic/websitesBtn.png) 0px 0px no-repeat;
		background-size: 16px auto;
	}
	.website>li>.sougou{
		position: absolute;
		top: 11px;
		left: 16%;
		width: 16px;
		height: 16px;
		background: url(../../assets/indexPic/websites.png) 0px -220px no-repeat;
		background-size: 16px auto;
	}
	.website>li>.baidu{
		position: absolute;
		top: 11px;
		left: 16%;
		width: 16px;
		height: 16px;
		background: url(../../assets/indexPic/websites.png) 0px -160px no-repeat;
		background-size: 16px auto;
	}
	.website>li>.sina{
		position: absolute;
		top: 11px;
		left: 16%;
		width: 16px;
		height: 16px;
		background: url(../../assets/indexPic/websites.png) 0px -100px no-repeat;
		background-size: 16px auto;
	}
	.website>li>.tencent{
		position: absolute;
		top: 11px;
		left: 16%;
		width: 16px;
		height: 16px;
		background: url(../../assets/indexPic/websites.png) 0px -180px no-repeat;
		background-size: 16px auto;
	}
	.website>li>.netease{
		position: absolute;
		top: 11px;
		left: 16%;
		width: 16px;
		height: 16px;
		background: url(../../assets/indexPic/websites.png) 0px -200px no-repeat;
		background-size: 16px auto;
	}
	.website>li>.FEcity{
		position: absolute;
		top: 11px;
		left: 16%;
		width: 16px;
		height: 16px;
		background: url(../../assets/indexPic/websites.png) 0px -292px no-repeat;
		background-size: 16px auto;
	}
	.website>li>.taobao{
		position: absolute;
		top: 11px;
		left: 16%;
		width: 16px;
		height: 16px;
		background: url(../../assets/indexPic/websites.png) 0px -140px no-repeat;
		background-size: 16px auto;
	}
	.websiteName{
		width: 97%;
		margin: 0 auto;
		overflow: hidden;
		background-color: white;
		border-bottom: 1px solid #E5E5E5;

	}
	.websiteName>li{
		width: 20%;
		float: left;
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: center;
		font-size: 17px;
		color: #434343;
	}
	.websiteName>li.websiteType{
		color: #A4A4A4;
	}
	.footer{
		width: 100%;
	}
	.backTopBtn{
		display: block;
		width: 24%;
		margin: 30px auto;
		font-size: 3.5vw;
		color: #656565;
		background: url(../../assets/indexPic/arrowUp.png) no-repeat;
		background-size: 22px auto;
		text-align: right;
		box-sizing: border-box;
		border-radius: 4px;
		padding-right: 2%;
		padding-top: 2px;
		padding-bottom: 2px;
		border: 1px solid #D7D7D7;
		background-color: 1px solid #d6d6d6;
		box-shadow: 0 2px 2px #fff inset;
	}
	.menuBox{
		width: 100%;
		overflow: hidden;
		background-color: #434343;
		text-align: center;
	}
	.menuBox li{
		display: inline-block;
		color: white;
		padding-top: 5px;
		padding-bottom: 5px;
		font-size: 18px;
		width: calc(100%/8);
	}
	.menuBox li>a{
		color: white;
	}
	p.sugguestText{
		width: 100%;
		margin-top: 15px;
		text-align: center;
		color: #3C3C3D;
		font-size: 16px;
		padding-bottom: 0;
	}
	footer>p{
		width: 100%;
		text-align: center;
		color: #656565;
		margin-top: 10px;
		padding-bottom: 40px;
	}
</style>