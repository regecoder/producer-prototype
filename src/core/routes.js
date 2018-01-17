export default [
  {
    path: '/',
    redirect: {
      name: 'helloWorld'
    },
    name: 'root'
  },
  {
    path: '*',
    redirect: '/'
  }
];
