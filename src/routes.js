import { routes as core } from 'Core';
import { routes as auth } from 'Modules/auth';
import { routes as dashboard } from 'Modules/dashboard';

export default [
  ...core,
  ...auth,
  ...dashboard
];
