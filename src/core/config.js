const envConfig = require(`./config.${process.env.NODE_ENV}`);

const config = {
  welcomeRoute: 'welcome',
  loginSuccessRoute: 'dashboard',
  loginErrorRoute: 'unauthorized',
  logoutRoute: 'welcome'
};

Object.assign(config, envConfig);

export default config;
