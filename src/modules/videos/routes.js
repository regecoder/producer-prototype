import edit from './components/edit';

export default [
  {
    path: '/videos/add',
    name: 'videos-add',
    component: edit,
    meta: {
      requiresAuth: false
    }
  }
];
