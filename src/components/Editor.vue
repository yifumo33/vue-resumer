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
				<imformation v-bind:profile="resume.profile" />
			</li>
			<li v-bind:class="{active:currentTab === 1}">
				<workproject v-bind:items="resume.workHistory"  v-bind:labels="{company:'公司',content:'工作内容',position:'职位',time:'时间'}" v-bind:title="{content:'工作经历'}"/>
		
			</li>
			<li v-bind:class="{active:currentTab === 2}">
				<project v-bind:items="resume.studyHistory" v-bind:labels="{school:'学校',duration:'时间',degree:'学位'}" v-bind:title="{content:'学习经历'}" />
			</li>
			<li v-bind:class="{active:currentTab === 3}">
				<project v-bind:items="resume.project" v-bind:labels="{project:'项目',duration:'时间'}" v-bind:title="{content:'项目经历'}" />
				
			</li>
			<li v-bind:class="{active:currentTab === 4}">
				<project v-bind:items="resume.reword" v-bind:labels="{aword:'奖项',time:'时间'}" v-bind:title="{content:'获奖情况'}" />
			</li>
			<li v-bind:class="{active:currentTab === 5}">
				<project class="xxx" v-bind:items="resume.contact" v-bind:labels="{phone:'电话',email:'邮件',QQ:'QQ',Wechat:'Wechat'}" v-bind:title="{content:'联系信息'}" />
			</li>

		</ol>

	</div>


	</div>
</template>



<script>
	import workHistory from './workHistory'
	import imformation from './imformation'
	import studyHistory from './studyHistory'
	import project from './project'
	import hello from '../hello'
    import workproject from './workproject'



	export default{
		props:[
 			'resume'
 		],
		components:{
			imformation,
			workHistory,
			studyHistory,
			project,
			hello,
			workproject
		},
		data(){
		 return{
		 	currentTab:0,
		 	icons:['credentials_icon','xinfeng','shu','xin','trophy_icon','dianhua'],
		 	// profile:{
		 	// 	name:'',
		 	// 	age:'',
		 	// 	city:''
		 	// },
		 	// workHistory:[
		 	// 	{company:'',content:''},
		 	// ],
		 	// studyHistory:[
		 	// 	{school:'',duration:'',degree:''}
		 	// ],
		 	// project:[
		 	// 	{duration:'',project:''}
		 	// ],
		 	// reword:[
		 	// 	{time:'',aword:''}
		 	// ],
		 	// contact:[
		 	// 	{phone:'',email:'',QQ:'',Wechat:''}
		 	// ]

		 }
		},
		methods:{
			
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
	.xxx .el-icon-error,
	.xxx .haha,
	.xxx hr{
		display: none;
	}
	ol{
		width:100%; 
	}
	li{
		width:100%; 
	}
</style>










