<template>
	<ol>
    	<el-button id="add-item" v-on:click="haha">添加工作项目</el-button>
		<li></li>
	</ol>
</template>

<script>
export default{
	prop:[

	],
	methods:{
			haha:function(){
				console.log(222)
			}
	}
}
</script>

<style>
		ol{
			width:100%; 
		}
</style>