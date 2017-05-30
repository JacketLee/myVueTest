<template>
	<div class="mainContent">		
		<div class="sideLeft">
			<Sidebar></Sidebar>
		</div>
		<div class="main-container">
			<HeadNav></HeadNav>
			<router-view></router-view>
		</div>		
	</div>
</template>
<script>
	import Sidebar from './Sidebar'
	import HeadNav from './HeadNav'
	export default{
		components:{
			Sidebar,
			HeadNav
		}
	}
</script>
<style>
	.sideLeft{
		width: 180px;
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: 2;
		overflow-x: hidden;
		transition: all .28s ease-out;
	}
	.main-container{
	    width: 100%;
	    min-height: 100%;
	    transition: all .28s ease-out;
	}

	.mainContent{
		position: relative;
		height: 100%;
		padding-left: 180px;
		overflow: auto;
	}
	.homeTitle{
		text-align: center;
		padding: 10px 0;
	}
</style>