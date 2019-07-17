<template>
	<main>
		<header>
			<p>
				<router-link to="/">
					<span class="backUpLevel"></span>
					<span class="souhuText">
						<img src="../../assets/newsPage/headerSohuPic.png"/>
					</span>
					&nbsp;首页&nbsp;·&nbsp;<span class="red">大视野</span>
				</router-link>
				<span class="hotSearch">
					<i><img src="../../assets/newsPage/headerSohuLogo.png"/></i>
					热搜
				</span>
			</p>
		</header>
		<ul class="picListBox">
			<li class="picList" v-for="(item,index) in gallery">
				<p class="picBox">
					<router-link to="/galleryList"><img :src="item.path" /></router-link>
					<span class="picNum">{{item.picNum}}</span>
				</p>
				<p class="title">{{item.title}}</p>
			</li>
		</ul>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				gallery:[]
			}
		},
		mounted(){
			this.$http.get('./data/data.json')
			.then((res)=>{
				this.gallery = res.data.gallery;
			})
			.catch(()=>{})
			.finally((f)=>{
				console.log('请求结束');
			})
		}
	}
</script>

<style scoped>
	header{
		width: 100%;
		padding-bottom: 44px;
		overflow: hidden;
		background-color: #ffd200;
	}
	header>p{
		width: 100%;
		overflow: hidden;
		background-color: #ffd200;
		color: #434343;
		font-size: 17px;
		line-height: 44px;
		position: fixed;
		z-index: 99;
		max-width: 780px;
	}
	header>p .red{
		color:#ba0e14;
	}
	header>p .backUpLevel{
		float: left;
		height: 20px;
		width: 18px;
		background:url(../../assets/newsPage/leftArrow.png) no-repeat;
		background-size: contain;
		margin-top: 15px;
		margin-left: 8px;
	}
	.souhuText{
		float: left;
		width: 45px;
		margin-left: 5px;
		margin-top: -2px;
		overflow: hidden;
	}
	.souhuText>img{
		width: 100%;
	}
	.hotSearch{
		float: right;
		margin-right: 10px;
		font-size: 15px;
		color: #2b2b2b;
		line-height: 44px;
		font-family: 宋体;
	}
	.hotSearch>i{
		float: left;
		width: 21px;
		height: 21px;
		margin-right: 4px;
		margin-top: -3px;
	}
	.hotSearch>i>img{
		width: 100%;
	}
	.picListBox{
		width: 100%;
	}
	.picListBox>.picList{
		width: 100%;
		margin-bottom: 10px;
		background-color: white;
		overflow: hidden;
	}
	.picListBox>.picList>.picBox{
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	.picListBox>.picList>.picBox img{
		width: 100%;
	}
	.picListBox>.picList>.picBox>.picNum{
		position: absolute;
		bottom: 10px;
		right: 10px;
		background-color: rgba(0,0,0,.3);
		color: white;
		padding:1px 5px 1px 5px;
		font-size: 12px;
	}
	.picListBox>.picList>.title{
		width: 100%;
		box-sizing: border-box;
		padding:10px 15px 20px 15px;
		font-size: 17px;
		font-family: 宋体;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>