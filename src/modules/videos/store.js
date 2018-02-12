export default {
  state: {
    show: {},
    production: {}
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
