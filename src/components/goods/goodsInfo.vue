<template>
    <div class="goodsInfo-container">
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        >
            <div class="ball" v-show="isshow" ref="ballElement"></div>
        </transition>
           
        
        <!-- 这是图片轮播区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunboList="lunbotu" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 这是商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>
                        市场价: <del>￥{{goodsinfo.sell_price}}</del>&nbsp;&nbsp; 销售价: <span class="now_price">￥{{goodsinfo.market_price}}</span>
                    </p>
                    <p>
                        购买数量:
                        <numbox @getcount="getcount" :stock="goodsinfo.stock_quantity"></numbox>
                    </p>
                    <mt-button type="primary" size="small" >立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="showball">加入购物车</mt-button>
                </div>
            </div>
        </div>
        <!-- 商品参数 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:{{goodsinfo.goods_no}}</p>
                    <p>库存情况:{{goodsinfo.stock_quantity}}件</p>
                    <p>上架时间:{{goodsinfo.add_time | dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <div class="button-box">
                    <mt-button class="btn"  type="primary" size="large" plain @click="godesc(id)">图文介绍</mt-button>
                    <mt-button class="btn" type="danger" size="large" plain @click="gocomment(id)">商品评论</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //导入轮播组件
    import swiper from "../subcomponents/swiper.vue"
    //导入购买数量加减盒子组件
    import numbox from "../subcomponents/goods-numbox.vue"
    export default {
        data() {
            return {
                lunbotu: [{
                        img: "/src/images/r1.jpg"
                    },
                    {
                        img: "/src/images/r2.jpg"
                    },
                    {
                        img: "/src/images/r3.jpg"
                    }
                ],
                id: this.$route.params.id,
                goodsinfo:{
                    id:1,
                    add_time:new Date(),
                    goods_no:'SD125358654',
                    market_price:2699,
                    sell_price:2999,
                    stock_quantity:60,
                    title:"小米(Mi) 小米Note 16G双网通"
                },
                isshow:false,
                count:1 //默认购买数量为1
            }
        },
        creater() {
        },
        methods: {
            getLunbo() {
                this.$http.get("api/getthumimages/" + this.id).then(function(res) {
                    if (res.body.status === 0) {
                        this.lunbotu = res.body.message
                    }
                })
            },
            godesc(id) {
                this.$router.push({name:"goodsdesc",params:{id}});
            },
            gocomment(id){
                this.$router.push({name:"goodscomment",params:{id}});
            },
            beforeEnter(el){
                el.style.transform = 'translate(0,0)';//动画初始位置
            },
            enter(el,done){
                //这里最终位置不能确定,需要手动获取,用购物车徽标的位置-小球的位置就可以得到
                //先获取小球的位置,这里也可以直接用el       
                const ballPosition = this.$refs.ballElement.getBoundingClientRect()
                //获取购物车徽标的位置
                const badgePosition = document.getElementById('badge').getBoundingClientRect()
                //两个求差,获得要移动的x,y距离
                var x = badgePosition.left - ballPosition.left;
                var y = badgePosition.top - ballPosition.top;
                el.offsetWidth;   //刷新每一帧,固定写法
                //这里由于要使用变量,使用ES6字符串拼接方法实现
                el.style.transform = `translate(${x}px,${y}px)`;
                el.style.transition = "all 1s cubic-bezier(0,-0.4,.92,.39)";
                done()
            },
            afterEnter(el){
                this.isshow = !this.isshow
            },
            //点击开始动画,由隐藏变显示
            showball(){
                this.isshow = !this.isshow
                //点击购买要把购买的相关信息传递到store里面去存储,方便购物车调用
                //手动生成一个对象存储购买信息
                var buyInfo = {id:this.id,count:this.count,price:this.goodsinfo.market_price,selected:true} //selected表示是否确定购买的状态,用于在购物车计算总额
                this.$store.commit('addcart',buyInfo)
            },
            //父组件向子组件传递方法,子组件调用这方法,把数据传递给父组件
            getcount(num){
                this.count = num;
            }
        },
        props: ["lunboList"],
        components: {
            swiper,
            numbox
        }
    }
</script>

<style lang="scss" scoped>
    .goodsInfo-container {
        background-color: #dddddd;
        overflow: hidden;
        .now_price {
            color: red;
            font-size: 16px;
            font-weight: bold;
        }
        .button-box {
            width: 100%;
            .btn {
                margin:15px 0;
            }

        }
        .ball {
            width: 15px;
            height: 15px;
            background-color: red;
            border-radius: 50%;
            position: absolute;
            top: 391px;
            left: 142px;
            z-index: 88;
        }
    }
</style>
