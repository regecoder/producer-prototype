import { routes as helloWorldRoutes } from './hello-world';
import { routes as coreRoutes } from './core';

const componentsRoutes = [
  helloWorldRoutes,
  coreRoutes
];

// eslint-disable-next-line import/no-mutable-exports
let allRoutes = [];
componentsRoutes.forEach((routes) => {
  allRoutes = allRoutes.concat(routes);
});

export default allRoutes;
