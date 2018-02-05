import { routes as coreRoutes } from 'Core';
import { routes as dashboardRoutes } from 'Modules/dashboard';

export default [
  ...coreRoutes,
  ...dashboardRoutes
];
