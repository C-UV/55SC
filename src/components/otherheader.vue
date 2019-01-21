<template>
    <div id="otherheader">
        <header data-am-widget="header" class="am-header am-header-default sq-head ">
			<div class="am-header-left am-header-nav">
				<a href="javascript:history.back()" class="">
					<i class="am-icon-chevron-left"></i>
				</a>
			</div>
			<h1 class="am-header-title">
  	            <a href="" class="">{{msg}}</a>
            </h1>
	    </header>
    </div>
</template>
<script>
	export default {
		props:['msg']
	}
</script>
<style>
	#otherheader{
		height: 48px;
	}
</style>

