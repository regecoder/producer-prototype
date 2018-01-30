import Vue from 'vue';
import Router from 'vue-router';

import { service as authService } from 'Modules/auth';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authService.isAuthenticated) {
      next({
        name: 'not-authenticated',
        replace: true,
        query: { redirect: to.name }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
