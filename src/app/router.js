/* eslint-disable */

import Vue from 'vue';
import VueRouter from 'vue-router';

import { config, store } from 'App';

import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  // Gère la redirection de la racine
  if (to.name === 'root') {
    next(getRootRoute());
  }
  // Vérifie l'authorisation de l'utilisateur
  if (!checkAuthorization(to)) {
    next({
      name: 'unauthorized',
      replace: true,
      params: {
        origin: to.name
      }
    });
  } else {
    next();
  }
});

function getRootRoute() {
  let rootRoute;

  if (store.getters.userAuthenticated) {
    rootRoute = {
      name: config.app.route.loginSuccess,
      replace: true
    };
  } else {
    rootRoute = {
      name: config.app.route.welcome,
      replace: true
    };
  }

  return rootRoute;
}

function checkAuthorization(route) {
  let authorized = true;

  if (route.matched.some(record => record.meta.requiresAuth)
    && (!store.getters.userAuthenticated)) {
    authorized = false;
  }

  return authorized;
}


export default router;
