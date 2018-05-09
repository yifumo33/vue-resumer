<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar class='topbar' v-on:preview="preview"/>
    <main v-bind:class="{previewMode:previewMode}">
    <Editor  v-bind:resume="resume" class="editor"/>
    <preview v-bind:resume='resume'  class="preview"/>
    </main>
    <el-button id="preview-exit" v-on:click="haha">退出预览</el-button>
    <el-button id="preview-save" v-on:click="hehe">截图</el-button>
   <a href="" id="download"></a>

  </div>
</template>


<!-- <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> 
<script src="https://cdn.bootcss.com/html2canvas/0.4.1/html2canvas.js"></script> 
 -->
 <script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>
<script>
import HelloWorld from './components/HelloWorld'
import YIF from './YIF'
import Topbar from './components/Topbar.vue'
import Editor from './components/Editor.vue'
import Preview from './components/Preview.vue'
import workproject from './components/workproject'
import html2Canvas from 'html2canvas'  
import jsPDF from 'jspdf'
import hello from './hello'


import test from './test.js'
var jspdf = require('jspdf')

export default {
  data(){
    return{
          previewMode:false,
          resume:{
                    profile:{
                    name:'',
                    age:'',
                    city:'',
                    phone:'',
                    mail:'',
                    src:'https://i.loli.net/2018/05/09/5af270fc34c4f.jpg'
                  },
                  workHistory:[
                    {company:'',time:'',position:'',content:''},
                  ],
                  studyHistory:[
                    {school:'',duration:'',degree:''}
                  ],
                  project:[
                    {duration:'',project:''}
                  ],
                  reword:[
                    {time:'',aword:''}
                  ],
                  contact:[
                    {phone:'',email:'',QQ:'',Wechat:''}
                  ]
          }
    }
  },
  name: 'App',
  components: {
    HelloWorld,
   "YIF":YIF,
    Topbar,
    Editor,
    Preview,
    hello
  },
  methods:{
    preview:function(){
      this.previewMode =  true
    },
    haha:function(){
      this.previewMode = false
    },
    hehe:function(){
      console.log('hehe')
      html2Canvas(document.querySelector("#preview")).then(canvas => {
      var data = canvas.toDataURL('image/png')
      var doc = new jsPDF()
    

      doc.addImage(data, 'PNG', 0, 0, 0,0);
      doc.save('a4.pdf');
      // doc.text('your Mather fucker', 10, 10)
      // doc.save('a4.pdf')
      // var newWindow = window.open('about:blank','image from canvas')
      // newWindow.document.write("<img src='" + data + "'alt='from canvas'/>")
      })
      
    }
  },
  created:function(){
  var width = $('#preview').width()
      var height = $('#preview').height()
      console.log(width)
      console.log(height)
    
  }
}
</script>

<style>
html,body,#app{
  height:100%;
  overflow: hidden; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height:100%;
  display: flex;
  flex-direction:column; 

}
.icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }

.topbar{
 box-shadow:0 0 3px hsla(0,0,0,0.5) 
}
main{
  display: flex;
  flex: 1;
  background:#DDD; 
}
main .editor{
  margin:16px 8px 16px 16px; 
  width: 30em;
  background:white; 
  box-shadow:0 0 3px hsla(0,0,0,0.5); 
   border-radius:4px;
   overflow:hidden;
}
main .preview{
  flex: 1;
  margin:16px 16px 16px 8px; 
  background: white;
   box-shadow:0 0 3px hsla(0,0,0,0.5); 
   border-radius:4px;
   overflow: scroll;

}
.previewMode>#Editor,
.previewMode>#topbar,
#preview-exit,
#preview-save
{
  display: none;
}
.previewMode>#preview-save{
  display: inline-block;
  position:fixed;
  bottom:50px;
  right: 10px;
}
.previewMode>#preview-exit{
  display: inline-block;
  position:fixed;
  bottom:10px;
  right: 10px;
}
.previewMode > #preview{

  max-width:800px;
  margin: 16px auto;
   overflow: scroll;

}
</style>
