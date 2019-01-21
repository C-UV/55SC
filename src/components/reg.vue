<template>
    <div class='reg'>
        <otherheader :msg="msg"></otherheader>
	    <div style="height: 49px;"></div>
	    <div class="login-logo">
	    	<img src="../assets/images/logo.png" />
	    </div>
	    <input type="text" name="mobile"  placeholder="请输入手机号" class="login-password" v-model="user">
	    <input type="password" name="password"  placeholder="请输入密码" v-model="password" class="login-name">
	    <input type="password" name="password"  placeholder="确认密码" v-model="spassword" class="login-password">
	    <div class="yzm">
	    	<input type="text" class="reg-yzm" placeholder="输入验证码" />
	    	<input type="button" class="yzm-hq" value="获取验证码" />
	    </div>
	    <div class="agree">
	    	<input type="checkbox" name="checkbox" value="同意" checked="">&nbsp;同意
		    <a href="javascript:;" class="xy">《我的55用户协议》</a>
		      <div class="r-login">已有账号，请<router-link to="/login" href="javascript:;" class="l-login">登录</router-link></div>
	    </div>
	    <input type="button" class="login-btn"  @click="reg" value="立即注册">
    </div>
</template>
<script>

	import otherheader from './otherheader.vue'

	export default {
		data() {
			return {
				user:"",
				password:"",
				spassword:"",
				msg:'注册'
			}
		},
		methods:{
			reg(){
				this.$http({
					url:'http://www.liyangyf.com/ctrl/register.php',
					params:{
						tel:this.user,
						pass:this.password
					}
				}).then(res=>{
					switch(res.data){
						case 0:
						alert("用户名已存在");
						break;
						case 1:
						// console.log(this.password,this.user)
						location.href = "#/login"
						break;
						case 2:
						alert("请输入正确的用户名与密码");
						break;
					}
					this.user='';
					this.password='';
					this.spassword=''
				})
			}
		},
		components:{
            otherheader
        }
	}
</script>
