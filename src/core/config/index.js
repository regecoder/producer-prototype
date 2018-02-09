// Types de configuration:
// env, app, auth

import authConfig from './auth0.config';

const envConfig = require(`./env.${process.env.NODE_ENV}`);

const appConfig = {
  route: {
    welcome: 'welcome',
    loginSuccess: 'dashboard',
    loginError: 'unauthorized',
    logout: 'welcome'
  }
};

export default {
  env: envConfig,
  app: appConfig,
  auth: authConfig
};
