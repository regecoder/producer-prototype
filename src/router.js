import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isUserAuthenticated) {
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
  } else {
    next();
  }
});

export default router;
