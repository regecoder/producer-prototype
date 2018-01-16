// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Router from 'vue-router';

import App from './app/components/App';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  routes
});

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
