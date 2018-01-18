import { config as coreConfig } from '@/core';

const config = {
  clientId: '3Z-MEzcmq_LDbj9L35SGVj_rrZPKbT_R',
  domain: 'scenso.eu.auth0.com',
  callbackUrl: `http://${coreConfig.domain}/callback`,
  apiUrl: 'API_IDENTIFIER'
};

config.audience = `https://${config.domain}/userinfo`;

export default config;
