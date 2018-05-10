<template>
    <div class="info-content">
        <h3 class="title">{{info.title}}</h3>
        <p>
            <span>发表时间:{{info.add_time | dateFormat }}</span>
            <span>点击:{{info.click}}次</span>
        </p>
        <hr>
        <!-- 缩略图 -->
        <vue-preview :slides="list" @close="handleClose"></vue-preview>
        <!-- 图片内容 -->
        <div class="conten" v-html="info.content">
        </div>
        <!-- 发表评论组件 -->
        <component-box :id="id"></component-box>
    </div>
</template>

<script>
    //引入评论组件
    import comment from "../subcomponents/comment.vue"
    export default {
        data() {
            return {
                info: {
                    id: 11,
                    title: "我是假图片标题",
                    click: 9,
                    add_time: new Date(),
                    content: "我是假内容我是假内容我是假内容我是假内容我是假内容我是假内容我是假内容我是假内容我是假内容我是假内容"
                },
                id: this.$route.params.id,
                list: [{
                        src: "/src/images/1.jpg",
                        msrc: "/src/images/1.jpg",
                        w: 600,
                        h: 400,
                        alt: 'picture1',
                        title: 'Image Caption 1'
                    },
                    {
                        src: "/src/images/2.jpg",
                        msrc: "/src/images/2.jpg",
                        w: 600,
                        h: 400,
                        alt: 'picture2',
                        title: 'Image Caption 2'
                    },
                    {
                        src: "/src/images/3.jpg",
                        msrc: "/src/images/3.jpg",
                        w: 600,
                        h: 400,
                        alt: 'picture3',
                        title: 'Image Caption 3'
                    },
                    {
                        src: "/src/images/4.jpg",
                        msrc: "/src/images/4.jpg",
                        w: 600,
                        h: 400,
                        alt: 'picture4',
                        title: 'Image Caption 4'
                    },
                    {
                        src: "/src/images/5.jpg",
                        msrc: "/src/images/5.jpg",
                        w: 600,
                        h: 400,
                        alt: 'picture5',
                        title: 'Image Caption 5'
                    }
                ]
            }
        },
        created() {
            // this.getInfo()
        },
        methods: {
            getInfo() {
                this.$http.get("api/getimageInfo/" + this.id).then(function(res) {
                    if (res.body.status === 0) {
                        this.info = res.body.message
                    }
                })
            },
            handleClose() {
                console.log('close event')
            }
        },
        components: {
            "component-box": comment
        }
    }
</script>

<style lang="scss">
    .info-content {
        padding: 3px;
        .title {
            font-size: 18px;
            color: #226aff;
            text-align: center;
            margin: 15px 0;
        }
        p {
            font-size: 14px;
            display: flex;
            justify-content: space-between;
        }
        .my-gallery {
            display: flex;
            flex-wrap: wrap;
            figure {
                margin: 10px;
                box-shadow: 0 0 10px #999;
                img {
                    width: 100px;
                    vertical-align: middle;
                }
            }
        }
    }
</style>
