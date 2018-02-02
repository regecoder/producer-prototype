// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';

import App from './app';
import store from './store';
import router from './router';

// Configure Vue
import './vue.config';

// Initialise le store avant la création de l'instance racine de Vue
store.dispatch('initialize');

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
