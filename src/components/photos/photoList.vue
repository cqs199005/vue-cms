<template>
    <div>
        <!-- 这是mui的头部导航 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id == 0 ? 'mui-active': '']" v-for="item in categroy" :key="item.id">
                				{{item.title}}
                			</a>
                </div>
            </div>
        </div>
        <!-- 图片展示,使用懒加载 -->
        <ul class="photo-list">
            <!-- 这里讲原本的li换成路由连接,后面用tag="li"改回来 -->
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoInfo/'+ item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="img-con">
                    <div class="img-title">
                        {{item.title}}
                    </div>
                    <div class="img-body">
                        {{item.zhaiyao}}
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    //使用Mui的导航,需引入对应的JS文件
    import mui from "../../lib/mui/js/mui.min.js";
    export default {
        data() {
            return {
                categroy: [{
                        id: 0,
                        title: "全部"
                    },
                    {
                        id: 1,
                        title: "家具生活"
                    },
                    {
                        id: 2,
                        title: "摄影设计"
                    },
                    {
                        id: 3,
                        title: "明星美女"
                    },
                    {
                        id: 4,
                        title: "摄影器材"
                    },
                    {
                        id: 5,
                        title: "明星写真"
                    },
                    {
                        id: 6,
                        title: "清纯甜美"
                    },
                    {
                        id: 7,
                        title: "古典美女"
                    }
                ],
                list: [{
                        id: 1,
                        title: "美女图片",
                        img_url: "/src/images/1.jpg",
                        zhaiyao: "黑色玫瑰~~~jQuery美女网站图片轮播切换代码是一款带左右箭头自动轮播切换的焦点图代码。"
                    },
                    {
                        id: 2,
                        title: "美女图片",
                        img_url: "/src/images/2.jpg",
                        zhaiyao: "黑色玫瑰~~~"
                    },
                    {
                        id: 3,
                        title: "美女图片",
                        img_url: "/src/images/3.jpg",
                        zhaiyao: "黑色玫瑰~~~"
                    },
                    {
                        id: 4,
                        title: "美女图片",
                        img_url: "/src/images/4.jpg",
                        zhaiyao: "黑色玫瑰~~~"
                    },
                    {
                        id: 5,
                        title: "美女图片",
                        img_url: "/src/images/5.jpg",
                        zhaiyao: "黑色玫瑰~~~"
                    }
                ]
            };
        },
        created() {
            // this.getCategroy()
        },
        mounted() {
            //这个钩子函数触发时,页面结构才搭建好
            //这是初始化Mui区域滚动
            mui(".mui-scroll-wrapper").scroll({
                eceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getCategroy() {
                this.$http.get("api/getimgcategory").then(function(res) {
                    if (res.body.status === 0) {
                        //全部这个分类没有,要自己手动添加
                        res.body.message.unshift({
                            id: 0,
                            title: "全部"
                        });
                        this.categroy = res.body.message;
                    }
                });
            },
            getImgs(cateId) {
                this.$http.get("api/getimages/" + cateId).then(function(res) {
                    if (res.body.status === 0) {
                        this.list = res.body.message;
                    }
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    //这个用来消除滑动的警告
    * {
        touch-action: pan-y;
    }
    .photo-list {
        list-style: none;
        margin: 0;
        padding: 10px;
        
        li {
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 10px #999;
            position: relative;
        }
        img {
            width: 100%;
            vertical-align: middle
        }
        img[lazy="loading"] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .img-con {
            color: #fff;
            text-align: left;
            position: absolute;
            bottom: 0;
            background-color: rgba(0,0,0,.4);
            .img-title {
                font-size: 14px;
            }
            .img-body {
                font-size: 13px;
            }
        }
    }
</style>
