export default {
  state: {
    show: {},
    production: {},
    exploitation: {
      authorSocieties: {},
      producer: {}
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
