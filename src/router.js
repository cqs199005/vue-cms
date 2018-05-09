import VueRouter from 'vue-router'

//导入路由组件
import home from "./components/tapbar/home.vue"
import member from "./components/tapbar/member.vue"
import search from "./components/tapbar/search.vue"
import shopcar from "./components/tapbar/shopcar.vue"


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:home},
    {path:"/member",component:member},
    {path:"/shopcar",component:shopcar},
    {path:"/search",component:search},
  ],
  linkActiveClass:"mui-active" //修改路由被选中状态默认添加的类名
})

// 把路由对象暴露出去
export default router