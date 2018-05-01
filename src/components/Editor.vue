<template>
	<div id="Editor">
		<nav>
			<ol>
		
				<li v-for="i in [0,1,2,3,4,5]"
					v-bind:class="{active:currentTab === i}"
					v-on:click = "currentTab = i"
				>
					<svg class="icon" >
    <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
</svg>

   </li>


			</ol>
		</nav>

	<div class="panels">
		<ol>
			<li v-bind:class="{active:currentTab === 0}">
				<imformation v-bind:profile="profile" />
			</li>
			<li v-bind:class="{active:currentTab === 1}">
				<h2>工作经历</h2>
				<el-form>
					<div class="container" v-for="(work,index) in workHistory">
					<el-form-item label="公司">
					    <el-input v-model="work.company"></el-input>
					  </el-form-item>
					  <el-form-item label="工作内容">
					    <el-input v-model="work.content"></el-input>
					  </el-form-item>
					  <i class="el-icon-error" v-on:click="removeWorkHistory(index)"></i>
					  <hr>
					</div>
		
						<el-button v-on:click="addWorkHistory">添加 </el-button>	

				</el-form>
			</li>
			<li v-bind:class="{active:currentTab === 2}">
				<h2>学习经历</h2>
			</li>
			<li v-bind:class="{active:currentTab === 3}">
				<h2>项目经验</h2>
			</li>
			<li v-bind:class="{active:currentTab === 4}">
				<h2>获奖情况</h2>
			</li>
			<li v-bind:class="{active:currentTab === 5}">
				<h2>联系方式</h2>
			</li>

		</ol>
	</div>


	</div>
</template>



<script>
	import imformation from './imformation'
	export default{
		components:{
			imformation
		},
		data(){
		 return{
		 	currentTab:0,
		 	icons:['credentials_icon','xinfeng','shu','xin','trophy_icon','dianhua'],
		 	profile:{
		 		name:'',
		 		age:'',
		 		city:''
		 	},
		 	workHistory:[
		 		{company:'',content:''},
		 	]
		 }
		},
		methods:{
			addWorkHistory:function(){
				this.workHistory.push({
					company:'',content:''
				})
			},
			removeWorkHistory:function(index){
				this.workHistory.splice(index,1)
			}
		},
		created(){
			
		}
	}
</script>








<style>
	#Editor{
		border:1px solid black;
		min-height: 100px;
		display:flex;
		justify-content:space-between;
	}

	  .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
    #Editor > nav{
    	background: black;
    }
     #Editor > nav > ol > li{
     	width:80px;  
     	padding:8px 5px; 
     	display:flex;
     	justify-content: center;
     	align-items:center;  
     }
     #Editor > nav > ol > li.active{
     	
     	background:white; 
     }

     #Editor > nav > ol > li.active > .icon{
     	fill:black; 
     	width:24px;
     	height:24px;
     }
     #Editor > nav > ol > li > .icon{
     	width:24px;
     	height:24px;
     	fill:white;

     }
     #Editor li{
     
     }
	 .panels{
	 	padding:16px; 
	 	overflow:auto;
	 	display:flex; 
	 	flex:1; 
	 	
	 }
	 .panels li{
		display:none;
	 }
	 .panels li.active{
	 	
	 	display:block;
	 }

	.container{
		position: relative;
	}
	.container > .el-icon-error{
		position:absolute;
		top:5px;
		right:5px;
	}
</style>







<!-- 
				</li>

				<li v-bind:class="{active:currentTab === 1}" v-on:click="currentTab = 1" >
					<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-xinfeng"></use>
</svg>


				</li>

				<li v-bind:class="{active:currentTab === 2}" v-on:click="currentTab = 2" >
					<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-shu"></use>
</svg>


				</li>

				<li v-bind:class="{active:currentTab === 3}" v-on:click="currentTab = 3" >
					<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-xin"></use>
</svg>


				</li>

				<li v-bind:class="{active:currentTab === 4}" v-on:click="currentTab = 4">
					<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-trophy_icon"></use>
</svg>


				</li>

				<li v-bind:class="{active:currentTab === 5}" v-on:click="currentTab = 5">
					<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-dianhua"></use>
</svg>


				</li> -->


