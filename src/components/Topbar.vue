<template>
	<div id="topbar">
		<div class="logo">
			VueResumer
			<h1 id="clientName"></h1>
		</div>
		<div class="actions">
			<el-button type="primary" v-on:click="register">注册</el-button>
		  		<div  class="register" v-if="seen1">
				  	<div class="username">
				  		<p id='hint'></p>
				  	 	<input type="text" placeholder="请输入用户名" id="registerUsername">  		
				  	</div>	
				  	<div class="password">
				  	    <input type="password" placeholder="请输入密码" id="registerPassword">
				  	</div>
		  			<el-button v-on:click="userRegister">用户注册</el-button>
		  			<el-button v-on:click="loginOut">保存退出</el-button>

		  			 
		   		</div>
		  <el-button v-on:click="login" >登陆</el-button>
		  		<div  class="login" v-if="seen2">
				  	<div class="username">
				  	 	<input type="text" placeholder="请输入用户名" id="loginUsername">  		
				  	</div>	
				  	<div class="password">
				  	    <input type="password" placeholder="请输入密码" id="loginPassword">
				  	</div>
		  			<el-button v-on:click="userLogin">用户登录</el-button> 
		   		</div>
		  <el-button v-on:click="preview">预览</el-button>
			
		</div>

	</div>
</template>

<style>
.logo{

	font-family: Arial;
	font-size:35px;
	display: flex;
	align-items: center;
	line-height:35px;
	color: #2a97ff;
}
#topbar{
	display: flex;
	justify-content:space-between;
	align-items:center;
	padding:16px;	
	font-size:20px;
}
#topbar > .action{
	width:600px; 
	display:flex;
}
#topbar .login,
#topbar .register,
#topbar .username,
#topbar .password{
    display:inline-block;
}

  .demo-input{padding-left: 10px; height: 38px; min-width: 262px; line-height: 38px; border: 1px solid #e6e6e6;  background-color: #fff;  border-radius: 2px;}

</style>

<script>
	import laydate from './laydate.js'
	import test from './test.js'


	export default{







		data(){
			return{
				seen1:false,
				seen2:false,

			}
			
		},
		props:[
			'resume'
		],
		methods:{
			preview(){
				this.$emit('preview')
			},
			register(){
				if(this.seen1 === false){
					this.seen1=true
					this.seen2=false
				}else{
					this.seen1=false
				}
			},
			login(){
				if(this.seen2 === false){
					this.seen2=true
					this.seen1=false
				}else{
					this.seen2=false
				}
			},
			userRegister(){
				  var TestObject = AV.Object.extend('RegisterName');
			      var testObject = new TestObject();
			      var RegisterName = $('#registerUsername').val()
			      var registerPassword = $('#registerPassword').val()
			      var _this = this
				  var query = new AV.Query('RegisterName');
				  query.contains('RegisterName', RegisterName)
				  query.find().then(function (results) {
				  	if(results.length > 0){
				  		$('#hint').text('该用户名已被注册')
				  	}else{
				  		  testObject.save({
								      RegisterName:RegisterName,
								      registerPassword:registerPassword,
								      resume:_this.resume
								  }).then(function(object) {
								    	_this.resume.profile.id  = object.id
								    	console.log(object)
								    	$('#clientName').text(object.attributes.RegisterName  +',欢迎你！') 
										$('#hint').text('注册成功')

										// _this.resume = object.attributes.resume
								}) 
				  	}
				  }, function (error) {
				});	  

			},
			userLogin(){
				  var TestObject = AV.Object.extend('RegisterName');
			      var testObject = new TestObject();
			      var loginName = $('#loginUsername').val()
			      var loginPassword = $('#loginPassword').val()
			      var _this = this
				  var query1 = new AV.Query('RegisterName');
				  var query2 = new AV.Query('RegisterName');
				  query1.equalTo('RegisterName', loginName);
				  query2.equalTo('registerPassword', loginPassword);
				  var query = AV.Query.and(query1, query2);
				  query.find().then(function (results) {
				  	if(results.length > 0){
				  		console.log(results)
				  		console.log(results[0].id)
				  		_this.id  = results[0].id	
					  $('#clientName').text(results[0].attributes.RegisterName  +',欢迎你！') 
					  // _this.resume = results[0].attributes.resume
					  _this.$emit('setFather',results[0].attributes.resume,results[0].id)
					
				  	}else{
				  		console.log('密码或用户名错误')
				  	}
				  }, function (error) {
				})	  

			},
			loginOut(){


				console.log(1231243213)





				    //  var todo = AV.Object.createWithoutData('RegisterName', id);
						  // // 修改属性
						  // todo.set('RegisterName', 'YIFU');
						  // // 保存到云端
						  // todo.save();
				 //    console.log(_this.resume)

				 //    todo.set("resume", _this.resume, {
					//   error: function(gameTurnAgain, error) {
					//     // The set failed validation.
					//   }
					// });
					// todo.save({
					//   player: "Jake Cutter",
					//   diceRoll: 2
					// }).then(function(gameTurnAgain) {
					//   // The save was successful.
					// }, function(error) {
					//   // The save failed.  Error is an instance of AVError.
					// });
			}
		},
	 created:function(){
	 	console.log('我是topbar')
	 }
	 	

	}
</script>



							 
									
							 




















