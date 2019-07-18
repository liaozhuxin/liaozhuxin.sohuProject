<template>
	<main>
		<span class="countDown">{{countTime}}秒后关闭</span>
		<img src="../../assets/indexPic/enterPageAdPic.jpg" class="enterPic"/>
		<img src="../../assets/indexPic/enterAdCloseBtnPic.png" class="enterClose" @click="closeEnterAd()"/>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				countTime:5
			}
		},
		methods:{
			closeEnterAd(){
				bigAdBox.style.display = "none"
			}
		},
		mounted(){
			var _this = this;
			setInterval(function(){
				if(_this.countTime>0){
					_this.countTime--;
				}else{
					bigAdBox.style.display = "none"
				}
			},1000)
		}
	}
</script>

<style scoped>
	.enterPic{
		width: 60%;
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%);
	}
	.enterClose{
		width: 10%;
		position: absolute;
		top:70%;
		left: 50%;
		transform: translate(-50%);
		opacity: 0.9;
	}
	.countDown{
		position: absolute;
		top: 20%;
		left: 65%;
		color: white;
		font-weight: 600;
		z-index: 9;
	}
</style>