export default {
  state: {
    show: {},
    production: {},
    exploitation: {
      authorSocieties: {},
      duration: {},
      territory: {
        scope: 'world',
        excluded: [],
        included: []
      }
    }
  },
  getters: {
  },
  mutations: {
    setVideoData: (state, payload) => {
      state[payload.key] = payload.value;
    }
  },
  actions: {
  }
};
