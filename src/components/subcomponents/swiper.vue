<template>
    <div>
         <mt-swipe>
            <mt-swipe-item v-for="item in lunboList" :key="item.url">
                <img :src="item.img" alt="" :class="{'full':isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:['lunboList','isfull']
}
</script>

<style lang="scss" scoped>
// 轮播图样式
    .mint-swipe {
        height: 200px;
        text-align: center;
        .mint-swipe-item {
            img {
                // width: 100%;
                height: 100%;
            }
            .full {
                width: 100%;
            }
        }
    }
</style>
