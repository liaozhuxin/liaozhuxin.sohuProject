<template>
	<main>
		<ul class="headermenu">
			<li>时政</li>
			<li>国际</li>
			<li>财经</li>
		</ul>
		<!--轮播-->
		<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  	<img src="../../assets/newsPage/viewpager1.jpeg"/>
			  	<p class="viewPagerText">田径——中国队获得男子<b>4x100</b>米接力银牌</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/newsPage/viewpager2.jpeg"/>
			  	<p class="viewPagerText">纽约曼哈顿大面积停电 或因变压器起火导致</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/newsPage/viewPager3.jpeg"/>
			  	<p class="viewPagerText">山晚早新闻丨举报人信息被泄露遭报复，一公安局多人被处分；山西这8个村被国家文旅部公示</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/newsPage/viewPager4.jpeg"/>
			  	<p class="viewPagerText">特大暴雨！安徽多地洪水预警！下周起，合肥又迎雨雨雨…  | 合肥早新闻</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/newsPage/viewPager5.jpeg"/>
			  	<p class="viewPagerText">议员鲁比奥提议成立垄断组织，美欲重建稀土产业摆脱对华依赖</p>
			  </mt-swipe-item>
			</mt-swipe>
			<!--内容-->
			<ul class="container">
				<li v-for="(item,index) in newsDataFirstScreen">
					<div class="newsTitle">
						<p>{{item.newsTitle}}</p>
						<span class="sendMsg">
							{{item.sender}}
							{{item.sendTime}}
							<img src="../../assets/newsPage/newsTitleSendMsgPic.png" class="newsTitleSendMsgPic"/>
							{{item.readership}}
						</span>
					</div>
					<img :src="item.newsTitlePicSrc" class="newsImg"/>
				</li>
				<!--纯文字-->
				<li>
					<div class="newsTitleContent">
						<p>江西暴雨致南方多条河流超警 30个县发生洪涝灾害</p>
						<span class="sendMsg">
							新京报
							两个小时前
							<img src="../../assets/newsPage/newsTitleSendMsgPic.png" class="newsTitleSendMsgPic"/>
							3.8万
						</span>
					</div>
				</li>
				<li>
					<div class="newsTitleContent">
						<p>蔡英文又借过境玩“碰瓷”（望海楼）</p>
						<span class="sendMsg">
							人民网
							3个小时前
							<img src="../../assets/newsPage/newsTitleSendMsgPic.png" class="newsTitleSendMsgPic"/>
							1.3万
						</span>
					</div>
				</li>
				<!--广告盒子-->
				<li class="adBox">
					<p class="adTitle">广州离异再婚微信群：找个好对象重建新感情</p>
					<p class="adPicBox">
						<img src="../../assets/newsPage/adPic1.webp.jpg"/>
						<img src="../../assets/newsPage/adPic2.webp.jpg"/>
						<img src="../../assets/newsPage/adPic3.webp.jpg"/>
					</p>
					<p class="adMsg">
						<span class="adBtn">广告</span>
						<span class="adSender">我主良缘文化</span>
						<span class="adSendTime">刚刚</span>
					</p>
				</li>
				<li v-for="(item,index) in newsDataSecondScreen">
					<div class="newsTitle">
						<p>{{item.newsTitle}}</p>
						<span class="sendMsg">
							{{item.sender}}
							{{item.sendTime}}
							<img src="../../assets/newsPage/newsTitleSendMsgPic.png" class="newsTitleSendMsgPic"/>
							{{item.readership}}
						</span>
					</div>
					<img :src="item.newsTitlePicSrc" class="newsImg"/>
				</li>
				<!--纯文字-->
				<li>
					<div class="newsTitleContent">
						<p>从天上吵到地下，“国航监督员”牛某再曝吵架视频</p>
						<span class="sendMsg">
							观察者网
							10个小时前
							<img src="../../assets/newsPage/newsTitleSendMsgPic.png" class="newsTitleSendMsgPic"/>
							1.1万
						</span>
					</div>
				</li>
				<!--广告盒子2-->
				<li class="adBox">
					<p class="adTitle">真男人，罗曼诺男士香水沐浴</p>
					<img src="../../assets/newsPage/adPic4.webp.jpg"/>
					<p class="adMsg">
						<span class="adBtn">广告</span>
						<span class="adSender">维布络安舍</span>
						<span class="adSendTime">刚刚</span>
					</p>
				</li>
				<li v-for="(item,index) in newsDataSecondScreen" v-show="show">
					<div class="newsTitle">
						<p>{{item.newsTitle}}</p>
						<span class="sendMsg">
							{{item.sender}}
							{{item.sendTime}}
							<img src="../../assets/newsPage/newsTitleSendMsgPic.png" class="newsTitleSendMsgPic"/>
							{{item.readership}}
						</span>
					</div>
					<img :src="item.newsTitlePicSrc" class="newsImg"/>
				</li>
				
				
				
			</ul>
			<div class="gapBox" style="height: 30px;text-align: center;color: #A4A4A4;line-height: 30px;" @click="loadMore($event)">点击此处加载更多</div>
			<div class="gapBox" v-show="show"></div>
			<!--尾部-->
			<!--生活服务-->
			<div class="lifeServiceBox ">
				<div class="lifeServiceHeader">
					<h4>生活服务</h4>
				</div>
				<ul>
					<li>
						<img src="../../assets/indexPic/local-service.png"/>
						<p>本地服务</p>
					</li>
					<li>
						<img src="../../assets/indexPic/high-price-job.png" />
						<p>高薪工作</p>
					</li>
					<li>
						<img src="../../assets/indexPic/second-house.png" />
						<p>优质房产</p>
					</li>
					<li>
						<img src="../../assets/indexPic/tv-repair.png" />
						<p>家电维修</p>
					</li>
					<li>
						<img src="../../assets/indexPic/second-good.png" />
						<p>二手好货</p>
					</li>
					<li>
						<img src="../../assets/indexPic/house-making.png" />
						<p>家政服务</p>
					</li>
					<li>
						<img src="../../assets/indexPic/house-move.png" />
						<p>放心搬家</p>
					</li>
					<li>
						<img src="../../assets/indexPic/rent-house.png" />
						<p>热租房源</p>
					</li>
					<li>
						<img src="../../assets/indexPic/second-car.png" />
						<p>二手好车</p>
					</li>
					<li>
						<img src="../../assets/indexPic/pet-zone.png" />
						<p>萌宠专区</p>
					</li>
				</ul>
			</div>
			<div class="gapBox"></div>
			<!--网站地图-->
			<div class="webMapBox ">
				<div class="webMapHeader">
					<h4>网站地图</h4>
				</div>
				<ul>
					<li>新闻</li>
					<li>财经</li>
					<li>体育</li>
					<li>娱乐</li>
					<li>军事</li>
					<li>图库</li>
					<li>汽车</li>
					<li>房产</li>
					<li>时尚</li>
					<li>小说</li>
					<li>历史</li>
					<li>科技</li>
				</ul>
			</div>
		</section>
		<footer>
			<p class="sugguestAcoorperationText">用户反馈 &nbsp;&nbsp;&nbsp;合作</p>
			<p class="footerText">Copyright © 2019 Sohu All Rights Reserved</p>
			<p class="footerText">搜狐公司 版权所有</p>
		</footer>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				show:false,
				newsDataFirstScreen:[],
				newsDataSecondScreen:[]
			}
		},
		mounted(){
			//AJAX传数据
			this.$http.get('./data/newsData.json')
			.then((res)=>{
				this.newsDataFirstScreen = res.data.newsDataFirstScreen;
				this.newsDataSecondScreen = res.data.newsDataSecondScreen;
				
				console.log(res.data.newsDataFirstScreen);
			})
			.catch(()=>{})
			.finally((f)=>{
				console.log('请求结束')
		})
	},
	methods:{
		loadMore(a){
			this.show = !this.show;
			a.target.style.display = "none";
		}
	}
}
</script>

