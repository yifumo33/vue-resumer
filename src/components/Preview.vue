<template>
	<div id="preview">
		<!-- {{resume}} -->
	<section class="imformation">
		<img :src="resume.profile.src">
		
		
		   <div class="data">
			
		<h1>{{resume.profile.name || '请填写名字'}}</h1>
					<h2><svg class="icon" aria-hidden="true">
    		<use xlink:href="#icon-suozaichengshi"></use>
		</svg>{{resume.profile.city || '请填写城市'}}</h2>
					<h2><svg class="icon" aria-hidden="true">
    		<use xlink:href="#icon-shengri"></use>
		</svg>{{resume.profile.age || '请填写生日'}}</h2>
					<h2><svg class="icon" aria-hidden="true">
    		<use xlink:href="#icon-dianhua"></use>
		</svg>{{resume.profile.phone || '请填写联系方式'}}</h2>
					<h2><svg class="icon" aria-hidden="true">
    		<use xlink:href="#icon-xinfeng"></use>
		</svg>{{resume.profile.mail || '请填写邮箱'}}</h2>

		    </div>
	</section>
	
	<section>
				
		<div class="title"><svg class="icon" aria-hidden="true">
    		<use xlink:href="#icon-gongzuojingyan"></use>
		</svg><h1>工作经历</h1></div>
		<ol>
			<li v-for=" (key,index ) in filter(resume.workHistory)" class="li-block">
				<h2><span>{{index+1}}</span>.{{key.company || '请填写工作单位'}}</h2>
				<div class="data-list">
					<p>{{key.time || '请填工作时间'}}</p>
					<p>{{key.position || '请填工作职位'}}</p>
				</div>
											
				<h3>{{key.content || '请填工作内容'}}</h3>
			</li>
		</ol>
		
		<div class="title"><svg class="icon" aria-hidden="true">
    		<use xlink:href="#icon-shu"></use>
		</svg><h1>学习经历</h1></div>
		<ol>
			<li v-for=" key in filter(resume.studyHistory)" class="li-block">
				<h3>{{key.school || '请填写学校名称'}}</h3>
				<p>{{key.duration || '请填写学习时间'}}</p>
				<p>{{key.degree || '请填写获得学位'}}</p>	
			</li>
		</ol>
		
		<div class="title"><svg class="icon" aria-hidden="true">
    		<use xlink:href="#icon-xiangmu1"></use>
		</svg><h1>项目经历</h1></div>
		<ol>
			<li v-for=" key in filter(resume.project)" class="li-block">
				<h3>{{key.duration || '请填写项目经历'}}</h3>
				<p>{{key.project || '请填写项目名称'}}</p>	
			</li>
		</ol>
		
		<div class="title"><svg class="icon" aria-hidden="true" >
    		<use xlink:href="#icon-trophy_icon"></use>
		</svg><h1>获奖经历</h1></div>
		<ol>
			<li v-for=" key in filter(resume.reword)" class="li-block">
				<h3>{{key.time || '请填写获奖时间'}}</h3>
				<p>{{key.aword || '请填写获奖名称'}}</p>	
			</li>
		</ol>
		
	</section>
	</div>
</template>

<style>
	#preview{
		border:1px solid;
		min-height: 100px;
		padding:10px 20px; 

	}
	.imformation{
		display: flex;
	    justify-content:space-around;
	}
	.imformation img{
		display:block;
		border:6px solid #dddddd;

		width:200px;
		height:200px;
		border-radius:50%;

	}
	.imformation > .data{
		width:300px; 
	}
	 .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
    .data svg{
    	margin-right:10px;
    }
    .title{
    	display: flex;
    	align-items: center;    	
    }
    .title svg{
    	display:block;
    	width:50px;
    	height:50px; 
    	fill:#dddddd;
    	background:black;
    	padding:10px;  
    	position:relative;
    	border-radius:50%;   
    }

    .title h1{
    	margin-left:10px;
    	width:100%; 
    	line-height:32px;
    	border-bottom:1px solid;    
    }
    .li-block .data-list{
    	padding-left:18px; 
		width:300px; 
    	display:flex;
    	justify-content:space-between;
    }
    .li-block h3{
    	padding-left:18px; 
    	
    }

    
</style>

<script>
	export default{
		props:[
			'resume'
		],
		methods:{
			filter:function(array){
				return array.filter(item => !this.isEmpty(item))
			},
			isEmpty:function(obj){
				var empty = true
				for( var key in obj){
					if(obj[key]){
						empty = false
						break
					}
					
				}
				return empty
			}
		}
	}	
</script>