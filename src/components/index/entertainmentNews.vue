<template>
	<main>
		<header>
			<p>
				<router-link to="/">
					<span class="backUpLevel"></span>
					<h1 class="souhuText">
						<img src="../../assets/newsPage/headerSohuPic.png"/>
					</h1>
				</router-link>
				<span class="newstypetitle">娱乐</span>
				<span class="hotSearch">
					<i><img src="../../assets/newsPage/headerSohuLogo.png"/></i>
					热搜
				</span>
			</p>
		</header>
		<ul class="tabMenuBox" @click="goTop($event)">
			<li @click="changeOne($event)" :class="{sty:sty=='re'}">推荐</li>
			<li @click="changeTwo($event)" :class="{sty:sty=='st'}">明星</li>
			<li @click="changeThree($event)" :class="{sty:sty=='tv'}">电视剧</li>
			<li @click="changeFour($event)" :class="{sty:sty=='mo'}">电影</li>
			<li @click="changeFive($event)" :class="{sty:sty=='sh'}">综艺</li>
			<li @click="changeSix($event)" :class="{sty:sty=='me'}">美图</li>
		</ul>
			<ul class="containerBox">
				<li class="recommend">
					<recommend></recommend>
				</li>
				<li class="star">
					<star></star>
				</li>
				<li class="TVplay">
					<TVplay></TVplay>
				</li>
				<li  class="movie">
					<movie></movie>
				</li>
				<li  class="show">
					<show></show>
				</li>

					<li class="metu">
						<transition enter-active-class="animated zoomIn"  >
							<metu v-show="sscale" style="animation-duration: .4s"></metu>
						</transition>
					</li>

			</ul>
	</main>
</template>

<script>
import recommendPart from "./recommendPart.vue"
import starPart from "./starPart.vue"
import TVplayPart from "./TVplayPart.vue"
import moviePart from "./moviePart.vue"
import showPart from "./showPart.vue"
import metuPart from "./metuPart.vue"
	export default{
		data(){
			return{
				p:[],
				sty:'re',
				oContainerBox:'',
				otabMenuBox:'',
				sscale:false
			}
		},
		components:{
			'recommend':recommendPart,
			'star':starPart,
			'TVplay':TVplayPart,
			'movie':moviePart,
			'show':showPart,
			'metu':metuPart
		},
		mounted(){
			var _this = this;
			 _this.otabMenuBox = document.getElementsByClassName('tabMenuBox')[0];
			 _this.oContainerBox = document.getElementsByClassName('containerBox')[0];
			 //吸顶
			document.onscroll = function(){
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				if(scrollTop>44){
					_this.otabMenuBox.style.position = 'fixed';
					_this.otabMenuBox.style.left='50%';
					_this.otabMenuBox.style.transform='translateX(-50%)';
					
				}else{
					_this.otabMenuBox.style.position = '';
					_this.otabMenuBox.style.left='0%';
					_this.otabMenuBox.style.transform='translateX(0%)';
				}
			}
		},
		methods:{
			goTop(e){
				document.documentElement.scrollTop=44;
				window.pageYOffset=44;
				document.body.scrollTop=44;
			},
			changeOne(a){
				this.sty = 're';
				this.oContainerBox.style.left='0vw';
				this.sscale  = false;
			},
			changeTwo(a){
				this.sty = 'st'
				this.oContainerBox.style.left='-100%';
				this.sscale  = false;
			},
			changeThree(a){
				this.sty = 'tv'
				this.oContainerBox.style.left='-200%';
				this.sscale  = false;
			},
			changeFour(a){
				this.sty = 'mo'
				this.oContainerBox.style.left='-300%';
				this.sscale  = false;
			},
			changeFive(a){
				this.sty = 'sh'
				this.oContainerBox.style.left='-400%';
				this.sscale  = false;
			},
			changeSix(a){
				this.sty = 'me'
				this.oContainerBox.style.left='-500%';
				this.sscale  = true;
			
		}
	}
}
</script>

<style scoped>
	/*main{
		overflow: hidden;
	}*/
	header{
		width: 100%;
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
		max-width: 780px;
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
		width: 10.4%;
		margin-left: 5px;
		margin-top: 13px;
	}
	.newstypetitle{
		float: left;
		height: 44px;
		border-left: 1px solid #f5b915;
		margin-left: 2%;
		font-weight: 600;
		font-size: 17px;
		padding-left: 10px;
	}
	.souhuText>img{
		float: left;
		width: 100%;
		max-width: 55.22px;
	}
	.hotSearch{
		float: right;
		margin-right: 10px;
		font-size: 17px;
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
	/***********************tab栏菜单********************************/
	.tabMenuBox{
		width: 100%;
		overflow: hidden;
		border-bottom: 1px solid #e8e8e8 ;
		top: 0;
		z-index: 99;
		background-color: white;
		max-width: 780px;
	}
	.tabMenuBox>li{
		float: left;
		font-size: 17px;
		text-align: center;
		width: calc(100%/6);
		color: #333333;
		padding-top: 10px;
		padding-bottom: 10px;
		border-bottom: 4px solid white;
		transition: all .3s;
	}
	.tabMenuBox>li.sty{
		color: #F0A400;
		font-weight: 600;
		border-color:#F0A400;
	}
	.containerBox{
		width: calc(100%*6);
		position: relative;
		top: 0vw;
		left: 0vw;
		transition: all .1s;
		overflow: hidden;
	}
	.containerBox>li{
		float: left;
		width: calc(100%/6);
		overflow: hidden;
	}
	
</style>