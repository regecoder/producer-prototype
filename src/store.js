import Vue from 'vue';
import Vuex from 'vuex';

import { store as coreStore } from 'Core';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    core: coreStore
  }
});

export default store;
