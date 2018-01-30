import Login from './components/login';
import Callback from './components/callback';

export default [
  {
    path: '/auth/login',
    name: 'auth-login',
    component: Login
  },
  {
    path: '/auth/callback',
    component: Callback
  }
];
