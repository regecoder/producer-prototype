// Types de configuration:
// env, auth

import authConfig from './auth0.config';

const envConfig = require(`./env.${process.env.NODE_ENV}`);

export default {
  env: envConfig,
  auth: authConfig
};
