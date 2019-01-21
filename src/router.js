import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './components/home.vue'
import user from './components/user.vue'
import login from './components/login.vue'  
import reg from './components/reg.vue'
import shopcar from './components/shopcar.vue'
import detail from './components/detail.vue'
import classify from './components/classify.vue'
import error from './components/error.vue';

let routes = [
    {path:'/home',component:home},
    {path:'/user',component:user},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/shopcar',component:shopcar},
    {path:'/detail',path:'/detail/:id',component:detail},
    {path:'/classify',component:classify},
    {path:'/',redirect:'/home'},
    {path:'*',component:error}
]
export default new Router({
  routes
})
