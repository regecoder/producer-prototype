import Vue from 'vue';
import Vuex from 'vuex';

import { store as coreStore } from 'Core';
import { store as videoStore } from 'Modules/videos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core: coreStore,
    video: videoStore
  }
});
