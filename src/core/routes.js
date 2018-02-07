import { store } from 'App';

import { authService } from './services';
import config from './config';

import Welcome from './components/views/welcome';
import LoginCallback from './components/views/login-callback';
import Unauthorized from './components/views/unauthorized';
import NotFound from './components/views/not-found';

// Alias
const configRoute = config.app.route;

export default [
  // Racine
  {
    path: '/',
    name: 'root',
    beforeEnter: (to, from, next) => {
      if (store.getters.isUserAuthenticated) {
        next({
          name: configRoute.loginSuccess,
          replace: true
        });
      } else {
        next({
          name: configRoute.welcome,
          replace: true
        });
      }
    }
  },
  // Welcome
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  // Login
  {
    path: '/login',
    name: 'login',
    beforeEnter: () => {
      authService.login();
    }
  },
  {
    path: '/login/callback',
    component: LoginCallback
  },
  // Non autorisé
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: Unauthorized
  },
  // Routes non résolues
  {
    path: '*',
    component: NotFound
  }
];
