<template>
    <div class="list">
        <div class="sq-title">
            <i class="am-icon-volume-up"></i>
            <div class="fnTimeCountDown">
                {{dataName}}
            </div>
        </div>
        <ul data-am-widget="gallery" class="am-gallery pro-list am-avg-sm-3 am-avg-md-3 am-avg-lg-4 am-gallery-default"  >
            <li v-for="item in list" :key="item.id">
                <div class="am-gallery-item">
                    <router-link :to="'/detail/'+item.id+'?url='+url">
                    <img v-bind:src="item.src" />
                        <h3 class="am-gallery-title">{{item.des}}</h3>
                        <div class="am-gallery-desc">{{item.price}}</div>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:['list','dataName','url']
    }
</script>
