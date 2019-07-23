// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//多端样式统一
import './asserts/reset.css'
//1px问题
import './assets/border.css'
//移动端300ms延迟
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
