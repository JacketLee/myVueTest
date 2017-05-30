// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import './style/style.css';
import 'element-ui/lib/theme-default/index.css';
import Mock from './mock'
Mock.bootstrap();
/* eslint-disable no-new */

Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
