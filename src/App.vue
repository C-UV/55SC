<template>
  <div id="app">

    <router-view></router-view>
    <footnav v-show="bFoot"></footnav>

  </div>
</template>

<script>
  
  import footnav from './components/footnav.vue'
  import {mapGetters} from 'vuex';
  import * as types from './store/types.js'

  export default {
    name:'app',
    components:{
      footnav
    },
    methods:{
      checkRouterChange(to){
        let path=to.path;
        if(/home|classify|shopcar|user/.test(path)){
          this.$store.dispatch(types.VIEW_FOOT,true)
        }
        if(/login|reg|detail/.test(path)){
          this.$store.dispatch(types.VIEW_FOOT,false)
        }
      }
    },
    watch:{
      $route:{
        deep:true,
        immediate:true,
        handler:'checkRouterChange'
      }
    },
    computed:mapGetters([
      'bFoot'
    ])
  }
</script>
