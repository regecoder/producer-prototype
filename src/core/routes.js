import Root from './components/root';
import Welcome from './components/welcome';
import Unauthorized from './components/unauthorized';
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
    path: '/unauthorized',
    name: 'unauthorized',
    component: Unauthorized
  },
  {
    path: '*',
    component: NotFound
  }
];
