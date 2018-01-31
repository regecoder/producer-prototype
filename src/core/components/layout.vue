<template lang="pug">
  #layout
    .name {{ name }}
    .auth authenticated: {{ isAuthenticated }}
    div(v-if="isAuthenticated")
      login
    router-view
</template>

<script>
import { authService } from '../services';
import Login from './login';

export default {
  data() {
    authService.eventEmitter.on('stateChange', () => {
      this.isAuthenticated = authService.isAuthenticated;
    });
    return {
      name: 'layout',
      isAuthenticated: authService.isAuthenticated
    };
  },
  components: {
    Login
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.name {
  color: green;
}
</style>
