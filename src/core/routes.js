// import { store, config } from 'App';

import { authService } from './services';

import Welcome from './components/core-welcome';
import LoginCallback from './components/core-login-callback';
import Unauthorized from './components/core-unauthorized';
import NotFound from './components/core-not-found';

export default [
  // Racine
  {
    path: '/',
    name: 'root'
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
