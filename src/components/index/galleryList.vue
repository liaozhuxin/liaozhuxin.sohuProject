<template>
	<main>
		<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
			<header  v-show="appear">
				<p>
					<router-link to="/galleryIndex">
						<span class="backUpLevel"></span>
						<span class="souhuText">
							<img src="../../assets/indexPic/logo-gallery.png"/>
						</span>
					</router-link>
					<span class="hotSearch">
						<i><img src="../../assets/indexPic/dialogBtn.png"/></i>
						<i><img src="../../assets/indexPic/heartBtn.png"/></i>
						<i><img src="../../assets/indexPic/shareBtn1.png"/></i>
					</span>
				</p>
			</header>
		</transition>
		<!--图片轮播-->
		<div @click="ffade($event)" class="aViewPager">
			<swiper @click="ffffade($event)">
	        <swiper-slide>
	        	<img src="../../assets/indexPic/imageTextPic.jpg"/>
	  			<p class="imageTextBox">
		  			<span class="picNum">1/6</span>
		  			<span class="explain">瑜伽是一件小事，越是高手越谦卑</span>
		  			<span class="title">瑜伽是一件小事</span>
	  			</p></swiper-slide>
	        <swiper-slide>
	        	<img src="../../assets/indexPic/imageTextPic2.jpg"/>
			    <p class="imageTextBox">
		  			<span class="picNum">2/6</span>
		  			<span class="explain">瑜伽是一件小事，越是高手越谦卑</span>
		  			<span class="title">瑜伽是一件小事</span>
	  			</p>
	        </swiper-slide>
	        <swiper-slide>
	        	<img src="../../assets/indexPic/imageTextPic3.jpg"/>
		  		<p class="imageTextBox">
		  			<span class="picNum">3/6</span>
		  			<span class="explain">瑜伽是一件小事，越是高手越谦卑</span>
		  			<span class="title">瑜伽是一件小事</span>
	  			</p>
	        </swiper-slide>
	        <swiper-slide>
	        	<img src="../../assets/indexPic/imageTextPic4.jpg"/>
			    <p class="imageTextBox">
		  			<span class="picNum">4/6</span>
		  			<span class="explain">瑜伽是一件小事，越是高手越谦卑</span>
		  			<span class="title">瑜伽是一件小事</span>
	  			</p>
	        </swiper-slide>
	        <swiper-slide>
	        	<img src="../../assets/indexPic/imageTextPic5.jpg"/>
	        </swiper-slide>
	        <swiper-slide>
	        	<img src="../../assets/indexPic/imageTextPic6.jpg"/>
			    <p class="imageTextBox">
		  			<span class="picNum">5/6</span>
		  			<span class="explain">瑜伽是一件小事，越是高手越谦卑</span>
		  			<span class="title">瑜伽是一件小事</span>
	  			</p>
	        </swiper-slide>
	        <swiper-slide>
	        	<img src="../../assets/indexPic/imageTextPic7.jpg"/>
		  		<p class="imageTextBox">
		  			<span class="picNum">6/6</span>
		  			<span class="explain">瑜伽是一件小事，越是高手越谦卑</span>
		  			<span class="title">瑜伽是一件小事</span>
	  			</p>
	        </swiper-slide>
      	</swiper>
		</div>
        		
		<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
			<p class="adBox" v-show="appear">
				<img src="../../assets/indexPic/galleryAdPic.jpg" />
			</p>
		</transition>
		
	</main>
</template>

<script>
	export default{
		data(){
			return{
				appear:true
			}
		},
		methods:{
			ffade(e){
				console.log('aaa')
				this.appear = !this.appear;
			},
			ffffade(e){
				e.stopPropagation();
			}
		}
	}
</script>

<style scoped>
	main{
		height: 100vh;
		background-color: black;
	}
	header{
		width: 100%;
		padding-bottom: 44px;
		overflow: hidden;
		transition: all .5s; 
	}
	header>p{
		width: 100%;
		overflow: hidden;
		background-color:rgba(0,0,0,1);
		color: #434343;
		font-size: 17px;
		line-height: 44px;
		position: fixed;
		z-index: 99;
		max-width: 780px;
	}
	header>p .backUpLevel{
		float: left;
		height: 20px;
		width: 18px;
		background:url(../../assets/indexPic/lefyArrowBtn.png) no-repeat;
		background-size: contain;
		margin-top: 14px;
		margin-left: 8px;
	}
	.souhuText{
		float: left;
		width: 100px;
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
		width: 25px;
		height: 23px;
		margin-right: 15px;
		margin-top: -3px;
	}
	.hotSearch>i:nth-child(1){
		width: 30px;
	}
	.hotSearch>i:nth-child(3){
		margin-right: 0px;
	}
	.hotSearch>i>img{
		width: 100%;
	}
	.swiper-container .imageTextBox{
		color: white;
		font-family: 宋体;
		font-size: 3.5vw;
		margin-top: 18%;
		box-sizing: border-box;
		padding-left: 15px;
	}
	.swiper-container .imageTextBox>.title{
		display: block;
		margin-top: 2%;
		margin-left: 7.5vw;
	}
	.adBox{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		transition: all .5s; 
	}
	.adBox>img{
		width: 100%;
	}
	.aViewPager{
		top: 25%;
		left: 0;
		position: relative;
	    width: 100%;
	}
</style>
<style>
	.swiper-container{
	    width: 100%;
	}
	.swiper-slide{
	    width: 100%;
		box-sizing: border-box;
		padding-left: 10px;
		padding-right: 10px;
	}
	.swiper-container img{
		width: 100%;
	}
</style>