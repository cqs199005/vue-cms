<template>
    <div class="news-info">
        <h1 class="title">{{newsInfo.title}}</h1>
        <p class="sub-title">
            <span>发表时间:{{newsInfo.add_time | dateFormat}}</span>
            <span>点击:{{newsInfo.click}}次</span>
        </p>
        <hr>
        <div class="news-content" v-html="newsInfo.content"> <!-- 这是渲染带标签的数据 -->

        </div>
        <!-- 这是评论子组件 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
//导入工具提示
    import {
        Toast
    } from 'mint-ui';

    //导入评论子组件
    import comment from "./../subcomponents/comment.vue"
export default {
    data(){
        return {
            id:this.$route.params.id,    //获取路由传递过来的id值
            newsInfo:{
                id:this.id,title:"这是假标题",add_time:new Date(),click:99,content:"   <h3>这时内容...</h3> <img  src='/src/images/xue1.jpg'>"
            }
        }
    },
    created(){
        // this.getInfo()
    },
    methods:{
        getInfo(){
            this.$http.get("api/getnew/"+ this.id).then(function(res){
                if(res.body.status===0) {
                    this.newsInfo = res.body.message[0]
                }else {
                    Toast('获取新闻数据失败')
                }
            })
        }
    },
    components:{
        'comment-box':comment
    }
}
</script>

<style lang="scss">
.news-info {
    padding: 0 5px;
    .title {
        font-size: 16px;
        color: red;
        text-align: center;
        margin: 15px 0;
    }
    .sub-title {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content:space-between;
    }
    img {
        width: 100%;  //这是为了防止引入的图片太大
    }
}


</style>
