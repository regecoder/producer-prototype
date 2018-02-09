import { store, config } from 'App';

import { authService } from './services';

import AppWelcome from './components/views/app-welcome';
import AppLoginCallback from './components/views/app-login-callback';
import AppUnauthorized from './components/views/app-unauthorized';
import AppNotFound from './components/views/app-not-found';

export default [
  // Racine
  {
    path: '/',
    name: 'root',
    beforeEnter: (to, from, next) => {
      if (store.getters.isUserAuthenticated) {
        next({
          name: config.app.route.loginSuccess,
          replace: true
        });
      } else {
        next({
          name: config.app.route.welcome,
          replace: true
        });
      }
    },
    redirect: {
      name: 'videos-add'
    }
  },
  // Welcome
  {
    path: '/welcome',
    name: 'welcome',
    component: AppWelcome
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
    component: AppLoginCallback
  },
  // Non autorisé
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: AppUnauthorized
  },
  // Routes non résolues
  {
    path: '*',
    component: AppNotFound
  }
];
