// import { store, config } from 'App';

import { authService } from './services';

import AppWelcome from './components/views/app-welcome';
import AppLoginCallback from './components/views/app-login-callback';
import AppUnauthorized from './components/views/app-unauthorized';
import AppNotFound from './components/views/app-not-found';

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
