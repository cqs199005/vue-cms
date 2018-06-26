<template>
    <div class="desc-container">
        <h3>商品详细信息介绍 ------ {{$route.params.id}}</h3>
        <hr>
        <div class="content">
            这省略~~~~~~~
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            data:[]
        }
    },
    created(){
        this.$http.get('/my/info').then(res=>res.body).then(res=>{
      console.log(res.data);
    })
    }
}
</script>

<style lang="scss" scoped>
.desc-container {
    h3 {
        color: #226aff;
        font-size: 18px;
        margin: 15px 0;
        text-align: center;
    }
}
</style>
