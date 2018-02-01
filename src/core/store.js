import { authService } from './services';

export default {
  state: {
    user: {
      isAuthenticated: false
    }
  },
  mutations: {
    authenticate: (state, isAuthenticated) => {
      state.user.isAuthenticated = (isAuthenticated === true);
    }
  },
  actions: {
    initialize: ({ commit }) => {
      commit('authenticate', authService.isAuthenticated);
    }
  }
};
