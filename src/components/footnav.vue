<template>
    <div class="footnav">
        <div style="height: 55px;"></div>
        <div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default sq-foot am-no-layout" id="">
        <ul class="am-navbar-nav am-cf am-avg-sm-4">   
            <li>
                <router-link to="home" active-class="active">
                    <span class="am-icon-home"></span>
                    <span class="am-navbar-label">首页</span>
                </router-link>
            </li>
            <li>
                <router-link to="classify" active-class="active">
                    <span class="am-icon-th-large"></span>
                    <span class="am-navbar-label">分类</span>
                </router-link>
            </li>
        
            <li>
                <router-link to="shopcar" active-class="active">
                    <span class="am-icon-shopping-cart"></span>
                    <span class="am-navbar-label">购物车</span>
                </router-link>
            </li>
            <li>
                <router-link to="user" active-class="active">
                    <span class="am-icon-user"></span>
                    <span class="am-navbar-label">我的55</span>
                </router-link>
            </li>
        </ul>
        </div>
    </div>
</template>
<style>
.sq-foot ul .active{
    color: #ff5500;
}
</style>
