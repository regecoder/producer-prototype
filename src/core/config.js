const envConfig = require(`./config.${process.env.NODE_ENV}`);

const config = {
  loginSuccessRoute: 'world',
  loginErrorRoute: 'hello',
  logoutRoute: 'hello'
};

Object.assign(config, envConfig);

export default config;
