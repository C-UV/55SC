<template>
    <div class="login">
        <otherheader :msg="msg"></otherheader>        
	    <div style="height: 49px;"></div>
	    <div class="login-logo">
	    	<img src="../assets/images/logo.png" />
	    </div>
	    <input type="text" v-model="user" name="mobile" id="mobile" placeholder="请输入用户名/手机号" class="login-name">
	    <input type="password" v-model="password" name="password" id="password" placeholder="请输入密码" class="login-password">
	    <input type="button" class="login-btn" value="我要登录" @click="login">
	    <router-link to="reg"><input type="button" class="reg-btn" value="我要注册"></router-link>
	    <div class="agree">
	    	<a href="forgetpassword.html" class="forget">忘记密码？</a>
	    </div>
    </div>
</template>
<script>

	import otherheader from './otherheader.vue'

	export default {
		data(){
			return{
				user:"",
				password:"",
				msg:"登录"
			}
		},
		methods:{
			login(){
				this.$http({
					url:'http://www.liyangyf.com/ctrl/login.php',
					params:{
						user:this.user,
						pass:this.password
					}
				}).then(res=>{
					switch(res.data){
						case 0:
						alert("您的用户名或密码有误");
						break;
						case 1:
						alert("用户不存在")
						default:
						// console.log(this.user,this.password)
						localStorage.setItem('user',res.data.user)
						location.href = "#/user"
					}
				})
			}
		},
		components:{
            otherheader
        }
	}
</script>



