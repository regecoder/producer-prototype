const envConfig = require(`./config.${process.env.NODE_ENV}`);

const config = {
  loginSuccessRoute: 'dashboard',
  loginErrorRoute: 'not-authenticated',
  logoutRoute: 'welcome'
};

Object.assign(config, envConfig);

export default config;
