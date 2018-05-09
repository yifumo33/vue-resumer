<template>
	<div id="imforation">
		
	<h2>个人信息</h2>
	      <div class="haha">
				    <p>点击此处添加头像</p>
          			<input v-on:change="haha" type="file" id="file-input" name="fileContent">
          			
      		  </div>
		<el-form>
			  <el-form-item label="名称">
			    <el-input v-model="profile.name"></el-input>
			  </el-form-item>
			  <el-form-item label="城市">
			    <el-input v-model="profile.city"></el-input>
			  </el-form-item>
			  <el-form-item label="生日">
			    <el-input v-model="profile.age"></el-input>
			  </el-form-item>
			  <el-form-item label="电话">
			    <el-input v-model="profile.phone"></el-input>
			  </el-form-item>
			  <el-form-item label="邮箱">
			    <el-input v-model="profile.mail"></el-input>
			  </el-form-item>
	</el-form>
			  	   

	</div>
</template>

<script>
		export default{
			props:['profile'],
	        methods:{
	        	haha:function(e){
	        				var _this = this 
			        		let fileReader = new FileReader(),
		                	fileType = e.target.files[0].type;

		            		fileReader.onload = function() {
		   
			                	if (/^image/.test(fileType)) {
			                    // 读取结果在fileReader.result里面
			                    // $(`<img src="${fileReader.result}">`).appendTo('#imforation')
			                       _this.profile.src = fileReader.result
			                	}
			        		}
			       			fileReader.readAsDataURL(e.target.files[0]);

			       
	        	}

			}

		}
</script>

<style>

	  .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }

	.haha{ 
		margin-top:20px; 
		width:150px;
		height:50px; 
		color: #888;
    	background: #fafafa;
    	border: 1px solid #ddd;
    	border-radius: 12px; 
		overflow:hidden;
		position:relative; 
	 }
	 .haha p{
	 	position:absolute;
	 	width:100%;
	 	height:100%;
	 	line-height:50px; 
	 	text-align:center;  
	 }
	 .haha:hover {
	 	    color: #444;
    	background: #eee;
    	border-color: #ccc; 
	 }
	 .haha input{
	 	cursor: pointer;
	 	width:100%;
	 	height:100%;
	 	opacity:0; 
	  }
	  .clearfix::after{
	  	display:block;
	  	content:'';
	  	clear:both; 
	  }

</style>


