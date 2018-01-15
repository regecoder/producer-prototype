// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Router from 'vue-router';

import { routes } from '@/modules';
// import App from './App';
import App from './modules/app/components/App';

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

// router.map({
//   '/': {
//     name: 'home',
//     component: Vue.component('home', require('./components/Home'))
//   }
// });

// router.start(App, '#app');
