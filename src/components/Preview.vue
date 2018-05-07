<template>
	<div id="preview">
	<h1>{{resume.profile.name || '请填写名字'}}</h1>
	<hr>
	<h2>年龄：{{resume.profile.age || '请填写年龄'}}</h2>
	<h2>城市：{{resume.profile.city || '请填写城市'}}</h2>
	<section>
		<h1>工作经历</h1>
		<ol>
			<li v-for=" key in filter(resume.workHistory)">
				<h3>{{key.company || '请填写工作单位'}}</h3>
				<p>{{key.content || '请填工作内容'}}</p>	
			</li>
		</ol>
		<hr>
		<h1>学习经历</h1>
		<ol>
			<li v-for=" key in filter(resume.studyHistory)">
				<h3>{{key.school || '请填写学校名称'}}</h3>
				<p>{{key.duration || '请填写学习时间'}}</p>
				<p>{{key.degree || '请填写获得学位'}}</p>	
			</li>
		</ol>
		<hr>
		<h1>项目经历</h1>
		<ol>
			<li v-for=" key in filter(resume.project)">
				<h3>{{key.duration || '请填写项目经历'}}</h3>
				<p>{{key.project || '请填写项目名称'}}</p>	
			</li>
		</ol>
		<hr>
		<h1>获奖情况</h1>
		<ol>
			<li v-for=" key in filter(resume.reword)">
				<h3>{{key.time || '请填写获奖时间'}}</h3>
				<p>{{key.aword || '请填写获奖名称'}}</p>	
			</li>
		</ol>
		<hr>
	</section>
	</div>
</template>

<style>
	#preview{
		border:1px solid;
		min-height: 100px;

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