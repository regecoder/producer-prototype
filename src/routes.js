import { routes as coreRoutes } from './core';
import { routes as helloWorldRoutes } from './modules/hello-world';

export default [
  ...coreRoutes,
  ...helloWorldRoutes
];
