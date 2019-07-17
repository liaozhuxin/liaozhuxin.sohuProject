<template>
	<main>
		<ul>
			<li class="leftBox">
				<p  v-for="(item,index) in metuL">
					<img :src="item.path"/>
					{{item.title}}
					<span class="picNum">
						<span class="picBtn"></span>
						&nbsp;6
					</span>
					<span class="senderMsg">
						<span class="senderHeaderPic"></span>
						{{item.sender}}
						<span span class="senderTime">{{item.sendTime}}</span>
					</span>
				</p>
			</li>
			<li class="rightBox">
				<p v-for="(item,index) in metuR">
					<img :src="item.path"/>
					{{item.title}}
					<span class="picNum">
						<span class="picBtn"></span>
						&nbsp;6
					</span>
					<span class="senderMsg">
						<span class="senderHeaderPic"></span>
						{{item.sender}}
						<span class="senderTime">{{item.sendTime}}</span>
					</span>
				</p>
			</li>
		</ul>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				metuL:[],
				metuR:[]
			}
		},
		mounted(){
			//AJAX传数据
			this.$http.get('./data/entertainmentNewsData.json')
			.then((res)=>{
				this.metuL = res.data.metuL;
				this.metuR = res.data.metuR;
			})
			.catch(()=>{})
			.finally((f)=>{
				console.log('请求结束')
			})
		}
	}
</script>

<style scoped>
	ul{
		width: 100%;
		box-sizing: border-box;
		padding: 8px 15px;
		overflow: hidden;
	}
	ul>li{
		width: 48.7%;
		overflow: hidden;
		padding-top: 5px;
	}
	/**************左边*********************/
	ul>li.leftBox{
		float: left
	}
	ul>li.leftBox>p{
		width: 100%;
		position: relative;
		overflow: hidden;
		font-size: 17px;
		padding-bottom: 25px;
		color: #333333;
	}
	ul>li.leftBox>p>img{
		width: 100%;
		border-radius: 8px;
	}
	ul>li.leftBox>p>.picNum{
		position: absolute;
		bottom: 80px;
		right: 10px;
		width: 35px;
		height: 18px;
		color: white;
		box-sizing: border-box;
		padding-left: 7px;
		border-radius: 10px;
		background-color: rgba(0,0,0,.2);
		font-size: 12px;
	}
	ul>li.leftBox>p>.picNum>.picBtn{
		float: left;
		width: 12px;
		height: 12px;
		background: url(../../assets/entertainmentImg/picBtn .png) no-repeat;
		background-size: contain;
		margin-top: 3px;
	}
	ul>li.leftBox>p>.senderMsg{
		position: absolute;
		width: 100%;
		bottom: 5px;
		left: 0;
		color: #999999;
		font-size: 13px;
		overflow: hidden;
	}
	ul>li.leftBox>p>.senderMsg>.senderHeaderPic{
		float: left;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: url(../../assets/entertainmentImg/headerPic1.jpeg) no-repeat;
		background-size: contain;
	}
	ul>li.leftBox>p>.senderMsg>.senderTime{
		float: right;
		margin-right: 5px;
	}
	/************右边****************/
	ul>li.rightBox{
		float: right
	}
	ul>li.rightBox>p{
		width: 100%;
		position: relative;
		overflow: hidden;
		font-size: 17px;
		padding-bottom: 25px;
		color: #333333;
	}
	ul>li.rightBox>p>img{
		width: 100%;
		border-radius: 8px;
	}
	ul>li.rightBox>p>.picNum{
		position: absolute;
		bottom: 100px;
		right: 10px;
		width: 35px;
		height: 18px;
		color: white;
		box-sizing: border-box;
		padding-left: 7px;
		border-radius: 10px;
		background-color: rgba(0,0,0,.2);
		font-size: 12px;
	}
	ul>li.rightBox>p>.picNum>.picBtn{
		float: left;
		width: 12px;
		height: 12px;
		background: url(../../assets/entertainmentImg/picBtn .png) no-repeat;
		background-size: contain;
		margin-top: 3px;
	}
	ul>li.rightBox>p>.senderMsg{
		position: absolute;
		width: 100%;
		bottom: 5px;
		left: 0;
		color: #999999;
		font-size: 13px;
		overflow: hidden;
	}
	ul>li.rightBox>p>.senderMsg>.senderHeaderPic{
		float: left;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: url(../../assets/entertainmentImg/headerPic2.jpeg) no-repeat;
		background-size: contain;
	}
	ul>li.rightBox>p>.senderMsg>.senderTime{
		float: right;
		margin-right: 5px;
	}
</style>