import NotFound from './components/notfound';

export default [
  {
    path: '/',
    name: 'root',
    redirect: {
      name: 'dashboard'
    }
  },
  {
    path: '*',
    component: NotFound
  }
];
