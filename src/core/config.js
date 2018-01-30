const envConfig = require(`./config.${process.env.NODE_ENV}`);

const config = {
  loginSuccessRoute: 'dashboard',
  loginErrorRoute: 'dashboard',
  logoutRoute: 'welcome'
};

Object.assign(config, envConfig);

export default config;
