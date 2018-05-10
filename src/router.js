import VueRouter from 'vue-router'

//导入路由组件
import home from "./components/tapbar/home.vue"
import member from "./components/tapbar/member.vue"
import search from "./components/tapbar/search.vue"
import shopcar from "./components/tapbar/shopcar.vue"
import newList from "./components/news/NewsList.vue"
import newInfo from "./components/news/NewsInfo.vue"
import photoList from "./components/photos/photoList.vue"
import photoInfo from "./components/photos/photoInfo.vue"
import goodsList from "./components/goods/goodsList.vue"

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:home},
    {path:"/member",component:member},
    {path:"/shopcar",component:shopcar},
    {path:"/search",component:search},
    {path:"/news/NewsList",component:newList},
    {path:"/home/newsInfo/:id",component:newInfo}, //这里的:id用来匹配路由传过来的id值
    {path:"/home/photoList",component:photoList},
    {path:"/home/photoInfo/:id",component:photoInfo},
    {path:"/home/goodsList",component:goodsList},
  ],
  linkActiveClass:"mui-active" //修改路由被选中状态默认添加的类名
})

// 把路由对象暴露出去
export default router