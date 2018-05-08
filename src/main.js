// 入口文件
//引入Vue模块
import Vue from "vue"

//导入并安装路由模块
import vueRouter from "vue-router"
Vue.use(vueRouter)
//导入自定义路由文件
import router from "./router.js"


//按需导入MintUI组件
import { Header } from 'mint-ui';
//注册MintUI组件到Vue
Vue.component(Header.name, Header);

//导入mui框架的样式文件
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"


//导入App模块
import app from "./App.vue"

//创建Vue实例
var vm = new Vue({
    el:"#app",
    render:c=>c(app),  //渲染组件
    router,  //注册路由对象
})