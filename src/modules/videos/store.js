export default {
  state: {
    show: {},
    production: {},
    exploitation: {
      authorSocieties: {}
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
