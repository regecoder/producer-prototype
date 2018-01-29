import { config as coreConfig } from 'Core';

const config = {
  clientId: '3Z-MEzcmq_LDbj9L35SGVj_rrZPKbT_R',
  domain: 'scenso.eu.auth0.com',
  // audience: 'https://scenso.eu.auth0.com/userinfo',
  audience: 'https://falcor.scenso/api/v1/',
  callbackUrl: `http://${coreConfig.domain}/auth/callback`,
  responseType: 'token id_token',
  scope: 'openid',
  apiUrl: 'API_IDENTIFIER'
};

export default config;
