<template>
    <div class='slider'>
        <!-- <searchbtn></searchbtn> -->
        <swipe class="my-swipe" :speed="1000" :auto="autotime">
            <swipe-item class="slide1"><img src="../assets/images/banner1.png" /></swipe-item>
            <swipe-item class="slide2"><img src="../assets/images/banner1.png" /></swipe-item>
            <swipe-item class="slide3"><img src="../assets/images/banner1.png" /></swipe-item>
        </swipe>
    </div>
</template>
<script>

    // import searchbtn from './searchbtn'
    import 'vue-swipe/dist/vue-swipe.css';
    import { Swipe, SwipeItem} from 'vue-swipe'
    
    export default {
        data(){
            return{
                autotime:3000
            }
        },
        components:{
            // searchbtn,
            swipe:Swipe,
            'swipe-item':SwipeItem
        }
    }
</script>

<style scoped>
    .my-swipe img{
        width:100%;
    }
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
</style>
