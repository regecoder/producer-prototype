import { routes as coreRoutes } from './core';
import { routes as dashboardRoutes } from './modules/dashboard';

export default [
  ...coreRoutes,
  ...dashboardRoutes
];
