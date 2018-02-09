// import { store } from 'App';

import { authService } from './services';
// import config from './config';

import AppWelcome from './components/views/app-welcome';
import AppLoginCallback from './components/views/app-login-callback';
import AppUnauthorized from './components/views/app-unauthorized';
import AppNotFound from './components/views/app-not-found';

// Alias
// const configRoute = config.app.route;

export default [
  // Racine
  {
    path: '/',
    name: 'root',
    // beforeEnter: (to, from, next) => {
    //   if (store.getters.isUserAuthenticated) {
    //     next({
    //       name: configRoute.loginSuccess,
    //       replace: true
    //     });
    //   } else {
    //     next({
    //       name: configRoute.welcome,
    //       replace: true
    //     });
    //   }
    // }
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
