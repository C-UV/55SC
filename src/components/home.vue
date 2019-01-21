<template>
    <div class="home">
        <searchbtn></searchbtn>
        <slider></slider>
        <navi></navi>
        <list :list="furit" :dataName="dataFurit" :url="'furit'"></list>
        <list :list="cold" :dataName="dataCold" :url="'cold'"></list>
        <list :list="meat" :dataName="dataMeat" :url="'meat'"></list>
    </div>
</template>
<script>

    import searchbtn from './searchbtn.vue'
    import slider from './slider.vue'
    import navi from './navi.vue'
    import list from './list.vue'
    import {mapGetters} from 'vuex';

    export default {
        components:{
            searchbtn,slider,navi,list
        },
        data(){
            return {
                dataFurit:"精品水果",
                dataCold:"冷冻食品",
                dataMeat:"生鲜肉类",
            }
        },
        computed:mapGetters([
            'furit','cold','meat'
        ]),
        mounted(){
            let url1 = `/data/furit.json`;
            this.$store.dispatch('UPDATE_FURIT',url1);

            let url2 = `/data/cold.json`;
            this.$store.dispatch('UPDATE_COLD',url2);

            let url3 = `/data/meat.json`;
            this.$store.dispatch('UPDATE_MEAT',url3);
        }
    }
</script>
