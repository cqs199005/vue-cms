<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
                <router-link :to="'/home/newsInfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h3>{{item.title}}</h3>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{item.add_time | dateFormat}}</span>
                            <span>点击:{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
 //导入工具提示
    import {
        Toast
    } from 'mint-ui';
    export default {
        data(){
            return {
                newList:[
                    {id:1,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"},
                    {id:2,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"},
                    {id:3,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"},
                    {id:4,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"},
                    {id:5,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"},
                    {id:6,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"},
                    {id:7,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"},
                    {id:8,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"},
                    {id:9,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"},
                    {id:10,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"},
                    {id:11,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"},
                    {id:12,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"},
                    {id:13,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"},
                    {id:14,title:'这是个假数据...',add_time:new Date(),click:9,img_url:"/src/images/news(1).jpg"}
                ]
            }
        },
        creater(){
            // this.getList()  
        },
        methods:{
            getList(){//请求数据
                this.$http.get("api/getlunbo").then(function(res){
                    if(res.body.status===0) {
                        this.newList = res.body.message
                    }else {
                        Toast('请求失败')
                    }
                })
                
            }
        }
    }
</script>

<style lang="scss" scoped>
.mui-media-body {
    h3 {
        font-size: 14px;
    }
    
    .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
}
</style>

