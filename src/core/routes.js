export default [
  {
    path: '/',
    name: 'root',
    redirect: {
      name: 'hello'
    }
  },
  {
    path: '*',
    redirect: {
      name: 'world'
    }
  }
];
