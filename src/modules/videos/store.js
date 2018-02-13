export default {
  state: {
    show: {},
    production: {},
    exploitation: {
      authorsSocieties: {}
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
