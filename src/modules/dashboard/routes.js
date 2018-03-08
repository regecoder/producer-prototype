import dashboard from './components/dashboard';

export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {
      requiresAuth: true
    }
  }
];
