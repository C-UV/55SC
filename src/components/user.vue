<template>
    <div id="user">
        <header data-am-widget="header" class="am-header am-header-default sq-head ">
			<div class="am-header-left am-header-nav">
				<a href="javascript:;" class="">
					<img src="../assets/images/step.png" width="26" style="margin-top: 1px;"/>
				</a>
			</div>
			<h1 class="am-header-title">
  	            <a href="" class="">个人中心</a>
            </h1>
            <div class="am-header-right am-header-nav">
			    <a href="" class="">
			    	<i class="am-icon-comment-o" style="font-size: 20px;"></i>
		        </a>
			</div>
	    </header>
	    <div style="height: 49px;"></div>
	    <div class="member">
	    	<div class="mem-tit">
				{{userdata}} 
	    		<!--<a href="step.html" class="step"><img src="images/step.png" width="26"/></a>-->
	    	</div>
	    	<div class="mem-pic">
		    	<div class="mem-pic-bg" style="background-image: url(images/memtx.png);"></div>
		    	<a href="" class="men-level">√普通会员</a>
	    	</div>
	    	<ul class="member-menu">
                <li>
                    <a href="javascript:;">
						<p class="yellow">0</p>
                    	<p class="black">帐户余额 </p>
                    </a>
                </li>
                <li>
					<a href="javascript:;">
						<p class="yellow">0</p>
                    	<p class="black">积分 </p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <p class="yellow">0</p>
                        <p class="black">优惠劵 </p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <p class="yellow">0</p>
                        <p class="black">我的收藏 </p>
                    </a>
                </li>
		    </ul>
	    </div>
	    <div class="user-list">
		  	<div class="u-list-main">
		  		<img src="../assets/images/order-pic.png" width="27" />
		  		<span>我的购物订单</span>
		  		<a href="allorder.html">查看全部订单></a>
		  	</div>
		    <ul class="user-nav">
		    	<li><a href="javascript:;"> <img src="../assets/images/1-icon.png"> <p>待付款</p></a></li>
		    	<li><a href="javascript:;"> <img src="../assets/images/1-icon1.png"> <p>待收货</p></a></li>
		    	<li><a href="javascript:;"> <img src="../assets/images/1-icon2.png"> <p>待评价</p></a></li>
		    	<li><a href="javascript:;"> <img src="../assets/images/1-icon3.png"> <p>退换货</p></a></li>
		    </ul>
		    <div class="u-list-main">
		  		<img src="../assets/images/order-my.png" width="27" />
		  		<span>帐户与安全</span>
		  	</div>
		    <ul class="user-nav">
		    	<li><a href="javascript:;"> <img src="../assets/images/1-icon4.png"> <p>个人资料</p></a></li>
		    	<li><a href="javascript:;"> <img src="../assets/images/1-icon5.png"> <p>收货地址</p></a></li>
		    	<li><a href="javascript:;"> <img src="../assets/images/1-icon6.png"> <p>安全设置</p></a></li>
		    	<li><a href="javascript:;"> <img src="../assets/images/1-icon7.png"> <p>我的钱包</p></a></li>
		    </ul>
	    </div>
	    <!--导航-->
        <ul class="sq-nav" style=" background: #fff; margin-top: 1rem; border-top: 1px solid #ddd;  border-bottom: 1px solid #ddd;">
            <li>
                <div class="am-gallery-item">
                    <a href="javascript:;" class="">
                        <img src="../assets/images/icon4.png" />
                        <p>我的众筹</p>
                    </a>
                </div>
            </li>
            <li>
                <div class="am-gallery-item">
                    <a href="javascript:;" class="">
                        <img src="../assets/images/icon5.png" />
                        <p>我的白条</p>
                    </a>
                </div>
            </li>
            <li>
                <div class="am-gallery-item">
                    <a href="javascript:;" class="">
                        <img src="../assets/images/icon2.png" />
                        <p>我的预定</p>
                    </a>
                </div>
            </li>
            <li>
				<div class="am-gallery-item">
					<a href="javascript:;" class="" @click='quit'>
						<img src="../assets/images/icon8.png" />
						<p>安全退出</p>
					</a>
				</div>
            </li>
        </ul>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				userdata:''
			}
		},
		beforeRouteEnter(to, from, next){
			if(localStorage.getItem('user')){
				next(_this => {
					_this.userdata = localStorage.getItem('user')
				});
			}else{
				next('/login')
			}
		},
		methods:{
			quit(){
				localStorage.removeItem('user');
				location.href="#/login"
			}
		}
	}
</script>
