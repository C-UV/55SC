<template>
    <div class="shopcar">
        <otherheader :msg="msg"></otherheader>
        <empty v-show="false"></empty>
        <carlist v-show="true"></carlist>
    </div>
</template>
<script>

    import otherheader from './otherheader.vue'
    import empty from './empty.vue'
    import carlist from './carlist.vue'

    export default {
        data() {
            return {msg:'购物车'}
        },
        components:{
            otherheader,empty,carlist
        }
    }
</script>

