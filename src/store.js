import Vue from 'vue';
import Vuex from 'vuex';

import { store as coreStore } from 'Core';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core: coreStore
  }
});
