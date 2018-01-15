import { config as appConfig } from '../../app';

const config = {
  clientId: '3Z-MEzcmq_LDbj9L35SGVj_rrZPKbT_R',
  domain: 'scenso.eu.auth0.com',
  callbackUrl: `http://${appConfig.domain}/callback`,
  apiUrl: 'API_IDENTIFIER'
};

export default config;
