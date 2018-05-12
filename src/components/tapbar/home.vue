<template>
    <div>
        <!-- 首頁轮播,使用组件 -->
        <!-- :isfull="true" 这个属性自定义的,用来设置图片宽度是否为100% -->
       <swiper :lunboList="lunboList" :isfull="true"></swiper>
        <!-- 六宫格菜单 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <router-link to="/news/NewsList">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <router-link to="/home/photoList">
                  <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <router-link to="/home/goodsList">
                   <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                  <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                   <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                   <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    //导入工具提示
    import {
        Toast
    } from 'mint-ui';

    //引入轮播组件
    import swiper from "../subcomponents/swiper.vue"

    //暴露VUE实例对象
    export default {
        data() {
            return　 {
                lunboList: [{
                        img: "/src/images/xue1.jpg",
                        url: "1"
                    },
                    {
                        img: "/src/images/xue2.jpg",
                        url: "2"
                    },
                    {
                        img: "/src/images/xue3.jpg",
                        url: "3"
                    },
                    {
                        img: "/src/images/xue4.jpg",
                        url: "4"
                    },
                    {
                        img: "/src/images/xue5.jpg",
                        url: "5"
                    },
                ],
            }
        },
        created() {
            // this.getLunbo();
        },
        methods: {
            getLunbo() {
                this.$http.get("api/getlunbo").then(res => {
                    if (res.body.status === 0) {
                        //获取数据成功
                        this.lunboList = res.body.message;
                    } else {
                        Toast('加载轮播图失败');
                    }
                })
            }
        },
        components:{
            swiper
        }
    }
</script>

<style lang="scss" scoped>

    // 六宫格样式
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: 0;
        .mui-table-view-cell {
            border: 0;
        }
        img {
            width: 60px;
            height: 60px;
        }
        .mui-media-body {
            font-size: 13px;
        }
    }
</style>
