<template>
	<div>
		<h2>{{title['content']}}</h2>
		<el-form>
		 <div class="container" v-for="(item,index) in items">
			<el-form-item  label="公司">
			    <el-input v-model = 'item.company'></el-input>
			</el-form-item>
			 <el-form-item  label="">
					<div class="block">
				    <span class="demonstration">从：</span>
				    <el-date-picker  style="width:80%;margin:10px 0px"
				      v-model="item.time1"
				      type="date"
				      placeholder="选择日期">
				    </el-date-picker>
				    <span class="demonstration">至：</span>
				    <el-date-picker  style="width:80%;margin:10px 0px"
				      v-model="item.time2"
				      type="date"
				      placeholder="选择日期">
				    </el-date-picker>
				  </div>
			</el-form-item>
			 <el-form-item  label="职位">
			    <el-input v-model = 'item.position'></el-input>
			</el-form-item>
			 <el-form-item   :key="key.name"  v-for="  (key,index)  in item.content" :label=" '工作项目' + (index+1)">
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
 		data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };
    },
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
 				var empty = {company:'',time1:'',time2:'',position:'',content:['']}
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