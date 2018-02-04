import Vue from 'vue';
import Vuex from 'vuex';

import { store as coreStore } from './core';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core: coreStore
  }
});
