<template>
	<div class="container">
		<!-- 头部固定栏 -->
		<mt-header fixed title="固定在顶部"></mt-header>
		<!-- 中间主体内容 -->
		<!-- 添加左右切换动画效果 -->
		<transition>   
				<router-view></router-view>
		</transition>
	
		<!-- 底部固定栏 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>

</script>


<style lang="scss" scoped>
	.container {
		padding-top: 40px;
		padding-bottom: 50px;
	}

	// 添加切换动画效果
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;   //这个是为了实现平滑效果
	}
	.v-enter-active,
	.v-leave-to {
		transition: all .5s ease;
	}
	.container {
		overflow-x: hidden;  //这个为了在切换tabbar的时候,路由在进来的时候不会出现水平滚动条
	}
</style>
