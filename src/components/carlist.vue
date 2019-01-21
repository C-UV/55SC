<template>
    <div id="carlist">
        <ul class="shopcart-list">
	    	<li v-for="item in buycar" :key="item.id">
	    		<label class="am-checkbox am-warning">
                 <input type="checkbox" checked="checked" value="">
                </label>
                <a href="javascript:;"><img :src="item.src" class="shop-pic" /></a>
                <div class="shop-list-mid">
                	<div class="tit"><a href="javascript:;">{{item.des}}</a></div>
                	<div class="d-stock">
		                <a class="decrease" @click="changeItem({id:item.id,num:-1})">-</a>
		                <input id="num" readonly="" class="text_box" name="" type="text" :value="item.number">
		                <a class="increase" @click="changeItem({id:item.id,num:1})">+</a>
                     </div>
                </div>
                <b class="shop-list-price">{{item.price}}</b>
                <div class="del" @click="removeItem({id:item.id})"><i class="am-icon-trash"></i></div>
	    	</li>
	    	<div style="height: 10px; background: #eee;"></div>
        </ul>    
        <div class="shop-fix" v-for="item in buycar" :key="item.id">
	    	<label class="am-checkbox am-warning">
                <input type="checkbox" checked="checked" value="" />
            </label>
            <a class="del" href="javascript:;" @click="clearBuycar">清空购物车</a>
            <a href="javascript:;" class="js-btn">去结算</a>
            <div class="js-text">
            	<p>合计：<b></b></p>
            	<p class="js-car">免费配送</p>
            </div>
	    </div>
    </div>
</template>
<script>

  import {mapActions,mapGetters} from 'vuex';

  export default{
    computed:mapGetters([
      'buycar'
    ]),
    methods:mapActions([
      'changeItem','removeItem','clearBuycar'
    ])
 
  }
</script>