import Root from './components/root';
import Welcome from './components/welcome';
import NotAuthenticated from './components/not-authenticated';
import NotFound from './components/not-found';

export default [
  {
    path: '/',
    name: 'root',
    component: Root
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/not-authenticated',
    name: 'not-authenticated',
    component: NotAuthenticated
  },
  {
    path: '*',
    component: NotFound
  }
];
