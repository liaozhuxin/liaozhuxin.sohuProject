<template>
	<main>
		<header>
			<div>
				<p>
					<span class="headerLeftTxtBox" @click="change()">
						<span class="seachBtn"></span>
						<span class="textBox">{{val}}</span>
						<span class="secondaryMuen" v-show="show" @click.stop="getEventTar($event)">
							<span class="upArrow"></span>
							<span class="ownWeb" @click="getVal('本站')">
								<span></span>
								本站
							</span>
							<span class="souGou" @click="getVal('搜狗')">
								<span></span>
								搜狗
							</span>
						</span>
					</span>
					<input type="text" placeholder="刘德华好演员标准" />
				</p>
				<router-link to="/"><span class="rightText">取消</span></router-link>
			</div>
		</header>
		<p class="hotSearch">热门搜索</p>
		<ol>
			<li><span class="red">1</span><p>任天堂新款Switch</p></li>
			<li><span class="oranged">2</span><p>财富中国500强榜单</p></li>
			<li><span class="yellow">3</span><p>瑞典的垃圾不够用</p></li>
			<li><span>4</span><p>山下智久悼念喜多川</p></li>
			<li><span>5</span><p>富翁丑闻搅动美国</p></li>
			<li><span>6</span><p>杭州失联女童监控</p></li>
			<li><span>7</span><p>13元买车为拍网剧</p></li>
			<li><span>8</span><p>穿耳洞长4颗肿瘤</p></li>
			<li><span>9</span><p>40天加长版三伏天</p></li>
			<li><span>10</span><p>强仁退出SuperJunior</p></li>
		</ol>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				show:false,
				val:"本站"
			}
		},
		methods:{
			change(){
				this.show = !this.show;
			},
			getEventTar($event){
			},
			getVal(a){
				this.val = a;
				this.show = !this.show;
			}
		}
	}
</script>

<style scoped>
	main{
		background-color: white;
		padding-bottom: 40%;
	}
	header{
		width: 100%;
		padding-bottom: 2%;
		padding-top: 15px;
		background-color: f3f3f3;
	}
	header>div{
		width: 93.1%;
		margin: 0 auto;
		text-align: center;
	}
	header>div>p{
		float: left;
		width: 89%;
		background-color: #f3f3f3;
		border-radius: 3px;
	}
	.headerLeftTxtBox{
		float: left;
		width: 23%;
		color: #656565;
		font-size: 15px;
		line-height: 30px;
		position: relative;
		box-sizing: border-box;
		padding-left: 3%;
		border-right: 1px solid #E5E5E5;
	}
	.secondaryMuen{
		position: absolute;
		top: 100%;
		left: 50%;
		width: 60%;
	}
	.secondaryMuen>span{
		width: 100%;
		display: block;
		color: black;
		font-size: 12px;
		background-color: #F3F3F3;
	}
	.secondaryMuen>span.ownWeb{
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	.secondaryMuen>span.ownWeb>span{
		display: inline-block;
		width: 12px;
		height: 12px;
		background: url(../../assets/indexPic/sohu_logo.png)no-repeat;
		background-size: contain;
	}
	.secondaryMuen>span.souGou{
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.secondaryMuen>span.souGou>span{
		display: inline-block;
		width: 12px;
		height: 12px;
		background: url(../../assets/indexPic/logoSogou.png)no-repeat;
		background-size: contain;
	}
	.secondaryMuen>span.upArrow{
		background-color: transparent;
		width: 14px;
		height: 14px;
		background: url(../../assets/indexPic/upArrow.png) no-repeat;
		background-size: contain;
		margin-left: 35%;
	}
	.seachBtn{
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(../../assets/indexPic/searchBtn.png) no-repeat;
		background-size: contain;
		position: absolute;
		top: 6px;
		left: 12%;
	}
	.rightText{
		float: right;
		color: #656565;
		font-size: 16px;
		line-height: 30px;
	}
	header>div>p>input{
		float: right;
		width: 73%;
		height: 30px;
		background-color:#f3f3f3 ;
		border: none;
		color: #222;
		outline-style: none;
		border-radius: 3px;
	}
	header>div>p>input::-webkit-input-placeholder {
	    color: #A4A4A4;
	    font-weight: lighter;
	    font-size: 14px;
	}
	header>div>p>input:-moz-placeholder {
	    color:  #A4A4A4;
	    font-weight: lighter;
	    font-size: 14px;
	}
	header>div>p>input:-ms-input-placeholder {
	    color:  #A4A4A4;
	    font-weight: lighter;
	    font-size: 14px;
	}
	.hotSearch{
		width: 100%;
		padding-top: 8%;
		padding-bottom: 4%;
		box-sizing: border-box;
		padding-left: 3.45%;
		font-size: 13px;
		color: #A4A4A4;
	}
	ol{
		width: 100%;
		padding-left: 3.45%;
		box-sizing: border-box;
	}
	ol>li{
		width: 100%;
		color: #2b2b2b;
		font-size: 15px;
		padding-bottom: 7%;
	}
	ol>li>span{
		display: inline-block;
		color: #A4A4A4;
		width: 17px;
		height: 17px;
		border-radius: 4px;
		text-align: center;
		line-height: 16px;
	}
	ol>li>span.red{
		background-color:#ff645d;
		color: white;
	}
	ol>li>span.oranged{
		background-color:#ff9c5d;
		color: white;
	}
	ol>li>span.yellow{
		background-color:#ffdd61;
		color: white;
	}
	
	ol>li>p{
		display: inline-block;
		padding-left: 10px;
	}
</style>