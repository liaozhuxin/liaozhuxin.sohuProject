<template>
	<main>
		<!--轮播-->
		<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  	<img src="../../assets/entertainmentImg/viewpager1.gif"/>
			  	<p class="viewPagerText">刘恺威与女儿上台献唱嘴对嘴亲吻超温馨，小糯米神似杨幂</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/entertainmentImg/viewpager2.gif"/>
			  	<p class="viewPagerText">Baby与姐妹同游迪士尼，小海绵低头抠手萌态十足</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/entertainmentImg/viewPager3.gif"/>
			  	<p class="viewPagerText">赵丽颖产后现身大热天包裹严实，见镜头忙捂脸身材恢复快</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/entertainmentImg/viewPager4.gif"/>
			  	<p class="viewPagerText">章泽天与友人聚餐开怀大笑，聚会后前往刘强东公司</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/entertainmentImg/viewPager5.gif"/>
			  	<p class="viewPagerText">狐友国民校草重温经典老游戏，争ACE不顾形象超卖力</p>
			  </mt-swipe-item>
		</mt-swipe>
			<!--新闻盒子1-->
			<ul class="newsBox">
				<li class="newsBoxHeader">
					<span></span>
					要闻
				</li>
				<li v-for="(item,index) in importantNews">
					<p class="title">{{item.title}}</p>
					<span class="senderMsg">{{item.sender}}&nbsp;{{item.sendTime}}</span>
					<img :src="item.path" />
				</li>
			</ul>
			<div class="gapBox"></div>
			
			<ul class="adBox">
				<li>一点点加盟新政策，限广州<span>广告</span></li>
				<li><img src="../../assets/entertainmentImg/adPic1.jpg"/></li>
			</ul>
			<div class="gapBox"></div>
			<!--新闻盒子2-->
			<ul class="newsBox">
				<li class="newsBoxHeader">
					<span></span>
					推荐
				</li>
				<li v-for="(item,index) in recommendNews">
					<p class="title">{{item.title}}</p>
					<span class="senderMsg">{{item.sender}}&nbsp;{{item.sendTime}}</span>
					<img :src="item.path" />
				</li>
			</ul>
	</main>
	
</template>

<script>
	export default{
		data(){
			return{
				importantNews:[],
				recommendNews:[]
			}
		},
		mounted(){
			//AJAX传数据
			this.$http.get('./data/entertainmentNewsData.json')
			.then((res)=>{
				this.importantNews = res.data.importantNews;
				this.recommendNews = res.data.recommendNews;
			})
			.catch(()=>{})
			.finally((f)=>{
				console.log('请求结束')
			})
		}
	}
</script>

<style scoped>
	.newsBox{
		width: 100%;
		box-sizing: border-box;
		padding-top: 15px;
		padding-left: 15px;
		padding-right: 15px;
		max-width:780px;
	}
	.newsBox>li.newsBoxHeader{
		width: 100%;
		font-size: 22px;
		color: #121212;
		padding-top: 0;
		border-bottom:0px;
		margin:0;
		overflow:visible;
	}
	.newsBox>li.newsBoxHeader>span{
		position: absolute;
		top: 7px;
		left: -15px;
		width: 2.7vw;
		height: 3.2vw;
		max-height: 17.27px;
		max-width: 14.39px;
		background-color:#fdd000 ;
	}
	.newsBox>li{
		width:100%;
		border-bottom: 1px solid #e8e8e8;
		padding-bottom: 15px;
		padding-top: 15px;
		position: relative;
		overflow: hidden;
	}
	/*.newsBox>li:nth-last-child{
		border-bottom:0px !important;
	}*/
	.newsBox>li>p{
		float: left;
		width: 65%;
		font-size: 18.3px;
		color: #212121;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.newsBox>li>img{
		float: right;
		width: 33%;
		max-width: 164.16px;
	}
	.newsBox>li>.senderMsg{
		position: absolute;
		bottom: 10px;
		left: 0;
		color: #999;
		font-size: 12.2px;
	}
	/*广告*/
	.adBox{
		width: 100%;
		box-sizing: border-box;
		padding-left: 15px;
		padding-right: 15px;
		max-width:780px;
	}
	.adBox>li{
		width: 100%;
		padding-bottom: 10px;
		padding-top: 15px;
		border-bottom: 1px solid #e8e8e8;
		font-size: 18px;
		overflow: hidden;
	}
	.adBox>li>span{
		float: right;
		border: 1px solid #A4A4AA;
		color: #858585;
		transform: scale(0.6);
	}
	.adBox>li>img{
		width: 100%;
	}
	/*****************************间隔******************************************************/
	.gapBox{
		width: 100%;
		height: 12.5px;
		background-color:#f5f5f5 ;
	}
</style>
<!--全局样式   轮播图-->
<style>
	.mint-swipe-items-wrap{
		padding-bottom: 50%;
		overflow: hidden;
		position: relative;
	}
	.mint-swipe-item img{
		width: 100%;
	}
	.viewPagerText{
		position: absolute;
		bottom: 40px;
		left: 0;
		font-size: 18px;
		width: 100%;
		height: 25px;
		z-index: 9;
		color: white;
		text-shadow: 0.3px 0 0 white;
		box-sizing: border-box;
		padding-left: 20px;
		padding-right: 20px;
	}
	.mint-swipe-indicator{
		width: 5px;
		height: 3px;
		border-radius: 0;
		opacity: 1;
		background-color: #C4C4C4;
	}
	.is-active{
		width: 13px;
	}
</style>