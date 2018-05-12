<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="carcount" ref='select' @change="showCart"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    //这个组件需要初始化
    import mui from "../../lib/mui/js/mui.min.js"
    export default {
        mounted() {
            mui(".mui-numbox").numbox()
        },
        methods: {
            showCart(){
                //调用store里getters的方法
                this.$store.commit('updateShopCar',{
                    id:this.id,
                    count:this.$refs.select.value
                })
            }
        },
        props:['carcount','id']
    }
</script>

<style lang="scss" scoped>

</style>
