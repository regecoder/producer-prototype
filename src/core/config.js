const envConfig = require(`./config.${process.env.NODE_ENV}`);

const config = {
  loginSuccessRoute: 'hello',
  loginErrorRoute: 'hello',
  logoutRoute: 'world'
};

Object.assign(config, envConfig);

export default config;
