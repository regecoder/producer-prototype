import { config as coreConfig } from 'Core';

const config = {
  clientId: '0WJOA82leNz5jbBWZ0vM8xyyH48AVqSr',
  domain: 'scenso.eu.auth0.com',
  audience: 'https://scenso.eu.auth0.com/userinfo',
  callbackUrl: `http://${coreConfig.domain}/auth/callback`,
  responseType: 'token id_token',
  scope: 'openid',
  apiUrl: 'API_IDENTIFIER'
};

export default config;
