const envConfig = require(`./config.${process.env.NODE_ENV}`);

const config = {
  loginSuccessRoute: 'dashboard',
  loginErrorRoute: 'dashboard',
  logoutRoute: 'dashboard'
};

Object.assign(config, envConfig);

export default config;
