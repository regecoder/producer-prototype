// Source: Auth0 Samples : auth0-vue-samples
// 01-Login
// https://auth0.com/docs/quickstart/spa/vuejs/01-login
// https://github.com/auth0-samples/auth0-vue-samples

import auth0 from 'auth0-js';
import EventEmitter from 'EventEmitter';

import router from '@/router';
import { config as coreConfig } from 'Core';

import config from './config';


class Service {

  isAuthenticated = this.checkSession()
  eventEmitter = new EventEmitter()


  constructor() {
    this.login = this.login.bind(this);
    this.setSession = this.setSession.bind(this);
    this.logout = this.logout.bind(this);
    this.checkSession = this.checkSession.bind(this);
  }

  auth0 = new auth0.WebAuth({
    domain: config.domain,
    clientID: config.clientId,
    redirectUri: config.callbackUrl,
    audience: config.audience,
    responseType: config.responseType,
    scope: config.scope
  })

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        router.replace({
          name: coreConfig.loginSuccessRoute
        });
      } else if (err) {
        router.replace({
          name: coreConfig.loginErrorRoute
        });
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(
      (authResult.expiresIn * 1000) + new Date().getTime()
    );
    localStorage.setItem('access-token', authResult.accessToken);
    localStorage.setItem('id-token', authResult.idToken);
    localStorage.setItem('expires-at', expiresAt);
    this.isAuthenticated = true;
    this.eventEmitter.emit('authChange', {
      isAuthenticated: true
    });
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access-token');
    localStorage.removeItem('id-token');
    localStorage.removeItem('expires-at');
    this.isAuthenticated = false;
    this.eventEmitter.emit('authChange', {
      isAuthenticated: false
    });
    router.replace({
      name: coreConfig.logoutRoute
    });
  }

  checkSession() {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires-at'));
    return new Date().getTime() < expiresAt;
  }
}

export default new Service();
