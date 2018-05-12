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

//导入Vuex模块
import Vuex from "vuex"
Vue.use(Vuex)

//每次页面一加载,从本地获取数据
var cart = JSON.parse(localStorage.getItem("cart") || "[]")

//创建Vuex实例
var store = new Vuex.Store({
    state:{  //存储数据
        cart:cart //购物车数据
    },
    mutations:{  //方法调用
        //加入购物车,加入前先判断购物车里有没有一样的商品,有的话直接加数量就行
        
        addcart(state,buyInfo) {
            console.log(111);
            var flag = false  //这个用来做标识符
            state.cart.some(item=>{
                if(item.id == buyInfo.id) {
                    //表示购物车有
                    console.log(1111);
                    item.count += parseInt(buyInfo.count);
                    flag = true;
                    return true //结束循环
                }
            })
            if(!flag) {
                state.cart.push(buyInfo);
            }
            //把购物车数据保存在本地存储
            localStorage.setItem('cart',JSON.stringify(state.cart))
        }
    },
    getters:{  //固定数据获取
        //购物车徽标数据
        badgeCount(state) {
            //循环遍历获取
            var c = 0;
            state.cart.forEach(item=>{
                c += item.count
            })
            return c
        }
    }
})


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
    store,   // 挂载状态管理组件
})