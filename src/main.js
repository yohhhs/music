import  'babel-polyfill' //es6补丁
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import 'common/stylus/index.styl'

fastclick.attach(document.body); // 解决300毫秒延迟
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
