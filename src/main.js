import Vue from 'vue';

import App from 'App/app';

import { store, router } from 'App';

// Importe les assets globaux
import 'App/assets';

// Configure Vue
import 'App/vue.config';

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
