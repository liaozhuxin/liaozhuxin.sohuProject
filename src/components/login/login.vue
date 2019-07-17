<template>
	<main>
		<div class="loginBox">
			<h1 class="headerBox">
				<router-link to="/">
					<img src="../../assets/loginImg/sohuLogo.png"/>
				</router-link>
			</h1> 
			<div class="loginContain">
				<!--手机号框-->
					<p class="PhoneNumContainBox">
						<span class="numbox">
							<span class="areaNum">+{{num}}</span>
												<router-link to="/searchCountry">
													<span class="arrowBox">
														<span class="arrowUp"></span>
														<span class="arrowDown"></span>
													</span>
												</router-link>
						</span>
						<input type="text" placeholder="请输入手机号或邮箱账号" id="phoneNum"/>
						<span class="focusShow">请输入手机号或邮箱账号</span>
						<i class="PhoneNumUnderline"></i>
					</p>
					
				<!--密码框-->
					<p class="passwordContainBox">
						<input type="password" placeholder="请输入密码" id="passwd"/>
						<span class="eye"></span>
						<span class="passwordFocusShow">请输入密码</span>
					<i class="passwordUnderline"></i>
					</p>
					
				<!--协议-->
				<p class="agreementBox">
					<input type="radio" />
					<span>已阅读并同意 </span>
					<span class="agreementName">《搜狐服务协议》</span>
				</p>
				<button class="loginBtn" @click="sure()">登录</button>
				<p class="footerText">
					<span class="forgetPassword">忘记密码</span>
					<router-link to="/register"><span class="creatAccount">创建账号</span></router-link>
				</p>
			</div>
		</div>
		<ul class="loginWay">
				<li>
					<img src="../../assets/loginImg/phone-login.png" />
					<p>验证码登录</p>
				</li>
				<li>
					<img src="../../assets/loginImg/qqlogin.png"/>
					<p>QQ</p>
				</li>
				<li>
					<img src="../../assets/loginImg/weiboLogin.png"/>
					<p>微博</p>
				</li>
			</ul>
			<p class="help">帮助中心</p>
	</main>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				num:''
			}
		},
		mounted(){
			if (this.$route.query.ph) {
				this.num=this.$route.query.ph;
			} else{
				this.num=86;
			}
			
		},
		methods:{
			sure(){
				if(phoneNum.value == ''||passwd.value ==''){
					Toast('手机号和密码不能为空');
				}
			}
		}
	}
</script>

<style scoped>
	.loginBox{
		width: 91.4%;
		overflow: hidden;
		margin: 4% auto;
		background-color: white;
		padding-bottom: 40px;
	}
	.headerBox{
		width: 29%;
		margin: 60px auto;
	}
	.headerBox img{
		width: 100%;
	}
	.loginContain{
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
		width: 27%;
		float: left;
		overflow: hidden;
	}
	.numbox>span{
		float: left;
		width: 60%;
		overflow: hidden;
		font-size: 1.3em;
		line-height: 170%;
		font-weight: 600;
		color: rgba(0,0,0,.7);
		text-align: center;
	}
	.loginContain .PhoneNumContainBox .numbox a{
		width: 30%;
		padding-bottom: 10%;
		float: left;
		overflow: hidden;
		border-right: 1px solid #e5e5e5;
	}
	.arrowBox{
		width: 100%;
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
		top: 0;
		left: 10%;
	}
	.arrowDown{
		width: 18px;
		height: 12px;
		background: url(../../assets/loginImg/arrow-down.png) no-repeat;
		background-size: contain;
		position: absolute;
		bottom: 0;
		left: 10%;
	}
	.PhoneNumContainBox input{
		border: none;
		width: 70%;
		box-sizing: border-box;
		padding-left: 5px;
		padding-top: 5px;
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
/*********************密码框****************************************/	
	.passwordContainBox{
		width: 100%;
		overflow: hidden;
		position: relative;
		padding-top: 40px;
	}
	.eye{
		width: 25px;
		height: 30px;
		float: right;
		background: url(../../assets/loginImg/eyeclose-normal.png) no-repeat;
		
	}
	.passwordContainBox input{
		border: none;
		width: 90%;
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
		font-size:1.5em;
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
	}
	.agreementBox span{
		font-size: 1.1em;
		color: #3C3C3D;
	}
	.agreementBox>.agreementName{
		color: #fdb115;
	} 
	.loginBtn{
		width: 100%;
		overflow: hidden;
		padding-bottom: 15px;
		padding-top: 15px;
		border: none;
		margin-top: 35px;
		font-size: 1.5em;
	    color: rgba(0,0,0,.7);
		background-color: #ffcb05;
	}
	.footerText{
		width: 100%;
		overflow: hidden;
		margin-top: 16px;
	}
	.forgetPassword{
		font-size: 1.4em;
		float: left;
		color: #3C3C3D;
	}
	.creatAccount{
		color: #fdb115;
		font-size: 1.4em;
		float: right;
	}
	.loginWay{
		width: 100%;
		box-sizing: border-box;
		padding-left: calc(100%/5);
		margin-top: 40px;
		overflow: hidden;
	}
	.loginWay li{
		float: left;
		width:calc(100%/4);
		transform: scale(0.85);
		text-align: center;
		/*margin-left: 5%;*/
	}
	.loginWay li p{
		margin-top: 8px;
	}
	.help{
		width: 100%;
		text-align: center;
		margin-top: 10px;
		transform: scale(0.95);
	}
	
</style>