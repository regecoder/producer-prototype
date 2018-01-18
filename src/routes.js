import { routes as helloWorldRoutes } from './hello-world';
import { routes as coreRoutes } from './core';

export default [
  ...helloWorldRoutes,
  ...coreRoutes
];
