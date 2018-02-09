import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';
import store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

function checkAuthorization(route, theStore) {
  let isAuthorized = true;

  if (route.matched.some(record => record.meta.requiresAuth)
    && (!theStore.getters.isUserAuthenticated)) {
    isAuthorized = false;
  }

  return isAuthorized;
}

router.beforeEach((to, from, next) => {
  if (!checkAuthorization(to, store)) {
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
