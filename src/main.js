// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)			
});

Vue.config.productionTip = false



Vue.component('JACK',{
  template:'<p>I am {{name}}</p>',
  data(){
	  return{
                name:'Hu tian xue'
		}
	}
})



/* eslint-disable no-new */
	