// Source: Auth0 Samples : auth0-vue-samples
// 01-Login
// https://auth0.com/docs/quickstart/spa/vuejs/01-login
// https://github.com/auth0-samples/auth0-vue-samples

import auth0 from 'auth0-js';

import { router, config, store } from '@';

// Alias
const configRoute = config.app.route;

class Auth0Service {

  _redirectRoute = null

  constructor() {
    this.login = this.login.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.setSession = this.setSession.bind(this);
    this.logout = this.logout.bind(this);
    this.isSessionActive = this.isSessionActive.bind(this);
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

  authenticate() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        const redirectRoute = this._redirectRoute || configRoute.loginSuccess;
        router.push({
          name: redirectRoute
        });
      } else if (err) {
        router.push({
          name: configRoute.loginError
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
    store.commit('authenticate', true);
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access-token');
    localStorage.removeItem('id-token');
    localStorage.removeItem('expires-at');
    store.commit('authenticate', false);
    router.replace({
      name: configRoute.logout
    });
  }

  isSessionActive() {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires-at'));
    return new Date().getTime() < expiresAt;
  }
}

export default new Auth0Service();
