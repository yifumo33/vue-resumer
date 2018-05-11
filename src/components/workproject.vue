<template>
	<div>
		<h2>{{title['content']}}</h2>
		<el-form>
		 <div class="container" v-for="(item,index) in items">
			<el-form-item  label="公司">
			    <el-input v-model = 'item.company'></el-input>
			</el-form-item>
			 <el-form-item  label="时间">
			    <el-input v-model = 'item.time'></el-input>
			</el-form-item>
			 <el-form-item  label="职位">
			    <el-input v-model = 'item.position'></el-input>
			</el-form-item>
			 <el-form-item v-for="  (key,index)  in item.content" :label=" '工作项目' + (index+1)">
					<el-input v-model = "item.content[index]"></el-input>
			 </el-form-item>
			 <div class="action" >
			 	<el-button v-on:click="addproject(index)" >添加项目 </el-button>	
			 	<el-button v-on:click="removeproject(index)">移除项目 </el-button>	

			 </div>
			 
			  <i class="el-icon-error" v-on:click="removeitem(index)"></i>
			  <hr>
		</div>

				<el-button v-on:click="additem" class='haha'>添加 </el-button>	

		</el-form>
	</div>
</template>


<script>
 	export default{
 		props:[
 			'items',
 			'title',
 			'labels'
 		],
 		computed:{
 			keys(){
 						return Object.keys(this.items[0])
 			}
 		},
 		methods:{
 			
 			additem:function(){
 				var empty = {company:'',time:'',position:'',content:['']}
 				this.items.push(empty)
 				console.log(this.items)
 			},
 			removeitem:function(index){
 				if(index === 0) return
 				this.items.splice(index,1)
 			},
 			addproject:function(index){
 				this.items[index].content.push('')
 			},
 			removeproject:function(index){
 				this.items[index].content.pop()
			}
 		}
 	} 
</script>


<style>
	.action{
		display:flex;
		margin-bottom:30px; 
	}
	
</style>