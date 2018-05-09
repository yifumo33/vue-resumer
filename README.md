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
