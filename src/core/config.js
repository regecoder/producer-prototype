const envConfig = require(`./config.${process.env.NODE_ENV}`);

const config = Object.assign({}, envConfig);

export default config;