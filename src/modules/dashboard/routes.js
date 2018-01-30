import Dashboard from './components/dashboard';

export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }
];
