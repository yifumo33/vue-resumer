<template>
	<div>
		
		<h2>{{title['content']}}</h2>
		<el-form>
			<div class="container" v-for="(item,index) in items" :key="item.key">
			<el-form-item  :key="key.name"  v-for="key in keys"   v-bind:label="labels[key] || key">
			    <el-input v-model="item[key]"></el-input>
			  </el-form-item>
			  <i class="el-icon-error" v-on:click="removeWorkHistory(index)"></i>
			  <hr>
			</div>

				<el-button v-on:click="addWorkHistory">添加 </el-button>	

		</el-form>
	</div>
</template>


<script>
	export default{
		props:[
			'items',
			'labels',
			'title'
		],
		computed:{
				keys(){
				return Object.keys(this.items[0])
				}
		},
		methods:{
			

			addWorkHistory:function(){
				var empty = {}
				this.keys.map((key)=>(
					empty[key] = ''
				))
				this.items.push(empty)
			},
			removeWorkHistory:function(index){
				this.items.splice(index,1)
			}
		},
		created(){

		}
	}
</script>