<template>
    <div class="shopcar-container">
        <!-- 购买数量信息 -->
        <div class="mui-card shopcar">
            <div class="mui-card-content" v-for="(item,i) in shopcar" :key="item.id">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getSelectStatus[item.id]" @change="selectChange(item.id)"></mt-switch>
                    <img :src="item.thumb_path" alt="">
                    <div class="info">
                        <h3>{{item.title}}</h3>
                        <p>
                            <span class="price">￥{{item.sell_price}}</span>
                            <numbox style="height:25px" :carcount="$store.getters.getIdCount[item.id]" :id="item.id"></numbox>
                            <a href="#" @click="remove(item.id,i)">删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 购物车结算信息 -->
        <div class="mui-card total">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="sum">
                        <p>总计(不含运费)</p>
                        <p>已选购商品 <span class="count">{{$store.getters.getBuyTotal}}</span> 件,总价:<span class="total_price">￥{{$store.getters.getTotalPrice}}</span></p>
                    </div>
                    <mt-button type="danger" >去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //引入数量盒子组件
    import numbox from "../subcomponents/shopcar_numbox.vue"
    export default {
        data() {
            return {
                shopcar: [] //购物车信息
            }
        },
        created() {
            this.getshopcar()
        },
        methods: {
            getshopcar() {
                //先从笔记存储中拿到购物车id组成数组去发送ajax请求
                var idArr = [];
                this.$store.state.cart.forEach(item => idArr.push(item.id))
                //判断如果购物车为空,则不发送请求
                if (idArr.length <= 0) {
                    return
                }
                //这是假数据
                var shopInfo = [{
                        id: 1,
                        cou: 1,
                        title: "小米(Mi) 小米Noto 16G双网通版",
                        sell_price: 1999,
                        thumb_path: "/src/images/r1.jpg"
                    },
                    {
                        id: 2,
                        cou: 1,
                        title: "华为(HUAWEI) 荣耀Noto 16G双网通版",
                        sell_price: 2999,
                        thumb_path: "/src/images/r2.jpg"
                    },
                    {
                        id: 3,
                        cou: 1,
                        title: "苹果(App) 小米Noto 16G双网通版",
                        sell_price: 3999,
                        thumb_path: "/src/images/r3.jpg"
                    },
                    {
                        id: 4,
                        cou: 1,
                        title: "三星(SX) 小米Noto 16G双网通版",
                        sell_price: 3999,
                        thumb_path: "/src/images/r2.jpg"
                    },
                    {
                        id: 5,
                        cou: 1,
                        title: "魅族(MZ) 小米Noto 16G双网通版",
                        sell_price: 3999,
                        thumb_path: "/src/images/r1.jpg"
                    }
                ]
                var newshop = []
                for (i = 0; i < idArr.length; i++) {
                    shopInfo.some(item => {
                        if (item.id == idArr[i]) {
                            newshop.push(item)
                            return true
                        }
                    })
                }
                this.shopcar = newshop;
                //上面为自己模拟的数据
                // this.$http.get("api/goods/getshopcarlist/"+ idArr.join(",")).then(res=>{
                //     if(res.body.status === 0) {
                //         this.shopcar = res.body.message
                //     }
                // })
            },
            //删除方法
            remove(id, index) {
                //先删除shopcar对象的数据,使购物车渲染立刻删除
                this.shopcar.splice(index, 1)
                //在调用store里的方法,删除状态存储里的数据及本机存储
                this.$store.commit("removecar", id)
            },
            //当切换是否购买时触发
            selectChange(id) {
                this.$store.commit('changeSelect',id)
            }
        },
        components: {
            numbox
        }
    }
</script>

<style lang="scss" scoped>
    .shopcar-container {
        .shopcar {
            .mui-card-content-inner {
                display: flex;
                align-items: center;
            }
            img {
                width: 60px;
                height: 60px;
            }
            .info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .price {
                    color: red;
                    font-weight: bold;
                }
                h3 {
                    font-size: 13px;
                }
                p {
                    margin: 0;
                }
            }
        }
        .total {
            .mui-card-content-inner {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .total_price,.count {
                    color: red;
                    font-weight: bold; 
                    font-size: 16px;
                }
            }
        }
    }
</style>
