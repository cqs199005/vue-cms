<template>
    <div>
        <comment :id="$route.params.id"></comment>
    </div>
</template>

<script>
    //导入评论子组件
    import comment from "../subcomponents/comment.vue"
    export default {
        components:{
            comment
        }
    }
</script>

<style lang="scss" scoped>
    
</style>
