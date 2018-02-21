import { authService } from './services';

export default {
  state: {
    user: {
      authenticated: false
    }
  },
  getters: {
    userAuthenticated: state =>
      state.user.authenticated
  },
  mutations: {
    authenticate: (state, authenticated) => {
      state.user.authenticated = authenticated;
    }
  },
  actions: {
    initialize: ({ commit }) => {
      commit('authenticate', authService.isSessionActive());
    }
  }
};
