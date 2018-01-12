const envConfig = require(`./${process.env.NODE_ENV}`);

const config = Object.assign({}, envConfig);

config.auth0 = {
  clientId: '3Z-MEzcmq_LDbj9L35SGVj_rrZPKbT_R',
  domain: 'scenso.eu.auth0.com',
  callbackUrl: `http://${config.app.domain}/callback`,
  apiUrl: 'API_IDENTIFIER'
};

export default config;
