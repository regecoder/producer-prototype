import service from './service';
import Callback from './components/callback';

export default [
  {
    path: '/auth/login',
    name: 'auth-login',
    beforeEnter: () => {
      service.login();
    }
  },
  {
    path: '/auth/callback',
    component: Callback
  }
];
