<template>
    <div class='classify'>
        <otherheader :msg="msg"></otherheader>
		<div style="height: 49px;"></div>
		<div class="cate-search">
			<input type="text" class="cate-input" placeholder="请输入您要的搜索的产品关键词" />
			<input type="button" class="cate-btn" />
		</div>
		<div class="content-list">
			<div class="list-left">
				<li><a href="javascript:;">生鲜熟食</a></li>
				<li class="current"><a href="javascript:;">粮油大米</a></li>
				<li><a href="javascript:;">烟酒饮料</a></li>
				<li><a href="javascript:;">休闲食品</a></li>
				<li><a href="javascript:;">个人洗护</a></li>
				<li><a href="javascript:;">家居家纺</a></li>
			</div>
			<div class="list-right">
				<ul data-am-widget="gallery" class="am-gallery am-avg-sm-2 am-avg-md-2 am-avg-lg-4 am-gallery-default am-no-layout">
					<li>
						<div class="am-gallery-item">
								<a href="javascript:;" class="">
									<img src="../assets/images/test6.png">
										<h3 class="am-gallery-title">米面粮油</h3>
								</a>
						</div>
					</li>
					<li>
						<div class="am-gallery-item">
								<a href="javascript:;" class="">
									<img src="../assets/images/test7.png">
										<h3 class="am-gallery-title">食用油</h3>
								</a>
						</div>
					</li>
					<li>
						<div class="am-gallery-item">
								<a href="javascript:;" class="">
									<img src="../assets/images/test8.png">
										<h3 class="am-gallery-title">厨房调料</h3>
								</a>
						</div>
					</li>
					<li>
						<div class="am-gallery-item">
								<a href="javascript:;" class="">
									<img src="../assets/images/test9.png">
										<h3 class="am-gallery-title">特色干货</h3>
								</a>
						</div>
					</li>
			</ul>
			</div>
	    </div>
    </div>
</template>
<script>
	import otherheader from './otherheader'
	export default{
		data(){
			return {msg:'商品分类'}
		},
		name:'classify',
		components:{
			otherheader
		}
  	}
</script>