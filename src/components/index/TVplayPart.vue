<template>
	<main>
		<!--新闻盒子-->
			<ul class="newsBox">
				<li v-for="(item,index) in tvPlay">
					<p class="title">{{item.title}}</p>
					<span class="senderMsg">{{item.sender}}&nbsp;{{item.sendTime}}</span>
					<img :src="item.path" />
				</li>
				<li v-for="(item,index) in importantNews">
					<p class="title">{{item.title}}</p>
					<span class="senderMsg">{{item.sender}}&nbsp;{{item.sendTime}}</span>
					<img :src="item.path" />
				</li>
				<li class="adBox">一点点加盟新政策，限广州<span>广告</span></li>
				<li v-for="(item,index) in recommendNews">
					<p class="title">{{item.title}}</p>
					<span class="senderMsg">{{item.sender}}&nbsp;{{item.sendTime}}</span>
					<img :src="item.path" />
				</li>
			</ul>
			</ul>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				importantNews:[],
				recommendNews:[],
				tvPlay:[]
			}
		},
		mounted(){
			//AJAX传数据
			this.$http.get('./data/entertainmentNewsData.json')
			.then((res)=>{
				this.importantNews = res.data.importantNews;
				this.recommendNews = res.data.recommendNews;
				this.tvPlay = res.data.tvPlay;
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
		padding-left: 15px;
		padding-right: 15px;
		max-width:780px;
		overflow: hidden;
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
	.newsBox>li.adBox{
		width: 100%;
		padding-bottom: 10px;
		padding-top: 15px;
		border-bottom: 1px solid #e8e8e8;
		font-size: 18px;
		overflow: hidden;
	}
	.newsBox>li.adBox>span{
		float: right;
		border: 1px solid #A4A4AA;
		color: #858585;
		transform: scale(0.6);
	}
	/*****************************间隔******************************************************/
	.gapBox{
		width: 100%;
		height: 12.5px;
		background-color:#f5f5f5 ;
	}
</style>