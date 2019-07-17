<template>
	<main>
		<header>
			<p class="headerText">选择国家和地区</p>
		</header>
		<mt-index-list>
			<mt-index-section index="常用">
				<mt-cell title="中国台湾 "><span @click="reNum(num=886)">+886</span></mt-cell>
				<mt-cell title="中国澳门 "><span @click="reNum(num=852)">+852</span></mt-cell>
				<mt-cell title="中国香港 "><span @click="reNum(num=853)">+853</span></mt-cell>
				<mt-cell title="中国大陆 "><span @click="reNum(num=86)">+86</span></mt-cell>
			</mt-index-section>
			<mt-index-section index="A">
				<mt-cell title="澳大利亚 "><span @click="reNum(num=61)">+61</span></mt-cell>
			</mt-index-section>
			<mt-index-section index="H">
			    <mt-cell title="韩国"><span @click="reNum(num=82)">+82</span></mt-cell>
			</mt-index-section>
			<mt-index-section index="J">
			    <mt-cell title="加拿大"><span @click="reNum(num=1)">+1</span></mt-cell>
			</mt-index-section>
			<mt-index-section index="M">
			    <mt-cell title="美国 "><span @click="reNum(num=1)">+1</span></mt-cell>
			    <mt-cell title="马来西亚 "><span @click="reNum(num=60)">+60</span></mt-cell>
			</mt-index-section>
			<mt-index-section index="R">
			    <mt-cell title="日本"><span @click="reNum(num=81)">+81</span></mt-cell>
			</mt-index-section>
			<mt-index-section index="X">
			    <mt-cell title="新加坡 "><span @click="reNum(num=65)">+65</span></mt-cell>
			</mt-index-section>
			<mt-index-section index="Y">
			    <mt-cell title="英国 "><span @click="reNum(num=44)">+44</span></mt-cell>
			</mt-index-section>
			<mt-index-section index="Z">
			    <mt-cell title="中国台湾 "><span @click="reNum(num=886)">+886</span></mt-cell>
			    <mt-cell title="中国香港 "><span @click="reNum(num=852)">+852</span></mt-cell>
			    <mt-cell title="中国澳门 "><span @click="reNum(num=853)">+853</span></mt-cell>
			    <mt-cell title="中国大陆 "><span @click="reNum(num=886)">+886</span></mt-cell>
			</mt-index-section>
		</mt-index-list>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				num:''
			}
		},
		methods:{
			reNum(a){
				console.log(a);
				this.$router.push({path:'/login', query:{ph:a}});
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	main{
		overflow-x: hidden;
		background-color: white;
	}
	.headerText{
		width: 100%;
		font-size: 23px;
		background-color: white;
		padding-top: 30px;
		padding-bottom: 20px;
		text-align: left;
		padding-left: 20px;
	}
	.mint-indexsection{
		text-align: left;
		width: 100%;
	}
	.mint-indexsection-index{
		padding-left: 20px;
		font-weight: 600;
	}
	.mint-cell-text{
		padding-left: 10px;
		font-size: 15px;
		color: #3C3C3D;
	}
	.mint-indexlist-navitem{
		margin-bottom: 10px;
		font-size: 13px;
		font-weight: 600;
	}
</style>