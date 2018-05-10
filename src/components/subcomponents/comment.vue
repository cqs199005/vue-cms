<template>
    <div class="comment-content">
        <h3 class="com-t">发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="sendcom">发表评论</mt-button>
        <div class="cmt-box">
            <div class="cmt-list" v-for="(item, i) in comments" :key="item.id">
                <div class="cmt-list-t">
                    第{{i + 1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:&nbsp;&nbsp;{{item.add_time | dateFormat}}
                </div>
                <div class="cmt-list-body">
                    {{item.content == "" ? "这人很懒,什么都没留下":item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="more">加载更多</mt-button>

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
                pageIndex:1, //设置默认显示页码
                comments:[
                    {id:1,user_name:"匿名用户",add_time:new Date(),content:"我来评论了!!!!!!!!哇哈哈哈"},
                    {id:2,user_name:"匿名用户",add_time:new Date(),content:"我来评论了!!!!!!!!哇哈哈哈"},
                    {id:3,user_name:"匿名用户",add_time:new Date(),content:""},
                    {id:4,user_name:"匿名用户",add_time:new Date(),content:"我来评论了!!!!!!!!哇哈哈哈"},
                    {id:5,user_name:"匿名用户",add_time:new Date(),content:"我来评论了!!!!!!!!哇哈哈哈"}
                ],
                msg:""
            }
        },
        creater(){
            // this.getComment()
        },
        methods:{
            getComment(){
                this.$http.get("api/getcomments/"+this.id + "?pageindex=" + this.pageIndex).then(function(res){
                    if(res.body.status === 0) {
                        // this.comments = res.body.message  注意,这样会把前面的评论信息给覆盖
                        //应该用数组拼接的方法,拼接上新的评论信息
                        this.comments = this.comments.concat(res.body.message)
                    }else {
                        Toast('获取评论信息失败')
                    }
                })
            },
            more(){
                //每次点击加载更多,页码加1
                this.pageIndex++;
                this.getComment(); 
            },
            sendcom(){
                //判断输入内容是否为空
                if(this.msg.length === 0) {
                    return Toast("输入内容不允许为空!")
                }
               
                //下面这是测试用假数据
                 var newCom = {id:Date.now(),user_name:"匿名用户",add_time:new Date(),content:this.msg}
                        this.comments.unshift(newCom)
                        this.msg = ""
                //如果不为空,发生ajax请求
                this.$http.post("api/postcomment/" + this.$route.params,{content:this.msg}).then(function(res){
                    if(res.body.status === 0) {
                        //手动创建一个评论对象,添加到数组的第一项进行渲染,这样能保证在第一楼显示
                        var newCom = {id:Date.now(),user_name:"匿名用户",add_time:new Date(),content:this.msg}
                        this.comments.unshift(newCom)
                        this.msg = ""
                    }else {
                        Toast("发表评论失败!")
                    }
                })
            }
        },
        props:["id"]  //获取父组件传过来的ID值
    }
    
</script>

<style lang="scss">
.comment-content {
  .com-t {
      font-size: 18px;
  }
  textarea {
      font-size: 14px;
      height: 85px;
      margin: 0;
  }
  .cmt-box {
      font-size: 13px;
      margin: 5px 0;
      .cmt-list-t {
          background-color: #ccc;
          height: 30px;
          line-height: 30px;
      }
      .cmt-list-body {
          text-indent: 2em;
          height: 30px;
      }
  }
}

</style>
