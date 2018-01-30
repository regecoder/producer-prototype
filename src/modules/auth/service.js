// Source: Auth0 Samples : auth0-vue-samples
// 01-Login
// https://auth0.com/docs/quickstart/spa/vuejs/01-login
// https://github.com/auth0-samples/auth0-vue-samples

import auth0 from 'auth0-js';
import EventEmitter from 'EventEmitter';

import { router, config } from '@';

class Service {

  isAuthenticated = this.checkSession()
  eventEmitter = new EventEmitter()

  _redirectRoute = null

  constructor() {
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.setSession = this.setSession.bind(this);
    this.logout = this.logout.bind(this);
    this.checkSession = this.checkSession.bind(this);
  }

  auth0 = new auth0.WebAuth({
    domain: config.auth.domain,
    clientID: config.auth.clientId,
    redirectUri: config.auth.callbackUrl,
    audience: config.auth.audience,
    responseType: config.auth.responseType,
    scope: config.auth.scope
  })

  login(originRoute = null) {
    this._redirectRoute = originRoute;
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        const redirectRoute = this._redirectRoute || config.core.loginSuccessRoute;
        router.push({
          name: redirectRoute
        });
      } else if (err) {
        router.push({
          name: config.core.loginErrorRoute
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
    this.eventEmitter.emit('stateChange');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access-token');
    localStorage.removeItem('id-token');
    localStorage.removeItem('expires-at');
    this.isAuthenticated = false;
    this.eventEmitter.emit('stateChange');
    router.replace({
      name: config.core.logoutRoute
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
