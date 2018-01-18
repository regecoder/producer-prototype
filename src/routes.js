import { routes as coreRoutes } from '@/core';
import { routes as helloWorldRoutes } from 'Modules/hello-world';

export default [
  ...coreRoutes,
  ...helloWorldRoutes
];
