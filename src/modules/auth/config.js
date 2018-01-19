import { config as coreConfig } from 'Core';

const auth0Config = {
  clientId: '3Z-MEzcmq_LDbj9L35SGVj_rrZPKbT_R',
  domain: 'scenso.eu.auth0.com',
  audience: 'https://scenso.eu.auth0.com/userinfo',
  callbackUrl: `http://${coreConfig.domain}/auth/callback`,
  responseType: 'token id_token',
  scope: 'openid',
  apiUrl: 'API_IDENTIFIER'
};

const config = {
  loginSuccessRoute: 'world',
  loginErrorRoute: 'hello',
  logoutRoute: 'hello'
};

Object.assign(config, auth0Config);

export default config;
