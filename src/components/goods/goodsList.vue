<template>
    <div class="goods-container">
        <ul>
            <li v-for="item in list" :key="item.id" @click="goInfo(item.id)">
                <img :src="item.img_url" alt="">
                <h3>{{item.title}}</h3>
                <div class="info">
                    <p class="price">
                        <span class="new">￥{{item.sell_price}}</span>
                        <span class="old">￥{{item.market_price}}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩{{item.stock_quantity}}件</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pageIndex:1,
            list:[
                {id:1,title:"小米(Mi) 小米Note 16G双网通版全网通",add_time:new Date(),zaiyao:"土豪专用",click:0,img_url:"/src/images/r1.jpg",sell_price:999,market_pricr:1999,stock_quantity:999},
                {id:2,title:"小米(Mi) 小米Note 16G双网通版全网通",add_time:new Date(),zaiyao:"土豪专用",click:0,img_url:"/src/images/r2.jpg",sell_price:999,market_pricr:1999,stock_quantity:999},
                {id:3,title:"小米(Mi) 小米Note 16G双网通版全网通",add_time:new Date(),zaiyao:"土豪专用",click:0,img_url:"/src/images/r3.jpg",sell_price:999,market_pricr:1999,stock_quantity:999},
                {id:4,title:"小米(Mi) 小米Note 16G双网通版全网通",add_time:new Date(),zaiyao:"土豪专用",click:0,img_url:"/src/images/r2.jpg",sell_price:999,market_pricr:1999,stock_quantity:999},
                {id:5,title:"小米(Mi) 小米Note 16G双网通版全网通",add_time:new Date(),zaiyao:"土豪专用",click:0,img_url:"/src/images/r1.jpg",sell_price:999,market_pricr:1999,stock_quantity:999},
                {id:6,title:"小米(Mi) 小米Note 16G双网通版全网通",add_time:new Date(),zaiyao:"土豪专用",click:0,img_url:"/src/images/r1.jpg",sell_price:999,market_pricr:1999,stock_quantity:999},
                {id:7,title:"小米(Mi) 小米Note 16G双网通版全网通",add_time:new Date(),zaiyao:"土豪专用",click:0,img_url:"/src/images/r2.jpg",sell_price:999,market_pricr:1999,stock_quantity:999},
                {id:8,title:"小米(Mi) 小米Note 16G双网通版全网通",add_time:new Date(),zaiyao:"土豪专用",click:0,img_url:"/src/images/r1.jpg",sell_price:999,market_pricr:1999,stock_quantity:999},
                {id:9,title:"小米(Mi) 小米Note 16G双网通版全网通",add_time:new Date(),zaiyao:"土豪专用",click:0,img_url:"/src/images/r3.jpg",sell_price:999,market_pricr:1999,stock_quantity:999},
                {id:10,title:"小米(Mi) 小米Note 16G双网通版全网通",add_time:new Date(),zaiyao:"土豪专用",click:0,img_url:"/src/images/r1.jpg",sell_price:999,market_pricr:1999,stock_quantity:999},
                {id:11,title:"小米(Mi) 小米Note 16G双网通版全网通",add_time:new Date(),zaiyao:"土豪专用",click:0,img_url:"/src/images/r1.jpg",sell_price:999,market_pricr:1999,stock_quantity:999},
                {id:12,title:"小米(Mi) 小米Note 16G双网通版全网通",add_time:new Date(),zaiyao:"土豪专用",click:0,img_url:"/src/images/r2.jpg",sell_price:999,market_pricr:1999,stock_quantity:999},
                {id:13,title:"小米(Mi) 小米Note 16G双网通版全网通",add_time:new Date(),zaiyao:"土豪专用",click:0,img_url:"/src/images/r1.jpg",sell_price:999,market_pricr:1999,stock_quantity:999},
            ]
        }
    },
    created(){
        // this.getList()
    },
    methods:{
        getList(){
            this.$http.get("api/getgoods?pageindex=" + this.pageIndex).then(function(res){
                if(res.body.status === 0) {
                    //由于后面加载更多要保留前面的数据,所以这里用数组拼接的方法
                    this.list = this.list.concat(res.body.message)
                }
            })
        },
        goInfo(id){
            //路由跳转的另一种方法,不用修改router-link
            this.$router.push("/home/goodsInfo/" + id)
        }
    }
}

</script>

<style lang="scss" scoped>
.goods-container {
    ul {
        padding: 0;
        margin: 0;
        padding: 5px;
        list-style:none;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        li {
            width: 49%;
            box-shadow: 0 0 8px #ccc;
            margin-bottom: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 2px;

            p {
                margin: 0;
                padding: 5px;
            }
            img {
                width: 100%;
            }
            h3 {
                font-size: 14px;
                line-height: 18px;
            }
            .info {
                background-color: #eee;
            }
            .price {
                .new{
                    font-size: 16px;
                    color: red;
                    font-weight: 700;
                }
                .old{
                    font-size: 12px;
                    text-decoration: line-through;
                    margin-left: 10px;
                }
            }
            .sell {
                font-size: 12px;
                display: flex;
                justify-content:space-between;
            }
            
        }
    }
}
</style>