<style scoped>
	main{
		background-color: white;
	}
	.headermenu{
		width: 100%;
		overflow: hidden;
		padding-top: 8px;
		padding-bottom: 8px;
		color: white;
		font-size: 16px;
		background-color: #333;
		box-sizing: border-box;
		padding-left: 18px;
		padding-right: 18px;
	}
	.headermenu>li{
		float: left;
		width: calc(100%/3);
		text-align: center;
	}
	.headermenu>li:nth-of-type(1){
		text-align: left;
	}
	.headermenu>li:nth-of-type(3){
		text-align: right;
	}
	/*********************新闻内容列表********************************/
	.container{
		width: 100%;
		background-color: white;
		padding-left: 13px;
		padding-right: 13px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.container>li{
		width: 100%;
		border-bottom: 1px solid #F3F3F3;
		box-sizing: border-box;
		padding-top: 15px;
		overflow: hidden;
		padding-bottom: 15px;
		position: relative;
	}
	.container>li>.newsTitle{
		float: left;
		width: 60%;
		font-size: 18px;
		color: #434343;
		font-family:宋体;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.container>li>.newsTitle>p{
		display: inline-block;
		width: 100%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.container>li>.newsTitle>.sendMsg{
		position: absolute;
		bottom: 10px;
		left: 0px;
		width: 100%;
		font-size: 12px;
		color: #A4A4AA;
	}
	.container>li>.newsTitle>.sendMsg>img{
		width: 15px;
		height: 10px;
	}
	.container>li>.newsImg{
		float: right;
		width: 34.3%;
		max-width: 164.16px;
	}
	.container>li>.newsTitleContent{
		width: 100%;
		font-size: 18px;
		color: #434343;
		font-family:宋体;
		/*display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;*/
		overflow: hidden;
	}
	.container>li>.newsTitleContent>p{
		display: inline-block;
		width: 100%;
		padding-bottom: 5%;
		max-height: 62px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.container>li>.newsTitleContent>.sendMsg{
		position: absolute;
		bottom: 10px;
		left: 0px;
		width: 100%;
		font-size: 12px;
		color: #A4A4AA;
	}
	.container>li>.newsTitleContent>.sendMsg>img{
		width: 15px;
		height: 10px;
	}
	/********广告盒子****************/
	.container>.adBox>.adTitle{
		width: 100%;
		font-size: 18px;
		color: #434343;
		font-family:宋体;
	}
	.container>.adBox{
		padding-bottom: 10px;
	}
	.container>.adBox>.adPicBox{
		width: 100%;
		max-height: 106.55px;
		overflow: hidden;
		padding-top: 10px;
		padding-bottom: 5px;
	}
	.container>.adBox>.adPicBox>img{
		width: calc(100%/3.09);
	}
	.container>.adBox>.adMsg{
		width: 100%;
		overflow: hidden;
	}
	.container>.adBox>.adMsg>.adBtn{
		display: inline-block;
		width: 48px;
		height: 30px;
		border: 1px solid #C4C4C4;
		border-radius: 5px;
		text-align: center;
		line-height: 30px;
		font-size: 21px;
		color: #A4A4AA;
		transform: scale(0.55);
		margin-left:-10px ;
	}
	.container>.adBox>.adMsg>.adSender{
		display: inline-block;
		width: 60px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin-left:-10px ;
		color: #A4A4AA;
	}
	.container>.adBox>.adMsg>.adSendTime{
		display: inline-block;
		width: 24px;
		color: #A4A4AA;
		margin-left: 10px;
		overflow: hidden;
	}
	.container>.adBox>img{
		width: 100%;
		margin-top: 10px;
	}
	/*****************************间隔******************************************************/
	.gapBox{
		width: 100%;
		height: 12.5px;
		background-color:#f5f5f5 ;
	}
	/****************************尾部**************************************************/
	
	
	/***************生活服务************************************/
	.lifeServiceBox{
		width: 100%;
	}
	.lifeServiceHeader{
		width: 100%;
		overflow: hidden;
		padding-bottom: 15px;
	}
	.lifeServiceHeader h4{
		color: #3c3c3d;
		font-size: 17.5px;
		float: left;
		margin-left: 3%;
		margin-top: 5px;
	}
	.lifeServiceBox ul{
		width: 100%;
		color: #3C3C3D;
		overflow: hidden;
	}
	.lifeServiceBox ul li{
		float: left;
		width: calc(100%/5);
		text-align: center;
	}
	.lifeServiceBox>ul li img{
		width: 55%;
	}
	.lifeServiceBox>ul li p{
		width: 100%;
		font-size: 1.19em;
		margin-top: 10px;
		margin-bottom: 15px;
	}
	.webMapBox{
		width: 100%;
		overflow: hidden;
	}
	.webMapHeader{
		width: 100%;
		overflow: hidden;
		padding-bottom: 15px;
		padding-top: 25px;
	}
	.webMapHeader h4{
		color: #3c3c3d;
		font-size: 17.5px;
		float: left;
		margin-left: 3%;
		margin-top: 5px;
	}
	.webMapBox ul{
		width: 100%;
		overflow: hidden;
		padding-bottom: 15px;
	}
	.webMapBox ul li{
		float: left;
		text-align: center;
		width: calc(100%/6);
		font-size: 1.3em;
		margin-bottom: 30px;
		color: #3C3C3D;
	}
	footer{
		text-align: center;
		width: 100%;
		background-color: #F5F5F5;
		padding-top: 40px;
		padding-bottom: 30px;
	}
	.sugguestAcoorperationText{
		font-size: 14px;
		color: #3C3C3D;
		margin-bottom: 30px;
	}
	.footerText{
		color: #A4A4A4;
		font-size: 12px;		
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
		bottom: 18px;
		left: 0;
		font-size: 17px;
		width: 100%;
		height: 25px;
		z-index: 9;
		color: white;
		box-sizing: border-box;
		padding-left: 20px;
		padding-right: 20px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.mint-swipe-indicator{
		width: 4px;
		height: 2px;
		border-radius: 0;
		opacity: 1;
		background-color: #C4C4C4;
	}
	.is-active{
		width: 13px;
	}
</style>