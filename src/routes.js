import { routes as core } from 'Core';
import { routes as auth } from 'Modules/auth';
import { routes as hello } from 'Modules/hello';

export default [
  ...core,
  ...auth,
  ...hello
];
