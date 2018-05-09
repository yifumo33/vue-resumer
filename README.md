# vue-resumer

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 遇到的问题
### img的绑定问题
- 以下几种是错的
```
<img src="value.src"> //应该用v-bind
<img src="{{value.src}}">
<img src="{value.src}">
```
- 正确的写法
```
<img :src="value.src">  //就用这个 其他别瞎逼写
```
### 怎么也导不了模块的问题
```
import html2Canvas from 'html2canvas'  
import jsPDF from 'jspdf'
import hello from './hello'
```
在这里import后，要记得在下面的components下面添加组件
```
  components: {
    HelloWorld,
   "YIF":YIF,
    Topbar,
    Editor,
    Preview,
    hello
  },
```
### vue的绑定问题
常量用'',变量直接写,用:绑定别用v-model。
```
:label="(index+1) + '班'" 
```
这里遍历时，不能用key，只能用数组元素去表达
```
<el-input v-model = "item.content[index]"></el-input>
```
