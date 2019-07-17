<template>
	<main>
		<div class="registerBox">
			<h1 class="headerBox">
				<router-link to="/">
					<img src="../../assets/loginImg/sohuLogo.png"/>
				</router-link>
			</h1> 
			<div class="registerContain">
				<!--手机号框-->
				<p class="PhoneNumContainBox">
					<span class="numbox">
						<span class="areaNum">+86</span>
						<span class="arrowBox">
							<span class="arrowUp"></span>
							<span class="arrowDown"></span>
						</span>
					</span>
					<input type="text" placeholder="请输入您想使用的手机号"/>
					<span class="focusShow">请输入您想使用的手机号</span>
					<i class="PhoneNumUnderline"></i>
				</p>
					
				<!--密码框-->
				<p class="passwordContainBox">
					<input type="text" placeholder="请输入右图验证码"/>
					<span class="picCode">
						<img src="../../assets/loginImg/RegisterPicture.jpg" width="100%"/>
					</span>
					<span class="passwordFocusShow">请输入右图验证码</span>
					<i class="passwordUnderline"></i>
				</p>
					
					
				<!--协议-->
				<p class="agreementBox">
					<input type="radio" />
					<span>已阅读并同意 </span>
					<span class="agreementName">《搜狐服务协议》</span>
				</p>
				<button class="registerBtn">注册</button>
				<p class="footerText">
					<router-link to="/login"><span class="goLogin">前往登录&nbsp;〉</span></router-link>
				</p>
			</div>
		</div>
		<p class="refooterText">只需一个搜狐帐号即可登录搜狐以下产品</p>
		<img class="loginWay" src="../../assets/loginImg/register-footer.png"></img>
			<p class="help">帮助中心</p>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				num:86
			}
		},
		mounted(){
			this.num=this.$route.query.ph;
		}
	}
</script>

<style scoped>
	.registerBox{
		width: 91.4%;
		overflow: hidden;
		margin: 4% auto;
		background-color: white;
		padding-bottom: 25px;
	}
	.headerBox{
		width: 29%;
		margin: 60px auto;
	}
	.headerBox img{
		width: 100%;
	}
	.registerContain{
		width: 80%;
		margin: 0px auto;
		overflow: hidden;
	}
	.PhoneNumContainBox{
		width: 100%;
		position: relative;
		overflow: hidden;
		padding-bottom: 5px;
	}
	.numbox{
		width: 26%;
		float: left;
		overflow: hidden;
	}
	.numbox>span{
		float: left;
		width: 60%;
		overflow: hidden;
		font-size: 1.6em;
		line-height: 170%;
		font-weight: 600;
		color: rgba(0,0,0,.7);
		text-align: center;
	}
	span.arrowBox{
		width: 30%;
		height: 24px;
		position: relative;
		float: left;
	}
	.arrowUp{
		width: 18px;
		height: 12px;
		background: url(../../assets/loginImg/arrow-up.png) no-repeat;
		background-size: contain;
		position: absolute;
		top: 10%;
		left: 10%;
	}
	.arrowDown{
		width: 18px;
		height: 12px;
		background: url(../../assets/loginImg/arrow-down.png) no-repeat;
		background-size: contain;
		position: absolute;
		bottom: -10%;
		left: 10%;
	}
	.PhoneNumContainBox input{
		border: none;
		width: 70%;
		box-sizing: border-box;
		padding-top: 8px;
		margin-top: 1px;
		font-size: 1.3em;
		outline-style: none ;
	}
	.focusShow{
		position: absolute;
		top: 0px;
		left: 24%;
		color: #E5E5E5;
		z-index: -1;
	}
	.PhoneNumContainBox input::-webkit-input-placeholder {
	    color: #E5E5E5;
	    font-weight: lighter;
	    font-size: 19px;
	}
	.PhoneNumContainBox input:-moz-placeholder {
	    color: #E5E5E5;
	    font-weight: lighter;
	    font-size: 19px;
	}
	.PhoneNumContainBox input:-ms-input-placeholder {
	    color: #E5E5E5;
	    font-weight: lighter;
	    font-size: 19px;
	}
	.PhoneNumUnderline{
		width: 100%;
		height: 1px;
		background-color: #E5E5E5;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	
	
	
	/****************密码框******************************/
	.passwordContainBox{
		width: 100%;
		overflow: hidden;
		position: relative;
		padding-top: 50px;
	}
	.picCode{
		width: 25%;
		float: right;
		margin-top: -10px;
		padding-bottom: 5px;
	}
	.passwordContainBox input{
		border: none;
		width: 70%;
		font-size: 1.5em;
		outline-style: none ;
		box-sizing: border-box;
		padding-left: 6px;
	}
	span.passwordFocusShow{
		position: absolute;
		top: 0px;
		left: 0px;
		color: #E5E5E5;
		font-size: 20px;
		z-index: -1;
	}
	.passwordContainBox input::-webkit-input-placeholder {
	    color: #E5E5E5;
	    font-weight: lighter;
	    font-size: 19px;
	}
	.passwordContainBox input:-moz-placeholder {
	    color: #E5E5E5;
	    font-weight: lighter;
	    font-size: 19px;
	}
	.passwordContainBox input:-ms-input-placeholder {
	    color: #E5E5E5;
	    font-weight: lighter;
	    font-size: 19px;
	}
	.passwordUnderline{
		width: 100%;
		height: 1px;
		background-color: #E5E5E5;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.agreementBox{
		width: 100%;
		text-align: left;
		margin-top: 30px;
		color: #3C3C3D;
	}
	.agreementName{
		color: #fdb115;
	} 
	.registerBtn{
		width: 100%;
		height: 55px;
		border: none;
		margin-top: 35px;
		font-size: 20px;
	    color: rgba(0,0,0,.7);
		background-color: #ffcb05;
	}
	.footerText{
		width: 100%;
		overflow: hidden;
		margin-top: 30px;
	}
	.goLogin{
		color: #fdb115;
		font-size: 1.4em;
		float: right;
	}
	/******************尾部**********************************/
	.refooterText{
		width: 100%;
		overflow: hidden;
		margin-top: 50px;
		text-align: center;
		color: #3C3C3D;
		font-size: 1.3em;
	}
	.loginWay{
		width: 100%;
		margin-top: 15px;
		overflow: hidden;
	}
	.help{
		width: 100%;
		text-align: center;
		margin-top: 20px;
		font-size: 1.3em;
		margin-bottom: 30px;
		transform: scale(0.95);
		color: #3C3C3D;
	}
	
</style>