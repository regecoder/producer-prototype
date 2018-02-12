export default {
  state: {
    show: {},
    production: {},
    exploitation: {
      authorsSocieties: {
        sacem: true
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
