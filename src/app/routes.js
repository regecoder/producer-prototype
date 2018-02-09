import { routes as coreRoutes } from 'Core';
import { routes as dashboardRoutes } from 'Modules/dashboard';
import { routes as videosRoutes } from 'Modules/videos';

export default [
  ...coreRoutes,
  ...dashboardRoutes,
  ...videosRoutes
];
