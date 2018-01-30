<template lang="pug">
  #layout
    .name {{ name }}
    div(v-if="isAuthenticated")
      auth-header
      navbar
    router-view
</template>

<script>
import { service as authService } from 'Modules/auth';
import AuthHeader from 'Modules/auth/components/header';
import Navbar from './navbar';

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
    Navbar,
    AuthHeader
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
