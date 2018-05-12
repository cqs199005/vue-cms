<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" ref="selectNum" @change="getcount2" />
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
        //当文本框的数量改变时触发
        methods: {
            getcount2() {
                //调用父元素传过来的方法,把值传给父元素
                this.$emit('getcount',parseInt(this.$refs.selectNum.value))
            }
        },
        //接收父元素传递过来的库存
        props:['stock'],
        //监听stock数据,手动设置最大值
        watch:{
            stock:function(newval,oldval) {
                //当发送改变时,调用mui的方法设置最大值
                mui(".mui-numbox").numbox().setOption('max',newval)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
