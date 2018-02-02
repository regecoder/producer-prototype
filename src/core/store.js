import { authService } from './services';

export default {
  state: {
    user: {
      isAuthenticated: false
    }
  },
  getters: {
    isUserAuthenticated: state =>
      state.user.isAuthenticated
  },
  mutations: {
    authenticate: (state, isAuthenticated) => {
      state.user.isAuthenticated = isAuthenticated;
    }
  },
  actions: {
    initialize: ({ commit }) => {
      commit('authenticate', authService.isSessionActive());
    }
  }
};
