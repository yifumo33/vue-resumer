<template>
	<div>
		<h2>{{title['content']}}</h2>
		<el-form>
			<div class="container" v-for="(item,index) in items" :key="item.key">
			<el-form-item :key="key.name" v-for="key in keys" v-bind:label="labels[key] || key">
			    <el-input v-model = 'item[key]'></el-input>
			</el-form-item>
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
 				var empty = {}
 				this.keys.map(function( key ){
 					empty[key] = ''
 				})
 				this.items.push(empty)
 				console.log(this.items)
 			},
 			removeitem:function(index){
 				if(index === 0) return
 				this.items.splice(index,1)
 			}
 		}
 	} 
</script>