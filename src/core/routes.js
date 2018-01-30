import { service as authService } from 'Modules/auth';

import config from './config';
import Welcome from './components/welcome';
import Unauthorized from './components/unauthorized';
import NotFound from './components/not-found';


export default [
  {
    path: '/',
    name: 'root',
    beforeEnter: (to, from, next) => {
      if (authService.isAuthenticated) {
        next({
          name: config.loginSuccessRoute,
          replace: true
        });
      } else {
        next({
          name: config.welcomeRoute,
          replace: true
        });
      }
    }
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: Unauthorized
  },
  {
    path: '*',
    component: NotFound
  }
];
