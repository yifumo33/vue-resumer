<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar class='topbar'  v-bind:resume="resume"  v-on:preview="preview" v-on:setFather="setFather"/>
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
                    id:'',
                    name:'',
                    age:'',
                    city:'',
                    phone:'',
                    mail:'',
                    src:'https://i.loli.net/2018/05/09/5af270fc34c4f.jpg'
                  },
                  workHistory:[
                    {company:'',time:'',position:'',content:['']},
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
    hello,
    workproject
  },
  methods:{
    preview:function(){
      this.previewMode =  true
    },
    setFather:function(resume,id){
      this.resume = resume
      this.resume.profile.id = id
    },
    haha:function(){
      this.previewMode = false
    },
    hehe:function(){
      console.log('hehe')
      html2Canvas(document.querySelector("#preview")).then(canvas => {
        let imgData = canvas.toDataURL("image/JPEG");
        let imgWidth = 210;
        let pageHeight = 295;
        let imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let doc = new jsPDF("p", "mm");
        let position = 0;
        doc.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        doc.save("Resume.pdf");
      // doc.text('your Mather fucker', 10, 10)
      // doc.save('a4.pdf')
      // var newWindow = window.open('about:blank','image from canvas')
      // newWindow.document.write("<img src='" + data + "'alt='from canvas'/>")
      })
      
    }
  },
  created:function(){
    var APP_ID = '4tadOSGF8oNfIl3mKkCIyxA4-gzGzoHsz';
    var APP_KEY = 'Mp2w9KVXWffYHIvLE6lJfpYz';

      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });



  
     var TestObject = AV.Object.extend('RegisterName');
      var testObject = new TestObject();
      testObject.save({
        words: 'Hello World!'
      }).then(function(object) {
        alert('LeanCloud Rocks!');
      }) 
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

 box-shadow:0 0 1px 2px rgba(0,0,0,.1)
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
  box-shadow:0 0 1px 2px rgba(0,0,0,.1); 
   border-radius:4px;
   overflow:hidden;
}
main .preview{
  flex: 1;
  margin:16px 16px 16px 8px; 
  background: white;
   box-shadow:0 0 1px 2px rgba(0,0,0,.1); 
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
