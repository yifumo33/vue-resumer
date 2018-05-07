<template>
	<div>

		<h2>{{title[content]}}</h2>
		<el-form>
			<div class="container" v-for="(item,index) in items">
			<el-form-item  v-for="key in keys" v-bind:label="labels[key] || key">
			    <el-input v-model="item[key]"></el-input>
			  </el-form-item>
			  <i class="el-icon-error" v-on:click="removeitemHistory(index)"></i>
			  <hr>
			</div>

				<el-button v-on:click="additemHistory">添加 </el-button>	

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

			additemHistory:function(){
				var empty = {}
				this.keys.map((key)=>{
					empty[key] = ''
				})
				this.items.push(empty)
				
			},
			removeitemHistory:function(index){
				this.items.splice(index,1)
			}
		}
	}
</script>