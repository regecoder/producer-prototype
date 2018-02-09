import Vue from 'vue';
import VueRouter from 'vue-router';

import { config, store } from 'App';

import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

function getRootRoute() {
  let rootRoute;

  if (store.getters.isUserAuthenticated) {
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
  let isAuthorized = true;

  if (route.matched.some(record => record.meta.requiresAuth)
    && (!store.getters.isUserAuthenticated)) {
    isAuthorized = false;
  }

  return isAuthorized;
}

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

export default router;
