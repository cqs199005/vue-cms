// 入口文件
//引入Vue模块
import Vue from "vue"

//导入并安装路由模块
import vueRouter from "vue-router"
Vue.use(vueRouter)
//导入自定义路由文件
import router from "./router.js"

//导入并安装vue-resource模块来获取数据
import VueResource from "vue-resource"
Vue.use(VueResource)
//为resource配置全局根域名
Vue.http.options.root = "http://vue.studyit.io"
//配置全局POST发送表单数据的组织格式
Vue.http.options.emulateJSON = true


//按需导入MintUI组件
// import { Header,Swipe, SwipeItem,Button, Lazyload } from 'mint-ui'
// //注册MintUI组件到Vue
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

//注意,使用懒加载时,不能按需导入,不然没效果
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css' 


//导入mui框架的样式文件
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"

//缩略图模块
import VuePreview from 'vue-preview'
Vue.use(VuePreview)



//导入App模块
import app from "./App.vue"

//全局定义日期过滤器
import moment from "moment"
Vue.filter('dateFormat',function(dateStr,type="YYYY-MM-DD HH:mm:ss"){
    return moment(dateStr).format(type); 
})

//创建Vue实例
var vm = new Vue({
    el:"#app",
    render:c=>c(app),  //渲染组件
    router,  //注册路由对象
})