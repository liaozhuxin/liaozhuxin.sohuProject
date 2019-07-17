<template>
	<main>
		<header>
			<p>
				<router-link to="/">
					<span class="backUpLevel"></span>
					<span class="souhuText">
						<img src="../../assets/newsPage/headerSohuPic.png"/>
					</span>
					&nbsp;首页&nbsp;·&nbsp;<span class="red">新闻</span>
				</router-link>
				<span class="hotSearch">
					<i><img src="../../assets/newsPage/headerSohuLogo.png"/></i>
					热搜
				</span>
			</p>
		</header>
		<router-view></router-view>
	</main>
</template>

<script>
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
</style>