import { config as coreConfig } from 'Core';
import appConfig from './app.config';

const config = Object.assign(appConfig,
  coreConfig
);

export default config;
