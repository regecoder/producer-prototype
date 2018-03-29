export default {
  state: {
    work: {
      show: {},
      production: {},
      recording: {}
    },
    exploitationRights: {
      authorSocieties: {},
      duration: {},
      territory: {
        scope: 'world',
        excluded: [],
        included: []
      }
    },
    authorRights: []
  },
  getters: {},
  mutations: {
    setMediaLoaded: (state, mediaLoaded) => {
      state.mediaLoaded = mediaLoaded;
    },
    setVideoData: (state, data) => {
      state[data.key] = data.value;
    }
  },
  actions: {
    initialize: ({ commit }) => {
      commit('setMediaLoaded', false);
    }
  }
};
