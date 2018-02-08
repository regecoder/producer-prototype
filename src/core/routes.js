import { store } from 'App';

import { authService } from './services';
import config from './config';

import welcome from './components/views/welcome';
import loginCallback from './components/views/login-callback';
import unauthorized from './components/views/unauthorized';
import notFound from './components/views/not-found';

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
    component: welcome
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
    component: loginCallback
  },
  // Non autorisé
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: unauthorized
  },
  // Routes non résolues
  {
    path: '*',
    component: notFound
  }
];
