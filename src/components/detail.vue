<template>
    <div id="detail">
        <otherheader :msg="msg"></otherheader>
        <div class="am-slider am-slider-default" data-am-flexslider id="demo-slider-0">
		   <swipe class="my-swipe" :speed="1000" :auto="autotime">
            <swipe-item class="slide1"><img :src="detail.src" /></swipe-item>
            <swipe-item class="slide2"><img :src="detail.src" /></swipe-item>
            <swipe-item class="slide3"><img :src="detail.src" /></swipe-item>
        </swipe>
		</div>
		<div class="detal-info">
			<p>{{detail.des}}</p>
			<h2>商城价：<span>{{detail.price}}</span></h2>
		</div>
		<div class="d-amount">
        	<h4>数量：</h4>
            <div class="d-stock">
              <a class="decrease">-</a>
                <input id="num" readonly="" class="text_box" name="" type="text" value="1">
                <input id="id" type="hidden" value="644">
                <a class="increase">+</a>
               <span id="dprice" class="price" style="display:none"> 36</span>
            </div>
        </div>
        <div style="background: #eee; height: 10px;"></div>
        <div class="am-tabs detail-list" data-am-tabs>
		  <ul class="am-tabs-nav am-nav am-nav-tabs">
		    <li class="am-active"><a href="#tab1">商品详情</a></li>
		    <li><a href="#tab2">商品评论</a></li>
		  </ul>
		
		  <div class="am-tabs-bd">
		    <div class="am-tab-panel am-fade am-in am-active detail " id="tab1" >
		            <p>产地: 中国大陆</p>
                    <p>功效: 瘦身,美容,提神,抗氧化,保健,降三高</p>
                    <p>保质期: >2年</p>
                    <img src="../assets/images/test11.png" />
		    </div>
		    <div class="am-tab-panel am-fade detail " id="tab2">
		         <div class="comment">
		         	<span>好评：</span>
		         	<div class="com-good"></div>
		         	<span>100%</span>
		         </div>
		         <div class="comment">
		         	<span>中评：</span>
		         	<div class="com-bad"></div>
		         	<span>0%</span>
		         </div>
		         <div class="comment">
		         	<span>差评：</span>
		         	<div class="com-bad"></div>
		         	<span>0%</span>
		         </div>
		         <ul class="comment-list">
		           <li><a href="">全部</a></li>
		           <li><a href="">好评（20）</a></li>
		           <li><a href="">中评（5）</a></li>
		           <li><a href="">差评（0）</a></li>
		         </ul>
		         <ul class="comment-pic">
		         	<li>
		         		<div class="tit">
		         			<img src="../assets/images/tx.png" class="tx" />
		         			<span>songke2014</span>
		         			<i> [2016-01-01]</i>
		         		</div>
		         		<div class="comment-con">
		         			买了些给家人，都说不错！
		         		</div>
		         	</li>
		         	<li>
		         		<div class="tit">
		         			<img src="../assets/images/tx.png" class="tx" />
		         			<span>songke2014</span>
		         			<i> [2016-01-01]</i>
		         		</div>
		         		<div class="comment-con">
		         			买了些给家人，都说不错！
		         		</div>
		         	</li>
		         </ul>
		    </div>
		  </div>
		</div>
		<!--底部-->
        <div style=" height: 55px;"></div>
        <ul class="fix-shopping">
            <li @click='addItem(detail)'><router-link to="/shopcar" class="join" >加入购物车</router-link></li>
            <li><a href="javascript:;" class="imm-buy">立即购买</a></li>
        </ul>
    </div>
</template>

<script>

    import otherheader from './otherheader.vue'
    import slider from './slider.vue'
    import 'vue-swipe/dist/vue-swipe.css';
	import { Swipe, SwipeItem} from 'vue-swipe'
	import {mapActions} from 'vuex';

    export default {
		name:'detail',
		data(){
            return{
                msg:'商品详情',
				autotime:3000,
				detail:{}
            }
            
		},
		mounted() {
			let url = this.$route.query.url;
			let id = this.$route.params.id;
			this.$http({
				url: `/data/${url}.json`
			}).then(
				res => (this.detail = res.data[id - 1]));
		},
		components:{
            otherheader,
            slider,
            swipe:Swipe,
            'swipe-item':SwipeItem
		},
		methods:mapActions([
			'addItem'
		])
	}
</script>
<style scoped>
    .my-swipe img{
        width:360px;
        display: block;
    }
    .my-swipe {
        height: 360px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        
    }
</style>