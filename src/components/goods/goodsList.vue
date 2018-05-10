<template>
    <div class="goods-container">
        <ul>
            <li>
                <img src="/src/images/r1.jpg" alt="">
                <h3>小米(Mi) 小米Note 16G双网通版</h3>
                <div class="info">
                    <p class="price">
                        <span class="new">￥899</span>
                        <span class="old">￥999</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </li>
            <li>
                <img src="/src/images/r1.jpg" alt="">
                <h3>小米(Mi) 小米Note 16G双网通版 4G快速 16G双网通版全网通 4G快速</h3>
                <div class="info">
                    <p class="price">
                        <span class="new">￥899</span>
                        <span class="old">￥999</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </li>
            <li>
                <img src="/src/images/r1.jpg" alt="">
                <h3>小米(Mi) 小米Note 16G双网通版全网通 </h3>
                <div class="info">
                    <p class="price">
                        <span class="new">￥899</span>
                        <span class="old">￥999</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    

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
